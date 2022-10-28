function ComponentImage() {
    var self = this;

    self.currentData = undefined;

    this.initialize = function (parentSelector) {
        // create component dom
        $(parentSelector).append('                                              \
            <div id="component-image">                                          \
                <div class="modal-background"></div>                            \
                <div class="panel">                                             \
                    <button class="button-close"></button>                      \
                    <h1 class="title"></h1>                                     \
                    <div class="image-container">                               \
                        <img class="image" />                                   \
                    </div>                                                      \
                </div>                                                          \
                <button class="button-interaction"></button>                    \
            </div>');

        self.$component = $("#component-image");
        self.$modalBackground = self.$component.find(".modal-background");
        self.$panel = self.$component.find(".panel");

        // content
        self.$title = self.$component.find(".title");
        self.$image = self.$component.find(".image");

        $clamp(self.$title[0], { clamp: 2 });

        // buttons
        self.$buttonClose = self.$component.find(".button-close");
        self.$buttonClose.on("click", self.onButtonCloseClicked);

        self.$buttonInteraction = self.$component.find(".button-interaction");
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

        self.setAlignment();

        self.$component.removeClass("d-none").addClass("d-flex");
    }

    this.showPanel = function () {
        if (self.currentData.title != undefined &&
            self.currentData.title != null &&
            self.currentData.title != "") {
            self.$title.html(self.currentData.title);
        }

        if (self.currentData.image != undefined &&
            self.currentData.image != null &&
            self.currentData.image != "") {
            self.$image.attr("src", framework.localPath + "img/" + self.currentData.image);
        }

        if (self.currentOptions != undefined) {
            if (self.currentOptions.isModal != undefined &&
                self.currentOptions.isModal == true)
                self.showModalBackground();
            else
                self.hideModalBackground();

            if (self.currentOptions.isCloseable == undefined ||
                self.currentOptions.isCloseable == true)
                self.$buttonClose.removeClass("d-none").addClass("d-block");
            else
                self.$buttonClose.removeClass("d-block").addClass("d-none");
        }

        self.hideInteractionButton();
        self.$panel.removeClass("d-none").addClass("d-inline-flex");
    }

    this.hide = function () {
        self.hideModalBackground();
        self.hidePanel();
        self.hideInteractionButton();

        self.$component.removeClass("d-flex").addClass("d-none");
    }

    this.hidePanel = function () {
        self.$panel.removeClass("d-inline-flex").addClass("d-none");
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

    this.onButtonInteractionClicked = function () {
        self.currentData.interactionState = "panel";

        self.hideInteractionButton();
        self.showPanel();
    }

    this.showInteractionButton = function () {
        self.$buttonInteraction.removeClass("d-none").addClass("d-block");
    }

    this.hideInteractionButton = function () {
        self.$buttonInteraction.removeClass("d-block").addClass("d-none");
    }

    this.showModalBackground = function () {
        self.$modalBackground.removeClass("d-none").addClass("d-block");
    }

    this.hideModalBackground = function () {
        self.$modalBackground.removeClass("d-block").addClass("d-none");
    }

    this.setAlignment = function () {
        self.$component.removeClass("d-top-left");
        self.$component.removeClass("d-top-center");
        self.$component.removeClass("d-top-right");
        self.$component.removeClass("d-middle-left");
        self.$component.removeClass("d-middle-center");
        self.$component.removeClass("d-middle-right");
        self.$component.removeClass("d-bottom-left");
        self.$component.removeClass("d-bottom-center");
        self.$component.removeClass("d-bottom-right");

        if (self.currentData.location == "top_left") {
            self.$component.addClass("d-top-left");
        } else if (self.currentData.location == "top_center") {
            self.$component.addClass("d-top-center");
        } else if (self.currentData.location == "top_right") {
            self.$component.addClass("d-top-right");
        } else if (self.currentData.location == "middle_left") {
            self.$component.addClass("d-middle-left");
        } else if (self.currentData.location == "middle_center") {
            self.$component.addClass("d-middle-center");
        } else if (self.currentData.location == "middle_right") {
            self.$component.addClass("d-middle-right");
        } else if (self.currentData.location == "bottom_left") {
            self.$component.addClass("d-bottom-left");
        } else if (self.currentData.location == "bottom_center") {
            self.$component.addClass("d-bottom-center");
        } else if (self.currentData.location == "bottom_right") {
            self.$component.addClass("d-bottom-right");
        }
    }
}