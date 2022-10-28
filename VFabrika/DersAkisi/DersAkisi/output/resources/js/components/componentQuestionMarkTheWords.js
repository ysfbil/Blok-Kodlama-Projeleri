function ComponentQuestionMarkTheWords() {
    var self = this;

    this.language = "english";

    this.createElement = function (parentSelector, componentId) {
        // create component dom
        $(parentSelector).append('\
            <div id="' + componentId + '" class="component-question-mark-the-words">                    \
                <div class="panel">                                                                     \
                    <h1 class="title"></h1>                                                             \
                    <div class="image-container">                                                       \
                        <img class="image" />                                                           \
                    </div>                                                                              \
                    <div class="question"></div>                                                        \
                    <div class="choices"></div>                                                         \
                    <div class="result"></div>                                                          \
                    <button class="button-check"></button>                                              \
                </div>                                                                                  \
            </div>');

        self.$componentQuestionMarkTheWords = $("#" + componentId);

        self.$panel = self.$componentQuestionMarkTheWords.find(".panel");

        // title
        self.$title = self.$panel.find(".title");
        self.$title.html(localizationData[self.language].title);

        // buttons
        self.$buttonCheck = self.$componentQuestionMarkTheWords.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        // hide image
        self.$imageContainer = self.$componentQuestionMarkTheWords.find(".image-container");
        self.$imageContainer.addClass("d-none");

        self.$image = self.$componentQuestionMarkTheWords.find(".image");

        // hide results
        self.$result = self.$componentQuestionMarkTheWords.find(".result");
        self.hideResult();

        self.hide();
    }

    this.show = function (data) {
        self.currentData = data;

        self.showPanel();

        self.$componentQuestionMarkTheWords.removeClass("d-none").addClass("d-flex");
    }

    this.showPanel = function () {
        if (self.currentData.question != undefined && self.currentData.question != "") {
            self.$question = self.$componentQuestionMarkTheWords.find(".question");
            self.$question.html(self.currentData.question);
        }

        if (self.currentData.image != undefined && self.currentData.image != "") {
            self.$imageContainer.removeClass("d-none").addClass("d-block");
            self.$image.attr("src", framework.localPath + "img/" + self.currentData.image);
        }

        if (self.currentData.choices != undefined) {
            self.$choices = self.$componentQuestionMarkTheWords.find(".choices");
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
        if (self.currentData.selectedChoiceLetters != undefined) {
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
   
        self.$componentQuestionMarkTheWords.removeClass("d-flex").addClass("d-none");
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

        // hide check button
        self.$buttonCheck.removeClass("d-block").addClass("d-none");
    }

    this.showResult = function (correctAnsweredChoiceCount, correctChoiceLettersLength) {
        self.$result.removeClass("d-none").addClass("d-block");

        self.$result.html(localizationData[self.language].correctAnswer(correctAnsweredChoiceCount, correctChoiceLettersLength));
    }

    this.hideResult = function () {
        self.$result.removeClass("d-block").addClass("d-none");
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
        
        $(self).trigger("answered");
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
            "title": "Mark The Words",
            "correctAnswer": function (correctAnsweredChoiceCount, correctChoiceCount) {
                return "You got " + correctAnsweredChoiceCount + " of " + correctChoiceCount + " choices correct.";
            }
        },
        "turkish": {
            "title": "Çoklu Seçim",
            "correctAnswer": function (correctAnsweredChoiceCount, correctChoiceCount) {
                return correctChoiceCount + " doğru cevaptan " + correctAnsweredChoiceCount + " tanesini bildin.";
            }
        }
    };
}