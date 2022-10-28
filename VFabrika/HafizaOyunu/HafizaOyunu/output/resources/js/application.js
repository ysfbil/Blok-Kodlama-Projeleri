(function() {
    var application;

    function FlippingCards() {
        var self = this;
        var $firstCard = null;
        var timerTime = 0;
        var timerIntervalId;

        self.soundsEnabled = true;

        this.initialize = function() {
            document.title = applicationData.title;

            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.header.title.value);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.on("click", self.onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");
            $headerSoundButton.on("click", self.onSoundButtonClicked);

            var $cardContainer = $("#card-container");

            self.initializeCards();

            if (applicationData.revealCardsOnStart) {
                self.disableUserIntraction();
                setTimeout(function() {
                    self.playWelcomeSound();
                    self.showCards();
                    setTimeout(function() {
                        self.hideCards();
                        self.enableUserInteraction();
                    }, applicationData.revealCardsDuration);
                }, 1000);
            } else
                self.playWelcomeSound();
        }

        this.initializeCards = function() {
            var $cardContainer = $("#card-container");
            $cardContainer.html("");

            var cards = [];
            for (let index = 0; index < applicationData.items.length; index++) {
                cards.push({
                    "type": applicationData.items[index].sourceType,
                    "text": applicationData.items[index].sourceText,
                    "image": applicationData.items[index].sourceImage,
                    "item-index": index
                });
                cards.push({
                    "type": applicationData.items[index].targetType,
                    "text": applicationData.items[index].targetText,
                    "image": applicationData.items[index].targetImage,
                    "item-index": index
                });
            }

            for (let index = cards.length - 1; index > 0; index--) {
                const j = Math.floor(Math.random() * index);
                const temp = cards[index];
                cards[index] = cards[j];
                cards[j] = temp;
            }

            var gridHeight = 1;
            if (cards.length > 2)
                gridHeight = 2;
            if (cards.length > 9)
                gridHeight = 3;

            var gridWidth = cards.length / gridHeight;

            var cardIndex = 0;
            for (var y = 0; y < gridHeight; y++) {
                $cardContainer.append("<div id='card-row" + y + "' class='card-row'></div>");
                var $cardRow = $("#card-row" + y);

                for (var x = 0; x < gridWidth; x++) {
                    $cardRow.append("<div id='card" + cardIndex + "' class='card'><div class='card-front'></div><div class='card-back'></div></div>");
                    var $card = $("#card" + cardIndex);
                    var card = cards[cardIndex];

                    $card.data("card-data", card);
                    $card.on("click", self.onCardClicked);

                    if (card["type"] == "text") {
                        var $cardBack = $($card.find(".card-back")[0]);
                        $cardBack.html(card.text);
                        console.info("card text > " + card.text);
                    } else if (card["type"] == "image") {
                        var $cardBack = $($card.find(".card-back")[0]);
                        $cardBack.html("<img src='" + framework.localPath + "/img/" + card.image + "' />");
                    }

                    cardIndex++;
                }
            }
        }

        this.onCardClicked = function(e) {
            if (timerIntervalId == undefined) {
                self.startTimer();
            }

            var $card = $(e.currentTarget);
            if (!$card.data("flipped")) {
                self.showCardBack($card);

                if (self.$firstCard == null) {
                    self.playCardSelectSound();

                    self.$firstCard = $card;
                } else {
                    if (self.$firstCard.data("card-data")["item-index"] == $card.data("card-data")["item-index"]) {
                        self.disableUserIntraction();

                        $card.data("matched", true);
                        self.$firstCard.data("matched", true);

                        self.playCardMatchSound();

                        setTimeout(function() {
                            var allMatched = true;
                            $(".card").each(function(i, card) {
                                if (!$(card).data("matched")) {
                                    allMatched = false;
                                    return false;
                                }
                            });

                            if (allMatched) {
                                self.stopTimer();

                                setTimeout(function() {
                                    self.playCompleteSound();

                                    framework.widgetController.Complete();
                                }, 1000);
                            }

                            self.$firstCard = null;
                            self.enableUserInteraction();
                        }, 800);
                    } else {

                        self.disableUserIntraction();

                        self.playCardUnmatchSound();

                        setTimeout(function() {
                            self.showCardFront(self.$firstCard);
                            self.showCardFront($card);

                            self.$firstCard = null;
                            self.enableUserInteraction();
                        }, 800);
                    }
                }
            }
        }

        this.showCardBack = function($card) {
            var $cardFront = $($card.find(".card-front")[0]);
            $cardFront.addClass("card-front-flipped");
            var $cardBack = $($card.find(".card-back")[0]);
            $cardBack.addClass("card-back-flipped");
            $card.data("flipped", true);
        }

        this.showCardFront = function($card) {
            var $cardFront = $($card.find(".card-front")[0]);
            $cardFront.removeClass("card-front-flipped");
            var $cardBack = $($card.find(".card-back")[0]);
            $cardBack.removeClass("card-back-flipped");
            $card.data("flipped", false);
        }

        this.enableUserInteraction = function() {
            $("#interaction-disabler").css("display", "none");
        }

        this.disableUserIntraction = function() {
            $("#interaction-disabler").css("display", "block");
        }

        this.startTimer = function() {
            timerIntervalId = setInterval(function() {
                timerTime++;
                self.refreshTimer();
            }, 1000);
        }

        this.refreshTimer = function() {
            var minutesStr = Math.floor(timerTime / 60).toString();
            if (minutesStr.length == 1) {
                minutesStr = "0" + minutesStr;
            }

            var secondsStr = (timerTime % 60).toString();
            if (secondsStr.length == 1) {
                secondsStr = "0" + secondsStr;
            }

            $("#header-time").html(minutesStr + ":" + secondsStr);
        }

        this.stopTimer = function() {
            if (timerIntervalId != undefined) {
                clearInterval(timerIntervalId);
                timerIntervalId = undefined;

                timerTime = 0;
            }
        }

        this.onSoundButtonClicked = function() {
            self.soundsEnabled = !self.soundsEnabled;

            $headerSoundButton = $("#header-sound-button");
            if (self.soundsEnabled) {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_on.svg')");
            } else {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_off.svg')");
            }

            self.playWelcomeSound();
        }

        this.onRestartButtonClicked = function() {
            self.disableUserIntraction();

            self.$firstCard = null;

            self.hideCards();

            self.stopTimer();
            self.refreshTimer();

            setTimeout(function() {
                self.initializeCards();

                if (applicationData.revealCardsOnStart) {
                    setTimeout(function() {
                        self.showCards();
                        setTimeout(function() {
                            self.hideCards();
                            self.enableUserInteraction();
                        }, applicationData.revealCardsDuration);
                    });
                } else
                    self.enableUserInteraction();

            }, 500);
        }

        this.showCards = function() {
            $(".card").each(function(i, card) {
                var $card = $(card);
                var $cardFront = $($card.find(".card-front")[0]);
                $cardFront.addClass("card-front-flipped");
                var $cardBack = $($card.find(".card-back")[0]);
                $cardBack.addClass("card-back-flipped");
                $card.data("flipped", true);
            });
        }

        this.hideCards = function() {
            $(".card").each(function(i, card) {
                var $card = $(card);
                var $cardFront = $($card.find(".card-front")[0]);
                $cardFront.removeClass("card-front-flipped");
                var $cardBack = $($card.find(".card-back")[0]);
                $cardBack.removeClass("card-back-flipped");
                $card.data("flipped", false);
                $card.data("matched", false);
            });
        }

        this.playWelcomeSound = function() {
            if (self.soundsEnabled) {
                var sound = new Sbt.Sound("welcome");
                sound.playSound();
            }
        }

        this.playCardSelectSound = function() {
            if (self.soundsEnabled) {
                var sound = new Sbt.Sound("card_select");
                sound.playSound();
            }
        }

        this.playCardMatchSound = function() {
            if (self.soundsEnabled) {
                var sound = new Sbt.Sound("card_match");
                sound.playSound();
            }
        }

        this.playCardUnmatchSound = function() {
            if (self.soundsEnabled) {
                var sound = new Sbt.Sound("card_not_match");
                sound.playSound();
            }
        }

        this.playCompleteSound = function() {
            if (self.soundsEnabled) {
                var sound = new Sbt.Sound("complete");
                sound.playSound();
            }
        }
    }

    function initializeLanguage(param) {
        _url = location.href;
        var param = applicationData.language == "turkish" ? "lang=TR_TR&autoResize=true" : "lang=EN_TR&autoResize=true";
        if (_url.indexOf(param) == -1) {
            _url += (_url.split('?')[1] ? '&' : '?') + param;
            location.href = _url;
        }
    }

    $(framework).on(Framework.ONREADY, function() {
        application = new FlippingCards();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();