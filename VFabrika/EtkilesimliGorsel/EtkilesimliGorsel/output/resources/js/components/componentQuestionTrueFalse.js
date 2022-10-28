function ComponentQuestionTrueFalse() {
    var self = this;

    this.language = "english";

    this.initialize = function () {
        // create component dom
        $(".component-container").append('\
        <div id="component-question-true-false">            \
            <div class="panel">                             \
                <button class="button-close"></button>      \
                <div class="image-container">               \
                    <img class="image" />                   \
                </div>                                      \
                <div class="question"></div>                \
                <div class="choices"></div>                 \
                <div class="result"></div>                  \
                <button class="button-check"></button>      \
            </div>                                          \
        </div>');

        self.$componentQuestionTrueFalse = $("#component-question-true-false");

        // buttons
        self.$buttonClose = self.$componentQuestionTrueFalse.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonCheck = self.$componentQuestionTrueFalse.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        // hide results on initialize
        self.$result = self.$componentQuestionTrueFalse.find(".result");
        self.hideResult();

        // scrollbar
        self.psQuestion = new PerfectScrollbar("#component-question-true-false .question", { wheelPropagation: false });

        // hide component on initialize
        self.hide();
    }

    this.show = function (data, options) {
        // data
        self.currentData = data;

        // reset component alignment
        self.$componentQuestionTrueFalse.removeClass("d-top-left");
        self.$componentQuestionTrueFalse.removeClass("d-top-center");
        self.$componentQuestionTrueFalse.removeClass("d-top-right");
        self.$componentQuestionTrueFalse.removeClass("d-middle-left");
        self.$componentQuestionTrueFalse.removeClass("d-middle-center");
        self.$componentQuestionTrueFalse.removeClass("d-middle-right");
        self.$componentQuestionTrueFalse.removeClass("d-bottom-left");
        self.$componentQuestionTrueFalse.removeClass("d-bottom-center");
        self.$componentQuestionTrueFalse.removeClass("d-bottom-right");

        if (data.location == "top_left") {
            self.$componentQuestionTrueFalse.addClass("d-top-left");
        } else if (data.location == "top_center") {
            self.$componentQuestionTrueFalse.addClass("d-top-center");
        } else if (data.location == "top_right") {
            self.$componentQuestionTrueFalse.addClass("d-top-right");
        } else if (data.location == "middle_left") {
            self.$componentQuestionTrueFalse.addClass("d-middle-left");
        } else if (data.location == "middle_center") {
            self.$componentQuestionTrueFalse.addClass("d-middle-center");
        } else if (data.location == "middle_right") {
            self.$componentQuestionTrueFalse.addClass("d-middle-right");
        } else if (data.location == "bottom_left") {
            self.$componentQuestionTrueFalse.addClass("d-bottom-left");
        } else if (data.location == "bottom_center") {
            self.$componentQuestionTrueFalse.addClass("d-bottom-center");
        } else if (data.location == "bottom_right") {
            self.$componentQuestionTrueFalse.addClass("d-bottom-right");
        }

        if (options != undefined) {
            if (options.isModal != undefined) {
                if (options.isModal) {
                    self.$componentQuestionTrueFalse.removeClass("d-non-modal");
                } else {
                    self.$componentQuestionTrueFalse.addClass("d-non-modal");
                }
            }

            if (options.isCloseable != undefined) {
                if (!options.isCloseable) {
                    self.$componentQuestionTrueFalse.find(".button-close").remove();
                } 
            }
        }

        // reset component elements
        if (data.question != undefined) {
            self.$question = self.$componentQuestionTrueFalse.find(".question");
            self.$question.html(data.question);
        }

        if (data.image != undefined) {
            self.$image = self.$componentQuestionTrueFalse.find(".image");
            self.$image.attr("src", framework.localPath + "img/" + data.image);
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
            self.enableChoices();
        }

        // show component
        self.$componentQuestionTrueFalse.removeClass("d-none").addClass("d-flex");
    }

    this.hide = function () {
        self.$componentQuestionTrueFalse.removeClass("d-flex").addClass("d-none");
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

    this.onButtonCloseClicked = function (e) {
        self.$componentQuestionTrueFalse.removeClass("d-flex").addClass("d-none");

        $(self).trigger("hide", self.currentData);
    }

    this.onButtonCheckClicked = function (e) {        
        self.currentData.selectedChoice = self.$choices.find(".choice-selected").attr("choice-result") == "true";

        self.refreshChoices();
        self.disableChoices();

        self.$buttonCheck.removeClass("d-block").addClass("d-none");
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

ComponentQuestionTrueFalse = new ComponentQuestionTrueFalse();
ComponentQuestionTrueFalse.initialize();