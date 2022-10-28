function ComponentQuestionTrueFalse() {
    var self = this;

    this.language = "english";

    this.initialize = function (parentSelector) {
        // create component dom
        $(parentSelector).append('\
        <div id="component-question-true-false">                            \
            <div class="panel">                                             \
                <button class="button-close"></button>                      \
                <div class="image-container">                               \
                    <img class="image" />                                   \
                </div>                                                      \
                <div class="question"></div>                                \
                <div class="choices"></div>                                 \
                <div class="result"></div>                                  \
                <button class="button-check"></button>                      \
                </div>                                                      \
                <button class="button-interaction"></button>                \
        </div>');

        self.$componentQuestionTrueFalse = $("#component-question-true-false");

        self.$modalBackground = self.$componentQuestionTrueFalse.find(".modal-background");

        self.$panel = self.$componentQuestionTrueFalse.find(".panel");

        // buttons
        self.$buttonClose = self.$componentQuestionTrueFalse.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonCheck = self.$componentQuestionTrueFalse.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        self.$buttonInteraction = self.$componentQuestionTrueFalse.find(".button-interaction");
        self.$buttonInteraction.on("click", self.onButtonInteractionClicked);
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");

        // content
        self.$question = self.$componentQuestionTrueFalse.find(".question");

        // scrollbars
        self.psQuestion = new PerfectScrollbar("#component-question-true-false .question", { wheelPropagation: false });

        // hide image
        self.$imageContainer = self.$componentQuestionTrueFalse.find(".image-container");
        self.$imageContainer.addClass("d-none");

        self.$image = self.$componentQuestionTrueFalse.find(".image");
  
        // hide results
        self.$result = self.$componentQuestionTrueFalse.find(".result");
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

        self.$componentQuestionTrueFalse.removeClass("d-none").addClass("d-flex");
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

        if (self.currentData.question != undefined && self.currentData.question != "") {
            self.$question.html(self.currentData.question);
        }

        if (self.currentData.image != undefined && self.currentData.image != "") {
            self.$imageContainer.removeClass("d-none").addClass("d-block");
            self.$image.attr("src", framework.localPath + "img/" + self.currentData.image);
        }

        // choices
        self.$choices = self.$componentQuestionTrueFalse.find(".choices");
        self.$choices.empty();

        self.$choices.append("<div class='choice choice-true' choice-result='true'>" + localizationData[self.language].true + "</div>");
        self.$choices.find("[choice-result='true']").on("click", self.onChoiceClicked);
        self.$choices.append("<div class='choice choice-false' choice-result='false'>" + localizationData[self.language].false + "</div>");
        self.$choices.find("[choice-result='false']").on("click", self.onChoiceClicked);

        // check if component has a previous attempt
        if (self.currentData.selectedChoice != undefined) {
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
    }

    this.hide = function () {
        self.hideModalBackground();
        self.hidePanel();
        self.hideInteractionButton();

        self.$componentQuestionTrueFalse.removeClass("d-flex").addClass("d-none");
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
        var isAnswerCorrect = self.currentData.selectedChoice == self.currentData.correctChoice;

        // check results
        for (var i = 0; i < self.$choices.children().length; i++) {
            var $choice = self.$choices.children().eq(i);
            var choiceResult = $choice.attr("choice-result") == "true";

            if (!isAnswerCorrect) {
                if (choiceResult == self.currentData.selectedChoice) {
                    $choice.removeClass("choice-selected").addClass("choice-wrong");
                }
                else if (choiceResult == self.currentData.correctChoice) {
                    $choice.addClass("choice-correct-non-selected");
                }
            } else {
                if (choiceResult == self.currentData.correctChoice) {
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
        self.$result.removeClass("result-correct-answer");
        self.$result.removeClass("result-wrong-answer");

        self.$result.removeClass("d-none").addClass("d-block");

        if (isAnswerCorrect)
            self.$result.addClass("result-correct-answer");
        else
            self.$result.addClass("result-wrong-answer");

        self.$result.html(isAnswerCorrect ? localizationData[self.language].correctAnswer : localizationData[self.language].wrongAnswer);
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
        self.currentData.selectedChoice = self.$choices.find(".choice-selected").attr("choice-result") == "true";

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
        self.$componentQuestionTrueFalse.removeClass("d-top-left");
        self.$componentQuestionTrueFalse.removeClass("d-top-center");
        self.$componentQuestionTrueFalse.removeClass("d-top-right");
        self.$componentQuestionTrueFalse.removeClass("d-middle-left");
        self.$componentQuestionTrueFalse.removeClass("d-middle-center");
        self.$componentQuestionTrueFalse.removeClass("d-middle-right");
        self.$componentQuestionTrueFalse.removeClass("d-bottom-left");
        self.$componentQuestionTrueFalse.removeClass("d-bottom-center");
        self.$componentQuestionTrueFalse.removeClass("d-bottom-right");

        if (self.currentData.location == "top_left") {
            self.$componentQuestionTrueFalse.addClass("d-top-left");
        } else if (self.currentData.location == "top_center") {
            self.$componentQuestionTrueFalse.addClass("d-top-center");
        } else if (self.currentData.location == "top_right") {
            self.$componentQuestionTrueFalse.addClass("d-top-right");
        } else if (self.currentData.location == "middle_left") {
            self.$componentQuestionTrueFalse.addClass("d-middle-left");
        } else if (self.currentData.location == "middle_center") {
            self.$componentQuestionTrueFalse.addClass("d-middle-center");
        } else if (self.currentData.location == "middle_right") {
            self.$componentQuestionTrueFalse.addClass("d-middle-right");
        } else if (self.currentData.location == "bottom_left") {
            self.$componentQuestionTrueFalse.addClass("d-bottom-left");
        } else if (self.currentData.location == "bottom_center") {
            self.$componentQuestionTrueFalse.addClass("d-bottom-center");
        } else if (self.currentData.location == "bottom_right") {
            self.$componentQuestionTrueFalse.addClass("d-bottom-right");
        }
    }

    // localization data

    var localizationData = {
        "english": {
            "true": "True",
            "false": "False",
            "correctAnswer": "Your answer is correct.",
            "wrongAnswer": "Your answer is incorrect."
        },
        "turkish": {
            "true": "Doğru",
            "false": "Yanlış",
            "correctAnswer": "Cevabınız doğru.",
            "wrongAnswer": "Cevabınız yanlış."
        },
    };
}