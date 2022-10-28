(function() {
    var application;

    function dragDropContainers() {
        var self = this;
        var timerTime = 0;
        var timerIntervalId;
        var soundsEnabled = true;
        var dragDropArea;
        var soundArea;
        var sound;
        var currentDragObject;
        var positionOfDropArea;
        var mainSoundSlider;
        var _sliderSecondBar;
        var _curentValue;
        var mainSound;
        var _sliderContainerWidth;
        var soundStatus;
        var currentPlaySoundID;
        var wrongCounter = 0;

        this.initialize = function() {
            document.title = applicationData.title;

            $(Sbt.NotifySoundController).on(Sbt.NotifySoundController.EVENT_HIDE, self.onNotifySoundHide);

            // header
            $header = $("#header");

            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.header.title.value);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.off(Sbt.Actions.click, self.onRestartButtonClicked).on(Sbt.Actions.click, self.onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");
            $headerSoundButton.off(Sbt.Actions.click, self.onSoundButtonClicked).on(Sbt.Actions.click, self.onSoundButtonClicked);

            $mainSoundArea = $("#main-sound-area");

            $interactionSoundButton = $("#interaction-sound-button");
            $interactionSoundButton.off(Sbt.Actions.click, self.onInteractionSoundButtonClicked).on(Sbt.Actions.click, self.onInteractionSoundButtonClicked);

            $dragDropContainer = $("#drag-drop-container");

            self.createSlider();

            self.playWelcomeSound();
            self.initializeDragDropObjects();
            self.enableUserInteraction();

            var lastDropAreaTop = $("#dropArea_" + (applicationData.items.length - 1)).position().top;
            var dragDropAreaTopValue = $dragDropContainer.position().top;

            $checkAnswerButton = $("#check-answer-button");
            $checkAnswerButtonImage = $("#check-answer-button-image");
            $checkAnswerButton.off(Sbt.Actions.click, self.onCheckAnswerButtonClicked).on(Sbt.Actions.click, self.onCheckAnswerButtonClicked);

            if (applicationData.sounds.mainSound != undefined &&
                applicationData.sounds.mainSound != null &&
                applicationData.sounds.mainSound != "") {
                mainSound = new Sbt.Sound(applicationData.sounds.mainSound.replace(".mp3", ""), undefined, false, true);
                $(mainSound).unbind(mainSound.EVENT_TIME_UPDATE).bind(mainSound.EVENT_TIME_UPDATE, self.audioCurrentTime);
                $(mainSound).unbind(mainSound.EVENT_AUDIO_ENDED).bind(mainSound.EVENT_AUDIO_ENDED, self.mainSoundAudioEnded);
            } else {
                $mainSoundArea.css("display", "none");
            }

            //var stringDuration = ($("audio")[0].duration).toString();
            //$("#currentTimeText").text("0:00 / " + stringDuration);
        }

        this.initializeDragDropObjects = function() {

            $("#dragDropContainer").empty();
            dragDropArea;
            objectArrForRandomize = [];
            dragObjectArr = [];

            var $dragDropContainer = $("#drag-drop-container");
            $dragDropContainer.css("height", (applicationData.items.length * 45) + "px");
            $dragDropContainer.html("");
            for (var i = 0; i < applicationData.items.length; i++) {
                dragDropArea = Sbt.utilities.Dom.addDOM('div', $("#drag-drop-container"), 'dragObject_' + i).addClass("dragObjectClass");
                dragDropArea = Sbt.utilities.Dom.addDOM('div', $("#drag-drop-container"), 'dropArea_' + i).addClass("dropAreaClass");
                $dropArea = $("#dropArea_" + i);
                $dropArea.addClass("drop-area");
                $dropArea.css("top", (45 * i) + "px");

                objectArrForRandomize.push(i);
            }

            self.shuffleArray(objectArrForRandomize);

            for (var y = 0; y < objectArrForRandomize.length; y++) {

                var dragObjectValue = objectArrForRandomize[y];
                var positionOfDropAreaY = $("#dropArea_" + y).css("top");

                $dragObject = $("#dragObject_" + dragObjectValue);
                $dragObject.addClass("drag-object");
                $dragObject.css("left", "0px");
                $dragObject.css("top", positionOfDropAreaY);
                $dragObject.css("width", $("#dropArea_" + dragObjectValue).css("width"));
                $dragObject.css("height", $("#dropArea_" + dragObjectValue).css("height"));

                $dragObject.text(applicationData.items[dragObjectValue].text);

                $("#dropArea_" + y).data("placedDragObject", dragObjectValue);

                $dragObject.data("pinnedDropArea", y);

                dragObjectArr[dragObjectValue] = new Sbt.DragObject("dragObject_" + dragObjectValue, { revert: true, container: '#drag-drop-container', handle: "dragObject_" + dragObjectValue, highLight: [] });
                dragObjectArr[dragObjectValue].enable(true);

                $dragObject.css("cursor", "pointer");

                dragObjectArr[dragObjectValue].onDragStart = function(draggableObject, e) {
                    var objSplitted = draggableObject.id.split("_");
                    var dragNumber = Number(objSplitted[1]);
                    currentDragObject = dragNumber;
                    $(".dropAreaClass").css("z-index", 2);
                }

                dragObjectArr[dragObjectValue].onEnd = function(draggableObject) {
                    var objSplitted = draggableObject.id.split("_");
                    var dragNumber = Number(objSplitted[1]);
                    $(".dropAreaClass").css("z-index", 0);
                    for (var i = 0; i < applicationData.items.length; i++) {
                        var dragObjectsPinnedDropArea = $("#dragObject_" + i).data("pinnedDropArea");
                        var topValueOfDraggedObjectDropArea = $("#dropArea_" + dragObjectsPinnedDropArea).css("top");
                        $("#dragObject_" + i).css("top", topValueOfDraggedObjectDropArea).css("left", "0px");
                    }
                    currentDragObject;
                };
            }

            self.createDropAreas();

        }

        this.shuffleArray = function(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

        this.createDropAreas = function() {

            for (var i = 0; i < applicationData.items.length; i++) {

                Sbt.Droparea.add('dropArea_' + i, {
                    highLight: {
                        width: 30,
                        height: 30
                    },
                    onDrop: function(jqueryEvent, draggableObject, dropArea) {
                        self.onDropFunction(jqueryEvent, draggableObject, dropArea);
                    },
                    onOver: function(jqueryEvent) {
                        self.onOverFunction(jqueryEvent);
                    },
                    onOut: function(jqueryEvent) {
                        self.onOutFunction(jqueryEvent);
                    }
                });

            }
        }

        this.onDropFunction = function(jqueryEvent, draggableObject, dropArea) {
            var droppedArea = dropArea.id;
            var draggedObject = draggableObject.id;
            var dropAreaNumber = Number(droppedArea.split('_')[1]);
            var draggedObjectNumber = Number(draggedObject.split('_')[1]);
            $("#" + dropArea.id).data("placedDragObject", draggedObjectNumber);
            $("#dragObject_" + draggedObjectNumber).data("pinnedDropArea", dropAreaNumber);

            var topValueOfDraggedObjectDropArea = $("#" + dropArea.id).css("top");
            $("#dragObject_" + draggedObjectNumber).css("top", topValueOfDraggedObjectDropArea);
        }

        this.onOverFunction = function(jqueryEvent) {
            var overedDropArea = jqueryEvent.id;
            var overedDropAreaNumber = Number(overedDropArea.split('_')[1]);
            var draggedObjectDropArea = $("#dragObject_" + currentDragObject).data("pinnedDropArea");
            var overedDropAreaDragObject = $("#" + overedDropArea).data("placedDragObject");

            $("#" + overedDropArea).css("border", "2px dashed #7FE1A5");

            self.animateDragObject(overedDropAreaNumber, overedDropAreaDragObject, draggedObjectDropArea);

        }

        this.animateDragObject = function(overedDropAreaNumber, overedDropAreaDragObject, draggedObjectDropArea) {
            $("#dropArea_" + overedDropAreaNumber).data("placedDragObject", currentDragObject);
            $("#dragObject_" + currentDragObject).data("pinnedDropArea", overedDropAreaNumber);

            $("#dropArea_" + draggedObjectDropArea).data("placedDragObject", overedDropAreaDragObject);
            $("#dragObject_" + overedDropAreaDragObject).data("pinnedDropArea", draggedObjectDropArea);

            var topValueOfDraggedObjectDropArea = $("#dropArea_" + draggedObjectDropArea).css("top");

            $("#dragObject_" + overedDropAreaDragObject).animate({
                top: topValueOfDraggedObjectDropArea
            }, 50, function() {
                // Animation complete.
            });

        }

        this.onOutFunction = function(jqueryEvent) {
            var droppedArea = jqueryEvent.id;
            $("#" + droppedArea).css("border", "");
        }

        this.onCheckAnswerButtonClicked = function(e) {

            $checkAnswerButton.off(Sbt.Actions.click, self.onCheckAnswerButtonClicked).css("opacity", "0.5").css("cursor", "default");

            var wrongAnswersGiven = 0;
            for (var i = 0; i < applicationData.items.length; i++) {
                var dropAreaNumber = $("#dragObject_" + i).data("pinnedDropArea");
                if (i == dropAreaNumber) {
                    $("#dragObject_" + i).css("background-color", "#10C710").css("color", "white");
                } else {
                    wrongAnswersGiven++;
                    $("#dragObject_" + i).css("background-color", "#E41A1A").css("color", "white");
                }
            }

            if (wrongAnswersGiven != 0) {
                wrongCounter++;
                self.playNotify(false);
            } else {
                self.playNotify(true);
                self.showCorrectAnswers();
            }

        }

        this.createSlider = function() {
            _sliderContainerWidth = 750 - 80; /*s�re yaz�s� geldi�inde -150 yap*/
            var _sliderContainer = Sbt.utilities.Dom.addDOM("div", $("#main-sound-area"), "main-sound-slider-container");
            mainSoundSlider = new Sbt.Slider(_sliderContainer, {
                from: 0,
                to: 100,
                value: 0,
                step: 1
            });

            var sliderBar = $("#sliderBarContainer_main-sound-slider-container").children();
            _sliderSecondBar = sliderBar.clone().appendTo("#sliderBarContainer_main-sound-slider-container");
            _sliderSecondBar.addClass("scSlidersliderBar2");
            _sliderSecondBar.css("cssText", "right: " + (_sliderContainerWidth - 5) + "px !important");

            var sliderHandle = $("#handleContainer_main-sound-slider-container .scSliderhandle");
            sliderHandle.append("<div class='mainSoundSlider_sc_slider_handle_inner_handle'></div>");

            mainSoundSlider.unbind(Sbt.Slider.Event.DOWN, self.sliderDownHandler);
            mainSoundSlider.bind(Sbt.Slider.Event.DOWN, self.sliderDownHandler);

            mainSoundSlider.unbind(Sbt.Slider.Event.CHANGED, self.sliderChangedHandler);
            mainSoundSlider.bind(Sbt.Slider.Event.CHANGED, self.sliderChangedHandler);

            mainSoundSlider.unbind(Sbt.Slider.Event.RELEASE, self.sliderReleaseHandler);
            mainSoundSlider.bind(Sbt.Slider.Event.RELEASE, self.sliderReleaseHandler);
        }

        this.sliderReleaseHandler = function(e, val) {
            if (val > 100) {
                val = 100;
            }

            _curentValue = val;

            if (val != 100) {
                var start = (($("audio")[0].duration * _curentValue) / 100);
                $("audio")[0].currentTime = start;
                if (soundStatus == true) {
                    $("audio")[0].play();
                }
            } else {
                $("audio")[0].pause();
                soundStatus = mainSound.isPlaying;
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
                mainSoundSlider.value = 0;
                $("audio")[0].currentTime = 0;
            }
        }

        this.sliderDownHandler = function(e, val) {
            soundStatus = mainSound.isPlaying;
            $("audio")[0].pause();
        }

        this.sliderChangedHandler = function(e, val) {
            if (val > 100) {
                val = 100;
            }

            if (val == 100) {
                $("audio")[0].pause();
                soundStatus = mainSound.isPlaying;
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
                mainSoundSlider.value = 0;
                $("audio")[0].currentTime = 0;
            }

            _curentValue = val;
            var _sliderHandlerContainer = $("#handleContainer_main-sound-slider-container");
            var right = Number(_sliderHandlerContainer.css("left").split("px")[0]);
            _sliderSecondBar.css("cssText", "right: " + ((_sliderContainerWidth - 5) - right) + "px !important");
        }

        this.enableUserInteraction = function() {
            $("#interaction-disabler").css("display", "none");
            if (timerIntervalId == undefined) {
                clearInterval(timerIntervalId);
                self.startTimer();
            }
        }

        this.disableUserIntraction = function() {
            $("#interaction-disabler").css("display", "block");
            self.stopTimer();
        }

        this.startTimer = function() {
            timerIntervalId = setInterval(function() {
                timerTime++;
                self.refreshTimer();
            }, 1000);
        }

        this.refreshTimer = function() {
            var minutesStr = Math.floor(timerTime / 60).toString();
            if (minutesStr.length == 1) {
                minutesStr = "0" + minutesStr;
            }

            var secondsStr = (timerTime % 60).toString();
            if (secondsStr.length == 1) {
                secondsStr = "0" + secondsStr;
            }

            $("#header-time").html(minutesStr + ":" + secondsStr);
        }

        this.stopTimer = function() {
            if (timerIntervalId != undefined) {
                clearInterval(timerIntervalId);
                timerIntervalId = undefined;

                timerTime = 0;
            }
        }

        this.onSoundButtonClicked = function() {
            soundsEnabled = !soundsEnabled;

            $headerSoundButton = $("#header-sound-button");
            if (soundsEnabled) {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_on.svg')");
            } else {
                $("audio")[0].pause();
                mainSoundSlider.value = 0;
                $("audio")[0].currentTime = 0;
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_off.svg')");
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
            }

            if (soundsEnabled) {
                self.playWelcomeSound();
            }
        }

        this.onInteractionSoundButtonClicked = function() {

            $interactionSoundButton = $("#interaction-sound-button");
            if (mainSound.isPlaying) {
                $("audio")[0].pause();
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
            } else {
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_pause.svg')");
                self.playInteractionSound();
            }

        }

        this.showCorrectAnswers = function() {

            self.stopTimer();

            $checkAnswerButton.off(Sbt.Actions.click, self.onCheckAnswerButtonClicked).css("opacity", "0.5").css("cursor", "default");

            for (var i = 0; i < applicationData.items.length; i++) {
                var topValueOfDraggedObjectDropArea = $("#dropArea_" + i).css("top");
                $("#dragObject_" + i).css("top", topValueOfDraggedObjectDropArea).css("background-color", "#10C710").css("color", "white").css("cursor", "default");
                dragObjectArr[i].enable(false);
            }
            framework.widgetController.Complete();
        }

        this.onRestartButtonClicked = function() {

            wrongCounter = 0;

            $checkAnswerButton.off(Sbt.Actions.click, self.onCheckAnswerButtonClicked).on(Sbt.Actions.click, self.onCheckAnswerButtonClicked).css("opacity", "1").css("cursor", "pointer");

            self.disableUserIntraction();

            self.stopTimer();
            self.refreshTimer();

            setTimeout(function() {
                self.initializeDragDropObjects();
                self.enableUserInteraction();
            }, 500);

            $("audio")[0].pause();
            mainSoundSlider.value = 0;
            $("audio")[0].currentTime = 0;
            $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
        }

        this.playWelcomeSound = function() {
            if (soundsEnabled) {
                sound = new Sbt.Sound("welcome");
                currentPlaySoundID = "welcomeSound";
                sound.playSound();
            }
        }

        this.playInteractionSound = function() {
            if (soundsEnabled) {
                if (applicationData.sounds.mainSound != null && applicationData.sounds.mainSound != "") {
                    if (currentPlaySoundID != "mainSound") {
                        currentPlaySoundID = "mainSound";
                        mainSound.playSound();
                    } else {
                        $("audio")[0].play();
                    }

                }
            } else {
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
            }
        }

        this.mainSoundAudioEnded = function(e) {
            $("audio")[0].pause();
        }

        this.audioCurrentTime = function(time) {

            var start = 0;
            var end = $("audio")[0].duration;
            var current = $("audio")[0].currentTime;
            var percent = Math.floor(((current - start) * 100) / end);

            if (percent > 0) {
                mainSoundSlider.value = percent;
                var _sliderHandlerContainer = $("#handleContainer_main-sound-slider-container");
                var right = Number(_sliderHandlerContainer.css("left").split("px")[0]);
                _sliderSecondBar.css("cssText", "right: " + ((_sliderContainerWidth - 5) - right) + "px !important");
            }
        }

        this.playCompleteSound = function() {
            if (soundsEnabled) {
                sound = new Sbt.Sound("complete");
                currentPlaySoundID = "completeSound";
                sound.playSound();
            }
        }

        this.playNotify = function(isCorrect) {
            if (soundsEnabled) {
                Sbt.NotifySoundController.isCorrect = isCorrect;
                Sbt.NotifySoundController.soundType = 1;
                currentPlaySoundID = "trueFalseSound"

                $("audio")[0].pause();
                mainSoundSlider.value = 0;
                $("audio")[0].currentTime = 0;
                $interactionSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");


                Sbt.NotifySoundController.show();
            }

        };

        this.onNotifySoundHide = function(event, isCorrect) {
            if (isCorrect) {
                self.playCompleteSound();
            } else {
                if (wrongCounter != 3) {
                    $checkAnswerButton.off(Sbt.Actions.click, self.onCheckAnswerButtonClicked).on(Sbt.Actions.click, self.onCheckAnswerButtonClicked).css("opacity", "1").css("cursor", "pointer");
                } else {
                    self.showCorrectAnswers();
                    self.playCompleteSound();
                }
            }
        }
    }

    function initializeLanguage(param) {
        _url = location.href;
        var param = applicationData.language == "turkish" ? "lang=TR_TR&autoResize=true" : "lang=EN_TR&autoResize=true";
        if (_url.indexOf(param) == -1) {
            _url += (_url.split('?')[1] ? '&' : '?') + param;
            location.href = _url;
        }
    }

    $(framework).on(Framework.ONREADY, function() {
        application = new dragDropContainers();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();