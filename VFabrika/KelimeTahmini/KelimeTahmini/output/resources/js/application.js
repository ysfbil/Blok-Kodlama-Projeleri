/**
 * Created by Mehdi Solhan
 * Title: Hangman
 * Company: SEBIT Information & Education Technologies Inc.
 * Date: 07.07.2020
 */

(function() {
    var hangman = (function() {
        function Class(config) {
            var _hangman = this,
                _config = config || {};

            this.completed = false;

            /* Declaration of private variables
            +----------------------------------------------*/
            var lang = '';
            var life = 9;
            var wrongCount = 0
            var timerTime = 0;
            var currentQuestionNumber = 0;
            var timerIntervalId = undefined;
            var soundsEnabled = true;
            var questionNumbers = [];
            var questionOrders = [];
            var questionRemainingStars = [];
            var answer = '';
            var foundLetters = [];
            var isStart = true;

            //  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            /* Declaration of DOM references ( Performance boast )
            +----------------------------------------------*/
            var $mainContainer = $('#mainContainer');
            var $interactionDisabler = $('#interaction-disabler');
            var $alphabetContainer = null;
            var $answerContainer = null;
            var $answerBoxContainer = null;
            var $starsContainer = null;
            var $questionText = null;
            var $statuBox = null;
            var $statuBoxText = null;
            var $nextBtn = null;
            var $nextBtnText = null;

            var $resultsBg = null;
            var $resultsContainer = null;
            var $resultsTitle = null;
            var $resultsList = null;

            function createStandartDoms() {
                document.title = applicationData.title;

                // header
                $header = $("#header");

                $headerTitle = $("#header-title");
                $headerTitle.html(applicationData.header.title);

                $headerTime = $("#header-time");
                $headerTime.html("00:00");

                $headerRestartButton = $("#header-restart-button");
                $headerRestartButton.on("click", onRestartButtonClicked);

                $headerSoundButton = $("#header-sound-button");
                $headerSoundButton.on("click", onSoundButtonClicked);

                playWelcomeSound();


                showWatermark("vfabrika-stage", applicationData.language);
            }

            function createAppDoms() {
                $alphabetContainer = Sbt.utilities.Dom.addDOM("div", $mainContainer, "alphabetContainer");
                $answerContainer = Sbt.utilities.Dom.addDOM("div", $mainContainer, "answerContainer");
                $starsContainer = Sbt.utilities.Dom.addDOM("div", $answerContainer, "starsContainer");

                $resultsBg = Sbt.utilities.Dom.addDOM("div", $mainContainer, "resultsBg");
                $resultsContainer = Sbt.utilities.Dom.addDOM("div", $resultsBg, "resultsContainer");
                $resultsTitle = Sbt.utilities.Dom.addDOM("div", $resultsContainer, "resultsTitle");
                $resultsTitle.text(localizationData.interactionDescriptions[lang].results);
                $resultsList = Sbt.utilities.Dom.addDOM("div", $resultsContainer, "resultsList");

                $statuBox = Sbt.utilities.Dom.addDOM("div", $mainContainer, "statuBox", "statusBoxes");
                $nextBtn = Sbt.utilities.Dom.addDOM("div", $statuBox, "nextBtn");
                $statuBoxText = Sbt.utilities.Dom.addDOM("span", $statuBox, "statuBoxText");

                $nextBtn.off(Sbt.Actions.down).on(Sbt.Actions.down, nextQuestion);

                $answerBoxContainer = Sbt.utilities.Dom.addDOM("div", $answerContainer, "answerBoxContainer");
                Sbt.utilities.Dom.addDOM("div", $answerContainer, "", "infoSign");
                $questionText = Sbt.utilities.Dom.addDOM("span", $answerContainer, "questionText");

                var starLeftValue = 10;
                var leftValue = 0;
                var topValue = 0;

                if (localizationData.alphabet[lang].length >= 30) {
                    console.error("There is too much letter");
                } else {
                    for (var i = 0; i < localizationData.alphabet[lang].length; i++) {
                        var letter = localizationData.alphabet[lang][i];
                        Sbt.utilities.Dom.addDOM("div", $alphabetContainer, "letter_" + i, "letterBox letterBoxEnable");
                        Sbt.utilities.Dom.addDOM("span", $('#letter_' + i), "char_" + i);
                        $('#letter_' + i).attr('key', letter);
                        $('#char_' + i).text(letter);
                        $('#letter_' + i).css("left", leftValue);
                        $('#letter_' + i).css("top", topValue);
                        leftValue += 85;
                        if (i === 12) {
                            topValue = 85;
                            leftValue = 0;
                        } else if (i === 25) {
                            topValue = 170;
                            leftValue = 0;
                        }
                    }
                }
                for (var i = 0; i < life; i++) {
                    Sbt.utilities.Dom.addDOM("div", $starsContainer, "star_" + i, "stars stars_enable");
                    $('#star_' + i).css("left", starLeftValue);
                    starLeftValue += 50;
                }

                $(".letterBox").off(Sbt.Actions.down).on(Sbt.Actions.down, letterClicked); //bind letter event

            }

            //create results screen
            function setGameOver() {

                framework.widgetController.Complete();
                playCompleteSound();
                stopTimer();
                $resultsBg.css("display", "block");
                for (var i = 0; i < questionOrders.length; i++) {
                    var remainingStar = life - questionRemainingStars[i];
                    switch (lang) {
                        case "turkish":
                            var answerInResult = applicationData.items[questionOrders[i]].answer.toLocaleUpperCase('tr-TR');
                            break;
                        case "english":
                            var answerInResult = applicationData.items[questionOrders[i]].answer.toUpperCase();
                            break;
                    }
                    if (remainingStar !== 0) {
                        Sbt.utilities.Dom.addDOM("div", $resultsList, "result_" + i, "resultItem").html("<span>" + (i + 1) + ". " + applicationData.items[questionOrders[i]].questionText + "</span>" + ": " +
                            "<span>" + answerInResult + "</span>"
                        );
                        for (var k = 0; k < remainingStar; k++) {
                            Sbt.utilities.Dom.addDOM("div", $('#result_' + i), "", "resultStars");
                        }
                    } else {
                        Sbt.utilities.Dom.addDOM("div", $resultsList, "result_" + i, "resultItem").html("<span>" + (i + 1) + ". " + applicationData.items[questionOrders[i]].questionText + "</span>" + ": " +
                            "<span class='resultWrong'>" + answerInResult + "</span>"
                        );
                    }
                }
            }

            function onRestartButtonClicked() {

                life = 9;
                wrongCount = 0
                questionNumbers = [];
                questionOrders = [];
                questionRemainingStars = [];
                answer = '';
                foundLetters = [];
                isStart = true;
                timerTime = 0;
                currentQuestionNumber = 0;

                enableUserInteraction();

                //clear eveything specific to this interaction
                $mainContainer.empty();


                createAppDoms();
                getQuestion();

                clearInterval(timerIntervalId);
                stopTimer();
                refreshTimer();
                startTimer();
                playWelcomeSound();

            }

            function enableUserInteraction() {
                $interactionDisabler.css("display", "none");
            }

            function disableUserInteraction() {
                $interactionDisabler.css("display", "block");
            }

            function startTimer() {
                timerIntervalId = setInterval(function() {
                    timerTime++;
                    refreshTimer();
                }, 1000);
            }

            function refreshTimer() {
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

            function stopTimer() {
                if (timerIntervalId != undefined) {
                    clearInterval(timerIntervalId);
                    timerIntervalId = undefined;

                    timerTime = 0;
                }
            }

            function onSoundButtonClicked() {
                soundsEnabled = !soundsEnabled;

                $headerSoundButton = $("#header-sound-button");
                if (soundsEnabled) {
                    $headerSoundButton.css("background-image", "url('resources/img/theme/button_sound_on.svg')");
                } else {
                    $headerSoundButton.css("background-image", "url('resources/img/theme/button_sound_off.svg')");
                }

                if (soundsEnabled)
                    playWelcomeSound();
            }

            function playWelcomeSound() {
                if (soundsEnabled) {
                    var sound = new Sbt.Sound("welcome");
                    sound.playSound();
                }
            }

            function playCompleteSound() {
                if (soundsEnabled) {
                    var sound = new Sbt.Sound("complete");
                    sound.isModal = true;
                    sound.playSound();
                }
            }

            function getQuestion() {

                if (isStart) {
                    isStart = false;
                    for (var i = 0; i < applicationData.items.length; i++) {
                        questionNumbers[i] = i;
                    }
                }

                currentQuestionNumber = questionNumbers[Math.floor(Math.random() * questionNumbers.length)];
                questionOrders.push(currentQuestionNumber);
                removeItemFromArray(questionNumbers, currentQuestionNumber);
                $questionText.text(applicationData.items[currentQuestionNumber].questionText);
                switch (lang) {
                    case "turkish":
                        answer = applicationData.items[currentQuestionNumber].answer.toLocaleUpperCase('tr-TR');
                        break;
                    case "english":
                        answer = applicationData.items[currentQuestionNumber].answer.toUpperCase();
                        break;
                }

                if (answer.length <= 20) {
                    for (var i = 0; i < answer.length; i++) {
                        Sbt.utilities.Dom.addDOM("div", $answerBoxContainer, "answerBox_" + i, "questionBox questionChar");
                        Sbt.utilities.Dom.addDOM("span", $('#answerBox_' + i), "answerChar_" + i);
                        if (answer[i] === ' ') {
                            $('#answerBox_' + i).css("visibility", "hidden");
                        }
                    }


                    if (answer.length > 9 && answer.length <= 13) {
                        $('.questionBox').css({ width: 65, height: 65 });
                        $('.questionBox').css("margin-left", 0);
                    } else if (answer.length > 13 && answer.length <= 17) {
                        $('.questionBox').css({ width: 55, height: 55 });
                        $('.questionBox').css("margin-left", 0);
                    } else if (answer.length > 17 && answer.length <= 20) {
                        $('.questionBox').css({ width: 50, height: 50 });
                        $('.questionBox').css("margin-left", 0);
                    } else if (answer.length < 10) {
                        $('.questionBox').css({ width: 70, height: 70 });
                        $('.questionBox').css("margin-left", 5);
                    }
                } else {
                    disableUserInteraction();
                    console.error("Answer length is more than 20 letters");
                }

            }

            function removeItemFromArray(arr, value) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === value) {
                        arr.splice(i, 1);
                        break;
                    }
                }
                return arr;
            }

            function letterClicked(e) {
                $('#' + e.currentTarget.id).removeClass("letterBoxEnable");
                $('#' + e.currentTarget.id).addClass("letterBoxDisable");
                $('#' + e.currentTarget.id).off();

                var letter = $(e.currentTarget).attr('key');
                var status = false;

                for (var i = 0; i < answer.length; i++) {
                    //Checking whether letter is selected
                    if (answer[i] === letter) {
                        status = true;
                        foundLetters[i] = letter;
                        $('#answerChar_' + i).text(letter);
                    }
                }
                checkAnswer(status); //status=true means that clicked letter is correct
            }

            function checkAnswer(status) {
                //checkGameOver
                if (questionNumbers.length === 0) {
                    stopTimer();
                }

                if (answer.replace(/\s+/g, '') === foundLetters.join('')) //Check the correct answer, without spaces, with the user's response.
                {
                    disableUserInteraction();
                    $statuBoxText.text(localizationData.interactionDescriptions[lang].wellDone);
                    questionRemainingStars.push(wrongCount);
                    $statuBox.css("display", "block");
                } else {
                    if (!status) {
                        $('#star_' + wrongCount).removeClass("stars_enable");
                        $('#star_' + wrongCount).addClass("stars_disable");
                        wrongCount++;
                        if (wrongCount === 9) {
                            questionRemainingStars.push(wrongCount);
                            showCorrectAnswer();
                            $statuBoxText.text(localizationData.interactionDescriptions[lang].sorry);
                            $statuBox.css("display", "block");
                            disableUserInteraction();
                        }
                    }
                }
            }

            function showCorrectAnswer() {
                for (var i = 0; i < answer.length; i++) {
                    if (foundLetters[i] !== answer[i]) {
                        $('#answerChar_' + i).removeClass("questionChar");
                        $('#answerChar_' + i).addClass("notFoundChars");
                    }
                    $('#answerChar_' + i).text(answer[i]);
                }
            }

            function nextQuestion() {
                //checkGameOver
                if (questionNumbers.length === 0) {
                    setGameOver();
                } else {
                    $answerBoxContainer.empty();
                    wrongCount = 0;
                    foundLetters = [];

                    $statuBox.css("display", "none");
                    enableUserInteraction();

                    for (var i = 0; i < localizationData.alphabet[lang].length; i++) {
                        if (i < life) {
                            $('#star_' + i).removeClass("stars_disable");
                            $('#star_' + i).addClass("stars_enable");
                        }
                        $('#letter_' + i).removeClass("letterBoxDisable");
                        $('#letter_' + i).addClass("letterBoxEnable");
                        $('#letter_' + i).off(Sbt.Actions.down).on(Sbt.Actions.down, letterClicked); //bind letter event
                    }
                    getQuestion();
                }
            }

            function isInteger(num) { //IE does not support Number.isInteger so this method works for all browsers.
                return (num ^ 0) === num;
            }

            function init() {
                lang = applicationData.language;

                createStandartDoms();
                createAppDoms();
                getQuestion();
                startTimer();

            }

            //#region Public Method
            this.initialize = function() {
                //applicationDataSet = applicationData.items;
                init();
            };
            //#endregion
        }
        Class.Static = {
            //TODO optional
        };
        return Class;
    })();

    function initializeLanguage() {
        _url = location.href;
        var param = applicationData.language == "turkish" ? "lang=TR_TR&autoResize=true" : "lang=EN_TR&autoResize=true";
        if (_url.indexOf(param) == -1) {
            _url += (_url.split('?')[1] ? '&' : '?') + param;
            location.href = _url;
        }
    }

    /* ON READY STATE, CREATE WIDGET CLASS
    +----------------------------------------------*/
    $(framework).bind(Framework.ONREADY, function() {

        var _hangman = new hangman();
        _hangman.initialize();

        initializeLanguage();

    });
})();