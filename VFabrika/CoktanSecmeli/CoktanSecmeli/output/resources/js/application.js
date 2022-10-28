(function () {
    var application;

    function MultipleChoice() {
        var self = this;
        var timerTime = 0;
        var timerIntervalId;
        var soundsEnabled = true;

        var lang = "english";

        var currentQuestion = 0;
        var answers = [];

        var video = undefined;

        var $buttonPlay;
        var $buttonPause;

        var $time;

        var videoPosition = 0;
        var videoDuration = 0;

        var $slider;
        var $sliderProgress;
        var sliderDragging = false;
        var sliderPlaying = undefined;

        this.initialize = function () {

            self.sbtBodyContainer = $("#sbt_bodyContainer");

            // language
            if (applicationData.language != null) {
                lang = applicationData.language;
            }

            // title
            document.title = applicationData.title;

            // header
            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.header.title);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

            // buttons
            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.on("click", self.onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");
            $headerSoundButton.on("click", self.onSoundButtonClicked);

            $nextButton = $("#app-question-next-button");
            $nextButton.on("click", self.onNextButtonClicked);

            $previousButton = $("#app-question-previous-button");
            $previousButton.on("click", self.onPreviousButtonClicked);

            $appFooterCheckButton = $("#app-footer-check-button");
            $appFooterCheckButton.on("click", self.onCheckButtonClicked);

            // sound 
            if (applicationData.content.sound != null) {
                // set app-content-panel class height for other contents
                document.documentElement.style.setProperty("--app-content-panel-height", "316px");

                $sound = $("#app-player");
                $sound.removeClass("d-none");

                self.soundPlayer = new Sbt.Sound(applicationData.content.sound.replace(".mp3", ""), undefined, false, true);
                $(self.soundPlayer).unbind(self.soundPlayer.EVENT_TIME_UPDATE).bind(self.soundPlayer.EVENT_TIME_UPDATE, self.audioCurrentTime);
                $(self.soundPlayer).unbind(self.soundPlayer.EVENT_AUDIO_ENDED).bind(self.soundPlayer.EVENT_AUDIO_ENDED, self.mainSoundAudioEnded);

                $appPlayerPlayButton = $("#app-player-play-button");
                $appPlayerPlayButton.on("click", self.onPlayButtonClicked);

                self.soundPlayerSlider = new Sbt.Slider($("#app-player-slider"), {
                    from: 0,
                    to: 100,
                    value: 0,
                    step: 1
                });
            }

            // image
            if (applicationData.content.image != null) {
                $image = $("#app-content-image");
                $image.addClass("app-content-panel").removeClass("d-none");

                $image.css("background-image", "url('" + framework.localPath + "img/" + applicationData.content.image + "')");
            }

            // video
            if (applicationData.content.video != null) {
                $video = $("#app-content-video");
                $video.addClass("app-content-panel").removeClass("d-none");

                // slider
                self.$slider = $("#video-slider");
                self.$sliderProgress = $("#video-slider-progress");

                self.$slider.on("mousedown", self.onSliderMouseDown);
                self.$slider.on("mouseover", self.onSliderMouseOver);
                self.$slider.on("mouseout", self.onSliderMouseOut);

                // player
                self.video = new Sbt.Video("video-container", applicationData.content.video.replace(".mp4", ""), false, false);
                self.video.hasLogo = false;
                self.video.hasControls = false;
                self.video.show();
                $(self.video).bind(self.video.EVENT_VIDEO_LOADED, self.onVideoLoaded);
                $(self.video).bind(self.video.EVENT_TIME_UPDATE, self.onVideoTimeUpdate);
                $(self.video).bind(self.video.EVENT_VIDEO_ENDED, self.onVideoEnded);
                $(self.video.video).bind("click", self.onVideoClicked);

                // buttons
                self.$buttonPlay = $("#video-controls-button-play");
                self.$buttonPlay.on("click", self.onButtonPlayClicked);

                self.$buttonPause = $("#video-controls-button-pause");
                self.$buttonPause.on("click", self.onButtonPauseClicked);

                // fullscreen button
                self.$buttonFullscreen = $("#video-button-fullscreen");
                self.$buttonFullscreen.on("click", self.onButtonFullscreenClicked);

                // time
                $time = $("#video-controls-time");
                self.updateTime();

                $(window).keypress(function (e) {
                    if (e.which == 32) {
                        self.toggleVideo();
                    }
                });
             }

            // text
            if (applicationData.content.text != null) {
                $text = $("#app-content-text");
                $text.addClass("app-content-panel").removeClass("d-none");

                $text.html(applicationData.content.text);
            }

            self.playWelcomeSound();

            self.showQuestionContent();
        }

        this.showQuestionContent = function () {
            $("#app-question-content").empty();
            $("#app-footer-check-button").css("pointer-events", "none");

            var questionContent = $("#app-question-content");
            var questionItem = applicationData.questions.items[currentQuestion];


            var $questionTitle = Sbt.utilities.Dom.addDOM('div', questionContent, "app-question-content-title");
            $questionTitle.html(localizationData.interactionDescriptions[lang].question + " " + (currentQuestion + 1));

            var $questionText = Sbt.utilities.Dom.addDOM('div', questionContent, "app-question-content-text");
            $questionText.html(questionItem.question);

            var $questionChoices = Sbt.utilities.Dom.addDOM('div', questionContent, "app-question-content-choices");

            for (var i = 0; i < questionItem.choices.length; i++) {
                if (questionItem.choices[i] == "") {
                    continue;
                }
                var $questionChoice = Sbt.utilities.Dom.addDOM('div', $questionChoices, 'app-question-content-choice-' + i);
                $questionChoice.on("click", self.onChoiceClicked);

                $questionChoice.append("<input type='radio' id='app-question-content-choice-radio-button-" + i + "' name='app-question-content-choice-radio-button" + "' value='" + questionItem.choices[i] + "'/>");
                var $questionChoiceRadio = $("#app-question-choice-radio-" + i);
                $questionChoiceRadio.change(self.onRadioButtonClicked);

                var $questionChoiceLabel = Sbt.utilities.Dom.addDOM('label', $("#app-question-content-choice-" + i), 'app-question-content-choice-label-' + i);
                $questionChoiceLabel.html(questionItem.choices[i]);
            }

            if (answers[currentQuestion] != null) {
                $questionAnswer = $("input[value='" + answers[currentQuestion] + "']");
                $correctAnswer = $("input[value='" + questionItem.answer + "']");

                $questionAnswer.attr("checked", true);

                if ($questionAnswer.val() != $correctAnswer.val()) {
                    $questionAnswer.parent("div").addClass("app-question-content-wrong-choice");
                    $correctAnswer.parent("div").addClass("app-question-content-correct-choice");
                } else {
                    $correctAnswer.parent("div").addClass("app-question-content-correct-choice");
                }

                self.disableChoices();

                $("#app-footer-check-button").css("pointer-events", "none");
            }
        }

        this.disableChoices = function () {
            $choices = $("#app-question-content-choices");

            $choices.children().css("pointer-events", "none");
        }

        // content button functions

        this.onCheckButtonClicked = function () {
            var questionItem = applicationData.questions.items[currentQuestion];

            $questionAnswer = $("input[name='app-question-content-choice-radio-button']:checked");
            $correctAnswer = $("input[value='" + questionItem.answer + "']");

            answers[currentQuestion] = $questionAnswer.val();

            if ($questionAnswer.val() != $correctAnswer.val()) {
                $questionAnswer.parent("div").addClass("app-question-content-wrong-choice");
                $correctAnswer.parent("div").addClass("app-question-content-correct-choice");

                self.playWrongSound();
            } else {
                $correctAnswer.parent("div").addClass("app-question-content-correct-choice");
                self.playCorrectSound();
            }

            self.disableChoices();

            $("#app-footer-check-button").css("pointer-events", "none");

            var allOk = true;
            for (var i = 0; i < applicationData.questions.items.length; i++) {
                if (answers[i] == undefined) {
                    allOk = false;
                }
            }

            if (allOk) {
                framework.widgetController.Complete();

                self.stopTimer();
            }
        }

        this.onNextButtonClicked = function () {
            self.startTimer();
            if (currentQuestion + 1 >= applicationData.questions.items.length) {
                currentQuestion = 0;
            } else {
                currentQuestion++;
            }

            self.showQuestionContent();
            self.playSelectionSound();
        }

        this.onPreviousButtonClicked = function () {
            self.startTimer();
            if (currentQuestion == 0) {
                currentQuestion = applicationData.questions.items.length - 1;
            } else {
                currentQuestion--;
            }

            self.showQuestionContent();
            self.playSelectionSound();
        }

        this.onChoiceClicked = function (e) {
            self.startTimer();
            $choice = $(e.currentTarget);

            $choice.children("input[type=radio]").attr("checked", true);
            $("#app-footer-check-button").css("pointer-events", "all");
        }

        // sound content functions

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

            self.soundPlayerSlider.value = 0;
        }

        // video content functions

        this.onVideoLoaded = function (sender) {
            self.videoDuration = Math.floor(sender.currentTarget.video.duration);

            self.updateTime();
        }

        this.onVideoTimeUpdate = function (sender, position) {
            self.videoPosition = position;
            self.updateTime();
        }

        this.onVideoEnded = function () {
            self.stopVideo();
        }

        this.onVideoClicked = function () {
            self.toggleVideo();
        }

        this.onButtonPlayClicked = function () {
            self.playVideo();
        }

        this.onButtonPauseClicked = function () {
            self.stopVideo();
        }

        this.playVideo = function (time) {
            self.$buttonPlay.css("display", "none");
            self.$buttonPause.css("display", "block");

            if (time == undefined)
                self.video.play();
            else
                self.video.gotoAndPlay(time);
        }

        this.seekVideo = function (time) {
            self.video.gotoAndStop(time);
        }

        this.toggleVideo = function () {
            var video = self.video.video;
            if (video.paused)
                self.playVideo();
            else
                self.stopVideo();
        }

        this.stopVideo = function () {
            self.$buttonPlay.css("display", "block");
            self.$buttonPause.css("display", "none");

            self.video.stop();
        }

        this.formatTimeElement = function (value) {
            var valueStr = value.toString();
            if (valueStr.length < 2)
                valueStr = "0" + valueStr;
            return valueStr;
        }

        this.updateTime = function () {
            var videoPositionMinutes = Math.floor(self.videoPosition / 60);
            var videoPositionSeconds = Math.floor(self.videoPosition % 60);
            var timeStrPosition = videoPositionMinutes + ":" + self.formatTimeElement(videoPositionSeconds);

            var videoDurationMinutes = Math.floor(self.videoDuration / 60);
            var videoDurationSeconds = Math.floor(self.videoDuration % 60);
            var timeStrDuration = videoDurationMinutes + ":" + self.formatTimeElement(videoDurationSeconds);

            var timeStr = timeStrPosition + " / " + timeStrDuration;
            $time.html(timeStr);

            if (!self.sliderDragging) {
                var sliderHandlePos = (self.videoPosition * self.$slider.css("width").replace("px", "")) / self.videoDuration;
                self.$sliderProgress.css("width", sliderHandlePos + "px");
            }
        }

        // video content slider functions

        this.onSliderMouseDown = function (e) {
            self.sliderDragging = true;
            self.sliderPlaying = self.video.isPlaying;

            var zoom = self.sbtBodyContainer.css("zoom");

            var handlePos = e.clientX / zoom - self.$slider.offset().left;
            self.$sliderProgress.css("width", handlePos + "px");

            //console.info("playing > " + self.video.isPlaying);

            $(document).on("mousemove", self.onSliderMouseMove);
            $(document).on("mouseup", self.onSliderMouseUp);

            self.stopVideo();
        }

        this.onSliderMouseOver = function () {
            self.sliderOver = true;
            self.$slider.css("height", "10px");
        }

        this.onSliderMouseOut = function () {
            self.sliderOver = false;

            if (!self.sliderDragging)
                self.$slider.css("height", "5px");
        }

        this.onSliderMouseMove = function (e) {
            if (self.sliderDragging) {
                console.info("move");

                var zoom = self.sbtBodyContainer.css("zoom");

                var handlePos = e.clientX / zoom - self.$slider.offset().left;
                var newVideoPosition = (handlePos * self.videoDuration) / self.$slider.css("width").replace("px", "");
                self.video.gotoAndStop(newVideoPosition);
                self.videoPosition = newVideoPosition;

                self.$sliderProgress.css("width", handlePos + "px");
            }
        }

        this.onSliderMouseUp = function (e) {
            $(document).off("mousemove", self.onSliderMouseMove);
            $(document).off("mouseup", self.onSliderMouseUp);

            var zoom = self.sbtBodyContainer.css("zoom");

            var handlePos = e.clientX / zoom - self.$slider.offset().left;
            var newVideoPosition = (handlePos * self.videoDuration) / self.$slider.css("width").replace("px", "");
            self.video.gotoAndStop(newVideoPosition);
            self.videoPosition = newVideoPosition;

            if (!self.sliderOver) {
                self.$slider.css("height", "5px");
                self.sliderOver = false;
            }

            self.sliderDragging = false;

            if (self.sliderPlaying) {
                self.playVideo();
                console.info("play!");
            }

            self.sliderPlaying = undefined;
        }

        this.onButtonFullscreenClicked = function () {
            var elem = self.video.video;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            elem.removeAttribute("controls");
        }

        // interaction timer functions

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

        // interaction sound functions

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

        // user interaction functions
        this.enableUserInteraction = function () {
            $("#interaction-disabler").css("display", "none");
        }

        this.disableUserIntraction = function () {
            $("#interaction-disabler").css("display", "block");
        }

        // interaction header button functions

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
            self.stopTimer();
            self.refreshTimer();

            currentQuestion = 0;
            answers = [];

            self.showQuestionContent();
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
        application = new MultipleChoice();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();