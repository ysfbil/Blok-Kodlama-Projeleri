function ComponentText() {
    var self = this;

    this.initialize = function (parentSelector) {
        // create component dom
        $(parentSelector).append('\
        <div id="component-text">                        \
            <div class="modal-background"></div>         \
            <div class="panel">                          \
                <button class="button-close"></button>   \
                <h1></h1>                                \
                <p></p>                                  \
            </div>                                       \
            <button class="button-interaction"></button> \
        </div>');

        self.$componentText = $("#component-text");

        self.$modalBackground = self.$componentText.find(".modal-background");

        self.$panel = self.$componentText.find(".panel");

        //buttons
        self.$buttonClose = self.$componentText.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonInteraction = self.$componentText.find(".button-interaction");
        self.$buttonInteraction.on("click", self.onButtonInteractionClicked);
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");

        // content
        self.$title = self.$componentText.find("h1");
        self.$text = self.$componentText.find("p");

        // scrollbars
        self.psTitle = new PerfectScrollbar("#component-text h1", { wheelPropagation: false });     
        self.psText = new PerfectScrollbar("#component-text p", { wheelPropagation: false });

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

        self.$componentText.removeClass("d-none").addClass("d-flex");
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

        if (self.currentData.title != undefined || self.currentData.title != null || self.currentData.title == "") {
            self.$title.removeClass("d-none").addClass("d-block");

            self.$title.html(self.currentData.title);
        }

        if (self.currentData.text != undefined || self.currentData.text != null || self.currentData.text == "") {
            self.$text.removeClass("d-none").addClass("d-block");

            self.$text.html(self.currentData.text);
        }

        self.hideInteractionButton();
        self.$panel.removeClass("d-none").addClass("d-inline-flex");

        self.$panel.children().not(".d-none").eq(1).addClass("first-element");

        self.psTitle.update();
        self.psText.update();
    }

    this.hide = function () {
        self.hideModalBackground();
        self.hidePanel();
        self.hideInteractionButton();

        self.$componentText.removeClass("d-flex").addClass("d-none");
    }

    this.hidePanel = function () {
        self.$panel.removeClass("d-inline-flex").addClass("d-none");

        self.$title.removeClass("d-block").addClass("d-none");
        self.$text.removeClass("d-block").addClass("d-none");
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

    this.showInteractionButton = function () {
        self.$buttonInteraction.removeClass("d-none").addClass("d-block");
    }

    this.hideInteractionButton = function () {
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");
    }

    this.onButtonInteractionClicked = function () {
        self.currentData.interactionState = "panel";

        self.hideInteractionButton();
        self.showPanel();
    }

    this.showModalBackground = function () {
        self.$modalBackground.removeClass("d-none").addClass("d-block");
    }

    this.hideModalBackground = function () {
        self.$modalBackground.removeClass("d-block").addClass("d-none");
    }

    this.setAlignment = function () {
        self.$componentText.removeClass("d-top-left");
        self.$componentText.removeClass("d-top-center");
        self.$componentText.removeClass("d-top-right");
        self.$componentText.removeClass("d-middle-left");
        self.$componentText.removeClass("d-middle-center");
        self.$componentText.removeClass("d-middle-right");
        self.$componentText.removeClass("d-bottom-left");
        self.$componentText.removeClass("d-bottom-center");
        self.$componentText.removeClass("d-bottom-right");

        if (self.currentData.location == "top_left") {
            self.$componentText.addClass("d-top-left");
        } else if (self.currentData.location == "top_center") {
            self.$componentText.addClass("d-top-center");
        } else if (self.currentData.location == "top_right") {
            self.$componentText.addClass("d-top-right");
        } else if (self.currentData.location == "middle_left") {
            self.$componentText.addClass("d-middle-left");
        } else if (self.currentData.location == "middle_center") {
            self.$componentText.addClass("d-middle-center");
        } else if (self.currentData.location == "middle_right") {
            self.$componentText.addClass("d-middle-right");
        } else if (self.currentData.location == "bottom_left") {
            self.$componentText.addClass("d-bottom-left");
        } else if (self.currentData.location == "bottom_center") {
            self.$componentText.addClass("d-bottom-center");
        } else if (self.currentData.location == "bottom_right") {
            self.$componentText.addClass("d-bottom-right");
        }
    }
}