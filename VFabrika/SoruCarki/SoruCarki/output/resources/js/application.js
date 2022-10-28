function initializeLanguage(param) {
    _url = location.href;
    var param = applicationData.language == "turkish" ? "lang=TR_TR&autoResize=true" : "lang=EN_TR&autoResize=true";
    if (_url.indexOf(param) == -1) {
        _url += (_url.split('?')[1] ? '&' : '?') + param;
        location.href = _url;
    }
}

$(framework).bind(Framework.ONREADY, function () {
    var widgetMain = new SpinWheel();
    widgetMain.initialize();
    widgetMain = null;

    initializeLanguage();

    showWatermark("vfabrika-stage", applicationData.language);
});
var SpinWheel = (function () {
    function main() {
        //declarations
        var _this = this;
        var timerTime = 0;
        var timerIntervalId;
        var colors;
        var _data = false;
        var _mouseDown = false;
        var wheelSpinning = false;
        var wheelPower = 1;
        var theWheel;
        var eliminate = true;
        var currentSlice = "Yemek 8";
        var soundsEnabled = true;
        var _dataset;
        var tickSound;
        var completed;
        this.initialize = function () {
            //Sbt.plugins.NavigationController.nextQuestionButton.show();
            // Sbt.plugins.NavigationController.restartButton.show();
            //Sbt.plugins.NavigationController.restartButton.enabled = false;
            // $(Sbt.plugins.NavigationController).on(Sbt.plugins.NavigationController.EVENT_RESTART_BUTTON_CLICKED, onRestartButtonClicked);
            // $(Sbt.plugins.NavigationController).bind(Sbt.plugins.NavigationController.EVENT_NEXT_QUESTION_BUTTON_CLICKED, nextQuestionButtonClicked);
            // Sbt.plugins.NavigationController.hasLogo = true;
            // Sbt.plugins.NavigationController.logoPos = 1;
            // $(Sbt.FeedbackRichTextController).bind(Sbt.FeedbackRichTextController.EVENT_HIDE, onFeedbackRichTextHide);
            $(Sbt.NotifySoundController).bind(Sbt.NotifySoundController.EVENT_HIDE, onNotifySoundHide);
            //events in container
            //$tipButton.bind(Sbt.Actions.down,tipClick);
            scoStart();
        };
        var scoStart = function () {
            completed = false;
            _dataset = applicationData.items;
            initStandartDoms();
            initAppDoms();
            initEvents();
            initData()
            initWheel()
            stopTimer();
            refreshTimer();
            startTimer();
        }
        onSoundButtonClicked = function () {
            soundsEnabled = !soundsEnabled;
            $headerSoundButton = $("#header-sound-button");
            if (soundsEnabled) {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_on.svg')");
            } else {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_off.svg')");
            }
            if (soundsEnabled)
                playWelcomeSound();
        }
        var initStandartDoms = function () {
            document.title = applicationData.title;
            // header
            $header = $("#header");

            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.header.title);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

          

            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.on("click", onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");

            $headerSoundButton.on("click", onSoundButtonClicked);
            playWelcomeSound();

        }
        var initAppDoms = function () {
            $wheelCursor = $("#cursor");
            $wheelCursorText = $("#cursorText");
            $wheelCursorText.html(applicationData.wheelCursor.text)
            $wheelCursorLeft = $("#cursorLeft");
            $wheelCursorRight = $("#cursorRight");

            var $buttonSpinContainer = $("#buttonSpinContainer");
            $buttonSpinContainer.show();

            var $buttonSpin = $("#buttonSpin");
            $buttonSpin.attr("src", framework.localPath + "img/theme/button_rotate.svg");

            var $buttonContinue = $("#buttonContinue");
            $buttonContinue.attr("src", framework.localPath + "img/theme/button_continue.svg");

            var $buttonEliminate = $("#buttonEliminate");
            $buttonEliminate.attr("src", framework.localPath + "img/theme/button_eliminate.svg");
            $("#centerContents").hide();
        }

        var playWelcomeSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("welcome");
                sound.playSound();
            }
        }

        var initEvents = function () {
            $("#buttonSpinContainer").off(Sbt.Actions.down).on(Sbt.Actions.down, buttonSpinDownHandler);
            // $("#buttonZoomIn").off(Sbt.Actions.down).on(Sbt.Actions.down, zoomIn);
            // $("#buttonZoomOut").off(Sbt.Actions.down).on(Sbt.Actions.down, zoomOut);
            $("#buttonContinueContainer").off(Sbt.Actions.down).on(Sbt.Actions.down, continueHandler)
            $("#buttonEliminateContainer").off(Sbt.Actions.down).on(Sbt.Actions.down, elimiateHandler)
        }
        var buttonSpinDownHandler = function (e) {
            startSpin();
        }
        var initData = function () {
            generateColorPalette(_dataset.length);
            _data = [];
            for (var i = 0; i < _dataset.length; i++) {
                _data.push(
                    {
                        'fillStyle': colors[i],
                        'text': _dataset[i]
                    }
                )
            }
            ////console.error("_data : " , _data)
        }
        var initWheel = function () {
            theWheel = new Winwheel(
                {
                    'numSegments': _data.length,
                    'outerRadius': 250,       // The size of the wheel.
                    'centerX': 250,       // Used to position on the background correctly.
                    'centerY': 250,
                    'textFontSize': 20,
                    'segments': _data,
                    'animation':               // Definition of the animation
                    {
                        'type': 'spinToStop',
                        'duration': 4,
                        'spins': 8,
                        'callbackFinished': alertPrize,
                        'callbackSound': playTickSound,   // Called when the tick sound is to be played.
                        'soundTrigger': 'pin',        // Specify pins are to trigger the sound.
                    },
                    // 'pins' :                // Turn pins on.
                    //     {
                    //         'number'     : _data.length,
                    //         // 'fillStyle'  : 'silver',
                    //         // 'outerRadius': 4,
                    //     },
                });

            function alertPrize(indicatedSegment) {
                // Do basic alert of the segment text.
                ////console.error("You have won " , indicatedSegment);
                wheelSpinning = false;
                currentSlice = indicatedSegment.text;
                $("#centerContents").show();
            }

            //console.error("context : " , theWheel.ctx)
            setTimeout(function () {
                //     theWheel.ctx.scale(0.25, 0.25)
            }, 1000);
            // tickSound = new Audio(applicationData.sounds.wheelTick + ".mp3");
            // tickSound.crossOrigin = "anonymous";
            // tickSound = new Sbt.Sound(applicationData.sounds.wheelTick);
        }

        function playTickSound() {
            // //console.error("play : " , tickSound)
            // playSound(applicationData.sounds.wheelTick)
            // tickSound.stopSound();
            //   tickSound.playSound()
            // tickSound.pause();
            // tickSound.currentTime = 0;
            //
            // // Play the sound.
            // tickSound.play();
        }

        function zoomIn() {
            $("#canvasContainer").attr("class", "zoomed-in")
        }

        function zoomOut() {
            $("#canvasContainer").attr("class", "zoomed-out")
            //
            // $("#canvasContainer").off();
            // $("#canvasContainer").on("animationend webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            //     function(event)
            //     {
            //
            //         $("#centerContents").hide();
            //         $("#buttonSpinContainer").show();
            //
            //
            //         if(eliminate)
            //         {
            //             removeSlice(currentSlice)
            //         }
            //     });
            $("#centerContents").hide();
            $("#buttonSpinContainer").show();
            //console.error("zoom out")
            if (eliminate) {
                removeSlice(currentSlice)
            }
        }

        function removeSlice(name) {
            var index;
            for (var i = 0; i < _data.length; i++) {
                if (_data[i].text != undefined) {
                    if (_data[i].text == name) {
                        ////console.error("nameeee : " , name)
                        index = i;
                    }
                }
            }
            var currentSegment = theWheel.segments[index + 1];
            currentSegment.text = "";
            currentSegment.fillStyle = "#ffffff";
            theWheel.draw();
            setTimeout(function () {
                Sbt.utilities.Array.remove(_data, index);
                initWheel();
                if (theWheel.numSegments == 1) {
                    playCompleteSound();

                    framework.widgetController.Complete();
                }
                //  zoomOut();
                eliminate = false;
                if (_data.length > 1) {
                    $("#buttonSpinContainer").show();
                } else {

                    $("#buttonSpinContainer").hide();
                }
                $("#centerContents").hide();
            }, 750);
        }

        function playCompleteSound() {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("complete");
                sound.playSound();
            }
        }

        function continueHandler() {
            eliminate = false;
            $("#centerContents").hide();
            $("#buttonSpinContainer").show();
        }

        function elimiateHandler() {
            //console.error("elimiate handler")
            $("#centerContents").hide();
            playSound("slice")
            eliminate = true;
            zoomOut();
        }

        function startSpin() {
            if (completed == false) {
                framework.widgetController.setScoCompleted();
                completed = true;
            }


            $("#buttonSpinContainer").hide();
            // setTimeout(function(){
            //     zoomIn();
            //
            // }, 2000);
            resetWheel();
            // Ensure that spinning can't be clicked again while already running.
            if (wheelSpinning == false) {
                theWheel.animation.spins = 2;
                theWheel.startAnimation();
                wheelSpinning = true;
            }
            ////console.error("theWheel : ",  theWheel.animation)
        }

        function resetWheel() {
            // console.error("restart")
            theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
            theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
            theWheel.draw();                // Call draw to render changes to the wheel.
            wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
        }

        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }

        function RGB2Color(r, g, b) {
            return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
        }

        var generateColorPalette = function (size) {
            colors = [];
            var frequency = 5 / size;
            for (var i = 0; i < size; ++i) {
                var red = Math.sin(frequency * i + 0) * 127 + 128;
                var green = Math.sin(frequency * i + 2) * 127 + 128;
                var blue = Math.sin(frequency * i + 4) * 127 + 128;
                colors.push(RGB2Color(red, green, blue))
            }
            colors = shuffle(colors);
        }

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        var onRestartButtonClicked = function () {
            resetWheel();
            scoStart();
        };

        var giveNotifySound = function (isCorrect) {
            Sbt.NotifySoundController.isCorrect = isCorrect;
            Sbt.NotifySoundController.soundType = 1;
            Sbt.NotifySoundController.show();
        };

        var onNotifySoundHide = function (evt, isCorrect) {
        };

        var giveFeedback = function (feedbackId) {
            Sbt.FeedbackRichTextController.id = parseInt(feedbackId);
            Sbt.FeedbackRichTextController.show();
            setTimeout(function () {
                if (framework.getUrlQuery("turbo") == "true") {
                    Sbt.AudioSprite.getInstance().stopSound()
                }
            }, 3000);
        };

        var playSound = function (soundName) {
            var sound = new Sbt.Sound(soundName);
            sound.playSound();
        };

        startTimer = function () {
            timerIntervalId = setInterval(function () {
                timerTime++;
                self.refreshTimer();
            }, 1000);
        }
        refreshTimer = function () {
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
        stopTimer = function () {
            if (timerIntervalId != undefined) {
                clearInterval(timerIntervalId);
                timerIntervalId = undefined;
                timerTime = 0;
            }
        }
    }

    return main;
})(SpinWheel || (SpinWheel = {}));