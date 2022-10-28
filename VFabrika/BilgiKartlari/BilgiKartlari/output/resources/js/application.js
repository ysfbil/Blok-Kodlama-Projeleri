(function () {
    var application;

    function Flashcards() {
        var self = this;

        self.previousCardIndex = 0;
        self.currentCardIndex = 0;

        this.initialize = function () {
            // language
            if (applicationData.language != null) {
                self.language = applicationData.language;
            }

            // document title
            document.title = applicationData.title;

            // activity title
            self.$activityTitle = $("#activity-title");
            self.$activityTitle.html(applicationData.header.title);

            // containers
            self.$cardsContainer = $("#cards-container");
            self.$resultsContainer = $("#results-container");

            // navigation panel
            self.$navigationPanel = $("#navigation-panel");
            self.$navigationPanel.removeClass("d-none").addClass("d-flex");

            // buttons
            self.$buttonNext = self.$navigationPanel.find(".button-next");
            self.$buttonNext.on("click", self.onButtonNextClicked);

            self.$buttonPrevious = self.$navigationPanel.find(".button-previous");
            self.$buttonPrevious.on("click", self.onButtonPreviousClicked);

            $(ComponentResults).on("hide", self.onResultsHide);
            $(ComponentResults).on("completed", self.onResultsCompleted);

            // show 
            if (applicationData.data.items != undefined) {
                ComponentResults.hide();

                self.showCards();
                self.selectCard();
            }
        }

        this.showCards = function () {
            self.$cardsContainer.removeClass("d-none").addClass("d-flex");

            for (var i = 0; i < applicationData.data.items.length; i++) {
                self.$cardsContainer.append('\
                    <div class="card">                                  \
                        <div class="panel">                             \
                            <div class="image-container">               \
                                <img class="image" />                   \
                                <div class="result"></div>              \
                            </div>                                      \
                            <div class="hint"></div>                    \
                            <div class="card-footer">                   \
                                <input type="text" class="answer" />    \
                                <div class="result-icon"></div>         \
                             <button class= "button-check"></button>    \
                            </div>                                      \
                        </div>                                          \
                    </div>');

                // card
                var $card = self.$cardsContainer.find(".card").last();
                $card.on("click", self.onCardClicked);
                $card.attr("card-index", i);

                // data
                $card.find(".question").html(applicationData.data.items[i].question);
                $card.find(".image").attr("src", framework.localPath + "img/" + applicationData.data.items[i].image);
                $card.find(".result").addClass("d-none");
                $card.find(".hint").html(applicationData.data.items[i].hint);

                // input
                $card.find(".answer").on("input", self.onAnswerInput);
                $card.find(".answer").on("keypress", self.onAnswerKeyPress);
                $card.find(".answer").attr("placeholder", localizationData[self.language].yourAnswer);

                // button
                $card.find(".button-check").on("click", self.onButtonCheckClicked);
                $card.find(".button-check").prop("disabled", true);
            }

            // results card
            self.$cardsContainer.append('\
                <div class="results-card">                          \
                        <div class="icon-results"></div>            \
                        <div class="see-results"></div>             \
                </div>');

            var $resultsCard = self.$cardsContainer.find(".results-card");
            $resultsCard.on("click", self.onResultCardClicked);
            $resultsCard.find(".see-results").html(localizationData[self.language].seeResults);
        }

        this.hideCards = function () {
            self.$cardsContainer.removeClass("d-flex").addClass("d-none");
        }

        this.selectCard = function () {
            // pager
            self.$pager = $("#navigation-panel").find(".pager-text");
            self.$pager.html((self.currentCardIndex + 1) + "/" + (applicationData.data.items.length));

            // first item
            if (self.currentCardIndex == 0) {
                self.$buttonPrevious.prop("disabled", true);
            } else {
                self.$buttonPrevious.prop("disabled", false);
            }

            // last item
            if (self.currentCardIndex == applicationData.data.items.length - 1) {
                self.$buttonNext.prop("disabled", true);
            } else {
                self.$buttonNext.prop("disabled", false);
            }

            self.$cardsContainer.css("left", (-352 * self.currentCardIndex) + 455);

            var $previousCard = self.$cardsContainer.find("[card-index='" + self.previousCardIndex + "']");
            $previousCard.removeClass("card-selected");

            var $currentCard = self.$cardsContainer.find("[card-index='" + self.currentCardIndex + "']");
            $currentCard.addClass("card-selected");
        }

        this.onAnswerInput = function (e) {
            e.preventDefault();

            if (e.target.value == "") {
                self.$cardsContainer.find("[card-index='" + self.currentCardIndex + "'] .button-check").prop("disabled", true);
            } else {
                self.$cardsContainer.find("[card-index='" + self.currentCardIndex + "'] .button-check").prop("disabled", false);
            }
        }

        this.onAnswerKeyPress = function (e) {
            if (e.which == 10 || e.which == 13) {
                var $currentCard = self.$cardsContainer.find("[card-index='" + self.currentCardIndex + "']");
                $currentCard.find(".button-check").click();
            }
        }

        this.onCardClicked = function (e) {
            self.previousCardIndex = self.currentCardIndex;
            self.currentCardIndex = parseInt($(e.currentTarget).attr("card-index"));

            self.selectCard();
        }

        this.onResultCardClicked = function () {
            self.$activityTitle.removeClass("d-block").addClass("d-none");
            self.$navigationPanel.removeClass("d-flex").addClass("d-none");

            self.hideCards();

            ComponentResults.language = applicationData.language;
            ComponentResults.show(applicationData.data.items, {
                isModal: false,
                isCloseable: true,
                interactionButtonEnabled: false
            });
        }

        this.onButtonCheckClicked = function (e) {
            var $card = self.$cardsContainer.find("[card-index='" + self.currentCardIndex + "']");
            var answer = $card.find(".answer").val();

            applicationData.data.items[self.currentCardIndex].answer = answer;

            if (answer.toLowerCase() == applicationData.data.items[self.currentCardIndex].correctAnswer.toLowerCase()) {
                $card.find(".result").removeClass("d-none").html(applicationData.data.items[self.currentCardIndex].correctAnswer);
                $card.find(".result-icon").addClass("icon-correct-boxed");

                $card.find(".answer").addClass("answer-correct").prop("disabled", true);

                $card.find(".button-check").addClass("d-none");
            } else {
                $card.find(".result").removeClass("d-none").html(applicationData.data.items[self.currentCardIndex].correctAnswer);
                $card.find(".result-icon").addClass("icon-wrong-boxed");

                $card.find(".answer").addClass("answer-wrong").prop("disabled", true);

                $card.find(".button-check").addClass("d-none");
            }
        }

        this.onButtonNextClicked = function () {
            if (self.currentCardIndex < applicationData.data.items.length - 1) {
                self.previousCardIndex = self.currentCardIndex;
                self.currentCardIndex = self.currentCardIndex + 1;

                self.selectCard();
            }
        }

        this.onButtonPreviousClicked = function () {
            if (self.currentCardIndex > 0) {
                self.previousCardIndex = self.currentCardIndex;
                self.currentCardIndex = self.currentCardIndex - 1;

                self.selectCard();
            }
        }

        this.onResultsHide = function () {
            self.$activityTitle.removeClass("d-none").addClass("d-block");
            self.$navigationPanel.removeClass("d-none").addClass("d-flex");
            self.$cardsContainer.removeClass("d-none").addClass("d-flex");

            self.selectCard();
        }

        this.onResultsCompleted = function () {
            framework.widgetController.Complete();
        }

        // localization data

        var localizationData = {
            "english": {
                "seeResults": "See Results",
                "correctAnswer": "Correct Answer",
                "yourAnswer": "Your answer..."
            },
            "turkish": {
                "seeResults": "Sonuçları Görüntüleyin",
                "correctAnswer": "Doğru Cevap",
                "yourAnswer": "Cevabınız..."
            },
        };
    }

    function initializeLanguage(param) {
        _url = location.href;
        var param = applicationData.language == "turkish" ? "lang=TR_TR&autoResize=true" : "lang=EN_TR&autoResize=true";
        if (_url.indexOf(param) == -1) {
            _url += (_url.split('?')[1] ? '&' : '?') + param;
            location.href = _url;
        }
    }

    $(framework).on(Framework.ONREADY, function () {
        application = new Flashcards();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();