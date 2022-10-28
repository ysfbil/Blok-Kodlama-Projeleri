(function () {
    var application;

    function FillInTheBlanks() {
        var self = this;

        var timerTime = 0;
        var timerIntervalId;
        var soundsEnabled = true;

        var answers = [];

        this.initialize = function () {
            document.title = applicationData.title;

            // header
            $header = $("#header");
            $header.css("max-height", applicationData.header.height + "px");

            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.header.title);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.on("click", self.onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");
            $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_on.svg')");
            $headerSoundButton.on("click", self.onSoundButtonClicked);

 
            $appPlayer = $("#app-player");
            if (applicationData.question.sound != null && applicationData.question.sound != undefined && applicationData.question.sound != "") {
                self.soundPlayer = new Sbt.Sound(applicationData.question.sound.replace(".mp3", ""), undefined, false, true);
                $(self.soundPlayer).unbind(self.soundPlayer.EVENT_TIME_UPDATE).bind(self.soundPlayer.EVENT_TIME_UPDATE, self.audioCurrentTime);
                $(self.soundPlayer).unbind(self.soundPlayer.EVENT_AUDIO_ENDED).bind(self.soundPlayer.EVENT_AUDIO_ENDED, self.mainSoundAudioEnded);

                var $appPlayerPlayButton = $("#app-player-play-button");
                $appPlayerPlayButton.on("click", self.onPlayButtonClicked);

                self.soundPlayerSlider = new Sbt.Slider($("#app-player-slider"), {
                    from: 0,
                    to: 100,
                    value: 0,
                    step: 1
                });
            } else {
                $appPlayer.css("display", "none");
            }

            var $appText = $("#app-text");
            var questionText = applicationData.question.text;


            var index = 0;
            var answerIndex = 0;

            do {
                var startIndex = questionText.indexOf('[', index);
                if (startIndex != -1) {
                    var endIndex = questionText.indexOf(']', startIndex);
                    if (endIndex != -1) {
                        answerIndex++;

                        var answer = questionText.substring(startIndex + 1, endIndex);
                        answers.push({
                            'name': "answer" + answerIndex,
                            'value': answer
                        });

                        index = endIndex;
                    } else
                        break;
                } else
                    break;
            } while (index < questionText.length);

            var htmlText = applicationData.question.text;
            for (var i = 0; i < answers.length; i++) {
                var answerName = answers[i].name;
                var answerValue = answers[i].value;
                var answerDivName = answerName + "_div";
                htmlText = htmlText.replace("[" + answerValue + "]", "<input id='" + answerDivName + "' class='answer'>&nbsp;</input>");
            }
            $appText.html(htmlText);

            for (var i = 0; i < answers.length; i++) {
                var answerName = answers[i].name;
                var answerDivName = answerName + "_div";
                var $answerDiv = $("#" + answerDivName);
                $answerDiv.data("name", answerName);
                $answerDiv.on("click", self.onAnswerClicked);
                $answerDiv.focusout(self.onAnswerFocusout);
                $answerDiv.attr("tabindex", 0);
            }

            // footer
            var $footerCheckText = $("#app-footer-check-text");

            //if (applicationData.language == "turkish") {
            //    $footerCheckText.html(localizationData.turkish.checkButtonText);
            //} else {
            //    $footerCheckText.html(localizationData.english.checkButtonText);
            //}

            var $footerCheckButton = $("#app-footer-check-button");
            $footerCheckButton.on("click", self.onCheckButtonClicked);

            self.playWelcomeSound();
        }

        this.suffleAnswers = function shuffle() {
            var currentIndex = answers.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = answers[currentIndex];
                answers[currentIndex] = answers[randomIndex];
                answers[randomIndex] = temporaryValue;
            }
        }

        this.enableUserInteraction = function () {
            $("#interaction-disabler").css("display", "none");
        }

        this.disableUserIntraction = function () {
            $("#interaction-disabler").css("display", "block");
        }

        this.startTimer = function () {
            if (timerIntervalId == undefined) {
                timerIntervalId = setInterval(function () {
                    timerTime++;
                    self.refreshTimer();
                }, 1000);
            }
        }

        this.refreshTimer = function () {
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

        this.stopTimer = function () {
            if (timerIntervalId != undefined) {
                clearInterval(timerIntervalId);
                timerIntervalId = undefined;

                timerTime = 0;
            }
        }

        this.onSoundButtonClicked = function () {
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

        this.onRestartButtonClicked = function () {
            self.disableUserIntraction();

            self.stopTimer();
            self.refreshTimer();


            for (var i = 0; i < answers.length; i++) {
                var answerName = answers[i].name;
                var answerDivName = answerName + "_div";
                var $answerDiv = $("#" + answerDivName);
                var $dropdownItem = $("#answer-dropdown-item" + i);
                $answerDiv.remove();
                $dropdownItem.remove();
            }
            answers = [];

            self.initialize();
            self.enableUserInteraction();
        }

        this.playWelcomeSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("welcome");
                sound.playSound();
            }
        }

        this.playSelectionSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("selection");
                sound.playSound();
            }
        }

        this.playCorrectSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("correct");
                sound.playSound();
            }
        }

        this.playWrongSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("wrong");
                sound.playSound();
            }
        }

        this.playCompleteSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("complete");
                sound.playSound();
            }
        }

        this.onPlayButtonClicked = function () {
            if (!self.soundPlayer.isPlaying) {
                self.soundPlayer.playSound();
                $("#app-player-play-button").css("background-image", "url('" + framework.localPath + "img/theme/button_pause.svg')");
            } else {
                $("audio")[0].pause();
                $("#app-player-play-button").css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
            }
        }

        this.audioCurrentTime = function (time) {
            var end = $("audio")[0].duration;
            var current = $("audio")[0].currentTime;
            var percent = Math.floor((current * 100) / end);

            if (percent > 0)
                self.soundPlayerSlider.value = percent;
        }

        this.mainSoundAudioEnded = function (e) {
            $("audio")[0].pause();
            $("#app-player-play-button").css("background-image", "url('" + framework.localPath + "img/theme/button_play.svg')");
        }

        this.onAnswerClicked = function (e) {
            var $answerDiv = $(e.currentTarget);
            if ($answerDiv.attr("correct") == null) {
                $answerDiv.css("background-color", "#ffffff");
                self.startTimer();

                if (self.answerDropDownTimeoutId != null)
                    window.clearTimeout(self.answerDropDownTimeoutId);

                self.$currentAnswer = $answerDiv;
                var answerDivPosition = $answerDiv.position();
                var answerDivHeight = Number($answerDiv.css("height").replace("px", ""));
                var $answerDropDown = $("#app-text-answer-dropdown");
                if ($answerDropDown.css("display") == "none" ||
                    self.$answerDropDownDivId != $answerDiv.attr("id")) {
                    $answerDropDown.css("left", answerDivPosition.left + "px");
                    $answerDropDown.css("top", (answerDivPosition.top + answerDivHeight + 5) + "px");
                    $answerDropDown.css("display", "flex");
                    self.$answerDropDownDivId = $answerDiv.attr("id");
                } else {
                    $answerDropDown.css("display", "none");
                }

                self.playSelectionSound();
            }
        }

        this.onAnswerFocusout = function (e) {
            self.answerDropDownTimeoutId = window.setTimeout(function () {
                $("#app-text-answer-dropdown").hide();
            }, 150);
            self.currentAnswer = null;
        }

        this.onAnswerDropDownItemClicked = function (e) {
            $item = $(e.currentTarget);
            self.$currentAnswer.html($item.data("value"));
            $("#app-text-answer-dropdown").hide();
        }

        this.onCheckButtonClicked = function () {
            self.startTimer();

            var allOk = true;
            for (var i = 0; i < answers.length; i++) {
                var answerName = answers[i].name;
                $answerDiv = $("#" + answerName + "_div");
                if ($answerDiv.length > 0) {
                    if ($answerDiv.val() != answers[i].value) {
                        $answerDiv.css("background-color", "#FF4500");
                        allOk = false;
                    } else {
                        $answerDiv.css("background-color", "#32CD32");
                        $answerDiv.css("pointer-events", "none");
                        $answerDiv.attr("correct", true);
                        $answerDiv.css("cursor", "default");
                    }
                }
            }

            if (allOk) {
                self.playCorrectSound();
                $checkButton = $("#app-footer-check-button");
                $checkButton.off("click");
                $checkButton.css("cursor", "default");

                framework.widgetController.Complete();

                self.stopTimer();
            } else {
                self.playWrongSound();
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

    $(framework).on(Framework.ONREADY, function () {
        application = new FillInTheBlanks();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();