function ComponentVideo() {
    var self = this;

    self.currentData = undefined;

    this.createElement = function (parentSelector, componentId) {
        // create component dom
        $(parentSelector).append('                                                  \
        <div id="' + componentId +'" class="component-video">                       \
            <div class="panel">                                                     \
                <h1 class="title"></h1>                                             \
                <div class="video-container">                                       \
                    <video class="video">                                           \
                </div>                                                              \
                <div class="video-footer">                                          \
                    <div class="slider">                                            \
                        <div class="progress"></div>                                \
                    </div>                                                          \
                    <div class="controls">                                          \
                        <div class="button-play"></div>                             \
                        <div class="button-pause"></div>                            \
                        <div class="time">0:00 / 0:00</div>                         \
                    </div>                                                          \
                </div>                                                              \
            </div>                                                                  \
        </div>');

        self.sbtBodyContainer = $("#sbt_bodyContainer");

        self.$component = $("#" + componentId);

        self.$panel = self.$component.find(".panel");

        // content
        self.$title = self.$component.find(".title");
        self.$video = self.$component.find(".video");
        self.$video.on("click", self.onVideoClicked);

        self.$video[0].onloadedmetadata = self.onVideoLoaded;
        self.$video[0].ontimeupdate = self.onVideoTimeUpdated; 
        
        self.$slider = self.$component.find(".slider");
        self.$slider.on("mousedown", self.onSliderMouseDown);
        self.$slider.on("mouseover", self.onSliderMouseOver);
        self.$slider.on("mouseout", self.onSliderMouseOut);
        
        self.$sliderProgress = self.$component.find(".progress");

        self.$buttonPlay = self.$component.find(".button-play");
        self.$buttonPlay.on("click", self.onButtonPlayClicked);

        self.$buttonPause = self.$component.find(".button-pause");
        self.$buttonPause.on("click", self.onButtonPauseClicked);
        self.$buttonPause.removeClass("d-block").addClass("d-none");

        self.$time = self.$component.find(".time");
        self.updateTime();

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

        if (self.currentData.video != undefined &&
            self.currentData.video != null &&
            self.currentData.video != "") {
            self.$video.attr("src", framework.localPath + "video/" + self.currentData.video);
            self.$video[0].load();
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

    this.onVideoLoaded = function (sender) {
        self.videoDuration = Math.floor(sender.currentTarget.duration);

        self.updateTime();
    }

    this.onVideoTimeUpdated = function (sender) {
        self.videoPosition = sender.currentTarget.currentTime;
        self.updateTime();
    }

    this.onVideoEnded = function () {
        self.pauseVideo();
    }

    this.onVideoClicked = function () {
        self.toggleVideo();
    }

    this.onButtonPlayClicked = function () {
        self.playVideo();
    }

    this.onButtonPauseClicked = function () {
        self.pauseVideo();
    }

    this.playVideo = function (time) {
        self.$buttonPlay.removeClass("d-block").addClass("d-none");
        self.$buttonPause.removeClass("d-none").addClass("d-block");

        if (time == undefined)
            self.$video[0].play();
        else
            self.$video[0].currentTime = time;
    }

    this.seekVideo = function (time) {
        self.$video[0].currentTime = time;
    }

    this.toggleVideo = function () {
        var video = self.$video[0];
        if (video.paused)
            self.playVideo();
        else
            self.pauseVideo();
    }

    this.pauseVideo = function () {
        self.$buttonPlay.removeClass("d-none").addClass("d-block");
        self.$buttonPause.removeClass("d-block").addClass("d-none");

        self.$video[0].pause();
    }


    this.formatTimeElement = function (value) {
        var valueStr = value.toString();
        if (valueStr.length < 2)
            valueStr = "0" + valueStr;
        return valueStr;
    }

    this.updateTime = function () {
        var videoPositionMinutes = Math.floor(self.videoPosition / 60);
        var videoPositionSeconds = Math.floor(self.videoPosition % 60);
        var timeStrPosition = videoPositionMinutes + ":" + self.formatTimeElement(videoPositionSeconds);

        var videoDurationMinutes = Math.floor(self.videoDuration / 60);
        var videoDurationSeconds = Math.floor(self.videoDuration % 60);
        var timeStrDuration = videoDurationMinutes + ":" + self.formatTimeElement(videoDurationSeconds);

        var timeStr = timeStrPosition + " / " + timeStrDuration;
        self.$time.html(timeStr);

        if (!self.sliderDragging) {
            var sliderHandlePos = (self.videoPosition * self.$slider.css("width").replace("px", "")) / self.videoDuration;
            self.$sliderProgress.css("width", sliderHandlePos + "px");
        }
    }

    this.onSliderMouseDown = function (e) {
        self.sliderDragging = true;
        self.sliderPlaying = !self.$video[0].paused;

        var zoom = self.sbtBodyContainer.css("zoom");

        var handlePos = e.clientX / zoom - self.$slider.offset().left;
        self.$sliderProgress.css("width", handlePos + "px");

        //console.info("playing > " + self.video.isPlaying);

        $(document).on("mousemove", self.onSliderMouseMove);
        $(document).on("mouseup", self.onSliderMouseUp);

        self.pauseVideo();
    }

    this.onSliderMouseOver = function () {
        self.sliderOver = true;
        self.$slider.css("height", "10px");
    }

    this.onSliderMouseOut = function () {
        self.sliderOver = false;

        if (!self.sliderDragging)
            self.$slider.css("height", "5px");
    }

    this.onSliderMouseMove = function (e) {
        if (self.sliderDragging) {
            console.info("move");

            var zoom = self.sbtBodyContainer.css("zoom");

            var handlePos = e.clientX / zoom - self.$slider.offset().left;
            var newVideoPosition = (handlePos * self.videoDuration) / self.$slider.css("width").replace("px", "");
            self.$video[0].currentTime = newVideoPosition;
            self.videoPosition = newVideoPosition;

            self.$sliderProgress.css("width", handlePos + "px");
        }
    }

    this.onSliderMouseUp = function (e) {
        $(document).off("mousemove", self.onSliderMouseMove);
        $(document).off("mouseup", self.onSliderMouseUp);

        var zoom = self.sbtBodyContainer.css("zoom");

        var handlePos = e.clientX / zoom - self.$slider.offset().left;
        var newVideoPosition = (handlePos * self.videoDuration) / self.$slider.css("width").replace("px", "");
        self.$video[0].currentTime = newVideoPosition;
        self.videoPosition = newVideoPosition;

        if (!self.sliderOver) {
            self.$slider.css("height", "5px");
            self.sliderOver = false;
        }

        self.sliderDragging = false;

        if (self.sliderPlaying) {
            self.playVideo();
            console.info("play!");
        }

        self.sliderPlaying = undefined;
    }
}