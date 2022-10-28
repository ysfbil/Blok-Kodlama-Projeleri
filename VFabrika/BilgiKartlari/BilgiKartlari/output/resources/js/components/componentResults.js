function ComponentResults() {
    var self = this;

    this.language = "english";

    this.completed = false;

    this.initialize = function () {
        // create component dom
        $(".component-container").append('\
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
        self.$panel.removeClass("d-none").addClass("d-flex");

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
            self.showResult(self.currentData[i]);
            questionCount++;
        }

        if (self.answeredQuestionCount == questionCount && self.completed == false) {
            $(self).trigger("completed");
            self.completed = true;
        }
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
        self.hidePanel();

        if (self.currentOptions != undefined &&
            self.currentOptions.interactionButtonEnabled != undefined &&
            self.currentOptions.interactionButtonEnabled == true) {
            self.showInteractionButton();
        } else {
            $(self).trigger("hide", self.currentData);
        }
    }

    this.showResult = function (data) {
        self.$results.append('\
            <div class="result">                            \
                <div class="image"></div>                   \
                <div class="result-container">              \
                    <div class="hint"></div>            \
                    <div class="correct-answer"></div>      \
                </div>                                      \
                <div class="result-icon"></div>             \
            </div>');

        var $result = self.$results.children().last();

        $result.find(".image").css("background-image", "url('" + framework.localPath + "img/" + data.image + "')");
        $result.find(".hint").html(data.hint);

        if (data.answer != undefined) {
            $result.find(".correct-answer").html(data.correctAnswer);

            if (data.answer.toLowerCase() == data.correctAnswer.toLowerCase()) {
                $result.find(".result-icon").addClass("icon-correct");
                $result.find(".correct-answer").addClass("result-correct");
            } else {
                $result.find(".result-icon").addClass("icon-wrong");
                $result.find(".correct-answer").addClass("result-wrong");
            }

            self.answeredQuestionCount++;
        } else {
            $result.find(".result-icon").addClass("icon-not-answered");
        }
    }

    // localization data

    var localizationData = {
        "english": {
            "results": "Results",
        },
        "turkish": {
            "results": "Sonuçlar",
        },
    };
}

ComponentResults = new ComponentResults();
ComponentResults.initialize();

