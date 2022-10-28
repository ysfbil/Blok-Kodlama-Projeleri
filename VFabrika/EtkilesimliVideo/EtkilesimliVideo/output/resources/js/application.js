(function() {
    var application;

    function InteractiveVideo() {
        INTERACTION_TIME_EPSILON = 0.25;

        var self = this;
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
        var $videoInteractions;

        var interactionTime;

        var $question;
        var currentInteraction;
        var currentInteractionIndex;
        var currentInteractionAnswer;
        var $questionImage;
        var $questionText;
        var $questionChoiceA;
        var $questionChoiceB;
        var $questionChoiceC;
        var $questionChoiceD;
        var $questionChoiceE;
        var $buttonQuestionClose;
        var $buttonQuestionConfirm;
        var $questionResult;
        var $questionResultAppendix;

        var $text;
        var $textTitle;
        var $textContent;
        var $buttonTextClose;

        var $videoBookmarks;

        var $answersContainer;
        var $answers;
        var $answersText;
        var $answerItems;

        this.initialize = function() {
            document.title = applicationData.title;

            self.sbtBodyContainer = $("#sbt_bodyContainer");
 
            var $stage = $("#vfabrika-stage");
            $stage.css("width", applicationData.stage.size.width + "px");
            $stage.css("height", applicationData.stage.size.height + "px");

            // slider
            self.$slider = $("#video-slider");
            self.$sliderProgress = $("#video-slider-progress");

            self.$slider.on("mousedown", self.onSliderMouseDown);
            self.$slider.on("mouseover", self.onSliderMouseOver);
            self.$slider.on("mouseout", self.onSliderMouseOut);

            // interactions & bookmarks
            self.$videoInteractions = $("#video-interactions");
            self.$videoBookmarks = $("#video-bookmarks");
            self.$videoBookmarkTooltip = $("#video-bookmark-tooltip");

            // question
            self.$question = $("#video-question-container");
            //self.$question.on("click", self.onQuestionClicked);
            self.$question.css("display", "none");
            self.$questionImage = $("#video-question-image");
            self.$questionText = $("#video-question-text");
            self.$questionChoiceA = $("#video-question-choice-a");
            self.$questionChoiceA.on("click", self.onQuestionChoiceAClicked);
            self.$questionChoiceB = $("#video-question-choice-b");
            self.$questionChoiceB.on("click", self.onQuestionChoiceBClicked);
            self.$questionChoiceC = $("#video-question-choice-c");
            self.$questionChoiceC.on("click", self.onQuestionChoiceCClicked);
            self.$questionChoiceD = $("#video-question-choice-d");
            self.$questionChoiceD.on("click", self.onQuestionChoiceDClicked);
            self.$questionChoiceE = $("#video-question-choice-e");
            self.$questionChoiceE.on("click", self.onQuestionChoiceEClicked);
            self.$buttonQuestionConfirm = $("#video-question-button-confirm");
            self.$buttonQuestionConfirm.on("click", self.onButtonQuestionConfirmClicked);
            self.$buttonQuestionClose = $("#video-question-button-close");
            self.$buttonQuestionClose.on("click", self.onButtonQuestionCloseClicked);
            self.$questionResult = $("#video-question-result");
            self.$questionResultAppendix = $("#video-question-result-appendix");

            // text
            self.$text = $("#video-text-container");
            self.$text.css("display", "none");
            self.$textTitle = $("#video-text-title");
            self.$textContent = $("#video-text-content");
            self.$buttonTextClose = $("#video-text-button-close");
            self.$buttonTextClose.on("click", self.onButtonTextCloseClicked);

            // video
            self.video = new Sbt.Video("video-container", applicationData.content.video.replace(".mp4", ""), applicationData.stage.size.width, applicationData.stage.size.height);
            self.video.hasLogo = false;
            self.video.poster = "resources/img/theme/poster.png";
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

            // answers
            self.$answersContainer = $("#video-answers-container");
            self.$answersContainer.css("display", "none");
            self.$answers = $("#video-answers");
            self.$answersText = $("#video-answers-header-text");

            if (applicationData.language == "english")
                self.$answersText.html("Final Results");
            else if (applicationData.language == "turkish")
                self.$answersText.html("Sonuçlar");

            self.$answerItems = $("#video-answer-items");

            var $buttonAnswersClose = $("#video-answers-button-close");
            $buttonAnswersClose.on("click", self.onButtonAnswersCloseClicked);

            // time
            $time = $("#video-controls-time");
            self.updateTime();

            $(window).keypress(function(e) {
                if (e.which == 32) {
                    self.toggleVideo();
                }
            });

            $(window).resize(function() {
                self.updateBookmarks();
                self.updateInteractions();
            });
        }

        this.onQuestionClicked = function() {
            self.hideQuestion();
        }

        this.onVideoLoaded = function(sender) {
            self.videoDuration = Math.floor(sender.currentTarget.video.duration);

            self.updateTime();
            self.updateInteractions();
            self.updateBookmarks();

            //self.showAnswers();
        }

        this.onVideoTimeUpdate = function(sender, position) {
            self.videoPosition = position;
            self.updateTime();

            if (applicationData.content.interactions.length > 0) {
                for (var i = 0; i < applicationData.content.interactions.length; i++) {
                    var interaction = applicationData.content.interactions[i];
                    var interactionTokens = interaction.time.split(":");
                    var interactionTimeMinutes = parseInt(interactionTokens[0]);
                    var interactionTimeSeconds = parseInt(interactionTokens[1]);
                    var interactionTime = (interactionTimeMinutes * 60) + interactionTimeSeconds;

                    if (interactionTime >= position &&
                        interactionTime <= position + INTERACTION_TIME_EPSILON) {
                        if (!self.sliderHandleDragging) {
                            self.stopVideo();

                            self.interactionTime = interactionTime;

                            if (interaction.type == "question") {
                                self.showQuestion(i);
                            } else if (interaction.type == "text") {
                                self.showText(i);
                            }
                        }
                    }
                }
            }
        }

        this.onVideoEnded = function() {
            self.stopVideo();

            if (applicationData.content.interactions.length > 0) {
                self.showResults();
            }
        }

        this.onVideoClicked = function() {
            self.toggleVideo();
        }

        this.onButtonPlayClicked = function() {
            self.playVideo();
        }

        this.onButtonPauseClicked = function() {
            self.stopVideo();
        }

        this.playVideo = function(time) {
            self.$buttonPlay.css("display", "none");
            self.$buttonPause.css("display", "block");

            if (time == undefined)
                self.video.play();
            else
                self.video.gotoAndPlay(time);
        }

        this.seekVideo = function(time) {
            self.video.gotoAndStop(time);
        }

        this.toggleVideo = function() {
            var video = self.video.video;
            if (video.paused)
                self.playVideo();
            else
                self.stopVideo();
        }

        this.stopVideo = function() {
            self.$buttonPlay.css("display", "block");
            self.$buttonPause.css("display", "none");

            self.video.stop();
        }

        this.formatTimeElement = function(value) {
            var valueStr = value.toString();
            if (valueStr.length < 2)
                valueStr = "0" + valueStr;
            return valueStr;
        }

        this.updateBookmarks = function() {
            if (applicationData.content.bookmarks != null) {
                self.$videoBookmarks.html("");

                $(".video-bookmark").off("mouseover").off("mouseout").off("click");

                for (var i = 0; i < applicationData.content.bookmarks.length; i++) {
                    var bookmark = applicationData.content.bookmarks[i];

                    // calculate absolute time
                    var bookmarkTimeTokens = bookmark.time.split(":");
                    var bookmarkTimeMinutes = parseInt(bookmarkTimeTokens[0]);
                    var bookmarkTimeSeconds = parseInt(bookmarkTimeTokens[1]);
                    var bookmarkAbsoluteTime = (bookmarkTimeMinutes * 60) + bookmarkTimeSeconds;
                    var bookmarkPos = Math.floor((bookmarkAbsoluteTime * self.$slider.css("width").replace("px", "")) / self.videoDuration);

                    // create video bookmark item
                    var videoBookmarkId = "video-bookmark-" + i;
                    self.$videoBookmarks.append("<div id='" + videoBookmarkId + "' class='video-bookmark'></div>");
                    var $videoBookmark = $("#" + videoBookmarkId);
                    $videoBookmark.data("text", bookmark.text);
                    $videoBookmark.data("absoluteTime", bookmarkAbsoluteTime);
                    $videoBookmark.css("left", (bookmarkPos - 5) + "px");
                    $videoBookmark.on("mouseover", self.onBookmarkMouseOver);
                    $videoBookmark.on("mouseout", self.onBookmarkMouseOut);
                    $videoBookmark.on("click", self.onBookmarkClicked);
                }
            }
        }

        this.onBookmarkMouseOver = function(e) {
            var $videoBookmark = $(e.currentTarget);
            var text = $videoBookmark.data("text");
            self.$videoBookmarkTooltip.html(text);
            self.$videoBookmarkTooltip.css("display", "flex");
            var x = $videoBookmark.position().left;
            self.$videoBookmarkTooltip.css("left", (x + 10) + "px");
            self.$videoBookmarkTooltip.css("bottom", "42px");
        }

        this.onBookmarkMouseOut = function() {
            self.$videoBookmarkTooltip.css("display", "none");
        }

        this.onBookmarkClicked = function(e) {
            var $item = $(e.currentTarget);
            var bookmarkAbsoluteTime = $item.data("absoluteTime");
            self.playVideo(bookmarkAbsoluteTime);
        }

        this.updateTime = function() {
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

        this.updateInteractions = function() {
            if (applicationData.content.interactions.length > 0) {
                self.$videoInteractions.html("");

                for (var i = 0; i < applicationData.content.interactions.length; i++) {
                    var interaction = applicationData.content.interactions[i];
                    var interactionTokens = interaction.time.split(":");
                    var interactionTimeMinutes = parseInt(interactionTokens[0]);
                    var interactionTimeSeconds = parseInt(interactionTokens[1]);
                    var interactionAbsoluteTime = (interactionTimeMinutes * 60) + interactionTimeSeconds;
                    var interactionPos = Math.floor((interactionAbsoluteTime * self.$slider.css("width").replace("px", "")) / self.videoDuration);

                    var videoInteractionId = "video-interaction-" + i;

                    if (interaction.type == "question") {
                        self.$videoInteractions.append("<div id='" + videoInteractionId + "' class='video-interaction-question' />");
                    } else if (interaction.type == "text") {
                        self.$videoInteractions.append("<div id='" + videoInteractionId + "' class='video-interaction-text' />");
                    }
                    var $videoInteraction = $("#" + videoInteractionId);
                    $videoInteraction.data("absoluteTime", interactionAbsoluteTime);
                    $videoInteraction.css("left", (interactionPos - 12) + "px");
                    $videoInteraction.on("click", self.onInteractionClicked);
                }
            }
        }

        this.onInteractionClicked = function(e) {
            var $item = $(e.currentTarget);
            var time = $item.data("absoluteTime");
            self.seekVideo(time);
        }

        this.showQuestion = function(index) {
            var question = applicationData.content.interactions[index];

            self.currentInteraction = question;
            self.currentInteractionIndex = index;

            if (question.image != undefined && question.image != "") {
                self.$questionImage.css("background-image", "url('" + framework.localPath + "img/" + question.image + "')");
                self.$questionImage.css("display", "block");
            } else {
                self.$questionImage.css("display", "none");
            }

            self.$questionText.html(question.text);
            self.$questionChoiceA.html(question.choices[0]);
            self.$questionChoiceB.html(question.choices[1]);
            self.$questionChoiceC.html(question.choices[2]);
            self.$questionChoiceD.html(question.choices[3]);
            self.$questionChoiceE.html(question.choices[4]);

            if (question.choices[0] != undefined && question.choices[0] != "")
                self.$questionChoiceA.css("display", "flex");
            else
                self.$questionChoiceA.css("display", "none");

            if (question.choices[1] != undefined && question.choices[1] != "")
                self.$questionChoiceB.css("display", "flex");
            else
                self.$questionChoiceB.css("display", "none");

            if (question.choices[2] != undefined && question.choices[2] != "")
                self.$questionChoiceC.css("display", "flex");
            else
                self.$questionChoiceC.css("display", "none");

            if (question.choices[3] != undefined && question.choices[3] != "")
                self.$questionChoiceD.css("display", "flex");
            else
                self.$questionChoiceD.css("display", "none");

            if (question.choices[4] != undefined && question.choices[4] != "")
                self.$questionChoiceE.css("display", "flex");
            else
                self.$questionChoiceE.css("display", "none");

            if (question.location == "top_left") {
                self.$question.css("justify-content", "flex-start").css("align-items", "flex-start");
            } else if (question.location == "top_center") {
                self.$question.css("justify-content", "center").css("align-items", "flex-start");
            } else if (question.location == "top_right") {
                self.$question.css("justify-content", "flex-end").css("align-items", "flex-start");
            } else if (question.location == "middle_left") {
                self.$question.css("justify-content", "flex-start").css("align-items", "center");
            } else if (question.location == "middle_center") {
                self.$question.css("justify-content", "center").css("align-items", "center");
            } else if (question.location == "middle_right") {
                self.$question.css("justify-content", "flex-end").css("align-items", "center");
            } else if (question.location == "bottom_left") {
                self.$question.css("justify-content", "flex-start").css("align-items", "flex-end");
            } else if (question.location == "bottom_center") {
                self.$question.css("justify-content", "center").css("align-items", "flex-end");
            } else if (question.location == "bottom_right") {
                self.$question.css("justify-content", "flex-end").css("align-items", "flex-end");
            }

            self.$questionChoiceA.removeClass("video-question-correct-answer").removeClass("video-question-wrong-answer").removeClass("video-question-correct-choice").removeClass("video-question-choice-disabled").removeClass("video-question-choice-selected");
            self.$questionChoiceB.removeClass("video-question-correct-answer").removeClass("video-question-wrong-answer").removeClass("video-question-correct-choice").removeClass("video-question-choice-disabled").removeClass("video-question-choice-selected");
            self.$questionChoiceC.removeClass("video-question-correct-answer").removeClass("video-question-wrong-answer").removeClass("video-question-correct-choice").removeClass("video-question-choice-disabled").removeClass("video-question-choice-selected");
            self.$questionChoiceD.removeClass("video-question-correct-answer").removeClass("video-question-wrong-answer").removeClass("video-question-correct-choice").removeClass("video-question-choice-disabled").removeClass("video-question-choice-selected");
            self.$questionChoiceE.removeClass("video-question-correct-answer").removeClass("video-question-wrong-answer").removeClass("video-question-correct-choice").removeClass("video-question-choice-disabled").removeClass("video-question-choice-selected");

            self.$questionResult.css("display", "none");
            self.$questionResult.removeClass("video-question-result-correct");
            self.$questionResult.removeClass("video-question-result-wrong");
            self.$questionResultAppendix.css("display", "none");

            // check if questions already answered
            if (self.currentInteraction.answer != undefined) {
                self.disableQuestionChoices();
                self.$buttonQuestionConfirm.css("display", "none");
                self.showQuestionAnswer();
            } else {
                self.enableQuestionChoices();
                self.$buttonQuestionConfirm.css("display", "block");
                self.$buttonQuestionConfirm.addClass("video-question-button-confirm-disabled");
            }

            self.$question.css("display", "flex");
        }

        this.hideQuestion = function() {
            self.$question.css("display", "none");
        }

        this.onButtonQuestionConfirmClicked = function() {
            self.currentInteraction.answer = self.currentInteractionAnswer;
            self.disableQuestionChoices();
            self.showQuestionAnswer();
            self.$buttonQuestionConfirm.css("display", "none");

            var videoInteractionId = "video-interaction-" + self.currentInteractionIndex;
            $("#" + videoInteractionId).addClass("video-interaction-question-seen");
        }

        this.onButtonQuestionCloseClicked = function() {
            self.hideQuestion();
            self.playVideo(self.interactionTime + INTERACTION_TIME_EPSILON);
        }

        this.onQuestionChoiceAClicked = function() {
            self.currentInteractionAnswer = "a";
            self.$questionChoiceA.addClass("video-question-choice-selected");
            self.$questionChoiceB.removeClass("video-question-choice-selected");
            self.$questionChoiceC.removeClass("video-question-choice-selected");
            self.$questionChoiceD.removeClass("video-question-choice-selected");
            self.$questionChoiceE.removeClass("video-question-choice-selected");
            self.$buttonQuestionConfirm.removeClass("video-question-button-confirm-disabled");
        }

        this.onQuestionChoiceBClicked = function() {
            self.currentInteractionAnswer = "b";
            self.$questionChoiceB.addClass("video-question-choice-selected");
            self.$questionChoiceA.removeClass("video-question-choice-selected");
            self.$questionChoiceC.removeClass("video-question-choice-selected");
            self.$questionChoiceD.removeClass("video-question-choice-selected");
            self.$questionChoiceE.removeClass("video-question-choice-selected");
            self.$buttonQuestionConfirm.removeClass("video-question-button-confirm-disabled");
        }

        this.onQuestionChoiceCClicked = function() {
            self.currentInteractionAnswer = "c";
            self.$questionChoiceC.addClass("video-question-choice-selected");
            self.$questionChoiceA.removeClass("video-question-choice-selected");
            self.$questionChoiceB.removeClass("video-question-choice-selected");
            self.$questionChoiceD.removeClass("video-question-choice-selected");
            self.$questionChoiceE.removeClass("video-question-choice-selected");
            self.$buttonQuestionConfirm.removeClass("video-question-button-confirm-disabled");
        }

        this.onQuestionChoiceDClicked = function() {
            self.currentInteractionAnswer = "d";
            self.$questionChoiceA.removeClass("video-question-choice-selected");
            self.$questionChoiceB.removeClass("video-question-choice-selected");
            self.$questionChoiceC.removeClass("video-question-choice-selected");
            self.$questionChoiceD.addClass("video-question-choice-selected");
            self.$questionChoiceE.removeClass("video-question-choice-selected");
            self.$buttonQuestionConfirm.removeClass("video-question-button-confirm-disabled");
        }

        this.onQuestionChoiceEClicked = function() {
            self.currentInteractionAnswer = "d";
            self.$questionChoiceA.removeClass("video-question-choice-selected");
            self.$questionChoiceB.removeClass("video-question-choice-selected");
            self.$questionChoiceC.removeClass("video-question-choice-selected");
            self.$questionChoiceD.removeClass("video-question-choice-selected");
            self.$questionChoiceE.addClass("video-question-choice-selected");
            self.$buttonQuestionConfirm.removeClass("video-question-button-confirm-disabled");
        }


        this.disableQuestionChoices = function() {
            self.$questionChoiceA.addClass("video-question-choice-disabled");
            self.$questionChoiceB.addClass("video-question-choice-disabled");
            self.$questionChoiceC.addClass("video-question-choice-disabled");
            self.$questionChoiceD.addClass("video-question-choice-disabled");
            self.$questionChoiceE.addClass("video-question-choice-disabled");
        }

        this.enableQuestionChoices = function() {
            self.$questionChoiceA.removeClass("video-question-choice-disabled");
            self.$questionChoiceB.removeClass("video-question-choice-disabled");
            self.$questionChoiceC.removeClass("video-question-choice-disabled");
            self.$questionChoiceD.removeClass("video-question-choice-disabled");
            self.$questionChoiceE.removeClass("video-question-choice-disabled");
        }

        this.showQuestionAnswer = function() {
            self.$questionChoiceA.removeClass("video-question-choice-selected");
            self.$questionChoiceB.removeClass("video-question-choice-selected");
            self.$questionChoiceC.removeClass("video-question-choice-selected");
            self.$questionChoiceD.removeClass("video-question-choice-selected");
            self.$questionChoiceE.removeClass("video-question-choice-selected");

            // choices
            if (self.currentInteraction.answer == "a") {
                if (self.currentInteraction.correctChoiceLetter == "a")
                    self.$questionChoiceA.addClass("video-question-correct-answer");
                else
                    self.$questionChoiceA.addClass("video-question-wrong-answer");
            } else {
                if (self.currentInteraction.correctChoiceLetter == "a")
                    self.$questionChoiceA.addClass("video-question-correct-choice");
                else
                    self.$questionChoiceA.addClass("video-question-disabled-choice");
            }

            if (self.currentInteraction.answer == "b") {
                if (self.currentInteraction.correctChoiceLetter == "b")
                    self.$questionChoiceB.addClass("video-question-correct-answer");
                else
                    self.$questionChoiceB.addClass("video-question-wrong-answer");
            } else {
                if (self.currentInteraction.correctChoiceLetter == "b")
                    self.$questionChoiceB.addClass("video-question-correct-choice");
                else
                    self.$questionChoiceB.addClass("video-question-disabled-choice");
            }

            if (self.currentInteraction.answer == "c") {
                if (self.currentInteraction.correctChoiceLetter == "c")
                    self.$questionChoiceC.addClass("video-question-correct-answer");
                else
                    self.$questionChoiceC.addClass("video-question-wrong-answer");
            } else {
                if (self.currentInteraction.correctChoiceLetter == "c")
                    self.$questionChoiceC.addClass("video-question-correct-choice");
                else
                    self.$questionChoiceC.addClass("video-question-disabled-choice");
            }

            if (self.currentInteraction.answer == "d") {
                if (self.currentInteraction.correctChoiceLetter == "d")
                    self.$questionChoiceD.addClass("video-question-correct-answer");
                else
                    self.$questionChoiceD.addClass("video-question-wrong-answer");
            } else {
                if (self.currentInteraction.correctChoiceLetter == "d")
                    self.$questionChoiceD.addClass("video-question-correct-choice");
                else
                    self.$questionChoiceD.addClass("video-question-disabled-choice");
            }

            if (self.currentInteraction.answer == "e") {
                if (self.currentInteraction.correctChoiceLetter == "e")
                    self.$questionChoiceE.addClass("video-question-correct-answer");
                else
                    self.$questionChoiceE.addClass("video-question-wrong-answer");
            } else {
                if (self.currentInteraction.correctChoiceLetter == "e")
                    self.$questionChoiceE.addClass("video-question-correct-choice");
                else
                    self.$questionChoiceE.addClass("video-question-disabled-choice");

            }

            // close button
            self.$buttonQuestionClose.css("display", "block");

            // footer
            if (self.currentInteraction.answer == self.currentInteraction.correctChoiceLetter) {
                self.$questionResult.html(applicationData.content.feedbacks.questionCorrectAnswer);
                self.$questionResult.addClass("video-question-result-correct");
            } else {
                self.$questionResult.html(applicationData.content.feedbacks.questionWrongAnswer);
                self.$questionResult.addClass("video-question-result-wrong");

                var correctAnswer = "";
                if (self.currentInteraction.correctChoiceLetter == "a")
                    correctAnswer = self.currentInteraction.choices[0];
                else if (self.currentInteraction.correctChoiceLetter == "b")
                    correctAnswer = self.currentInteraction.choices[1];
                else if (self.currentInteraction.correctChoiceLetter == "c")
                    correctAnswer = self.currentInteraction.choices[2];
                else if (self.currentInteraction.correctChoiceLetter == "d")
                    correctAnswer = self.currentInteraction.choices[3];
                else if (self.currentInteraction.correctChoiceLetter == "e")
                    correctAnswer = self.currentInteraction.choices[4];

                self.$questionResultAppendix.html(applicationData.content.feedbacks.questionCorrectAnswer + ": " + correctAnswer);
                self.$questionResultAppendix.css("display", "inline");
            }
            self.$questionResult.css("display", "block");
        }

        // slider functions

        this.onSliderMouseDown = function(e) {
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

        this.onSliderMouseOver = function() {
            self.sliderOver = true;
            self.$slider.css("height", "10px");
        }

        this.onSliderMouseOut = function() {
            self.sliderOver = false;

            if (!self.sliderDragging)
                self.$slider.css("height", "5px");
        }

        this.onSliderMouseMove = function(e) {
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

        this.onSliderMouseUp = function(e) {
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

        this.onButtonFullscreenClicked = function() {
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

        this.showResults = function() {
            // answers list
            self.$answerItems.html("");

            if (applicationData.content.interactions.length > 0) {
                for (var i = 0; i < applicationData.content.interactions.length; i++) {
                    var interaction = applicationData.content.interactions[i];

                    if (interaction.type != "question")
                        continue;

                    var answerItemId = "video-answer-item" + i;
                    var itemHtml = "<div id='" + answerItemId + "' class='video-answer-item'>";
                    itemHtml += "<div class='video-answer-item-time'>" + interaction.time + "</div>";

                    if (interaction.type == "question")
                        itemHtml += "<div class='video-answer-item-text'>" + interaction.text + "</div>";
                    else if (interaction.type == "text")
                        itemHtml += "<div class='video-answer-item-text'>" + interaction.title + "</div>";

                    if (interaction.answer != undefined) {
                        if (interaction.answer == interaction.correctChoiceLetter)
                            itemHtml += "<div class='video-answer-item-result-correct'></div>";
                        else
                            itemHtml += "<div class='video-answer-item-result-wrong'></div>";
                    }

                    var interactionTokens = interaction.time.split(":");
                    var interactionTimeMinutes = parseInt(interactionTokens[0]);
                    var interactionTimeSeconds = parseInt(interactionTokens[1]);
                    var interactionAbsoluteTime = (interactionTimeMinutes * 60) + interactionTimeSeconds;
                    var interactionPos = Math.floor((interactionAbsoluteTime * self.$slider.css("width").replace("px", "")) / self.videoDuration);

                    itemHtml += "</div>";
                    self.$answerItems.append(itemHtml);
                    var $answerItem = $("#" + answerItemId);
                    $answerItem.data("interactionIndex", i);
                    $answerItem.data("absoluteTime", interactionAbsoluteTime);
                    $answerItem.on("click", self.onAnswerItemClicked);
                }
            }

            self.$answersContainer.css("display", "flex");

            var width = (applicationData.stage.size.width - 150);
            self.$answers.css("width", width + "px");
            var left = (applicationData.stage.size.width / 2) - (width / 2);
            self.$answers.css("left", left + "px");

            /*
            // answered question count
            if (applicationData.content.interactions.length > 0) {
                var answeredQuestionCount = 0;
                for (var i = 0; i < applicationData.content.interactions.length; i++) {
                    var interaction = applicationData.content.interactions[i];
                    if (interaction.answer != undefined)
                        answeredQuestionCount++;
                }
                self.$answersText.html(answeredQuestionCount + " Questions answered")
            }
            */

            // correct answer count
            if (applicationData.content.interactions.length > 0) {
                var correctAnswerCount = 0;
                for (var i = 0; i < applicationData.content.interactions.length; i++) {
                    var interaction = applicationData.content.interactions[i];
                    if (interaction.answer == interaction.correctChoiceLetter)
                        correctAnswerCount++;
                }
            }
        }

        this.onAnswerItemClicked = function(e) {
            var $interaction = $(e.currentTarget);

            var interactionAbsoluteTime = $interaction.data("absoluteTime");
            self.seekVideo(interactionAbsoluteTime);

            self.hideAnswers();

            var interactionIndex = $interaction.data("interactionIndex");
            self.showQuestion(interactionIndex);
        }

        this.hideAnswers = function() {
            self.$answersContainer.css("display", "none");
        }

        this.onButtonAnswersCloseClicked = function() {
            self.hideAnswers();
        }

        this.showText = function(index) {
            var text = applicationData.content.interactions[index];

            self.$textTitle.html(text.title);
            self.$textContent.html(text.text);

            self.$text.css("display", "flex");

            if (text.location == "top_left") {
                self.$text.css("justify-content", "flex-start").css("align-items", "flex-start");
            } else if (text.location == "top_center") {
                self.$text.css("justify-content", "center").css("align-items", "flex-start");
            } else if (text.location == "top_right") {
                self.$text.css("justify-content", "flex-end").css("align-items", "flex-start");
            } else if (text.location == "middle_left") {
                self.$text.css("justify-content", "flex-start").css("align-items", "center");
            } else if (text.location == "middle_center") {
                self.$text.css("justify-content", "center").css("align-items", "center");
            } else if (text.location == "middle_right") {
                self.$text.css("justify-content", "flex-end").css("align-items", "center");
            } else if (text.location == "bottom_left") {
                self.$text.css("justify-content", "flex-start").css("align-items", "flex-end");
            } else if (text.location == "bottom_center") {
                self.$text.css("justify-content", "center").css("align-items", "flex-end");
            } else if (text.location == "bottom_right") {
                self.$text.css("justify-content", "flex-end").css("align-items", "flex-end");
            }

            var videoInteractionId = "video-interaction-" + index;
            $("#" + videoInteractionId).addClass("video-interaction-text-seen");
        }

        this.onButtonTextCloseClicked = function() {
            self.$text.css("display", "none");
            self.playVideo(self.interactionTime + INTERACTION_TIME_EPSILON);
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
        application = new InteractiveVideo();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();