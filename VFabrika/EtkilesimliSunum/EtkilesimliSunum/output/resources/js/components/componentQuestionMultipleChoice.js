function ComponentQuestionMultipleChoice() {
    var self = this;

    this.language = "english";

    this.initialize = function (parentSelector) {
        // create component dom
        $(parentSelector).append('\
            <div id="component-question-multiple-choice">                               \
                <div class="modal-background"></div>                                    \
                    <div class="panel">                                                 \
                        <button class="button-close"></button>                          \
                        <h1 class="title"></h1>                                         \
                        <div class="image-container">                                   \
                            <img class="image" />                                       \
                        </div>                                                          \
                        <div class="question"></div>                                    \
                        <div class="choices">                                           \
                        </div>                                                          \
                        <div class="result">                                            \
                            <div class="result-wrong-answer"></div>                     \
                            <div class="result-correct-answer"></div>                   \
                        </div>                                                          \
                        <button class="button-check"></button>                          \
                    </div>                                                              \
                    <button class="button-interaction"></button>                        \
                </div>');

        self.$componentQuestionMultipleChoice = $("#component-question-multiple-choice");

        self.$modalBackground = self.$componentQuestionMultipleChoice.find(".modal-background");

        self.$panel = self.$componentQuestionMultipleChoice.find(".panel");

        // title
        self.$title = self.$panel.find(".title");

        // buttons
        self.$buttonClose = self.$componentQuestionMultipleChoice.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonCheck = self.$componentQuestionMultipleChoice.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        self.$buttonInteraction = self.$componentQuestionMultipleChoice.find(".button-interaction");
        self.$buttonInteraction.on("click", self.onButtonInteractionClicked);
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");

        // content
        self.$question = self.$componentQuestionMultipleChoice.find(".question");
        self.$choices = self.$componentQuestionMultipleChoice.find(".choices");

        // scrollbars
        self.psQuestion = new PerfectScrollbar("#component-question-multiple-choice .question", { wheelPropagation: false });
        self.psChoices = new PerfectScrollbar("#component-question-multiple-choice .choices", { wheelPropagation: false });

        // hide image
        self.$imageContainer = self.$componentQuestionMultipleChoice.find(".image-container");
        self.$imageContainer.addClass("d-none");

        self.$image = self.$componentQuestionMultipleChoice.find(".image");

        // hide results
        self.$result = self.$componentQuestionMultipleChoice.find(".result");
        self.hideResult();

        self.hide();
    }

    this.show = function (data, options) {
        self.currentData = data;
        self.currentOptions = options;

        self.hideModalBackground();
        self.hidePanel();
        self.hideInteractionButton();

        if (data.interactionState == undefined ||
            data.interactionState == "panel") {
            self.showPanel();
        } else {
            self.showInteractionButton();
        }

        self.setAlignment();

        self.$componentQuestionMultipleChoice.removeClass("d-none").addClass("d-flex");
    }

    this.showPanel = function () {
        if (self.currentOptions != undefined) {
            if (self.currentOptions.isModal != undefined && self.currentOptions.isModal == true)
                self.showModalBackground();
            else
                self.hideModalBackground();

            if (self.currentOptions.isCloseable == undefined || self.currentOptions.isCloseable == true)
                self.$buttonClose.removeClass("d-none").addClass("d-block");
            else
                self.$buttonClose.removeClass("d-block").addClass("d-none");
        }
        
        self.$title.html(localizationData[self.language].title);

        if (self.currentData.question != undefined && self.currentData.question != "") {
            self.$question.html(self.currentData.question);
        }

        if (self.currentData.image != undefined && self.currentData.image != "") {
            self.$imageContainer.removeClass("d-none").addClass("d-block");
            self.$image.attr("src", framework.localPath + "img/" + self.currentData.image);
        }

        if (self.currentData.choices != undefined) {
            self.$choices.empty();

            for (var i = 0; i < self.currentData.choices.length; i++) {
                if (self.currentData.choices[i] != null && self.currentData.choices[i] != "") {
                    if (i == 0) {
                        self.$choices.append("<div class='choice' choice-letter='a'>" + self.currentData.choices[i] + "</div>");
                        self.$choices.find("[choice-letter='a']").on("click", self.onChoiceClicked);
                    } else if (i == 1) {
                        self.$choices.append("<div class='choice' choice-letter='b'>" + self.currentData.choices[i] + "</div>");
                        self.$choices.find("[choice-letter='b']").on("click", self.onChoiceClicked);
                    } else if (i == 2) {
                        self.$choices.append("<div class='choice' choice-letter='c'>" + self.currentData.choices[i] + "</div>");
                        self.$choices.find("[choice-letter='c']").on("click", self.onChoiceClicked);
                    } else if (i == 3) {
                        self.$choices.append("<div class='choice' choice-letter='d'>" + self.currentData.choices[i] + "</div>");
                        self.$choices.find("[choice-letter='d']").on("click", self.onChoiceClicked);
                    } else if (i == 4) {
                        self.$choices.append("<div class='choice' choice-letter='e'>" + self.currentData.choices[i] + "</div>");
                        self.$choices.find("[choice-letter='e']").on("click", self.onChoiceClicked);
                    }
                }
            }
        }

        // check if component has a previous attempt
        if (self.currentData.selectedChoiceLetter != undefined) {
            self.refreshChoices();
            self.disableChoices();
        } else {
            self.hideResult();
            self.enableChoices();
            self.$buttonCheck.removeClass("d-none").addClass("d-block");
            self.$buttonCheck.prop("disabled", true);
        }

        self.hideInteractionButton();
        self.$panel.removeClass("d-none").addClass("d-inline-flex");

        self.$panel.children().not(".d-none").eq(1).addClass("first-element");

        self.psQuestion.update();
        self.psChoices.update();
    }

    this.hide = function () {
        self.hideModalBackground();
        self.hidePanel();
        self.hideInteractionButton();

        self.$componentQuestionMultipleChoice.removeClass("d-flex").addClass("d-none");
    }

    this.hidePanel = function () {
        self.$panel.removeClass("d-inline-flex").addClass("d-none");
    }

    this.disableChoices = function () {
        for (var i = 0; i < self.$choices.children().length; i++) {
            self.$choices.children().eq(i).addClass("disable-choice");
        }
    }

    this.enableChoices = function () {
        for (var i = 0; i < self.$choices.children().length; i++) {
            self.$choices.children().eq(i).removeClass("disable-choice");
        }
    }

    this.refreshChoices = function () {
        var isAnswerCorrect = self.currentData.selectedChoiceLetter == self.currentData.correctChoiceLetter;

        // check results
        for (var i = 0; i < self.$choices.children().length; i++) {
            var $choice = self.$choices.children().eq(i);

            if (!isAnswerCorrect) {
                if ($choice.attr("choice-letter") == self.currentData.selectedChoiceLetter) {
                    $choice.removeClass("choice-selected").addClass("choice-wrong");
                }
                else if ($choice.attr("choice-letter") == self.currentData.correctChoiceLetter) {
                    $choice.addClass("choice-correct-non-selected");
                }
            } else {
                if ($choice.attr("choice-letter") == self.currentData.selectedChoiceLetter) {
                    $choice.removeClass("choice-selected").addClass("choice-correct");
                }              
            }
        }

        // show results
        self.showResult(isAnswerCorrect);

        // hide check button
        self.$buttonCheck.removeClass("d-block").addClass("d-none");
    }

    this.showResult = function (isAnswerCorrect) {
        self.$result.removeClass("d-none").addClass("d-block");

        if (isAnswerCorrect) {
            self.$result.find(".result-correct-answer").html(localizationData[self.language].correctAnswer);
            self.$result.find(".result-wrong-answer").html("");
        } else {
            self.$result.find(".result-correct-answer").html(localizationData[self.language].correctAnswerIs + ": " + self.$choices.find("[choice-letter='" + self.currentData.correctChoiceLetter + "']").wrapInner("<strong />").html());
            self.$result.find(".result-wrong-answer").html(localizationData[self.language].wrongAnswer);
        }
    }

    this.hideResult = function () {
        self.$result.removeClass("d-block").addClass("d-none");
    }

    this.showInteractionButton = function () {
        self.$buttonInteraction.removeClass("d-none").addClass("d-block");
    }

    this.hideInteractionButton = function () {
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");
    }

    // button events

    this.onButtonInteractionClicked = function () {
        self.currentData.interactionState = "panel";

        self.hideInteractionButton();
        self.showPanel();
    }

    this.onButtonCloseClicked = function (e) {
        self.currentData.interactionState = "button";

        self.hidePanel();

        if (self.currentOptions != undefined &&
            self.currentOptions.interactionButtonEnabled != undefined &&
            self.currentOptions.interactionButtonEnabled == true) {
            self.showInteractionButton();
        } else {
            $(self).trigger("hide", self.currentData);
        }
    }

    this.onButtonCheckClicked = function (e) {
        self.currentData.selectedChoiceLetter = self.$choices.find(".choice-selected").attr("choice-letter");

        self.refreshChoices();
        self.disableChoices();
    }

    this.onChoiceClicked = function (e) {
        self.$choices.find(".choice").not(e.currentTarget).removeClass("choice-selected");
        $(e.currentTarget).toggleClass("choice-selected");

        if (self.$choices.find(".choice-selected").length == 0) {
            self.$buttonCheck.prop("disabled", true);
        } else {
            self.$buttonCheck.prop("disabled", false);
        }
    }

    this.showModalBackground = function () {
        self.$modalBackground.removeClass("d-none").addClass("d-block");
    }

    this.hideModalBackground = function () {
        self.$modalBackground.removeClass("d-block").addClass("d-none");
    }

    this.setAlignment = function () {
        self.$componentQuestionMultipleChoice.removeClass("d-top-left");
        self.$componentQuestionMultipleChoice.removeClass("d-top-center");
        self.$componentQuestionMultipleChoice.removeClass("d-top-right");
        self.$componentQuestionMultipleChoice.removeClass("d-middle-left");
        self.$componentQuestionMultipleChoice.removeClass("d-middle-center");
        self.$componentQuestionMultipleChoice.removeClass("d-middle-right");
        self.$componentQuestionMultipleChoice.removeClass("d-bottom-left");
        self.$componentQuestionMultipleChoice.removeClass("d-bottom-center");
        self.$componentQuestionMultipleChoice.removeClass("d-bottom-right");

        if (self.currentData.location == "top_left") {
            self.$componentQuestionMultipleChoice.addClass("d-top-left");
        } else if (self.currentData.location == "top_center") {
            self.$componentQuestionMultipleChoice.addClass("d-top-center");
        } else if (self.currentData.location == "top_right") {
            self.$componentQuestionMultipleChoice.addClass("d-top-right");
        } else if (self.currentData.location == "middle_left") {
            self.$componentQuestionMultipleChoice.addClass("d-middle-left");
        } else if (self.currentData.location == "middle_center") {
            self.$componentQuestionMultipleChoice.addClass("d-middle-center");
        } else if (self.currentData.location == "middle_right") {
            self.$componentQuestionMultipleChoice.addClass("d-middle-right");
        } else if (self.currentData.location == "bottom_left") {
            self.$componentQuestionMultipleChoice.addClass("d-bottom-left");
        } else if (self.currentData.location == "bottom_center") {
            self.$componentQuestionMultipleChoice.addClass("d-bottom-center");
        } else if (self.currentData.location == "bottom_right") {
            self.$componentQuestionMultipleChoice.addClass("d-bottom-right");
        }
    }

    // localization data

    var localizationData = {
        "english": {
            "title": "Multiple Choice",
            "correctAnswer": "Your answer is correct.",
            "wrongAnswer": "Your answer is incorrect.",
            "correctAnswerIs": "Correct answer is"
        },
        "turkish": {
            "title": "??oktan Se??meli",
            "correctAnswer": "Cevab??n??z do??ru.",
            "wrongAnswer": "Cevab??n??z yanl????.",
            "correctAnswerIs": "Do??ru cevap"
        },
    };
}