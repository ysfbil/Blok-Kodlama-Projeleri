(function () {
    var application;

    function CoursePresentation() {
        var self = this;

        this.language = "english";

        self.previousSlideIndex = 0;
        self.currentSlideIndex = 0;

        this.initialize = function () {
            // language
            if (applicationData.language != null) {
                self.language = applicationData.language;
            }

            // document title
            document.title = applicationData.title;

            // buttons
            self.$buttonNext = $('#navigation-panel').find(".button-next");
            self.$buttonNext.on("click", self.onButtonNextClicked);

            self.$buttonPrevious = $('#navigation-panel').find(".button-previous");
            self.$buttonPrevious.on("click", self.onButtonPreviousClicked);

            self.$buttonTogglePreviewPanel = $("#navigation-panel").find(".button-toggle-preview-panel");
            self.$buttonTogglePreviewPanel.on("click", self.onButtonTogglePreviewPanelClicked);

            // preview panel
            self.hasInteraction = false;
            self.$previewPanel = $("#preview-panel");

            for (var i = 0; i < applicationData.content.slides.length; i++) {
                self.$previewPanel.append('\
                <div class="slide-preview">                 \
                    <img class="image" />                   \
                    <div class="icon"></div>                \
                   <div class="number"></div>               \
                </div>');

                var $slidePreview = self.$previewPanel.find(".slide-preview").eq(i);
                $slidePreview.on("click", self.onSlidePreviewClicked);
                $slidePreview.prop("slide-index", i);

                if (applicationData.content.slides[i].backgroundImage != undefined && applicationData.content.slides[i].backgroundImage != "") {
                    $slidePreview.find(".image").attr("src", framework.localPath + "img/" + applicationData.content.slides[i].backgroundImage);
                } else {
                    $slidePreview.find(".image").addClass("d-none");
                }

                // set slide preview icons
                if (applicationData.content.slides[i].interaction != undefined) {
                    var interaction = applicationData.content.slides[i].interaction;

                    if (interaction.type == ComponentType.TEXT) {
                        $slidePreview.find(".icon").addClass("icon-text");
                    } else if (interaction.type == ComponentType.IMAGE) {
                        $slidePreview.find(".icon").addClass("icon-text");
                    } else if (interaction.type == ComponentType.VIDEO) {
                        $slidePreview.find(".icon").addClass("icon-text");
                    } else if (interaction.type == ComponentType.QUESTION_MULTIPLE_CHOICE) {
                        $slidePreview.find(".icon").addClass("icon-question-mark");
                    } else if (interaction.type == ComponentType.QUESTION_MARK_THE_WORDS) {
                        $slidePreview.find(".icon").addClass("icon-question-mark");
                    } else if (interaction.type == ComponentType.QUESTION_TRUE_FALSE) {
                        $slidePreview.find(".icon").addClass("icon-question-mark");
                    }
                    self.hasInteraction = true;
                }

                $slidePreview.find(".number").html(i + 1);
            }

            if (self.hasInteraction) {
                // results slide
                self.$previewPanel.append('\
                    <div class="slide-preview slide-preview-results">   \
                        <div class="image"></div>                       \
                        <div class="number"></div>                      \
                    </div>');

                var $slideResults = self.$previewPanel.find(".slide-preview").last();
                $slideResults.on("click", self.onSlidePreviewClicked);
                $slideResults.prop("slide-index", applicationData.content.slides.length);
                $slideResults.find(".number").html(applicationData.content.slides.length + 1);
            }

            $(ComponentResults).on("itemClicked", self.onResultsItemClicked);
            $(ComponentResults).on("completed", self.onResultsCompleted);

            self.showSlide(0);
        }

        this.showSlide = function (index) {
            self.previousSlideIndex = self.currentSlideIndex;
            self.currentSlideIndex = index;

            // hide previous slide component
            if (self.previousSlideIndex == applicationData.content.slides.length) {
                ComponentResults.hide();
            } else {
                if (applicationData.content.slides[self.previousSlideIndex].interaction != undefined) {
                    var previousInteraction = applicationData.content.slides[self.previousSlideIndex].interaction;

                    if (previousInteraction.type == ComponentType.TEXT) {
                        ComponentText.hide();
                    } else if (previousInteraction.type == ComponentType.IMAGE) {
                        ComponentImage.hide();
                    } else if (previousInteraction.type == ComponentType.VIDEO) {
                        ComponentVideo.hide();
                    } else if (previousInteraction.type == ComponentType.QUESTION_MULTIPLE_CHOICE) {
                        ComponentQuestionMultipleChoice.hide();
                    } else if (previousInteraction.type == ComponentType.QUESTION_MARK_THE_WORDS) {
                        ComponentQuestionMarkTheWords.hide();
                    } else if (previousInteraction.type == ComponentType.QUESTION_TRUE_FALSE) {
                        ComponentQuestionTrueFalse.hide();
                    }
                    else if (previousInteraction.type == ComponentType.VIDEO) {
                        ComponentVideo.hide();
                    }
                }
            }

            if (index < applicationData.content.slides.length) {
                // background-image
                if (applicationData.content.slides[index].backgroundImage == undefined && applicationData.content.slides[index].backgroundImage != "") {
                    $(".component-container").css("background-image", "url('" + framework.localPath + "img/theme/background.png");
                } else {
                    $(".component-container").css("background-image", "url('" + framework.localPath + "img/" + applicationData.content.slides[index].backgroundImage + "')");
                }

                self.$previewPanel.find('.slide-active').removeClass('slide-active');
                self.$previewPanel.find(".slide-preview").eq(index).addClass('slide-active');

                // pager
                self.$pager = $("#navigation-panel").find(".pager-text");
                self.$pager.html((index + 1) + "/" + (applicationData.content.slides.length));

                // show current slide component
                if (self.hasInteraction) {
                    if (applicationData.content.slides[index].interaction != undefined) {
                        var currentInteraction = applicationData.content.slides[index].interaction;
                        if (currentInteraction.type == ComponentType.TEXT) {
                            ComponentText.show(currentInteraction.data, {
                                isModal: false,
                                interactionButtonEnabled: true
                            });
                        } else if (currentInteraction.type == ComponentType.IMAGE) {
                            ComponentImage.show(currentInteraction.data, {
                                isModal: false,
                                interactionButtonEnabled: true
                            });
                        } else if (currentInteraction.type == ComponentType.VIDEO) {
                            ComponentVideo.show(currentInteraction.data, {
                                isModal: false,
                                interactionButtonEnabled: true
                            });
                        } else if (currentInteraction.type == ComponentType.QUESTION_MULTIPLE_CHOICE) {                            
                            ComponentQuestionMultipleChoice.show(currentInteraction.data, {
                                isModal: false,
                                interactionButtonEnabled: true
                            });
                        } else if (currentInteraction.type == ComponentType.QUESTION_MARK_THE_WORDS) {
                            ComponentQuestionMarkTheWords.show(currentInteraction.data, {
                                isModal: false,
                                interactionButtonEnabled: true
                            });
                        } else if (currentInteraction.type == ComponentType.QUESTION_TRUE_FALSE) {
                            ComponentQuestionTrueFalse.show(currentInteraction.data, {
                                isModal: false,
                                interactionButtonEnabled: true
                            });
                        }
                    }
                }
            } else {
                if (self.hasInteraction) {
                    $(".component-container").css("background-image", "url('" + framework.localPath + "img/theme/background.png')");

                    self.$previewPanel.find('.slide-active').removeClass('slide-active');
                    self.$previewPanel.find(".slide-preview").last().addClass('slide-active slide-results');

                    self.$pager.html(localizationData[self.language].results);

                    ComponentResults.show(applicationData.content.slides, {
                        isModal: false,
                        isCloseable: false
                    });
                }
            }

            // pager buttons
            if (self.hasInteraction) {
                if (index == applicationData.content.slides.length) {
                    self.$buttonNext.removeClass("d-block").addClass("d-none");
                } else if (index == applicationData.content.slides.length - 1) {
                    self.$buttonNext.removeClass("button-next d-none").addClass("button-results d-block");
                } else {
                    self.$buttonNext.removeClass("button-results d-none").addClass("button-next d-block");
                }
            }
            else {
                if (index == applicationData.content.slides.length - 1) {
                    self.$buttonNext.prop("disabled", true);
                } else {
                    self.$buttonNext.prop("disabled", false);
                }
            }

            if (index == 0) {
                self.$buttonPrevious.prop("disabled", true);
            } else {
                self.$buttonPrevious.prop("disabled", false);
            }
        }

        this.onResultsItemClicked = function (e, item) {
            for (var i = 0; i < applicationData.content.slides.length; i++) {
                if (applicationData.content.slides[i].interaction != undefined) {
                    var slide = applicationData.content.slides[i];
                    if (slide.interaction.data == item) {
                        self.showSlide(i);
                        break;
                    }
                }
            }
        }

        this.onResultsCompleted = function () {
            framework.widgetController.Complete();
        }

        this.onSlidePreviewClicked = function (e) {
            var slideIndex = $(e.currentTarget).prop("slide-index");
            self.showSlide(slideIndex);
        }

        this.onButtonTogglePreviewPanelClicked = function () {
            // toggle button preview
            if (self.$buttonTogglePreviewPanel.find(".button-up").length) {
                self.$buttonTogglePreviewPanel.find(".button-up").removeClass("button-up").addClass("button-down");
            } else {
                self.$buttonTogglePreviewPanel.find(".button-down").removeClass("button-down").addClass("button-up");
            }

            // toggle preview panel
            if (self.$previewPanel.hasClass("d-none")) {
                self.$previewPanel.removeClass("d-none").addClass("d-flex");
            } else {
                self.$previewPanel.removeClass("d-flex").addClass("d-none");
            }
        }

        this.onButtonNextClicked = function () {
            if (self.currentSlideIndex < applicationData.content.slides.length) {
                self.showSlide(self.currentSlideIndex + 1);
            }
        }

        this.onButtonPreviousClicked = function () {
            if (self.currentSlideIndex > 0) {
                self.showSlide(self.currentSlideIndex - 1);
            }
        }

        // localization data

        var localizationData = {
            "english": {
                "results": "Results"
            },
            "turkish": {
                "results": "Sonuçlar"
            }
        };
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
        initializeLanguage();

        ComponentResults = new ComponentResults();
        ComponentResults.language = applicationData.language;
        ComponentResults.initialize(".component-container");

        ComponentText = new ComponentText();
        ComponentText.initialize(".component-container");

        ComponentImage = new ComponentImage();
        ComponentImage.initialize(".component-container");
        
        ComponentVideo = new ComponentVideo();
        ComponentVideo.initialize(".component-container");

        ComponentQuestionMultipleChoice = new ComponentQuestionMultipleChoice();
        ComponentQuestionMultipleChoice.language = applicationData.language;
        ComponentQuestionMultipleChoice.initialize(".component-container");

        ComponentQuestionMarkTheWords = new ComponentQuestionMarkTheWords();
        ComponentQuestionMarkTheWords.language = applicationData.language;
        ComponentQuestionMarkTheWords.initialize(".component-container");

        ComponentQuestionTrueFalse = new ComponentQuestionTrueFalse();
        ComponentQuestionTrueFalse.language = applicationData.language;
        ComponentQuestionTrueFalse.initialize(".component-container");

        application = new CoursePresentation();
        application.initialize();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();