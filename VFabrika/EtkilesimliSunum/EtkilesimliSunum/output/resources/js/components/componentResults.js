function ComponentResults() {
    var self = this;

    this.language = "english";

    this.completed = false;

    this.initialize = function (parentSelector) {
        // create component dom
        $(parentSelector).append('\
        <div id="component-results" class="d-middle-center">    \
            <div class="panel">                                 \
                <div class="title">                             \
                    <div class="icon-results"></div>            \
                    <h1></h1>                                   \
                </div>                                          \
                <button class="button-close"></button>          \
                <div class="results"></div>                     \
            </div>                                              \
            <button class="button-interaction"></button>        \
        </div>');

        self.$componentResults = $("#component-results");

        self.$modalBackground = self.$componentResults.find(".modal-background");

        self.$panel = self.$componentResults.find(".panel");

        self.$results = self.$componentResults.find(".results");

        self.$title = self.$componentResults.find(".title");
        self.$title.find("h1").html(localizationData[self.language].results);

        self.psPanel = new PerfectScrollbar("#component-results .results", { wheelPropagation: false });

        // buttons
        self.$buttonClose = self.$componentResults.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonInteraction = self.$componentResults.find(".button-interaction");
        self.$buttonInteraction.on("click", self.onButtonInteractionClicked);
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");

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

        self.$componentResults.removeClass("d-none").addClass("d-flex");
    }

    this.showPanel = function () {
        self.$results.empty();

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

        self.answeredQuestionCount = 0;
        var questionCount = 0;

        for (var i = 0; i < self.currentData.length; i++) {
            if (self.currentData[i].interaction != undefined) {
                if (self.currentData[i].interaction.type == ComponentType.QUESTION_MULTIPLE_CHOICE) {
                    self.showQuestionMultipleChoiceResult(i + 1, self.currentData[i].interaction.data);

                    questionCount++;
                } else if (self.currentData[i].interaction.type == ComponentType.QUESTION_MARK_THE_WORDS) {
                    self.showQuestionMarkTheWordsResult(i + 1, self.currentData[i].interaction.data);

                    questionCount++;
                } else if (self.currentData[i].interaction.type == ComponentType.QUESTION_TRUE_FALSE) {
                    self.showQuestionTrueFalseResult(i + 1, self.currentData[i].interaction.data);

                    questionCount++;
                }
            }
        }
        self.$panel.removeClass("d-none").addClass("d-flex");

        if (self.answeredQuestionCount == questionCount && self.completed == false) {
            $(self).trigger("completed");
            self.completed = true;
        }

        self.psPanel.update();
    }

    this.hide = function () {
        self.hideModalBackground();
        self.hidePanel();
        self.hideInteractionButton();

        self.$componentResults.removeClass("d-flex").addClass("d-none");
    }

    this.hidePanel = function () {
        self.$panel.removeClass("d-flex").addClass("d-none");
    }

    this.showModalBackground = function () {
        self.$modalBackground.removeClass("d-none").addClass("d-block");
    }

    this.hideModalBackground = function () {
        self.$modalBackground.removeClass("d-block").addClass("d-none");
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

    this.showQuestionMultipleChoiceResult = function (slideNumber, data) {
        self.$results.append('\
        <div class="slide">                         \
            <div class="slide-order"></div>         \
            <div class="slide-question"></div>      \
            <div class="slide-result"></div>        \
        </div>                                      \
        ');
        self.$slide = self.$results.children().last();

        self.$slide.find(".slide-order").html(localizationData[self.language].slide + " " + slideNumber);
        self.$slide.find(".slide-question").html(data.question);
        self.$slide.data("item", data);
        self.$slide.on("click", self.onItemClicked);

        if (data.selectedChoiceLetter != undefined) {
            var isAnswerCorrect = data.selectedChoiceLetter == data.correctChoiceLetter;

            if (isAnswerCorrect) {
                self.$slide.find(".slide-result").addClass("icon-correct");
            } else {
                self.$slide.find(".slide-result").addClass("icon-wrong");
            }

            self.answeredQuestionCount++;
        } else {
            self.$slide.find(".slide-result").addClass("icon-not-answered");
        }
    }

    this.showQuestionMarkTheWordsResult = function (slideNumber, data) {
        self.$results.append('\
        <div class="slide">                         \
            <div class="slide-order"></div>         \
            <div class="slide-question"></div>      \
            <div class="slide-result"></div>        \
        </div>                                      \
        ');

        self.$slide = self.$results.children().last();

        self.$slide.find(".slide-order").html(localizationData[self.language].slide + " " + slideNumber);
        self.$slide.find(".slide-question").html(data.question);
        self.$slide.data("item", data);
        self.$slide.on("click", self.onItemClicked);

        if (data.selectedChoiceLetters != undefined) {
            var correctAnsweredChoiceCount = 0;

            var correctChoiceLetters = data.correctChoiceLetters != undefined ? data.correctChoiceLetters.split(", ") : "";
            var selectedChoiceLetters = data.selectedChoiceLetters != undefined ? data.selectedChoiceLetters.split(", ") : "";

            // check results
            for (var i = 0; i < selectedChoiceLetters.length; i++) {
                if (correctChoiceLetters.includes(selectedChoiceLetters[i])) {
                    correctAnsweredChoiceCount++;
                }
            }

            self.$slide.find(".slide-result").html(correctAnsweredChoiceCount + "/" + correctChoiceLetters.length);

            self.answeredQuestionCount++;
        } else {
            self.$slide.find(".slide-result").addClass("icon-not-answered");
        }
    }

    this.showQuestionTrueFalseResult = function (slideNumber, data) {
        self.$results.append('\
            <div class="slide">                         \
                <div class="slide-order"></div>         \
                <div class="slide-question"></div>      \
                <div class="slide-result"></div>        \
            </div>');

        self.$slide = self.$results.children().last();

        self.$slide.find(".slide-order").html(localizationData[self.language].slide + " " + slideNumber);
        self.$slide.find(".slide-question").html(data.question);
        self.$slide.data("item", data);
        self.$slide.on("click", self.onItemClicked);

        if (data.selectedChoice != undefined) {
            var isAnswerCorrect = data.selectedChoice == data.correctChoice;

            if (isAnswerCorrect) {
                self.$slide.find(".slide-result").addClass("icon-correct");
            } else {
                self.$slide.find(".slide-result").addClass("icon-wrong");
            }

            self.answeredQuestionCount++;
        } else {
            self.$slide.find(".slide-result").addClass("icon-not-answered");
        }

    }

    this.onItemClicked = function (e) {
        var $itemElement = $(e.currentTarget);
        var item = $itemElement.data("item");

        $(self).trigger("itemClicked", item);
    }

    // localization data

    var localizationData = {
        "english": {
            "results": "Results",
            "slide": "Slide"
        },
        "turkish": {
            "results": "Sonuçlar",
            "slide": "Slayt"
        },
    };
}


