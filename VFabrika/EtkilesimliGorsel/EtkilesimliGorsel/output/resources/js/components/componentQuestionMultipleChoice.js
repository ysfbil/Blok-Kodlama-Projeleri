function ComponentQuestionMultipleChoice() {
    var self = this;

    this.language = "english";

    this.initialize = function () {
        // create component dom
        $(".component-container").append('\
           <div id="component-question-multiple-choice">              \
                    <div class="panel">                               \
                        <button class="button-close"></button>        \
                        <div class="image-container">                 \
                            <img class="image" />                     \
                        </div>                                        \
                        <div class="question"></div>                  \
                        <div class="choices">                         \
                        </div>                                        \
                        <div class="result">                          \
                            <div class="result-wrong-answer"></div>   \
                            <div class="result-correct-answer"></div> \
                        </div>                                        \
                        <button class="button-check"></button>        \
                    </div>                                            \
                </div>');

        self.$componentQuestionMultipleChoice = $("#component-question-multiple-choice");

        // buttons
        self.$buttonClose = self.$componentQuestionMultipleChoice.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonCheck = self.$componentQuestionMultipleChoice.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        // hide results on initialize
        self.$result = self.$componentQuestionMultipleChoice.find(".result");
        self.hideResult();

        // hide component on initialize
        self.hide();
    }

    this.show = function (data, options) {
        // data
        self.currentData = data;

        // reset component alignment
        self.$componentQuestionMultipleChoice.removeClass("d-top-left");
        self.$componentQuestionMultipleChoice.removeClass("d-top-center");
        self.$componentQuestionMultipleChoice.removeClass("d-top-right");
        self.$componentQuestionMultipleChoice.removeClass("d-middle-left");
        self.$componentQuestionMultipleChoice.removeClass("d-middle-center");
        self.$componentQuestionMultipleChoice.removeClass("d-middle-right");
        self.$componentQuestionMultipleChoice.removeClass("d-bottom-left");
        self.$componentQuestionMultipleChoice.removeClass("d-bottom-center");
        self.$componentQuestionMultipleChoice.removeClass("d-bottom-right");

        if (data.location == "top_left") {
            self.$componentQuestionMultipleChoice.addClass("d-top-left");
        } else if (data.location == "top_center") {
            self.$componentQuestionMultipleChoice.addClass("d-top-center");
        } else if (data.location == "top_right") {
            self.$componentQuestionMultipleChoice.addClass("d-top-right");
        } else if (data.location == "middle_left") {
            self.$componentQuestionMultipleChoice.addClass("d-middle-left");
        } else if (data.location == "middle_center") {
            self.$componentQuestionMultipleChoice.addClass("d-middle-center");
        } else if (data.location == "middle_right") {
            self.$componentQuestionMultipleChoice.addClass("d-middle-right");
        } else if (data.location == "bottom_left") {
            self.$componentQuestionMultipleChoice.addClass("d-bottom-left");
        } else if (data.location == "bottom_center") {
            self.$componentQuestionMultipleChoice.addClass("d-bottom-center");
        } else if (data.location == "bottom_right") {
            self.$componentQuestionMultipleChoice.addClass("d-bottom-right");
        }

        if (options != undefined) {
            if (options.isModal != undefined) {
                if (options.isModal) {
                    self.$componentQuestionMultipleChoice.removeClass("d-non-modal");
                } else {
                    self.$componentQuestionMultipleChoice.addClass("d-non-modal");
                }
            }

            if (options.isCloseable != undefined) {
                if (!options.isCloseable) {
                    self.$componentQuestionMultipleChoice.find(".button-close").remove();
                } 
            }
        }

        // reset component elements
        if (data.question != undefined) {
            self.$question = self.$componentQuestionMultipleChoice.find(".question");
            self.$question.html(data.question);
        }

        if (data.image != undefined) {
            self.$image = self.$componentQuestionMultipleChoice.find(".image");
            self.$image.attr("src", framework.localPath + "img/" + data.image);
        }

        if (data.choices != undefined) {
            self.$choices = self.$componentQuestionMultipleChoice.find(".choices");
            self.$choices.empty();
            
            for (var i = 0; i < data.choices.length; i++) {

                if (i == 0) {
                    self.$choices.append("<div class='choice' choice-letter='a'>" + data.choices[i] + "</div>");
                    self.$choices.find("[choice-letter='a']").on("click", self.onChoiceClicked);
                } else if (i == 1) {
                    self.$choices.append("<div class='choice' choice-letter='b'>" + data.choices[i] + "</div>");
                    self.$choices.find("[choice-letter='b']").on("click", self.onChoiceClicked);
                } else if (i == 2) {
                    self.$choices.append("<div class='choice' choice-letter='c'>" + data.choices[i] + "</div>");
                    self.$choices.find("[choice-letter='c']").on("click", self.onChoiceClicked);
                } else if (i == 3) {
                    self.$choices.append("<div class='choice' choice-letter='d'>" + data.choices[i] + "</div>");
                    self.$choices.find("[choice-letter='d']").on("click", self.onChoiceClicked);
                } else if (i == 4) {
                    self.$choices.append("<div class='choice' choice-letter='e'>" + data.choices[i] + "</div>");
                    self.$choices.find("[choice-letter='e']").on("click", self.onChoiceClicked);
                }
            }
        }

        // check if component has a previous attempt
        if (self.currentData.selectedChoiceLetter != undefined) {
            self.refreshChoices();
            self.disableChoices();
        } else {
            self.enableChoices();
        }

        // show component
        self.$componentQuestionMultipleChoice.removeClass("d-none").addClass("d-flex");
    }

    this.hide = function () {
        self.$componentQuestionMultipleChoice.removeClass("d-flex").addClass("d-none");
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
                if ($choice.hasClass("choice-selected")) {
                    $choice.addClass("choice-correct");
                }
            }
        }

        // show results
        self.showResult(isAnswerCorrect);
    }

    this.showResult = function (isAnswerCorrect) {
        self.$result.removeClass("d-none").addClass("d-block");

        if (isAnswerCorrect) {
            self.$result.find(".result-correct-answer").html(localizationData[self.language].correctAnswer);
        } else {
            self.$result.find(".result-correct-answer").html(localizationData[self.language].correctAnswerIs + ": " + self.$choices.find("[choice-letter='" + self.currentData.correctChoiceLetter + "']").wrapInner("<strong />").html());
            self.$result.find(".result-wrong-answer").html(localizationData[self.language].wrongAnswer);
        }
    }

    this.hideResult = function () {
        self.$result.removeClass("d-block").addClass("d-none");
    }

    // button events

    this.onButtonCloseClicked = function (e) {
        self.$componentQuestionMultipleChoice.removeClass("d-flex").addClass("d-none");

        $(self).trigger("hide", self.currentData);
    }

    this.onButtonCheckClicked = function (e) {
        self.currentData.selectedChoiceLetter = self.$choices.find(".choice-selected").attr("choice-letter");

        self.refreshChoices();
        self.disableChoices();

        // hide check button
        self.$buttonCheck.addClass("d-none");
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
            "correctAnswer": "Your answer is correct.",
            "wrongAnswer": "Your answer is incorrect.",
            "correctAnswerIs": "Correct answer is"
        },
        "turkish": {
            "correctAnswer": "Cevabınız doğru.",
            "wrongAnswer": "Cevabınız yanlış.",
            "correctAnswerIs": "Doğru cevap"
        },
    };
}

ComponentQuestionMultipleChoice = new ComponentQuestionMultipleChoice();
ComponentQuestionMultipleChoice.initialize();

