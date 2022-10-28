function ComponentImage() {
    var self = this;

    self.currentData = undefined;

    this.createElement = function (parentSelector, componentId) {
        // create component dom
        $(parentSelector).append('                                              \
            <div id="' + componentId +'" class="component-image">                \
                <div class="panel">                                             \
                    <h1 class="title"></h1>                                     \
                    <div class="image-container">                               \
                        <img class="image" />                                   \
                    </div>                                                      \
                </div>                                                          \
            </div>');

        self.$component = $("#" +componentId);

        self.$panel = self.$component.find(".panel");

        // content
        self.$title = self.$component.find(".title");
        self.$image = self.$component.find(".image");

        $clamp(self.$title[0], { clamp: 2 });

        self.hide();
    }

    this.show = function (data) {
        self.currentData = data;

        self.showPanel();

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

        self.$panel.removeClass("d-none").addClass("d-inline-flex");
    }

    this.hide = function () {
        self.hidePanel();

        self.$component.removeClass("d-flex").addClass("d-none");
    }

    this.hidePanel = function () {
        self.$panel.removeClass("d-inline-flex").addClass("d-none");
    }
}