function ComponentText() {
    var self = this;

    self.currentData = undefined;

    this.initialize = function() {
        // create component dom
        $(".component-container").append('              \
        <div id="component-text">                       \
            <div class="panel">                         \
                <button class="button-close"></button>  \
                <h1></h1>           \
                <span></span>                           \
                <div class="indicator"></div>           \
            </div>                                      \
        </div>');

        self.$component = $("#component-text");
        self.$component.find(".button-close").on("click", self.onButtonCloseClicked);

        // scrollbar
        self.psQuestion = new PerfectScrollbar("#component-text span", { wheelPropagation: false });

        // title ellipsis
        var $title = self.$component.find("h1").first();
        $clamp($title[0], { clamp: 3 });

        // stop panel click propogation
        var $panel = self.$component.find(".panel").first();
        $panel.on("click", function() {
            return false;
        });

        self.$component.removeClass("d-flex").addClass("d-none");
    }

    this.show = function(data, options) {
        self.$component.find("h1").html(data.title);
        self.$component.find("span").html(data.text);

        self.currentData = data;

        self.$component.removeClass("d-top-left");
        self.$component.removeClass("d-top-center");
        self.$component.removeClass("d-top-right");
        self.$component.removeClass("d-middle-left");
        self.$component.removeClass("d-middle-center");
        self.$component.removeClass("d-middle-right");
        self.$component.removeClass("d-bottom-left");
        self.$component.removeClass("d-bottom-center");
        self.$component.removeClass("d-bottom-right");

        var showIndicator = options != undefined && options.showIndicator != undefined && options.showIndicator;
        if (!showIndicator) {
            if (data.location == "top_left") {
                self.$component.addClass("d-top-left");
            } else if (data.location == "top_center") {
                self.$component.addClass("d-top-center");
            } else if (data.location == "top_right") {
                self.$component.addClass("d-top-right");
            } else if (data.location == "middle_left") {
                self.$component.addClass("d-middle-left");
            } else if (data.location == "middle_center") {
                self.$component.addClass("d-middle-center");
            } else if (data.location == "middle_right") {
                self.$component.addClass("d-middle-right");
            } else if (data.location == "bottom_left") {
                self.$component.addClass("d-bottom-left");
            } else if (data.location == "bottom_center") {
                self.$component.addClass("d-bottom-center");
            } else if (data.location == "bottom_right") {
                self.$component.addClass("d-bottom-right");
            }
        } else {
            self.$indicator = self.$component.find(".indicator").first();
            self.$indicator.removeClass("d-none");

            self.$indicator.removeClass("indicator-left");
            self.$indicator.removeClass("indicator-right");

            var screenWidth = parseInt(self.$component.css("width").replace("px"));
            var screenHeight = parseInt(self.$component.css("height").replace("px"));

            var panelWidth = screenWidth / 2;
            var panelHeight = screenHeight / 2;

            var $panel = self.$component.find(".panel").first();
            $panel.css("position", "absolute");
            $panel.css("width", panelWidth + "px");
            $panel.css("max-height", panelHeight + "px");

            if (options.indicatorPosition.x <= screenWidth / 2) {
                self.$indicator.addClass("indicator-left");

                var panelX = options.indicatorPosition.x + 80;
                $panel.css("left", panelX + "px");

                if (options.indicatorPosition.y > screenHeight / 2) {
                    var panelY = options.indicatorPosition.y;
                    $panel.css("bottom", (screenHeight - panelY) + "px");
                } else {
                    var panelY = options.indicatorPosition.y - 10;
                    $panel.css("top", panelY + "px");
                }

                if (options.indicatorPosition.y > screenHeight / 2) {
                    self.$indicator.css("bottom", "25px");
                } else {
                    var indicatorY = options.indicatorPosition.y - panelY + 15;
                    self.$indicator.css("top", indicatorY + "px");
                }
            } else {
                self.$indicator.addClass("indicator-right");

                var panelX = options.indicatorPosition.x - panelWidth - 10;
                $panel.css("left", panelX + "px");

                if (options.indicatorPosition.y > screenHeight / 2) {
                    var panelY = options.indicatorPosition.y;
                    $panel.css("bottom", (screenHeight - panelY) + "px");
                } else {
                    var panelY = options.indicatorPosition.y - 10;
                    $panel.css("top", panelY + "px");
                }

                if (options.indicatorPosition.y > screenHeight / 2) {
                    self.$indicator.css("bottom", "20px");
                } else {
                    var indicatorY = options.indicatorPosition.y - panelY + 15;
                    self.$indicator.css("top", indicatorY + "px");
                }
            }
        }

        if (options != undefined) {
            if (options.isModal != undefined) {
                if (options.isModal) {
                    self.$component.removeClass("d-non-modal");
                } else {
                    self.$component.addClass("d-non-modal");
                }
            }

            if (options.isCloseable != undefined) {
                if (!options.isCloseable) {
                    self.$component.find(".button-close").remove();
                }
            }

            if (options.closeOnOutsideClick != undefined && options.closeOnOutsideClick == true) {
                self.$component.on("click", self.onOutsideClicked);
            } else {
                self.$component.off("click");
            }
        }

        self.$component.removeClass("d-none").addClass("d-flex");

        self.psQuestion.update();
    }

    this.hide = function() {
        self.$component.removeClass("d-flex").addClass("d-none");
    }

    this.onButtonCloseClicked = function(e) {

        self.$component.removeClass("d-flex").addClass("d-none");

        $(self).trigger("hide", self.currentData);
    }

    this.onOutsideClicked = function() {
        self.$component.removeClass("d-flex").addClass("d-none");

        $(self).trigger("hide", self.currentData);
    }
}

ComponentText = new ComponentText();
ComponentText.initialize();