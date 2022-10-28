(function () {
    var application;

    function Crossword() {
        var self = this;
        var timerTime = 0;
        var timerIntervalId;
        var soundsEnabled = true;
        //-----------------------------------------------------------------------------------------------------------------------------------//
        var _this = this,
            _SoundHints,
            _data = {},
            _trueFeedbackIds = [],
            _questionCount,
            _pageIndex = 0,
            _pagesLength = 1,
            _pages = [],
            _currentQuestionIndex,
            _gridSize,
            _totalSquareCount,
            _selectedTheme = 0,
            $_container,
            $_backgroundImage,
            $_title,
            $_whitePane,
            $_questionWrapper,
            $_questionRow,
            $_questionRow_2,
            $_flexWrapper,
            $_puzzleBlock,
            $_puzzleBlockItem,
            $_questionBlock,
            $_text,
            $_text_2,
            $_text_3,
            $_text_4,
            $_mark,
            $_clue,
            $_clueReturn,
            $_clueText,
            $_btn,
            _readingPanelController = null,
            _answerData,
            _tryCount = 0,
            _scoCompleted = false,
            _introFeedbackPlayedOnce,
            _alphabet = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ",
            _isMouseHold = false,
            _filledSquareList = [],
            _isSolveButtonActive = false,
            _firstSelectedPuzzleBlockItem = null,
            _otherSelectedPuzzleBlockItemList = [];
        timerFlag = true;
        var TurkceTemplateHelper = {
            arrayShuffle: function (arr) {
                for (var rnd, tmp, i = arr.length; i; rnd = parseInt(Math.random() * i), tmp = arr[--i], arr[i] = arr[rnd], arr[rnd] = tmp);
                return arr;
            },
            randRange: function (min, max) {
                return Math.floor(Math.random() * (parseInt(max, 10) - parseInt(min, 10) + 1)) + parseInt(min, 10);
            },
            inArray: function (needle, haystack) {
                return $.inArray(needle, haystack);
            },
            createTitle: function ($container, titleText, titleFontSize) {
                if (typeof titleText == "undefined") {
                    titleText = "";
                }
                var $titleWrapper = Sbt.utilities.Dom.addDOM("div", $container, "com_sebit_turkce_template_general_titleWrapper");
                var $titleIcon = Sbt.utilities.Dom.addDOM("span", $titleWrapper, "com_sebit_turkce_template_general_title_icon");
                var $img = Sbt.utilities.Dom.addDOM("div", $titleIcon, "com_sebit_turkce_template_general_title_img");
                var $titleContainer = Sbt.utilities.Dom.addDOM("span", $titleWrapper, "com_sebit_turkce_template_general_titleContainer");
                if (typeof titleFontSize !== "undefined") {
                    $titleContainer.css("font-size", titleFontSize);
                }

                $titleContainer.html(titleText);

                return $titleWrapper;
            },
            createScene: function ($container, titleText, titleFontSize) {
                this.createTitle($container, titleText, titleFontSize);

                var $backgroundImage = Sbt.utilities.Dom.addDOM("div", $container, "com_sebit_turkce_template_general_backgroundImage");
            },
            pagination: (function () {
                function main($container, pageCount, paginationColor) {
                    // declarations
                    var _this = this,
                        $_container = $container,
                        _pageCount = pageCount,
                        _pageIndex = 0,
                        _EVENT_PAGE_CHANGED;

                    this.unbind = function (type, selector, data, fn, one) {
                        $(_this).unbind(type, selector, data, fn, one);
                    };

                    this.bind = function (type, selector, data, fn, one) {
                        $(_this).bind(type, selector, data, fn, one);
                    };

                    this.trigger = function (type, data) {
                        $(_this).trigger(type, data);
                    };

                    Object.defineProperty(this, 'EVENT_PAGECHANGED', {
                        get: function () {
                            return _EVENT_PAGE_CHANGED;
                        },
                        set: function (value) {
                            _EVENT_PAGE_CHANGED = value;
                        },
                        enumerable: true,
                        configurable: true
                    });

                    var onNavigationButtonClicked = function (e) {

                        var direction = $(this).data("nav");
                        if (direction == "next") {
                            _pageIndex++;
                            if (_pageIndex >= _pageCount) _pageIndex = _pageCount - 1;
                        } else {
                            _pageIndex--;
                            if (_pageIndex < 0) _pageIndex = 0;
                        }

                        processPageSkip(_pageIndex);


                    }

                    var onIndicatorClicked = function () {
                        _pageIndex = Number($(this).data("slide"));
                        processPageSkip(_pageIndex);


                    }

                    var processPageSkip = function (pageIndex, withTrigger) {
                        if (typeof withTrigger == "undefined") withTrigger = true;

                        $_navNext.unbind(Sbt.Actions.click);
                        $_navPrev.unbind(Sbt.Actions.click);
                        var lastPageIndex = _pageCount - 1;

                        if (_pageIndex == 0) //FIRST PAGE
                        {
                            $_navNext.bind(Sbt.Actions.click, onNavigationButtonClicked);
                            $_navPrev.removeClass("disabled").addClass("disabled");
                            $_navNext.removeClass("disabled");

                        } else if (_pageIndex > 0 && _pageIndex < lastPageIndex) //PAGES BETWEEN
                        {
                            $_navNext.bind(Sbt.Actions.click, onNavigationButtonClicked);
                            $_navPrev.bind(Sbt.Actions.click, onNavigationButtonClicked);
                            $_navNext.removeClass("disabled");
                            $_navPrev.removeClass("disabled");
                        } else if (_pageIndex == lastPageIndex) //LAST PAGE
                        {
                            $_navPrev.bind(Sbt.Actions.click, onNavigationButtonClicked);
                            $_navPrev.removeClass("disabled");
                            $_navNext.removeClass("disabled").addClass("disabled");

                        }

                        $(".pagination .indicator").unbind(Sbt.Actions.click)
                        $(".pagination .indicator[data-slide!='" + _pageIndex + "']").bind(Sbt.Actions.click, onIndicatorClicked);
                        var selectedIndicator = $(".pagination .indicator[data-slide='" + _pageIndex + "']");
                        selectedIndicator.attr("data-active", "true");
                        $(".pagination .indicator").removeClass("active");
                        selectedIndicator.addClass("active");

                        setPaginationColor(paginationColor);

                        if (withTrigger) _this.trigger(_EVENT_PAGE_CHANGED, _pageIndex);

                    }

                    var setPaginationColor = function (color) {
                        var colorName = null;
                        switch (color) {
                            case "black":
                                colorName = color;
                                break;
                        }

                        if (colorName != null) {
                            $('.pagination.indicators .indicator .circle').addClass(color);
                            $('.pagination.nav').addClass(color);
                        }
                    }

                    //publicfunction
                    this.show = function () {

                        _EVENT_PAGE_CHANGED = "EVENT_PAGE_CHANGED";
                        _pageIndex = 0;
                        //console.info(_id);
                        $(".pagination").remove();
                        if (_pageCount > 1) {


                            var $indicatorsContainer = Sbt.utilities.Dom.addDOM("span", $_container, "com_sebit_turkce_template_bosluk_doldurma_pagination_indicators", "pagination indicators");

                            $_navPrev = Sbt.utilities.Dom.addDOM("div", $indicatorsContainer, "com_sebit_turkce_template_bosluk_doldurma_pagination_nav_prev", "pagination nav prev");
                            $_navPrev.attr("data-nav", "prev");


                            //var indicators = [];
                            for (var i = 0; i < _pageCount; i++) {
                                var $indicator = Sbt.utilities.Dom.addDOM("span", $indicatorsContainer, "com_sebit_turkce_template_bosluk_doldurma_pagination_indicator_" + (i), "indicator");
                                var $indicatorCircle = Sbt.utilities.Dom.addDOM("div", $indicator, "com_sebit_turkce_template_bosluk_doldurma_pagination_indicator_circle" + (i), "circle");
                                $indicator.attr("data-slide", i);
                                $indicator.attr("data-active", "false");
                                if (i == 0) {
                                    $indicator.addClass("active", "true");
                                }
                                //indicators.push($indicator);
                            };

                            $_navNext = Sbt.utilities.Dom.addDOM("span", $indicatorsContainer, "com_sebit_turkce_template_bosluk_doldurma_pagination_nav_next", "pagination nav next");
                            $_navNext.attr("data-nav", "next");


                            processPageSkip(0);

                        }
                    };

                    this.reset = function () {
                        _pageIndex = 0;
                        if (_pageCount > 1) {
                            processPageSkip(_pageIndex, false);
                        }

                    }

                }

                return main;
            })(),
            readingPanel: function (container, panelData) {
                // EXAMPLE DATA SET
                //            readingPanel : {
                //                text: "text",
                //                position: "bottom",
                //                title: "title",
                //                autoOpen: false,
                //                handle: {
                //                    textColor: "white",
                //                    backgroundColor: "#1179a7",
                //                    width: 120,
                //                    height: 20,
                //                    align: "middle"
                //                },
                //                content: {
                //                    textColor: "black",
                //                    backgroundColor: "white",
                //                    width: 450,
                //                    height: 200
                //                },
                //				  standartTextFormat: true // for p padding
                //            }
                var containerHeight = container.height();
                var containerWidth = container.width();

                var readingPanel = Sbt.utilities.Dom.addDOM("div", container, "readingPanel", "readingPanel");
                var readingPanelDrag = Sbt.utilities.Dom.addDOM("div", readingPanel, "readingPanelDrag", "readingPanelDrag");
                var readingPanelHandle = Sbt.utilities.Dom.addDOM("div", readingPanelDrag, "readingPanelHandle", "readingPanelHandle");
                var readingPanelTextContainer = Sbt.utilities.Dom.addDOM("div", readingPanelDrag, "readingPanelTextContainer", "readingPanelTextContainer");
                var readingPanelText = Sbt.utilities.Dom.addDOM("div", readingPanelTextContainer, "readingPanelText", "readingPanelText");

                // TITLE AND TEXT
                if (typeof panelData.title == "undefined" || panelData.title == "") {
                    panelData.title = "Okuma Metni";
                }

                if (typeof panelData.standartTextFormat == "boolean") {
                    readingPanelText.addClass("standartTextFormat");
                }

                readingPanelHandle.text(panelData.title);
                readingPanelText.html(panelData.text);

                if (typeof panelData.autoOpen == "undefined") {
                    panelData.autoOpen = true;
                }

                // CONTENT
                if (typeof panelData.content == "undefined") {
                    panelData.content = {};
                }

                if (typeof panelData.content.height == "undefined" || panelData.content.height == "") {
                    panelData.content.height = 250;
                }

                if (typeof panelData.content.width == "undefined" || panelData.content.width == "") {
                    panelData.content.width = 475;
                }

                if (typeof panelData.content.backgroundColor == "undefined" || panelData.content.backgroundColor == "") {
                    panelData.content.backgroundColor = "#ffffff";
                }

                if (typeof panelData.content.textColor == "undefined" || panelData.content.textColor == "") {
                    panelData.content.textColor = "#000000";
                }

                $("#readingPanelDrag").css("height", panelData.content.height);
                $("#readingPanel").css("height", panelData.content.height);
                $("#readingPanelTextContainer").css("max-height", panelData.content.height - 10);

                $("#readingPanelDrag").css("width", panelData.content.width);
                $("#readingPanel").css("width", panelData.content.width);

                $("#readingPanelDrag").css("background-color", panelData.content.backgroundColor);

                $("#readingPanelDrag").css("color", panelData.content.textColor);

                // HANDLE
                if (typeof panelData.handle == "undefined") {
                    panelData.handle = {};
                }

                if (typeof panelData.handle.height == "undefined" || panelData.handle.height == "") {
                    panelData.handle.height = 20;
                }

                if (typeof panelData.handle.width == "undefined" || panelData.handle.width == "") {
                    panelData.handle.width = 169;
                }

                if (typeof panelData.handle.backgroundColor == "undefined" || panelData.handle.backgroundColor == "") {
                    panelData.handle.backgroundColor = "#1179a7";
                }

                if (typeof panelData.handle.textColor == "undefined" || panelData.handle.textColor == "") {
                    panelData.handle.textColor = "#ffffff";
                }

                $("#readingPanelHandle").css("height", panelData.handle.height + "px");
                $("#readingPanelHandle").css("margin-top", -(panelData.handle.height + 5) + "px");

                $("#readingPanelHandle").css("width", panelData.handle.width + "px");

                $("#readingPanelHandle").css("background-color", panelData.handle.backgroundColor);

                $("#readingPanelHandle").css("color", panelData.handle.textColor);

                // POSITION AND ALIGN
                if (typeof panelData.position == "undefined" || panelData.position == "") {
                    panelData.position = "bottom";
                }

                if (typeof panelData.handle.align == "undefined" || panelData.handle.align == "") {
                    panelData.handle.align = "middle";
                }

                switch (panelData.position) {
                    case "left":
                        $("#readingPanelDrag").css("border-top-right-radius", "5px");
                        $("#readingPanelDrag").css("border-bottom-right-radius", "5px");

                        $("#readingPanel").css("width", ((panelData.content.width * 2) - panelData.handle.height));
                        $("#readingPanel").css("left", -(panelData.content.width - panelData.handle.height + 40));
                        $("#readingPanelTextContainer").css("padding-left", 40);

                        $("#readingPanel").css("top", (containerHeight / 2) - (panelData.content.height / 2));

                        $("#readingPanelHandle").css("transform", "rotate(90deg)");
                        $("#readingPanelHandle").css("left", panelData.content.width - panelData.handle.height - 7.5);
                        $("#readingPanelHandle").css("top", ((panelData.content.height / 2) + (panelData.handle.height / 2)));
                        break;
                    case "right":
                        $("#readingPanelDrag").css("border-top-left-radius", "5px");
                        $("#readingPanelDrag").css("border-bottom-left-radius", "5px");

                        $("#readingPanel").css("width", ((panelData.content.width * 2) + panelData.handle.height));
                        $("#readingPanel").css("left", containerWidth - panelData.content.width - panelData.handle.height);
                        $("#readingPanelDrag").css("left", (panelData.content.width + panelData.handle.height));

                        $("#readingPanel").css("top", (containerHeight / 2) - (panelData.content.height / 2));

                        $("#readingPanelHandle").css("transform", "rotate(-90deg)");
                        $("#readingPanelHandle").css("left", -(((panelData.handle.height + 5) / 2) + (panelData.handle.width / 2)));
                        $("#readingPanelHandle").css("top", ((panelData.content.height / 2) + (panelData.handle.height + 5 / 2)));
                        break;
                    case "bottom":
                    default:
                        $("#readingPanelDrag").css("border-top-left-radius", "5px");
                        $("#readingPanelDrag").css("border-top-right-radius", "5px");

                        $("#readingPanel").css("height", ((panelData.content.height * 2) + panelData.handle.height));
                        $("#readingPanel").css("top", containerHeight - panelData.content.height - panelData.handle.height - 80);
                        $("#readingPanelDrag").css("top", (panelData.content.height + panelData.handle.height));

                        $("#readingPanel").css("left", (containerWidth / 2) - (panelData.content.width / 2));

                        $("#readingPanelHandle").css("top", 0);

                        switch (panelData.handle.align) {
                            case "left":
                                $("#readingPanelHandle").css("left", ((parseInt($("#readingPanelDrag").css("width")) / 4) - (parseInt($("#readingPanelHandle").css("width")) / 2)) + "px");
                                break;
                            case "right":
                                $("#readingPanelHandle").css("left", ((parseInt($("#readingPanelDrag").css("width")) - parseInt($("#readingPanelDrag").css("width")) / 4) - (parseInt($("#readingPanelHandle").css("width")) / 2)) + "px");
                                break;
                            case "middle":
                            default:
                                $("#readingPanelHandle").css("left", (($("#readingPanelDrag").outerWidth() - $("#readingPanelHandle").outerWidth()) / 2) + "px");
                                break;
                        }
                        break;
                }


                // RENDER
                var _readingPanelController = new Sbt.Swipe({
                    containerID: "readingPanel",
                    dragID: "readingPanelDrag",
                    handleID: "readingPanelHandle",
                    draggableContent: false
                });

                if (panelData.autoOpen) {
                    _readingPanelController.Open();
                }

                var _readingPanelStateChanged = function (bool) {
                    // Android tabletlerde textarea seÃ§iliyken swipe'a tÄ±klanÄ±rsa input blur olmuyordu. Bu sebepten blur iÃ§in yazÄ±ldÄ±. @muammer
                    var inputs = container.find("input[type='text']").toArray();
                    var textareas = container.find("textarea").toArray();

                    inputs.forEach(function (element) {
                        $(element).blur();
                    })

                    textareas.forEach(function (element) {
                        $(element).blur();
                    })
                }

                $(_readingPanelController).off(Sbt.Swipe.Event.CHANGE_STATE, _readingPanelStateChanged).on(Sbt.Swipe.Event.CHANGE_STATE, _readingPanelStateChanged);

                return _readingPanelController;
            },

            /**
             * @description This function change objects background default container is setted #com_sebit_turkce_template_general_backgroundImage
             * @param $container jquery Dom object.
             * @param path image path to relative activity object.
             * @param options use for overdesign purpose only.
             * @author Berk SARMAÅžIK
             */
            setBackgroundImage: function ($container, path, options) {
                if ($container == undefined || $container == null) {
                    $container = $("#com_sebit_turkce_template_general_backgroundImage").first();
                }

                var $widgetBodyContainer = $("#" + Sbt.GlobalOptions.framework.widgetBodyContainer + " div").first();
                var $widgetTitleContainer = $("#com_sebit_turkce_template_general_titleWrapper").first();

                $widgetBodyContainer.css("background-image", 'url("' + path + '")');
                $container.css("background", 'transparent');
                $widgetTitleContainer.css("background-color", 'rgba(0,0,0,0.4)');

                if (options == undefined || options == null) {
                    $widgetBodyContainer.css("background-position", "bottom");
                }
            },

            /**
             * @description This function change to pagination color. Color css class must be defined in helper.css for change.
             * @param color pagination color css class name
             * @author Muammer YILMAZ
             */

            setPaginationColor: function (color) {

            }

        }
        //-----------------------------------------------------------------------------------------------------------------------------------//
        this.initialize = function () {
            document.title = applicationData.title;

            // header
            $header = $("#header");
         
            $headerTitle = $("#header-title");
            $headerTitle.html(applicationData.header.title);

            $headerTime = $("#header-time");
            $headerTime.html("00:00");

            $headerRestartButton = $("#header-restart-button");
            $headerRestartButton.on("click", self.onRestartButtonClicked);

            $headerSoundButton = $("#header-sound-button");
            $headerSoundButton.on("click", self.onSoundButtonClicked);

            self.playWelcomeSound();

            $(Sbt.NotifySoundController).on(Sbt.NotifySoundController.EVENT_HIDE, onNotifySoundHide);

            //-----------------------------------------------------------------------------------------------------------------------------------//


            _data = applicationData;
            _pages = JSON.parse(JSON.stringify(_data.pages)); //clone array for not making a pointer array
            _pagesLength = (_pages.length);
            _scoCompleted = false;
            _pageIndex = 0;
            _introFeedbackPlayedOnce = false;
            $_container = $("#turkceTemplateWrapper");

            if (_data.randomizeQuestions) {
                shuffleQuestions();
            }

            if (_data.isSolveButtonActive) {
                _isSolveButtonActive = true;
            }

            _answerData = {};
            _answerData.pages = _pages;
            _gridSize = 13;
            _SoundHints = _data.soundHints;
            _totalSquareCount = _gridSize * _gridSize;

            resetAnswerData();
            scoStart();
        }

        var shuffleQuestions = function () {
            for (var i = 0, len = _pagesLength; i < len; i++) {
                _pages[i].questions = TurkceTemplateHelper.arrayShuffle(_pages[i].questions);
            }
        };

        var resetAnswerData = function () {
            for (var i = 0, len = _answerData.pages.length; i < len; i++) {
                for (var j = 0, lenj = _answerData.pages[i].questions.length; j < lenj; j++) {
                    _answerData.pages[i].questions[j].completed = false;
                    _answerData.pages[i].questions[j].userTries = 0;
                    _answerData.pages[i].questions[j].isUserAnswerTrue = false;
                }
            }
        };

        var scoStart = function () {
            //_tryCount = 0;

            if (typeof _data.intro_feedback_id !== "undefined" && _introFeedbackPlayedOnce == false) {
                giveFeedback(_data.intro_feedback_id);
                _introFeedbackPlayedOnce = true;
            }
            createDoms();

            for (var i = 0; i < _data.pages[0].questions.length; i++) {
                _data.pages[0].questions[i].correct_answer = turkishUpperCase(_data.pages[0].questions[i].correct_answer);
                getRandomPuzzleItem(Math.random() <= 0.5, trimSpace(_data.pages[0].questions[i].correct_answer).length, trimSpace(_data.pages[0].questions[i].correct_answer));
            }

            if (_data.selectedTheme != undefined || _data.selectedTheme != null) {
                _selectedTheme = _data.selectedTheme;
            }

            setBackground(_selectedTheme);
        };

        var restartActivity = function (event, dontPlayIntroSound) {
            timerFlag = true;
            self.stopTimer();
            self.refreshTimer();

            if (_readingPanelController != null) {
                $("#readingPanelTextContainer").animate({
                    scrollTop: 0
                }, "fast");
                _readingPanelController.Close();
            }

            _pages = [];
            _pages = JSON.parse(JSON.stringify(_data.pages)); //clone array for not making a pointer array
            _pageIndex = 0;
            if (dontPlayIntroSound == null || dontPlayIntroSound == false) {
                _introFeedbackPlayedOnce = false;
            }
            _firstSelectedPuzzleBlockItem = null;
            _otherSelectedPuzzleBlockItemList = [];

            if (_data.randomizeQuestions) {
                shuffleQuestions();
            }

            _answerData = {};
            _answerData.pages = _pages;
            _filledSquareList = [];

            resetAnswerData();
            scoStart();
        };

        var createDoms = function () {
            if (typeof $_backgroundImage != "undefined") $_backgroundImage.remove();
            if (typeof $_title != "undefined") $_title.remove();

            _questionCount = _pages[_pageIndex].questions.length;
            $_container.addClass("blue", _data.titleFontSize);
            $_container.addClass("com_sebit_turkce_template_general");

            TurkceTemplateHelper.createScene($_container, _data.title);
            $_backgroundImage = $("#com_sebit_turkce_template_general_backgroundImage");
            $_title = $("#com_sebit_turkce_template_general_titleWrapper");

            if (typeof $_questionWrapper != "undefined") $_questionWrapper.empty();
            $_whitePane = Sbt.utilities.Dom.addDOM("div", $_container, "com_sebit_turkce_template_bulmaca_whitePane");
            $_questionWrapper = Sbt.utilities.Dom.addDOM("div", $_whitePane, "questionWrapper");
            $_flexWrapper = Sbt.utilities.Dom.addDOM("div", $_questionWrapper, "flexWrapper");
            $_puzzleBlock = Sbt.utilities.Dom.addDOM("div", $_flexWrapper, "puzzleBlock", "puzzleBlock com_sebit_turkce_template_general_background_words");
            $_questionBlock = Sbt.utilities.Dom.addDOM("div", $_flexWrapper, "questionBlock", "questionBlock");

            for (var i = 0; i < _questionCount; i++) {
                _pages[_pageIndex].questions[i].questionIndex = i;

                if (typeof _pages[_pageIndex].questions[i].true_feedback_ids != "undefined") {
                    _trueFeedbackIds.push(_pages[_pageIndex].questions[i].true_feedback_ids[0]);
                }

                $_questionRow = Sbt.utilities.Dom.addDOM("div", $_questionBlock, "questionRow" + i, "questionRow whiteBox");


                $_mark = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionMark" + i, "questionMark");
                $_text = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionText" + i, "questionText");

                if (applicationData.soundHints) {
                    $_questionRow.css("cursor", "pointer");
                    $_text.css("cursor", "pointer");
                }

                if (applicationData.normalHints && !applicationData.soundHints) {
                    $_questionRow.css("cursor", "pointer");
                    $_text.css("cursor", "pointer");
                }
                else if (!applicationData.normalHints) {
                    $_questionRow.css("cursor", "default");
                    $_text.css("cursor", "default");
                }
            
                $_clue = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionClue" + i, "questionClue");
                $_clueReturn = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionClueReturn" + i, "questionClueReturn");
                $_clueText = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionClueText" + i, "questionClueText");

                $_text_2 = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionText_2" + i, "questionText");
                $_text_3 = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionText_3" + i, "questionText");
                $_text_4 = Sbt.utilities.Dom.addDOM("div", $_questionRow, "questionText_4" + i, "questionText");


                var questionNum;
                if (_pageIndex == 0) {
                    questionNum = i + 1;
                }



                $_clueText.css("width", parseInt($_questionRow.css("width")) - 1);

                $_clue.css("height", $_questionRow.css("height"));

                $_clueReturn.css("height", $_questionRow.css("height"));
                //$_mark.css("height", $_questionRow.css("height"));
                $_clueText.css("height", $_questionRow.css("height"));
                $_clueText.css("line-height", parseInt($_questionRow.css("height")) + "px");

                var tempClue = "";

                for (var k = 0; k < _pages[_pageIndex].questions[i].correct_answer.length; k++) {
                    if (k == 0) {
                        tempClue += turkishUpperCase(_pages[_pageIndex].questions[i].correct_answer.charAt(k)) + " ";
                    } else {
                        if (_pages[_pageIndex].questions[i].correct_answer.charAt(k).toString() == " ") {
                            tempClue += "&nbsp ";
                        } else {
                            tempClue += "_ ";
                        }
                    }
                }



                if (_SoundHints) {
                    $_text.html('<div id="clueStyle">' + tempClue + '</div>');
                } else {
                    $_text.html(_pages[_pageIndex].questions[i].text);
                }




                $_clueText.html(tempClue);
                //$_text.html(_pages[_pageIndex].questions[i].text);
                //$_text.html('<div id="clueStyle">'+tempClue+'</div>');
                $_text_3.html(_pages[_pageIndex].questions[i].text);
                $_text_2.html('<div id="clueStyle">' + tempClue + '</div>');
                $_text_4.html(turkishUpperCase(_pages[_pageIndex].questions[i].correct_answer));
                $_text_2.css("display", "none");
                $_text_3.css("display", "none");
                $_text_4.css("display", "none");
                $_clueText.hide();

                $_clueReturn.hide();


                if (_SoundHints) {
                    $($_questionRow).bind(Sbt.Actions.click, playHintSound);
                } else {
                    if (applicationData.normalHints) {
                        $($_questionRow).bind(Sbt.Actions.click, clickQuestion);
                    }
                }



                $($_clue).bind(Sbt.Actions.down, questionClueIconMouseDown);
                $($_clueReturn).bind(Sbt.Actions.down, questionClueTextMouseDown);
                //$($_clueText).bind(Sbt.Actions.down, questionClueTextMouseDown);


            }

            for (var j = 0; j < _totalSquareCount; j++) {
                $_puzzleBlockItem = Sbt.utilities.Dom.addDOM("div", $_puzzleBlock, "puzzleBlockItem" + j, "puzzleBlockItem");
                $_puzzleBlockItem.html(getRandomLetter());
            }

            if (_isSolveButtonActive) {
                $_btn = Sbt.utilities.Dom.addDOM("input", $_questionBlock, "btn", "btn widget-standart-button");
                $_btn.attr("value", "ÇÖZÜM");
                $($_btn).bind(Sbt.Actions.down, solveButtonMouseDown);
            }

            $($_puzzleBlock).bind(Sbt.Actions.down, puzzleBlockMouseDown);
            $($_puzzleBlock).bind(Sbt.Actions.up, puzzleBlockMouseUp);
            $($_puzzleBlock).bind(Sbt.Actions.move, puzzleBlockItemMouseMove);


            if (typeof _data.readingPanel != "undefined" && _readingPanelController == null) {
                _readingPanelController = TurkceTemplateHelper.readingPanel($_container, _data.readingPanel);
            }

        }

        var clickQuestion = function () {

            if (this.children[1].children.length == 0) {
                for (var k = 0; k < _questionCount; k++) {
                    $("#questionRow" + k).css("height", "56px");
                    $("#questionRow" + k)[0].children[1].innerHTML = $("#questionRow" + k)[0].children[6].innerHTML;
                    $($("#questionRow" + k)[0].children[0]).css("top", "20px");
                    $($("#questionRow" + k)[0].children[0]).css("transform", "rotate(0deg)");
                    $($("#questionRow" + k)[0].children[0]).css("-webkit-transform", "rotate(0deg)");
                    $($("#questionRow" + k)[0].children[0]).css("-moz-transform", "rotate(0deg)");
                    $($("#questionRow" + k)[0].children[0]).css("-ms-transform", "rotate(0deg)");
                    $($("#questionRow" + k)[0].children[0]).css("-o-transform", "rotate(0deg)");
                }
                this.children[1].innerHTML = this.children[6].innerHTML + "<br><br>" + '<div id="clueStyle">' + this.children[5].innerHTML + '</div>'
                $(this).css("height", "86px");
                $(this.children[0]).css("top", "35px");
                $(this.children[0]).css("transform", "rotate(90deg)");
                $(this.children[0]).css("-webkit-transform", "rotate(90deg)");
                $(this.children[0]).css("-moz-transform", "rotate(90deg)");
                $(this.children[0]).css("-ms-transform", "rotate(90deg)");
                $(this.children[0]).css("-o-transform", "rotate(90deg)");

            } else if (this.children[1].children.length == 3) {
                this.children[1].innerHTML = this.children[6].innerHTML;
                $(this).css("height", "56px");
                $(this.children[0]).css("top", "20px");
                $(this.children[0]).css("transform", "rotate(0deg)");
                $(this.children[0]).css("-webkit-transform", "rotate(0deg)");
                $(this.children[0]).css("-moz-transform", "rotate(0deg)");
                $(this.children[0]).css("-ms-transform", "rotate(0deg)");
                $(this.children[0]).css("-o-transform", "rotate(0deg)");

            }

        };

        var questionClueIconMouseDown = function (event) {
            for (var i = 0; i < $(event.currentTarget).parent().children().length; i++) {
                if ($(event.currentTarget).parent().children()[i].id.slice(0, -1) == "questionClueText") {
                    $($(event.currentTarget).parent().children()[i]).show();
                    /*var clueTimeOut = setTimeout(function(clueEvent) {
                        questionClueTextMouseDown(clueEvent, clueTimeOut);
                    }, 3000, event);*/
                } else if ($(event.currentTarget).parent().children()[i].id.slice(0, -1) == "questionClueReturn") {
                    $($(event.currentTarget).parent().children()[i]).show();
                } else {
                    $($(event.currentTarget).parent().children()[i]).hide();
                }

            }
        }

        var questionClueTextMouseDown = function (event, timeOut) {
            //clearTimeout(timeOut);
            for (var i = 0; i < $(event.currentTarget).parent().children().length; i++) {
                if ($(event.currentTarget).parent().children()[i].id.slice(0, -1) != "questionClueText") {
                    if ($(event.currentTarget).parent().children()[i].id.slice(0, -1) == "questionClueReturn") {
                        $($(event.currentTarget).parent().children()[i]).hide();
                    } else {
                        $($(event.currentTarget).parent().children()[i]).show();
                    }
                } else {
                    $($(event.currentTarget).parent().children()[i]).hide();
                }

            }
        }

        var solveButtonMouseDown = function (event) {
            var tempArrayCount = 0;
            for (var i = 0; i < _pages[_pageIndex].questions.length; i++) {
                var _tempAnswerArray = [];
                for (var j = 0; j < _pages[_pageIndex].questions[i].correct_answer.length; j++) {
                    _tempAnswerArray.push($("#puzzleBlockItem" + _filledSquareList[tempArrayCount]));
                    tempArrayCount++;
                }
                checkCorrectAndCleanPuzzleBlockItems(_tempAnswerArray);
                _pages[_pageIndex].questions[i].completed = true;

            }
            completeControl();
        };

        var puzzleBlockItemMouseMove = function (event) {
            if (_isMouseHold) {
                if (framework.utilities.Navigator.isDesktop.iPad() || framework.utilities.Navigator.isMobile.iPad() || framework.utilities.Navigator.isDesktop.Android() || framework.utilities.Navigator.isMobile.Android()) {
                    if (getAcceptedGridPuzzleBlockItemId(_firstSelectedPuzzleBlockItem, getIdCountFromPuzzleBlockItem(Sbt.utilities.Dom.elementBelowMouse(event)))) {
                        $(Sbt.utilities.Dom.elementBelowMouse(event)).addClass("puzzleBlockItemSelected");
                    } else {
                        if (getIdCountFromPuzzleBlockItem(Sbt.utilities.Dom.elementBelowMouse(event)) == _otherSelectedPuzzleBlockItemList[_otherSelectedPuzzleBlockItemList.length - 2]) {
                            $("#puzzleBlockItem" + _otherSelectedPuzzleBlockItemList[_otherSelectedPuzzleBlockItemList.length - 1]).removeClass("puzzleBlockItemSelected");
                            _otherSelectedPuzzleBlockItemList.pop();
                        }
                    }
                } else {
                    if (getAcceptedGridPuzzleBlockItemId(_firstSelectedPuzzleBlockItem, getIdCountFromPuzzleBlockItem(event.target))) {
                        $(event.target).addClass("puzzleBlockItemSelected");
                    } else {
                        if (getIdCountFromPuzzleBlockItem(event.target) == _otherSelectedPuzzleBlockItemList[_otherSelectedPuzzleBlockItemList.length - 2]) {
                            $("#puzzleBlockItem" + _otherSelectedPuzzleBlockItemList[_otherSelectedPuzzleBlockItemList.length - 1]).removeClass("puzzleBlockItemSelected");
                            _otherSelectedPuzzleBlockItemList.pop();
                        }
                    }
                }
            }
        };

        var puzzleBlockMouseDown = function (event) {
            if (timerFlag) {
                self.startTimer();
                timerFlag = false;
            }

            if (framework.utilities.Navigator.isDesktop.iPad() || framework.utilities.Navigator.isMobile.iPad() || framework.utilities.Navigator.isDesktop.Android() || framework.utilities.Navigator.isMobile.Android()) {
                _firstSelectedPuzzleBlockItem = getIdCountFromPuzzleBlockItem(Sbt.utilities.Dom.elementBelowMouse(event));
            } else {
                _firstSelectedPuzzleBlockItem = getIdCountFromPuzzleBlockItem(event.target);
            }
            _isMouseHold = true;
        };

        var puzzleBlockMouseUp = function (event) {
            checkCorrectAndCleanPuzzleBlockItems();
            _isMouseHold = false;
            _otherSelectedPuzzleBlockItemList = [];
        };

        var checkCorrectAndCleanPuzzleBlockItems = function (selectedArray) {

            var _tempSelectedText = [];
            var _tempSelected = [];

            if (selectedArray != undefined && selectedArray != null) {
                _tempSelected = selectedArray;
                for (var m = 0; m < _tempSelected.length; m++) {

                    _tempSelectedText.push($(_tempSelected[m]).text());

                }

            } else {
                for (var i = 0; i < _totalSquareCount; i++) {
                    if ($("#puzzleBlockItem" + i).hasClass("puzzleBlockItemSelected") && $("#puzzleBlockItem" + i).hasClass("puzzleBlockItem")) {
                        _tempSelectedText.push($("#puzzleBlockItem" + i).text());
                        _tempSelected.push($("#puzzleBlockItem" + i));
                    }
                    $("#puzzleBlockItem" + i).removeClass("puzzleBlockItemSelected");
                }
            }

            if (_tempSelectedText.length > 2) {

                for (var k = 0; k < _pages[_pageIndex].questions.length; k++) {

                    if (turkishUpperCase(trimSpace(_pages[_pageIndex].questions[k].correct_answer)) == _tempSelectedText.toString().replace(/,/g, "")) {

                        if (selectedArray == undefined && selectedArray == null) {
                            playNotify(true);
                        }

                        _currentQuestionIndex = _pages[_pageIndex].questions[k].questionIndex;
                        _pages[_pageIndex].questions[k].completed = true;

                        /*$("#questionMark" + _currentQuestionIndex).addClass("questionMarkCorrect" + (_currentQuestionIndex + 1));
                        $("#questionClue" + _currentQuestionIndex).hide();
                        $("#questionClueReturn" + _currentQuestionIndex).hide();
                        $("#questionClueText" + _currentQuestionIndex).hide();
                        $("#questionMark" + _currentQuestionIndex).show();
                        $("#questionText" + _currentQuestionIndex).show();*/

                        $("#questionRow" + _currentQuestionIndex).addClass("questionMarkCorrect" + (_currentQuestionIndex + 1));
                        $("#questionMark" + _currentQuestionIndex).css("background-image", 'url(' + framework.localPath + 'img/sevronbeyaz.svg');
                        $("#questionMark" + _currentQuestionIndex).css("top", "20px");
                        $("#questionMark" + _currentQuestionIndex).css("transform", "rotate(0deg)");
                        $("#questionMark" + _currentQuestionIndex).css("-webkit-transform", "rotate(0deg)");
                        $("#questionMark" + _currentQuestionIndex).css("-moz-transform", "rotate(0deg)");
                        $("#questionMark" + _currentQuestionIndex).css("-ms-transform", "rotate(0deg)");
                        $("#questionMark" + _currentQuestionIndex).css("-o-transform", "rotate(0deg)");
                        $("#questionRow" + _currentQuestionIndex).css("height", "56px");
                        $("#questionRow" + _currentQuestionIndex).css("cursor", "auto");
                        $("#questionText" + _currentQuestionIndex).css("cursor", "auto");

                        if (applicationData.soundHints) {
                            $("#questionRow" + _currentQuestionIndex)[0].children[1].innerHTML = $("#questionRow" + _currentQuestionIndex)[0].children[7].innerHTML;
                        } else {
                            $("#questionRow" + _currentQuestionIndex)[0].children[1].innerHTML = $("#questionRow" + _currentQuestionIndex)[0].children[6].innerHTML;
                        }

                        //$("#questionRow"+_currentQuestionIndex)[0].children[1].innerHTML = $("#questionRow"+_currentQuestionIndex)[0].children[6].innerHTML;
                        //$("#questionRow"+_currentQuestionIndex)[0].children[1].innerHTML = $("#questionRow"+_currentQuestionIndex)[0].children[7].innerHTML;


                        if (applicationData.normalHints && !applicationData.soundHints) {
                            $("#questionRow" + _currentQuestionIndex).unbind(Sbt.Actions.click, clickQuestion);
                        }

                        if (applicationData.soundHints) {
                            $("#questionRow" + _currentQuestionIndex).unbind(Sbt.Actions.click, playHintSound);
                        }



                        for (var j = 0; j < _tempSelected.length; j++) {

                            _tempSelected[j].addClass("puzzleBlockItemCorrect" + (_currentQuestionIndex + 1));
                            _tempSelected[j].removeClass("puzzleBlockItem");
                            _tempSelected[j].unbind(Sbt.Actions.move);
                        }
                        break;

                    } else {
                        if (k + 1 == _data.pages[0].questions.length) {
                            if (selectedArray == undefined && selectedArray == null) {
                                playNotify(false);
                            }

                        }
                    }
                }
            }
        };

        var getRandomPuzzleItem = function (isVertical, wordLength, word) {
            var _tempRow;
            var _tempColumn;
            var _tempPuzzleItemPoint;
            var _isWordPlaceable = true;

            if (isVertical) {
                _tempRow = Math.floor(Math.random() * _gridSize);
                _tempColumn = Math.floor(Math.random() * (_gridSize - wordLength));
            } else {
                _tempRow = Math.floor(Math.random() * (_gridSize - wordLength));
                _tempColumn = Math.floor(Math.random() * _gridSize);
            }

            _tempPuzzleItemPoint = (_tempColumn * _gridSize) + _tempRow;

            for (var j = 0; j < wordLength; j++) {
                for (var k = 0; k < _filledSquareList.length; k++) {
                    if (isVertical) {
                        if (_tempPuzzleItemPoint + (j * _gridSize) == _filledSquareList[k]) {
                            _isWordPlaceable = false;
                            break;
                        }
                    } else {
                        if (_tempPuzzleItemPoint + j == _filledSquareList[k]) {
                            _isWordPlaceable = false;
                            break;
                        }
                    }
                }
            }

            if (!_isWordPlaceable) {
                if (_tryCount < 10) {
                    _tryCount++;
                    getRandomPuzzleItem(isVertical, wordLength, word);
                } else {
                    _tryCount = 0;
                    restartActivity(null, true);
                }
            } else {
                _tryCount = 0;
                for (var i = 0; i < wordLength; i++) {
                    if (isVertical) {
                        $("#puzzleBlockItem" + (_tempPuzzleItemPoint + (i * _gridSize))).html(word[i]);
                        _filledSquareList.push(_tempPuzzleItemPoint + (i * _gridSize));
                    } else {
                        $("#puzzleBlockItem" + (_tempPuzzleItemPoint + i)).html(word[i]);
                        _filledSquareList.push(_tempPuzzleItemPoint + i);
                    }
                }
            }
        };

        var giveFeedback = function (id) {
            /*Sbt.FeedbackRichTextController.id = id;
            Sbt.FeedbackRichTextController.show();*/
        };

        var playNotify = function (isCorrect) {
            if (soundsEnabled) {
                Sbt.NotifySoundController.isCorrect = isCorrect;
                Sbt.NotifySoundController.soundType = 1;
                Sbt.NotifySoundController.show();
            }

        };

        var onNotifySoundHide = function (event, isCorrect) {
            if (isCorrect) {
                if (typeof _data.pages[_pageIndex].questions[_currentQuestionIndex].true_feedback_ids == "undefined") {
                    completeControl();
                } else {
                    if (_data.pages[_pageIndex].questions[_currentQuestionIndex].true_feedback_ids.length > 0) {
                        //giveFeedback(_trueFeedbackIds[_currentQuestionIndex]);
                    } else {
                        completeControl();
                    }
                }
            } else {
                if (typeof _data.false_feedback_id == "undefined") {
                    completeControl();
                } else {
                    //giveFeedback(_data.false_feedback_id);
                }
            }
        };

        var onFeedbackRichTextHide = function (evt, feedbackRichText) {
            /* if (feedbackRichText.id != _data.completion_feedback_id) {
                 completeControl();
             } else {
                 return;
             }*/
        };

        var checkCompletion = function () {
            for (var i = 0, len = _answerData.pages.length; i < len; i++) {
                for (var j = 0, lenj = _answerData.pages[i].questions.length; j < lenj; j++) {
                    if (_answerData.pages[i].questions[j].completed == false) return false;
                }
            }
            return true;
        };

        var completeControl = function () {
            if (checkCompletion()) {
                if (_isSolveButtonActive) {
                    $_btn.attr("disabled", "disabled");
                }
                $($_puzzleBlock).unbind(Sbt.Actions.down);
                $($_puzzleBlock).unbind(Sbt.Actions.up);
                $($_puzzleBlock).unbind(Sbt.Actions.move);

                $(".puzzleBlockItem").addClass('noHover');

                self.stopTimer();

                setTimeout(function () {
                    self.playCompleteSound();

                    framework.widgetController.Complete();
                }, 1000);


            }
        };

        var getRandomLetter = function () {
            var randomLetter = "";
            randomLetter = _alphabet.charAt(Math.floor(Math.random() * _alphabet.length));

            return randomLetter;
        };

        var setBackground = function (index) {
            if (index != undefined || index != null) {
                $("#com_sebit_turkce_template_general_titleWrapper").addClass("com_sebit_turkce_template_general_titleWrapper_bulmaca" + index);
                $_backgroundImage.addClass("com_sebit_turkce_template_general_backgroundImage_bulmaca" + index);
            } else {
                $("#com_sebit_turkce_template_general_titleWrapper").addClass("com_sebit_turkce_template_general_titleWrapper_bulmaca" + 0);
                $_backgroundImage.addClass("com_sebit_turkce_template_general_backgroundImage_bulmaca" + 0);
            }
        };

        var getIdCountFromPuzzleBlockItem = function (puzzleBlockItem) {
            if (framework.utilities.Navigator.isDesktop.iPad() || framework.utilities.Navigator.isMobile.iPad() || framework.utilities.Navigator.isDesktop.Android() || framework.utilities.Navigator.isMobile.Android()) {
                return parseInt($(puzzleBlockItem).context.id.replace("puzzleBlockItem", ""));
            } else {
                return parseInt(puzzleBlockItem.id.replace("puzzleBlockItem", ""));
            }
        };

        var getAcceptedGridPuzzleBlockItemId = function (firstItem, selectedItem) {
            var isItemAlreadyListed = false;

            for (var i = 0; i < _otherSelectedPuzzleBlockItemList.length; i++) {
                if (_otherSelectedPuzzleBlockItemList[i] == selectedItem) {
                    isItemAlreadyListed = true;
                    break;
                }
            }

            if (!isItemAlreadyListed && !isNaN(selectedItem)) {
                // puzzleBlockItem which selected
                if (firstItem == selectedItem) {
                    _otherSelectedPuzzleBlockItemList.push(selectedItem);
                    return true;
                } else {
                    // puzzleBlockItems on right side in same row
                    if (firstItem == selectedItem + (_otherSelectedPuzzleBlockItemList.length)) {
                        _otherSelectedPuzzleBlockItemList.push(selectedItem);
                        return true;
                    }

                    // puzzleBlockItems on left side in same row
                    if (firstItem == selectedItem - (_otherSelectedPuzzleBlockItemList.length)) {
                        _otherSelectedPuzzleBlockItemList.push(selectedItem);
                        return true;
                    }

                    // puzzleBlockItems on above side in same column
                    if (firstItem == selectedItem + ((_otherSelectedPuzzleBlockItemList.length)) * _gridSize) {
                        _otherSelectedPuzzleBlockItemList.push(selectedItem);
                        return true;
                    }

                    // puzzleBlockItems on bottom side in same column
                    if (firstItem == selectedItem - ((_otherSelectedPuzzleBlockItemList.length)) * _gridSize) {
                        _otherSelectedPuzzleBlockItemList.push(selectedItem);
                        return true;
                    }
                }
            }

            return false;
        }

        var trimSpace = function (text) {
            return text.replace(/ /g, '');
        }

        var turkishUpperCase = function (text) {
            return text.replace(/ğ/g, 'Ğ')
                .replace(/ü/g, 'Ü')
                .replace(/ş/g, 'Ş')
                .replace(/ı/g, 'I')
                .replace(/i/g, 'İ')
                .replace(/ö/g, 'Ö')
                .replace(/ç/g, 'Ç')
                .toUpperCase();
        };

        var playHintSound = function () {

            if (soundsEnabled) {
                for (var i = 0; i < _questionCount; i++) {
                    if (applicationData.pages[0].questions[i].correct_answer == this.children[7].innerHTML) {
                        var sound = new Sbt.Sound(applicationData.pages[0].questions[i].hintSound.replace(".mp3", ""));
                        sound.playSound();
                    }
                }
            }
        }

        //-------------------------------------------------------------------------------------------------------------//

        this.enableUserInteraction = function () {
            $("#interaction-disabler").css("display", "none");
        }

        this.disableUserIntraction = function () {
            $("#interaction-disabler").css("display", "block");
        }

        this.startTimer = function () {
            timerIntervalId = setInterval(function () {
                timerTime++;
                self.refreshTimer();
            }, 1000);
        }

        this.refreshTimer = function () {
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

        this.stopTimer = function () {
            if (timerIntervalId != undefined) {
                clearInterval(timerIntervalId);
                timerIntervalId = undefined;

                timerTime = 0;
            }
        }

        this.onSoundButtonClicked = function () {
            soundsEnabled = !soundsEnabled;

            $headerSoundButton = $("#header-sound-button");
            if (soundsEnabled) {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_on.svg')");
            } else {
                $headerSoundButton.css("background-image", "url('" + framework.localPath + "img/theme/button_sound_off.svg')");
            }

            if (soundsEnabled)
                self.playWelcomeSound();
        }

        this.onRestartButtonClicked = function () {
            restartActivity(null, true);
        }



        this.playWelcomeSound = function () {
            if (soundsEnabled) {
                var sound = new Sbt.Sound("welcome");
                sound.playSound();

            }
        }

        this.playCompleteSound = function () {
            if (soundsEnabled) {
                    var sound = new Sbt.Sound("complete");
                    sound.playSound();
            }
        }

        //-----------------------------------------------------------------------//

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
        application = new Crossword();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();