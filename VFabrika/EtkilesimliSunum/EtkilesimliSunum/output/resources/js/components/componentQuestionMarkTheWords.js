function ComponentQuestionMarkTheWords() {
    var self = this;

    this.language = "english";

    this.initialize = function (parentSelector) {
        // create component dom
        $(parentSelector).append('\
            <div id="component-question-mark-the-words">                        \
            <div class="modal-background"></div>                                \
                <div class="panel">                                             \
                    <button class="button-close"></button>                      \
                    <h1 class="title"></h1>                                     \
                    <div class= "image-container">                              \
                        <img class="image" />                                   \
                    </div>                                                      \
                    <div class="question"></div>                                \
                    <div class="choices"></div>                                 \
                    <div class="result"></div>                                  \
                    <button class="button-check"></button>                      \
                </div>                                                          \
                <button class="button-interaction"></button>                    \
            </div>');

        self.$componentQuestionMarkTheWords = $("#component-question-mark-the-words");

        self.$modalBackground = self.$componentQuestionMarkTheWords.find(".modal-background");

        self.$panel = self.$componentQuestionMarkTheWords.find(".panel");

        // title
        self.$title = self.$panel.find(".title");
        self.$title.html(localizationData[self.language].title);

        // buttons
        self.$buttonClose = self.$componentQuestionMarkTheWords.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonCheck = self.$componentQuestionMarkTheWords.find(".button-check");
        self.$buttonCheck.on("click", self.onButtonCheckClicked);
        self.$buttonCheck.prop("disabled", true);

        self.$buttonInteraction = self.$componentQuestionMarkTheWords.find(".button-interaction");
        self.$buttonInteraction.on("click", self.onButtonInteractionClicked);
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");

        //content
        self.$question = self.$componentQuestionMarkTheWords.find(".question");
        self.$choices = self.$componentQuestionMarkTheWords.find(".choices");

        //scrollbars
        self.psQuestion = new PerfectScrollbar("#component-question-mark-the-words .question", { wheelPropagation: false });
        self.psChoices = new PerfectScrollbar("#component-question-mark-the-words .choices", { wheelPropagation: false });

        // hide image
        self.$imageContainer = self.$componentQuestionMarkTheWords.find(".image-container");
        self.$imageContainer.addClass("d-none");

        self.$image = self.$componentQuestionMarkTheWords.find(".image");

        // hide results
        self.$result = self.$componentQuestionMarkTheWords.find(".result");
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

        self.$componentQuestionMarkTheWords.removeClass("d-none").addClass("d-flex");
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
        if (self.currentData.selectedChoiceLetters != undefined) {
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
    }

    this.onChoiceClicked = function (e) {
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
        self.$componentQuestionMarkTheWords.removeClass("d-top-left");
        self.$componentQuestionMarkTheWords.removeClass("d-top-center");
        self.$componentQuestionMarkTheWords.removeClass("d-top-right");
        self.$componentQuestionMarkTheWords.removeClass("d-middle-left");
        self.$componentQuestionMarkTheWords.removeClass("d-middle-center");
        self.$componentQuestionMarkTheWords.removeClass("d-middle-right");
        self.$componentQuestionMarkTheWords.removeClass("d-bottom-left");
        self.$componentQuestionMarkTheWords.removeClass("d-bottom-center");
        self.$componentQuestionMarkTheWords.removeClass("d-bottom-right");

        if (self.currentData.location == "top_left") {
            self.$componentQuestionMarkTheWords.addClass("d-top-left");
        } else if (self.currentData.location == "top_center") {
            self.$componentQuestionMarkTheWords.addClass("d-top-center");
        } else if (self.currentData.location == "top_right") {
            self.$componentQuestionMarkTheWords.addClass("d-top-right");
        } else if (self.currentData.location == "middle_left") {
            self.$componentQuestionMarkTheWords.addClass("d-middle-left");
        } else if (self.currentData.location == "middle_center") {
            self.$componentQuestionMarkTheWords.addClass("d-middle-center");
        } else if (self.currentData.location == "middle_right") {
            self.$componentQuestionMarkTheWords.addClass("d-middle-right");
        } else if (self.currentData.location == "bottom_left") {
            self.$componentQuestionMarkTheWords.addClass("d-bottom-left");
        } else if (self.currentData.location == "bottom_center") {
            self.$componentQuestionMarkTheWords.addClass("d-bottom-center");
        } else if (self.currentData.location == "bottom_right") {
            self.$componentQuestionMarkTheWords.addClass("d-bottom-right");
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
