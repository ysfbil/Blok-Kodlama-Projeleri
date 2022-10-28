(function () {
    var application;

    function Column() {
        var self = this;
        var language = "english";

        self.answeredQuestionCount = 0;
        self.questionCount = 0;

        this.initialize = function () {
            // language
            if (applicationData.language != null) 
                language = applicationData.language;

            // document title
            document.title = applicationData.title;

            self.showComponents();

            const ps = new PerfectScrollbar(".component-container", { wheelPropagation: false });
        }

        this.showComponents = function () {
            var components =  [];
            for (var i = 0; i < applicationData.content.interactions.length; i++) {
                if (applicationData.content.interactions[i] != undefined) {
                    var currentInteraction = applicationData.content.interactions[i];
                    if (currentInteraction.type == ComponentType.TEXT) {
                        components.push(new ComponentText());
                        components[i].createElement(".component-container", "component-" + i);
                        components[i].show(currentInteraction.data);
                    } else if (currentInteraction.type == ComponentType.IMAGE) {
                        components.push(new ComponentImage());
                        components[i].createElement(".component-container", "component-" + i);
                        components[i].show(currentInteraction.data);
                    } else if (currentInteraction.type == ComponentType.VIDEO) {
                        components.push(new ComponentVideo());
                        components[i].createElement(".component-container", "component-" + i);
                        components[i].show(currentInteraction.data);
                    } else if (currentInteraction.type == ComponentType.QUESTION_MULTIPLE_CHOICE) {
                        components.push(new ComponentQuestionMultipleChoice());
                        $(components[i]).on("answered", self.onQuestionAnswered);
                        
                        components[i].language = applicationData.language;
                        components[i].createElement(".component-container", "component-" + i);
                        components[i].show(currentInteraction.data);

                        self.questionCount++;
                    } else if (currentInteraction.type == ComponentType.QUESTION_MARK_THE_WORDS) {
                        components.push(new ComponentQuestionMarkTheWords());
                        $(components[i]).on("answered", self.onQuestionAnswered);
                        
                        components[i].language = applicationData.language;
                        components[i].createElement(".component-container", "component-" + i);
                        components[i].show(currentInteraction.data);

                        self.questionCount++;
                    } else if (currentInteraction.type == ComponentType.QUESTION_TRUE_FALSE) {
                        components.push(new ComponentQuestionTrueFalse());
                        $(components[i]).on("answered", self.onQuestionAnswered);
                        
                        components[i].language = applicationData.language;
                        components[i].createElement(".component-container", "component-" + i);
                        components[i].show(currentInteraction.data);

                        self.questionCount++;
                    }
                }       
            }
        }

        this.onQuestionAnswered = function () {
            self.answeredQuestionCount++;
            if (self.answeredQuestionCount == self.questionCount) {
                framework.widgetController.Complete();
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

    $(framework).on(Framework.ONREADY, function () {
        application = new Column();
        application.initialize();

        initializeLanguage();

        showWatermark("vfabrika-stage", applicationData.language);
    });
})();