function ComponentQuestionTrueFalse() {
    var self = this;

    this.language = "english";

    this.createElement = function (parentSelector, componentId) {
        // create component dom
        $(parentSelector).append('\
        <div id="' + componentId + '" class="component-question-true-false">            \
            <div class="panel">                             \
                <div class="image-container">               \
                    <img class="image" />                   \
                </div>                                      \
                <div class="question"></div>                \
                <div class="choices"></div>                 \
                <div class="result"></div>                  \
                <button class="button-check"></button>      \
                </div>                                      \
        </div>');

        self.$componentQuestionTrueFalse =  $("#" + componentId);

        self.$panel = self.$componentQuestionTrueFalse.find(".panel");

        // buttons
        self.$buttonCheck = self.$componentQuestionTrueFalse.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        // hide image
        self.$imageContainer = self.$componentQuestionTrueFalse.find(".image-container");
        self.$imageContainer.addClass("d-none");

        self.$image = self.$componentQuestionTrueFalse.find(".image");

        // hide results
        self.$result = self.$componentQuestionTrueFalse.find(".result");
        self.hideResult();

        self.hide();
    }

    this.show = function (data) {
        self.currentData = data;

        self.showPanel();

        self.$componentQuestionTrueFalse.removeClass("d-none").addClass("d-flex");
    }
    
    this.showPanel = function () {
        if (self.currentData.question != undefined && self.currentData.question != "") {
            self.$question = self.$componentQuestionTrueFalse.find(".question");
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

        self.$panel.removeClass("d-none").addClass("d-inline-flex");
    }

    this.hide = function () {
        self.hidePanel();
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

    // button events

    this.onButtonCheckClicked = function (e) {        
        self.currentData.selectedChoice = self.$choices.find(".choice-selected").attr("choice-result") == "true";

        self.refreshChoices();
        self.disableChoices();

        $(self).trigger("answered");
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