function ComponentText() {
    var self = this;

    this.createElement = function (parentSelector, componentId) {
        // create component dom
        $(parentSelector).append('\
        <div id="' + componentId + '" class="component-text">                                \
            <div class="panel">                                                              \
                <h1></h1>                                                                    \
                <p></p>                                                                      \
            </div>                                                                           \
        </div>');

        self.$componentText = $("#" + componentId);

        self.$panel = self.$componentText.find(".panel");

        self.hide();
    }

    this.show = function (data) {
        self.currentData = data;

        self.showPanel();

        self.$componentText.removeClass("d-none").addClass("d-flex");
    }

    this.showPanel = function () {

        if (self.currentData.title != undefined) {
            self.$componentText.find("h1").html(self.currentData.title);
        }

        if (self.currentData.text != undefined) {
            self.$componentText.find("p").html(self.currentData.text);
        }

        self.$panel.removeClass("d-none").addClass("d-inline-flex");
    }

    this.hide = function () {
        self.hidePanel();

        self.$componentText.removeClass("d-flex").addClass("d-none");
    }

    this.hidePanel = function () {
        self.$panel.removeClass("d-inline-flex").addClass("d-none");
    }
}