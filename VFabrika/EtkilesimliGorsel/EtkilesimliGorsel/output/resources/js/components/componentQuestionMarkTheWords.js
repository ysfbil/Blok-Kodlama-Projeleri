function ComponentQuestionMarkTheWords() {
    var self = this;

    this.language = "english";

    this.initialize = function () {
        // create component dom
        $(".component-container").append('\
           <div id="component-question-mark-the-words">         \
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

        self.$componentQuestionMarkTheWords = $("#component-question-mark-the-words");

        // buttons
        self.$buttonClose = self.$componentQuestionMarkTheWords.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonCheck = self.$componentQuestionMarkTheWords.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        // hide results on initialize
        self.$result = self.$componentQuestionMarkTheWords.find(".result");
        self.hideResult();

        // hide component on initialize
        self.hide();
    }

    this.show = function (data, options) {
        // data
        self.currentData = data;

        // reset component alignment
        self.$componentQuestionMarkTheWords.removeClass("d-top-left");
        self.$componentQuestionMarkTheWords.removeClass("d-top-center");
        self.$componentQuestionMarkTheWords.removeClass("d-top-right");
        self.$componentQuestionMarkTheWords.removeClass("d-middle-left");
        self.$componentQuestionMarkTheWords.removeClass("d-middle-center");
        self.$componentQuestionMarkTheWords.removeClass("d-middle-right");
        self.$componentQuestionMarkTheWords.removeClass("d-bottom-left");
        self.$componentQuestionMarkTheWords.removeClass("d-bottom-center");
        self.$componentQuestionMarkTheWords.removeClass("d-bottom-right");

        if (data.location == "top_left") {
            self.$componentQuestionMarkTheWords.addClass("d-top-left");
        } else if (data.location == "top_center") {
            self.$componentQuestionMarkTheWords.addClass("d-top-center");
        } else if (data.location == "top_right") {
            self.$componentQuestionMarkTheWords.addClass("d-top-right");
        } else if (data.location == "middle_left") {
            self.$componentQuestionMarkTheWords.addClass("d-middle-left");
        } else if (data.location == "middle_center") {
            self.$componentQuestionMarkTheWords.addClass("d-middle-center");
        } else if (data.location == "middle_right") {
            self.$componentQuestionMarkTheWords.addClass("d-middle-right");
        } else if (data.location == "bottom_left") {
            self.$componentQuestionMarkTheWords.addClass("d-bottom-left");
        } else if (data.location == "bottom_center") {
            self.$componentQuestionMarkTheWords.addClass("d-bottom-center");
        } else if (data.location == "bottom_right") {
            self.$componentQuestionMarkTheWords.addClass("d-bottom-right");
        }

        if (options != undefined) {
            if (options.isModal != undefined) {
                if (options.isModal) {
                    self.$componentQuestionMarkTheWords.removeClass("d-non-modal");
                } else {
                    self.$componentQuestionMarkTheWords.addClass("d-non-modal");
                }
            }
            
            if (options.isCloseable != undefined) {
                if (!options.isCloseable) {
                    self.$componentQuestionMarkTheWords.find(".button-close").remove();
                } 
            }
        }

        // reset component elements
        if (data.question != undefined) {
            self.$question = self.$componentQuestionMarkTheWords.find(".question");
            self.$question.html(data.question);
        }

        if (data.image != undefined) {
            self.$image = self.$componentQuestionMarkTheWords.find(".image");
            self.$image.attr("src", framework.localPath + "img/" + data.image);
        }

        if (data.choices != undefined) {
            self.$choices = self.$componentQuestionMarkTheWords.find(".choices");
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
        if (self.currentData.selectedChoiceLetters != undefined) {
            self.refreshChoices();
            self.disableChoices();
        } else {
            self.enableChoices();
        }

        // show component
        self.$componentQuestionMarkTheWords.removeClass("d-none").addClass("d-flex");
    }

    this.hide = function () {
        self.$componentQuestionMarkTheWords.removeClass("d-flex").addClass("d-none");
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
        var correctAnsweredChoiceCount = 0;

        var correctChoiceLetters = self.currentData.correctChoiceLetters.split(", ");
        var selectedChoiceLetters = self.currentData.selectedChoiceLetters.split(", ");

        // check results
        for (var i = 0; i < self.$choices.children().length; i++) {
            var $choice = self.$choices.children().eq(i);
            var choiceLetter = $choice.attr("choice-letter");

            if (selectedChoiceLetters.includes(choiceLetter)) {
                if (correctChoiceLetters.includes(choiceLetter)) {
                    $choice.removeClass("choice-selected").addClass("choice-correct");

                    correctAnsweredChoiceCount++;
                } else {
                    $choice.removeClass("choice-selected").addClass("choice-wrong");
                }

            } else {
                if (correctChoiceLetters.includes(choiceLetter)) {
                    $choice.removeClass("choice-selected").addClass("choice-correct-non-selected");
                }
            }
        }

        // show results
        self.showResult(correctAnsweredChoiceCount, correctChoiceLetters.length);
    }

    this.showResult = function (correctAnsweredChoiceCount, correctChoiceLettersLength) {
        self.$result.removeClass("d-none").addClass("d-block");

        self.$result.html(localizationData[self.language].correctAnswer(correctAnsweredChoiceCount, correctChoiceLettersLength));
    }

    this.hideResult = function () {
        self.$result.removeClass("d-block").addClass("d-none");
    }

    // button events

    this.onButtonCloseClicked = function (e) {
        self.hide();

        $(self).trigger("hide", self.currentData);
    }

    this.onButtonCheckClicked = function (e) {
        // get selected choices and set to data
        for (var i = 0; i < self.$choices.children().length; i++) {
            if (self.$choices.children().eq(i).hasClass('choice-selected')) {
                if (self.currentData.selectedChoiceLetters != undefined) {
                    self.currentData.selectedChoiceLetters = self.currentData.selectedChoiceLetters.concat(", " + self.$choices.children().eq(i).attr("choice-letter"));
                } else {
                    self.currentData.selectedChoiceLetters = self.$choices.children().eq(i).attr("choice-letter");
                }
            }
        }

        self.refreshChoices();
        self.disableChoices();

        // hide check button
        self.$buttonCheck.addClass("d-none");
    }

    this.onChoiceClicked = function (e) {
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
            "correctAnswer": function (correctAnsweredChoiceCount, correctChoiceCount) {
                return "You got " + correctAnsweredChoiceCount + " of " + correctChoiceCount + " choices correct.";
            }
        },
        "turkish": {
            "correctAnswer": function (correctAnsweredChoiceCount, correctChoiceCount) {
                return correctChoiceCount + " doğru cevaptan " + correctAnsweredChoiceCount + " tanesini bildin.";
            }
        }
    };
}

ComponentQuestionMarkTheWords = new ComponentQuestionMarkTheWords();
ComponentQuestionMarkTheWords.initialize();

