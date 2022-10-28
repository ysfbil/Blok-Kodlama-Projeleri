(function() {
    var application;

    function MatchingOnImages() {
        var self = this;
        var timerTime = 0;
        var timerIntervalId;
        var soundsEnabled = true;

        this.initialize = function() {
            document.title = applicationData.name;

            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.title);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.on("click", self.onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");
            $headerSoundButton.on("click", self.onSoundButtonClicked);

            self.initializeContent();
        }

        this.initializeContent = function() {
            // player
            var phrases = new Array();
            for (var i = 0; i < applicationData.content.phrases.left.length; i++)
                phrases.push({ phrase: applicationData.content.phrases.left[i], side: "left" });
            for (var i = 0; i < applicationData.content.phrases.right.length; i++)
                phrases.push({ phrase: applicationData.content.phrases.right[i], side: "right" });

            phrases = self.shuffleArray(phrases);

            $appPanelDragArea = $("#app-panel-drag-area");
            $appPanelDragArea.empty();

            $appPanelLeftImage = $("#app-panel-left-image img");
            $appPanelLeftImage.attr("src", framework.localPath + "/img/" + applicationData.content.images.left.image);

            $appPanelLeftImageDroppable = $("#app-panel-left-image-droppable");
            $appPanelLeftImageDroppable.empty();

            $appPanelRightImage = $("#app-panel-right-image img");
            $appPanelRightImage.attr("src", framework.localPath + "/img/" + applicationData.content.images.right.image);

            $appPanelRightImageDroppable = $("#app-panel-right-image-droppable");
            $appPanelRightImageDroppable.empty();

            for (var i = 0; i < phrases.length; i++) {
                var phrase = phrases[i];

                var $phrase = Sbt.utilities.Dom.addDOM('div', $appPanelDragArea, 'phrase_' + i).addClass("phrase").addClass("phrase-none");
                $phrase.data("index", i);
                $phrase.mousedown(self.onPhraseMouseDown);
                var $phraseSpan = Sbt.utilities.Dom.addDOM('span', $("#phrase_" + i), 'phrase_span_' + i);
                $phraseSpan.html(phrase.phrase);
                var dragObject = new Sbt.DragObject("phrase_" + i, { revert: "always", container: '#app-panel', handle: "phrase_" + i, highLight: [] });

                var $phrase = Sbt.utilities.Dom.addDOM('div', $appPanelLeftImageDroppable, 'phrase_left_' + i).addClass("phrase").addClass("phrase-left");
                $phrase.css("display", "none");
                $phrase.data("index", i);
                $phrase.data("side", phrase.side);
                $phrase.on("click", self.onLeftPhraseClicked);
                $phrase.mousedown(self.onPhraseLeftMouseDown);
                var $phraseSpan = Sbt.utilities.Dom.addDOM('span', $("#phrase_left_" + i), 'phrase_left_span_' + i);
                $phraseSpan.html(phrase.phrase);

                var $phrase = Sbt.utilities.Dom.addDOM('div', $("#app-panel-right-image-droppable"), 'phrase_right_' + i).addClass("phrase").addClass("phrase-right");
                $phrase.css("display", "none");
                $phrase.data("index", i);
                $phrase.data("side", phrase.side);
                $phrase.on("click", self.onRightPhraseClicked);
                $phrase.mousedown(self.onPhraseRightMouseDown);
                var $phraseSpan = Sbt.utilities.Dom.addDOM('span', $("#phrase_right_" + i), 'phrase_right_span_' + i);
                $phraseSpan.html(phrase.phrase);
            }

            Sbt.Droparea.add("app-panel-left-image-droppable", {
                highLight: {
                    width: 50,
                    height: 50
                },
                onDrop: function(jqueryEvent, draggableObject, dropArea) {
                    self.onDropFunction(jqueryEvent, draggableObject, dropArea);
                }
            });

            Sbt.Droparea.add("app-panel-right-image-droppable", {
                highLight: {
                    width: 50,
                    height: 50
                },
                onDrop: function(jqueryEvent, draggableObject, dropArea) {
                    self.onDropFunction(jqueryEvent, draggableObject, dropArea);
                }
            });

            var $imageLeft = $("#image-left");
            $imageLeft.css("background-image", "url('" + framework.localPath + "img/" + applicationData.content.images.left.image + "')");

            var $imageRight = $("#image-right");
            $imageRight.css("background-image", "url('" + framework.localPath + "img/" + applicationData.content.images.right.image + "')");

            $appFooterCheckButton = $("#app-footer-check-button");
            $appFooterCheckButton.on("click", self.onCheckButtonClicked);

            self.playWelcomeSound();
        }

        this.onPhraseMouseDown = function(e) {
            self.startTimer();
            self.resetPhraseHighlighting();
        }

        this.onPhraseLeftMouseDown = function(e) {
            self.startTimer();
        }

        this.onPhraseRightMouseDown = function(e) {
            self.startTimer();
        }

        this.resetPhraseHighlighting = function(e) {
            $(".phrase-none").each(function(index, element) {
                $(element).css("background-color", "#eaeaea");
            });

            $(".phrase-left").each(function(index, element) {
                var $element = $(element);
                if ($element.data("side") != "left")
                    $element.css("background-color", "#eaeaea");
            });

            $(".phrase-right").each(function(index, element) {
                var $element = $(element);
                if ($element.data("side") != "right")
                    $element.css("background-color", "#eaeaea");
            });
        }

        this.enableUserInteraction = function() {
            $("#interaction-disabler").css("display", "none");
        }

        this.disableUserIntraction = function() {
            $("#interaction-disabler").css("display", "block");
        }

        this.startTimer = function() {
            if (timerIntervalId == undefined) {
                timerIntervalId = setInterval(function() {
                    timerTime++;
                    self.refreshTimer();
                }, 1000);
            }
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
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_off.svg')");
            }

            if (soundsEnabled)
                self.playWelcomeSound();
        }

        this.onRestartButtonClicked = function() {
            self.stopTimer();
            self.refreshTimer();

            self.initializeContent();
        }

        this.playWelcomeSound = function() {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("welcome");
                sound.playSound();
            }
        }

        this.playSelectionSound = function() {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("selection");
                sound.playSound();
            }
        }

        this.playCorrectSound = function() {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("correct");
                sound.playSound();
            }
        }

        this.playWrongSound = function() {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("wrong");
                sound.playSound();
            }
        }

        this.playCompleteSound = function() {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("complete");
                sound.playSound();
            }
        }

        this.onCheckButtonClicked = function() {
            self.startTimer();

            $phrases = $(".phrase-none").each(function(index, element) {
                var $element = $(element);
                if ($element.css("display") == "flex")
                    $element.css("background-color", "red");
            });

            $phrasesLeft = $(".phrase-left").each(function(index, element) {
                var $element = $(element);
                if ($element.css("display") == "flex") {
                    if ($element.data("side") != "left") {
                        $element.css("background-color", "red");
                    } else {
                        $element.css("background-color", "#7fe1a5").css("cursor", "default");
                        $element.data("correct", true);
                    }
                }
            });

            $phrasesRight = $(".phrase-right").each(function(index, element) {
                var $element = $(element);
                if ($element.css("display") == "flex") {
                    if ($element.data("side") != "right") {
                        $element.css("background-color", "red").css("cursor", "default");
                    } else {
                        $element.css("background-color", "#7fe1a5");
                        $element.data("correct", true);
                    }
                }
            });

            var allOk = true;

            $phrases = $(".phrase-none").each(function(index, element) {
                var $element = $(element);
                if ($element.css("display") == "flex") {
                    allOk = false;
                }
            });

            $phrasesLeft = $(".phrase-left").each(function(index, element) {
                var $element = $(element);
                if ($element.css("display") == "flex" && $element.data("side") != "left") {
                    allOk = false;
                }
            });

            $phrasesRight = $(".phrase-right").each(function(index, element) {
                var $element = $(element);
                if ($element.css("display") == "flex" && $element.data("side") != "right") {
                    allOk = false;
                }
            });

            if (allOk) {
                self.playCorrectSound();

                $checkButton = $("#app-footer");
                $checkButton.off("click");
                $checkButton.css("cursor", "default");

                framework.widgetController.Complete();

                self.stopTimer();
            } else {
                self.playWrongSound();
            }
        }

        this.onDropFunction = function(jqueryEvent, draggableObject, dropArea) {
            var droppedArea = dropArea.id;
            console.info("DropAreaId > " + dropArea.id);
            if (dropArea.id == "app-panel-left-image-droppable") {
                var $draggableObject = $(draggableObject);
                $draggableObject.css("display", "none");
                var $phraseLeft = $("#phrase_left_" + $draggableObject.data("index"));
                $phraseLeft.data("side", $draggableObject.data("side"));
                $phraseLeft.css("display", "flex");
            } else if (dropArea.id == "app-panel-right-image-droppable") {
                var $draggableObject = $(draggableObject);
                $draggableObject.css("display", "none");
                var $phraseRight = $("#phrase_right_" + $draggableObject.data("index"));
                $phraseRight.data("side", $draggableObject.data("side"));
                $phraseRight.css("display", "flex");
            }
        }

        this.onLeftPhraseClicked = function(e) {
            var $phraseLeft = $(e.currentTarget);
            if ($phraseLeft.data("correct") != true) {
                $phraseLeft.css("display", "none");
                var index = $phraseLeft.data("index");
                var $phrase = $("#phrase_" + index);
                $phrase.css("display", "flex");
                self.resetPhraseHighlighting();
            }
        }

        this.onRightPhraseClicked = function(e) {
            var $phraseRight = $(e.currentTarget);
            if ($phraseRight.data("correct") != true) {
                $phraseRight.css("display", "none");
                var index = $phraseRight.data("index");
                var $phrase = $("#phrase_" + index);
                $phrase.css("display", "flex");
                self.resetPhraseHighlighting();
            }
        }

        this.shuffleArray = function(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
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
        application = new MatchingOnImages();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();