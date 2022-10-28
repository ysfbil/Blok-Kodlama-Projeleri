(function() {
    var application;

    function IntractiveImage() {
        var self = this;
        var timerTime = 0;
        var timerIntervalId;
        var soundsEnabled = true;
        var language = "english";

        self.previousSlideIndex = 0;
        self.currentSlideIndex = 0;

        this.initialize = function() {
            // language
            if (applicationData.language != null) {
                language = applicationData.language;
            }

            // document title
            document.title = applicationData.title;

            self.$appContainerContent = $(".app-container-content");

            if (applicationData.content.image != undefined) {
                self.$appContainerContent.css("background-image", "url('" + framework.localPath + "img/" + applicationData.content.image + "')");
                self.$appContainerContent.css("background-size", "contain");
            }

            for (var i = 0; i < applicationData.content.hotspots.length; i++) {
                var hotspot = applicationData.content.hotspots[i];

                var $hotspotElement = undefined;
                if (hotspot.type == "text") {
                    self.$appContainerContent.append("<div class='button-hotspot button-hotspot-text'></div>");
                    $hotspotElement = self.$appContainerContent.children().last();
                } else if (hotspot.type == "image") {
                    self.$appContainerContent.append("<div class='button-hotspot button-hotspot-image'></div>");
                    $hotspotElement = self.$appContainerContent.children().last();
                } else if (hotspot.type == "video") {
                    self.$appContainerContent.append("<div class='button-hotspot button-hotspot-video'></div>");
                    $hotspotElement = self.$appContainerContent.children().last();
                }
                $hotspotElement.on("click", self.onHotspotClicked);
                $hotspotElement.css("left", hotspot.position.x + "px");
                $hotspotElement.css("top", hotspot.position.y + "px");
                $hotspotElement.data("data", hotspot);
            }
        }

        this.onHotspotClicked = function(e) {
            var $hotspotElement = $(e.currentTarget);
            var hotspot = $hotspotElement.data("data");

            if (hotspot.type == "text") {
                ComponentText.show(hotspot.data, {
                    "showIndicator": true,
                    "indicatorPosition": hotspot.position,
                    "closeOnOutsideClick": true
                });
            } else if (hotspot.type == "image") {
                ComponentImage.show(hotspot.data, {
                    "showIndicator": true,
                    "indicatorPosition": hotspot.position,
                    "closeOnOutsideClick": true
                });
            } else if (hotspot.type == "video") {
                ComponentVideo.show(hotspot.data, {
                    "showIndicator": true,
                    "indicatorPosition": hotspot.position,
                    "closeOnOutsideClick": true
                });
            }
        }

        // interaction sound functions
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

        // user interaction functions
        this.enableUserInteraction = function() {
            $("#interaction-disabler").css("display", "none");
        }

        this.disableUserIntraction = function() {
            $("#interaction-disabler").css("display", "block");
        }

        // interaction header button functions

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

    $(framework).on(Framework.ONREADY, function() {
        application = new IntractiveImage();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();