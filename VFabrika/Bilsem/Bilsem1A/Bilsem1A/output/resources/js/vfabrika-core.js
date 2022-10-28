function VFabrikaPlayer(playerData) {
    var base = this;

    var timerId = 0;
    var designObjectIds = new Array();
    var drawDesignObjectIds = new Array();

    this.isPlaying = false;
    this.frameIndex = -1;
    this.currentFrameIndex = -1;

    this.timelineStoppedByEvent = false;
    this.userInteractionEnabled = true;

    var layerLastKeyframeIds = new Array();

    this.options = {
  "language": "tr"
};

    // designObjectControllers
    var designObjectControllers = new Array();
    	designObjectControllers.push(new AnimationPopupDesignObjectController(this, playerData));
	designObjectControllers.push(new PrimitiveDesignObjectsController(this, playerData));
	designObjectControllers.push(new ImageDesignObjectController(this, playerData));
	designObjectControllers.push(new SoundDesignObjectController(this, playerData));
	designObjectControllers.push(new VideoDesignObjectController(this, playerData));
	designObjectControllers.push(new ContentDesignObjectController(this, playerData));
	designObjectControllers.push(new ImageButtonDesignObjectController(this, playerData));
	designObjectControllers.push(new ButtonDesignObjectController(this, playerData));
	designObjectControllers.push(new RadioButtonDesignObjectController(this, playerData));
	designObjectControllers.push(new CheckBoxDesignObjectController(this, playerData));
	designObjectControllers.push(new ComboBoxDesignObjectController(this, playerData));
	designObjectControllers.push(new TextBoxDesignObjectController(this, playerData));
	designObjectControllers.push(new SliderDesignObjectController(this, playerData));
	designObjectControllers.push(new TextDesignObjectController(this, playerData));
	designObjectControllers.push(new TimerDesignObjectController(this, playerData));
	designObjectControllers.push(new DelayDesignObjectController(this, playerData));
	designObjectControllers.push(new DataConnectorDesignObjectController(this, playerData));
	designObjectControllers.push(new CanvasDesignObjectController(this, playerData));
	designObjectControllers.push(new TriggerDesignObjectController(this, playerData));
	designObjectControllers.push(new HighlightDesignObjectController(this, playerData));
	designObjectControllers.push(new TableDesignObjectController(this, playerData));
	designObjectControllers.push(new SmartDesignObjectsController(this, playerData));


    // fix for drag-drop multiple instance machanism
    Sbt.Droparea.MultipleInstance = true;

    this.initialize = function () {
        this.frameIndex = 0;

        var designObjectIds = new Array();
        var layerIdObjects = new Array();

        var $body = $("body");
        VFabrikaPlayerHelper.alignStage($body, playerData.stagePageAlign);

        var $containerElement = $("#" + VFabrikaPlayerConstants.CONTAINER_ELEMENT_ID);
        $containerElement.append($stageElement)

        var $stageElement = $("#" + VFabrikaPlayerConstants.STAGE_ELEMENT_ID);
        $stageElement.append($interactionDisablerElement);

        // create layers
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[playerData.layers.length - layerIndex - 1];

            var layerId = "layer_" + layer.underscoredName;
            var $layerElement = $("<div id='" + layerId + "'></div>");
            $stageElement.append($layerElement);

            $layerElement.addClass(VFabrikaPlayerConstants.LAYER_CSS_CLASS_NAME);

            for (var j = 0; j < layer.keyframes.length; j++) {
                var keyframe = layer.keyframes[j];

                // create design objects
                for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                    var designObject = keyframe.designLayout.designObjects[k];

                    this.createDesignObjectElement(designObjectIds, $layerElement, false, layer, keyframe, designObject);
                }
            }
        }

        // create userInteractionDisabler element
        var $interactionDisablerElement = $("<div id='" + VFabrikaPlayerConstants.INTERACTION_DISABLER_ELEMENT_ID + "'></div>");
        $interactionDisablerElement.css("width", playerData.stageWidth + "px");
        $interactionDisablerElement.css("height", playerData.stageHeight + "px");
        $stageElement.append($interactionDisablerElement);

        // auto play user interaction button support
        if (playerData.autoPlayBehavior == "userInteractionRequired") {
            var $appStarterLayerElement = $("<div id='" + VFabrikaPlayerConstants.APP_STARTER_LAYER_ELEMENT_ID + "'></div>");
            $appStarterLayerElement.addClass("app-starter-layer");

            var $appStarterBackgroundElement = $("<div id='" + VFabrikaPlayerConstants.APP_STARTER_BACKGROUND_ELEMENT_ID + "' />");
            $appStarterBackgroundElement.addClass("app-starter-background");
            $appStarterBackgroundElement.css("background-color", playerData.appStarterBackgroundColor);
            $appStarterBackgroundElement.css("opacity", playerData.appStarterBackgroundOpacity / 100);
            $appStarterLayerElement.append($appStarterBackgroundElement);

            var $appStarterButtonElement = $("<img id='" + VFabrikaPlayerConstants.APP_STARTER_BUTTON_ELEMENT_ID + "' />");
            $appStarterButtonElement.addClass("app-starter-button");
            if (playerData.appStarterButton != undefined && playerData.appStartButton != "")
                $appStarterButtonElement.attr("src", playerData.appStarterButtonImage);
            else
                $appStarterButtonElement.attr("src", framework.localPath + "img/app_starter_button.png");
            var buttonLeft = playerData.stageWidth / 2 - playerData.appStarterButtonWidth / 2;
            var buttonTop = playerData.stageHeight / 2 - playerData.appStarterButtonHeight / 2;
            $appStarterButtonElement.css("left", buttonLeft + "px");
            $appStarterButtonElement.css("top", buttonTop + "px");
            $appStarterButtonElement.css("width", playerData.appStarterButtonWidth + "px");
            $appStarterButtonElement.css("height", playerData.appStarterButtonHeight + "px");
            $appStarterButtonElement.click(base.onAppStarterButtonClicked);
            $appStarterLayerElement.append($appStarterButtonElement);

            $containerElement.append($appStarterLayerElement);

            // prepare stage
            base.refresh("appStarter_show");
        } else {
            var block = new VFabrikaBlocks(base, playerData);
            block.initialize();

            // prepare stage
            base.refresh();

            // initialize layerLastKeyframeIds array
            for (var i = 0; i < playerData.layers.length; i++)
                layerLastKeyframeIds.push(-1);

            // trigger initialize event
            $(base).trigger("onInitialized");

            // invoke event for first frame
            $(base).trigger("frameChange", [base, base.frameIndex]);

            $("#" + VFabrikaPlayerConstants.CONTAINER_ELEMENT_ID).css("display", "block");

            // if isAutoPlay, just play
            if (playerData.isAutoPlay && !base.timelineStoppedByEvent)
                base.play();

            showWatermark(VFabrikaPlayerConstants.STAGE_ELEMENT_ID, base.options.language);
        }
    }

    this.internalStart = function () {
        var block = new VFabrikaBlocks(base, playerData);
        block.initialize();

        // prepare stage
        base.refresh("appStarter_hide");

        // initialize layerLastKeyframeIds array
        for (var i = 0; i < playerData.layers.length; i++)
            layerLastKeyframeIds.push(-1);

        // invoke event for first frame
        $(base).trigger("frameChange", [base, base.frameIndex]);

        // trigger initialize event
        $(base).trigger("onInitialized");

        $("#" + VFabrikaPlayerConstants.CONTAINER_ELEMENT_ID).css("display", "block");

        // if isAutoPlay just play
        if (playerData.isAutoPlay && !base.timelineStoppedByEvent)
            base.play();

        showWatermark(VFabrikaPlayerConstants.STAGE_ELEMENT_ID, base.options.language);
    }

    this.onAppStarterButtonClicked = function () {
        var $appStarterLayerElement = $("#" + VFabrikaPlayerConstants.APP_STARTER_LAYER_ELEMENT_ID);
        $appStarterLayerElement.css("display", "none");

        base.internalStart();
    }

    this.enableUserInteraction = function () {
        var $userInteractionDisabler = $("#" + VFabrikaPlayerConstants.INTERACTION_DISABLER_ELEMENT_ID);
        $userInteractionDisabler.css("display", "none");
        this.userInteractionEnabled = true;
    };

    this.disableUserInteraction = function () {
        var $userInteractionDisabler = $("#" + VFabrikaPlayerConstants.INTERACTION_DISABLER_ELEMENT_ID);
        $userInteractionDisabler.css("display", "block");
        this.userInteractionEnabled = false;
    };

    this.createDesignObjectElement = function (designObjectIds, $parentElement, isNested, layer, keyframe, designObject) {
        // only create if design object is not create before
        var designObjectElementId = designObject.availableId;

        if (designObjectIds.indexOf(designObjectElementId) == -1)
            designObjectIds.push(designObjectElementId);
        else
            return;

        var designObjectTypeExists = false;

        for (var i = 0; i < designObjectControllers.length; i++) {
            var designObjectController = designObjectControllers[i];
            if (designObjectController.hasDesignObjectType(designObject.type)) {
                designObjectTypeExists = true;

                // create element first
                var $designObjectElement = designObjectController.createElement(designObject.type, designObjectElementId);
                if ($designObjectElement != null) {
                    $parentElement.append($designObjectElement);

                    $designObjectElement.data("controllers.designObject", designObjectController);

                    if (!designObject.enabled)
                        $designObjectElement.attr("disabled", "disabled");

                    $designObjectElement.prop("id", designObjectElementId);

                    // evaluate attributes
                    if (designObject.attributes != null) {
                        for (var i_ = 0; i_ < designObject.attributes.length; i_++) {
                            var attribute = designObject.attributes[i_];
                            $designObjectElement.attr(attribute.name, attribute.value);
                        }
                    }

                    DesignObjectHelper.applyCssClasses($designObjectElement, designObject, layer, keyframe);
                    DesignObjectHelper.applyUserCssClasses($designObjectElement, designObject);

                    // set extra data to design object selector
                    $designObjectElement.data("tag", designObject.tag);

                    DesignObjectHelper.storeInitialProperties(designObject);
                    $designObjectElement.data("designObject", designObject);

                    designObject.parentElementId = isNested ? $parentElement.attr("id") : VFabrikaPlayerConstants.CONTAINER_ELEMENT_ID;

                    // cursor
                    $designObjectElement.css("cursor", designObject.cursor);

                    // dragging support
                    if (designObject.draggable)
                        VFabrikaPlayerDragDropHelper.enableDesignObjectAsDraggable(designObjectElementId);

                    // dropping support
                    if (designObject.droppable)
                        VFabrikaPlayerDragDropHelper.enableDesignObjectAsDroppable(designObjectElementId);

                    // custom initialization for design object
                    if (designObjectController.initializeElement != undefined)
                        designObjectController.initializeElement(designObjectIds, $designObjectElement, isNested, layer, keyframe, designObject);

                    // ???
                    if (designObjectController["frameUpdate"] != undefined)
                        designObjectController.frameUpdate($designObjectElement, designObject);

                    // hide design object initially
                    $designObjectElement.css("display", "none");
                }
            }
        }

        if (!designObjectTypeExists)
            throw new Error("DesignObjectType [" + designObject.type + "] not found in designObjectTypes!");

        $(base).trigger("frameObjectInitialized", [base, designObject]);
    };

    this.refresh = function (refreshReason) {
        inDesignObjectIds = new Array();
        outDesignObjectIds = new Array();

        // check for inDesignObjects
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[playerData.layers.length - i - 1];

            var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, base.frameIndex);
            if (keyframe != null) {
                for (var j = 0; j < keyframe.designLayout.designObjects.length; j++) {
                    var designObject = keyframe.designLayout.designObjects[j];

                    if (designObjectIds.indexOf(designObject.id) == -1)
                        inDesignObjectIds.push(designObject.id);

                    // TODO: fix for multiple depth content design objects (recursive)
                    if (designObject.type == "content") {
                        if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                            for (var h = 0; h < designObject.designObjects.length; h++) {
                                var subDesignObject = designObject.designObjects[h];
                                if (designObjectIds.indexOf(subDesignObject.id) == -1)
                                    inDesignObjectIds.push(subDesignObject.id);
                            }
                        }
                    }
                }
            }
        }

        // check for outDesignObjects
        for (var i = 0; i < designObjectIds.length; i++) {
            var isFound = false;

            for (var j = 0; j < playerData.layers.length; j++) {
                var layer = playerData.layers[playerData.layers.length - j - 1];

                var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, base.frameIndex);

                if (keyframe != null) {
                    for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                        var designObject_ = keyframe.designLayout.designObjects[k];

                        if (designObject_.id == designObjectIds[i]) {
                            isFound = true;
                            break;
                        }
                    }

                    if (isFound)
                        break;
                }
            }

            // check for content design objects
            for (var j = 0; j < playerData.layers.length; j++) {
                var layer = playerData.layers[playerData.layers.length - j - 1];

                var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, base.frameIndex);

                if (keyframe != null) {
                    for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                        var designObject_ = keyframe.designLayout.designObjects[k];

                        if (designObject_.type == "content") {
                            if (designObject_.designObjects != null && designObject_.designObjects.length > 0) {
                                for (var l = 0; l < designObject_.designObjects.length; l++) {
                                    var subDesignObject = designObject_.designObjects[l];

                                    if (subDesignObject.id == designObjectIds[i]) {
                                        isFound = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            if (!isFound)
                outDesignObjectIds.push(designObjectIds[i]);
        }

        // show neccessary elements on stage
        for (var i = 0; i < inDesignObjectIds.length; i++) {
            var designObjectId = inDesignObjectIds[i];
            var designObject = VFabrikaPlayerHelper.getDesignObjectForFrameIndexById(playerData, base.frameIndex, designObjectId);
            var designObjectElementId = designObject.availableId;
            var $designObjectElement = $("#" + designObjectElementId);

            designObjectIds.push(designObjectId);

            if ((designObject.visible && designObject.type != DesignObjectType.TRIGGER) ||
                (designObject.isVisual == undefined || !designObject.isVisual)) {

                // TODO: fix animation popup exception
                if (designObject.type != "animationPopup")
                    $designObjectElement.css("display", "block");

                var designObjectController = base.getDesignObjectController(designObject.type);
                if (designObjectController != null) {
                    if (designObjectController.frameUpdate != undefined)
                        designObjectController.frameUpdate($designObjectElement, designObject);

                    if (designObjectController.showElement != undefined)
                        designObjectController.showElement($designObjectElement, designObject, refreshReason == undefined);
                } else
                    console.error("designobject controller not found!");
            }

            if (refreshReason != "draw")
                $(base).trigger("frameObject", [base, designObject]);
        }

        // hide other ones
        for (var i = 0; i < outDesignObjectIds.length; i++) {
            var designObjectId = outDesignObjectIds[i];
            var designObject = VFabrikaPlayerHelper.getDesignObjectForTimelineByDesignObjectId(playerData, designObjectId);
            var designObjectElementId = designObject.availableId;
            var $designObjectElement = $("#" + designObjectElementId);

            $designObjectElement.css("display", "none");

            for (var k = 0; k < designObjectControllers.length; k++) {
                var designObjectController = designObjectControllers[k];

                if (designObjectController.hideElement != undefined)
                    designObjectController.hideElement($designObjectElement, designObject);
            }

            var index = designObjectIds.indexOf(designObjectId);
            if (index != -1)
                designObjectIds.splice(index, 1);
        }

        // for existing objects
        for (var i = 0; i < playerData.layers.length; i++) {
            var layer = playerData.layers[i];
            var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, base.frameIndex);
            if (keyframe != null) {
                if (keyframe.motionTween) {
                    for (var j = 0; j < keyframe.designLayout.designObjects.length; j++) {
                        var designObject = keyframe.designLayout.designObjects[j];
                        var designObjectElementId = designObject.availableId;
                        var $designObjectElement = $("#" + designObjectElementId);
                        var designObjectController = $designObjectElement.data("controllers.designObject");

                        var nextKeyframe = VFabrikaPlayerHelper.getNextKeyframeForLayerByKeyframe(layer, keyframe);
                        if (nextKeyframe != null) {
                            var nextKeyframeDesignObject = VFabrikaPlayerHelper.getDesignObjectForKeyframeById(nextKeyframe, designObject.id);
                            if (nextKeyframeDesignObject != null) {
                                var currentTime = Math.round(base.frameIndex - keyframe.frameIndex);
                                var totalTime = keyframe.frameCount;

                                if (designObjectController != null && designObjectController["frameTween"] != undefined)
                                    designObjectController.frameTween(layer, $designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe, nextKeyframeDesignObject);
                            }
                        }

                        if (designObjectController != null && designObjectController["frameChanged"] != undefined)
                            designObjectController.frameChanged($designObjectElement, designObject, keyframe, nextKeyframe)
                    }
                } else if (layerLastKeyframeIds[i] != keyframe.id) {
                    layerLastKeyframeIds[i] = keyframe.id;

                    for (var j = 0; j < keyframe.designLayout.designObjects.length; j++) {
                        var designObject = keyframe.designLayout.designObjects[j];
                        var designObjectElementId = designObject.availableId;
                        var $designObjectElement = $("#" + designObjectElementId);

                        var designObjectController = $designObjectElement.data("controllers.designObject");
                        if (designObjectController != null) {
                            if (designObjectController["frameUpdate"] != undefined)
                                designObjectController.frameUpdate($designObjectElement, designObject);

                            if (designObjectController["frameChanged"] != undefined)
                                designObjectController.frameChanged($designObjectElement, designObject, totalTime, currentTime, keyframe, nextKeyframe)
                        }
                    }
                }
            }
        }

        // app starter - show
        if (refreshReason == "appStarter_hide") {
            for (var i = 0; i < designObjectIds.length; i++) {
                var designObjectId = designObjectIds[i];
                var designObject = VFabrikaPlayerHelper.getDesignObjectForFrameIndexById(playerData, base.frameIndex, designObjectId);
                if (designObject.type != DesignObjectType.TRIGGER) {
                    var designObjectElementId = designObject.availableId;
                    var $designObjectElement = $("#" + designObjectElementId);
                    var designObjectController = $designObjectElement.data("controllers.designObject");
                    if (designObjectController != null) {
                        if (designObjectController.showElement != undefined)
                            designObjectController.showElement($designObjectElement, designObject, true);
                    }
                }
            }
        }

        // invoke events for triggers
        if (refreshReason == undefined) {
            for (var i = 0; i < inDesignObjectIds.length; i++) {
                var designObjectId = inDesignObjectIds[i];
                var designObject = VFabrikaPlayerHelper.getDesignObjectForFrameIndexById(playerData, base.frameIndex, designObjectId);
                var designObjectElementId = designObject.availableId;
                var $designObjectElement = $("#" + designObjectElementId);

                if (designObject != null) {
                    if (designObject.type == DesignObjectType.TRIGGER) {
                        $designObjectElement.trigger("invoke");
                        $(base).trigger("frameTrigger", [base, designObject]);
                    }
                }
                else
                    console.info("Design object is null for trigger loop");
            }
        }

        // app starter - trigger
        if (refreshReason == "appStarter_hide") {
            var designObjects = VFabrikaPlayerHelper.getDesignObjectsForFrameIndex(playerData, base.frameIndex);
            for (var i = 0; i < designObjects.length; i++) {
                var designObject = designObjects[i];
                if (designObject.type == DesignObjectType.TRIGGER) {
                    var designObjectElementId = designObject.availableId;
                    var $designObjectElement = $("#" + designObjectElementId);
                    $designObjectElement.trigger("invoke");
                    $(base).trigger("frameTrigger", [base, designObject]);
                }
            }
        }
    };

    var start = null;

    var onEnterFrame = function (timestamp) {
        //if (!start) start = timestamp;
        //var elapsedTime = timestamp - start;
        //if (elapsedTime > 1000 / playerData.framesPerSecond) {
        //    start = timestamp;
        //    // invalidate frameIndex
        //    if (base.isPlaying && playerData.framesPerSecond > 0) {
        //        base.frameIndex++;

        //        if (base.frameIndex > playerData.frameCount - 1) {
        //            if (playerData.isLooping == true)
        //                base.frameIndex = 0;
        //            else {
        //                base.frameIndex = playerData.frameCount - 1;
        //                base.stop();
        //            }
        //        }

        //        if (base.frameIndex != base.currentFrameIndex) {
        //            $(base).trigger("frameChange", [base, base.frameIndex]);
        //            base.currentFrameIndex = base.frameIndex;
        //        }

        //        base.refresh();
        //    }
        //}

        //if (base.isPlaying)
        //    window.requestAnimationFrame(onEnterFrame);

        // invalidate frameIndex
        if (base.isPlaying && playerData.framesPerSecond > 0) {
            base.frameIndex++;

            if (base.frameIndex > playerData.frameCount - 1) {
                if (playerData.isLooping == true)
                    base.frameIndex = 0;
                else {
                    base.frameIndex = playerData.frameCount - 1;
                    base.stop();
                }
            }

            if (base.frameIndex != base.currentFrameIndex) {
                $(base).trigger("frameChange", [base, base.frameIndex]);
                base.currentFrameIndex = base.frameIndex;
            }

            base.refresh();
        }
    };

    this.frameLength = function () {
        return playerData.length;
    }

    this.gotoAndPlay = function (frameIndex) {
        base.stop();

        if (playerData.length <= frameIndex)
            console.error("VFabrikaPlayer Exception > frameIndex value exceeds VFabrika timeline length.");

        this.frameIndex = frameIndex;

        base.play();
    };

    this.setFramePerSecond = function (framesPerSecond) {
        playerData.framesPerSecond = framesPerSecond;
            
        if (this.isPlaying) {
            if (base.timerId != 0)
                window.clearInterval(base.timerId);

            base.timerId = window.setInterval(onEnterFrame, 1000 / playerData.framesPerSecond);
        }
    };

    this.play = function () {
        /*
        this.isPlaying = true;

        this.refresh();

        //if (base.timerId != 0)
        //    window.clearInterval(base.timerId);

        $(base).trigger("frameChange", [base, this.frameIndex]);
        $(base).trigger("stateChange", [base, this.isPlaying]);

        //base.timerId = window.setInterval(onEnterFrame, 1000 / playerData.framesPerSecond);
        window.requestAnimationFrame(onEnterFrame);
        */

        this.isPlaying = true;

        this.refresh();

        if (base.timerId != 0)
            window.clearInterval(base.timerId);

        $(base).trigger("frameChange", [base, this.frameIndex]);
        $(base).trigger("stateChange", [base, this.isPlaying]);

        base.timerId = window.setInterval(onEnterFrame, 1000 / playerData.framesPerSecond);
    };

    this.gotoAndStop = function (frameIndex) {
        if (this.isPlaying)
            this.stop();

        this.frameIndex = frameIndex;

        this.refresh();

        $(base).trigger("frameChange", [base, this.frameIndex]);
    };

    this.stop = function () {
        this.isPlaying = false;

        if (base.timerId != 0) {
            window.clearInterval(base.timerId);
            base.timerId = 0;
        }

        $(base).trigger("stateChange", [base, this.isPlaying]);

        //this.refresh(true);
    };

    /*
    this.reset = function () {
        for (var i = 0; i < designObjectIds.length; i++) {
            var id = designObjectIds[i];

            var designObjectDiv = $("#vfabrika-container").find("[id]").each(function (index) {
                if ($(this).prop("id") == id) {
                    $(this).remove();
                    delete $(this);
                }
            });

            if (designObjectIds.indexOf(id) != -1)
                designObjectIds.splice(designObjectIds.indexOf(id), 1);
        }

        //this.gotoAndStop(0);
    };
    */

    this.resetStage = function () {
        var designObjects = VFabrikaPlayerHelper.getDesignObjectsForFrameIndex(playerData, base.frameIndex);

        for (var i = 0; i < designObjects.length; i++) {
            var designObjectId = designObjects[i].id;
            var designObject = VFabrikaPlayerHelper.getDesignObjectForFrameIndexById(playerData, base.frameIndex, designObjectId);
            var designObjectElementId = designObject.availableId;
            var $designObjectElement = $("#" + designObjectElementId);

            $designObjectElement.css("left", designObject.x);
            $designObjectElement.css("top", designObject.y);

            if (!designObject.isSprite) {
                $designObjectElement.css("width", designObject.width);
                $designObjectElement.css("height", designObject.height);
            } else {
                $designObjectElement.css("width", designObject.spriteWidth);
                $designObjectElement.css("height", designObject.spriteHeight);
            }

            // TODO: rotation and pivot point

            if (designObject.visible)
                $designObjectElement.css("display", "block");
            else
                $designObjectElement.css("display", "none");

            if ($designObjectElement.css("opacity") != designObject.alpha / 100.0)
                $designObjectElement.css("opacity", designObject.alpha / 100.0);
        }
    };

    this.callUserFunction = function (functionName, parameters) {
        return $(base).triggerHandler("userFunction", [functionName, parameters]);
    };

    this.invokeUserFunction = function (functionName, parameters) {
        return $(base).triggerHandler("userInvokeFunction", [functionName, parameters]);
    };

    this.getDesignObjectController = function (designObjectType) {
        for (var i = 0; i < designObjectControllers.length; i++) {
            var designObjectController = designObjectControllers[i];
            if (designObjectController.hasDesignObjectType(designObjectType))
                return designObjectController;
        }

        return null;
    };
}
var VFabrikaPlayerHelper = {};

VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex = function (layer, frameIndex) {
    for (var j = 0; j < layer.keyframes.length; j++) {
        var keyframe = layer.keyframes[j];

        if ((keyframe.frameIndex <= frameIndex) && (keyframe.frameIndex + keyframe.frameCount > frameIndex))
            return keyframe;
    }

    return null;
};

VFabrikaPlayerHelper.getNextKeyframeForLayerByKeyframe = function (layer, keyframe) {

    var keyframeIndex = layer.keyframes.indexOf(keyframe);
    if (keyframeIndex != -1) {
        return layer.keyframes[keyframeIndex + 1];
    } else
        return null;
};

// parent can be keyframe or designobject
VFabrikaPlayerHelper.getDesignObjectForKeyframeById = function (parent, id) {
    if (parent.designLayout != null && parent.designLayout.designObjects != undefined) {
        for (var i = 0; i < parent.designLayout.designObjects.length; i++) {
            var designObject = parent.designLayout.designObjects[i];

            if (designObject.id == id)
                return designObject;

            if (designObject.designObjects != undefined) {
                var result = this.getDesignObjectForKeyframeById(designObject, id);
                if (result != null)
                    return result;
            }
        }
    } else if (parent.designObjects != undefined) {
        for (var i = 0; i < parent.designObjects.length; i++) {
            var designObject = parent.designObjects[i];

            if (designObject.id == id)
                return designObject;

            if (designObject.designObjects != undefined) {
                var result = this.getDesignObjectForKeyframeById(designObject, id);
                if (result != null)
                    return result;
            }
        }
    }

    return null;
};

VFabrikaPlayerHelper.getNextKeyframeDesignObjectForLayerByKeyframe = function (layer, keyframe, id) {
    var nextKeyframe = VFabrikaPlayerHelper.getNextKeyframeForLayerByKeyframe(layer, keyframe);
    if (nextKeyframe != null)
        return getNextKeyframeDesignObjectForLayerByKeyframe(nextKeyframe, id);
    else
        return null;
};

VFabrikaPlayerHelper.getDesignObjectForFrameIndexById = function (timeline, frameIndex, id) {
    for (var i = 0; i < timeline.layers.length; i++) {
        var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(timeline.layers[i], frameIndex);
        if (keyframe != null) {
            for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                var designObject = keyframe.designLayout.designObjects[k];

                if (designObject.id == id)
                    return designObject;

                if (designObject.type == "content") {
                    if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                        for (var h = 0; h < designObject.designObjects.length; h++) {
                            var subDesignObject = designObject.designObjects[h];
                            if (subDesignObject.id == id)
                                return subDesignObject;
                        }
                    }
                }
            }
        }
    }

    return null;
};

VFabrikaPlayerHelper.getDesignObjectsForFrameIndex = function (timeline, frameIndex) {

    var result = new Array();

    for (var i = 0; i < timeline.layers.length; i++) {
        var layer = timeline.layers[i];
        var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, frameIndex);
        if (keyframe != null) {
            for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                var designObject = keyframe.designLayout.designObjects[k];
                result.push(designObject);
            }
        }
    }

    return result;
};

VFabrikaPlayerHelper.getLayerForFrameIndexByDesignObjectId = function (timeline, frameIndex, id) {
    for (var i = 0; i < timeline.layers.length; i++) {
        var layer = timeline.layers[i];
        var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, frameIndex);
        if (keyframe != null) {
            for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                var designObject = keyframe.designLayout.designObjects[k];

                if (designObject.id == id)
                    return layer;

                if (designObject.type == "content") {
                    if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                        for (var l = 0; l < designObject.designObjects.length; l++) {
                            var subDesignObject = designObject.designObjects[l];

                            if (subDesignObject.id == id)
                                return layer;
                        }
                    }
                }
            }
        }
    }

    return null;
};

VFabrikaPlayerHelper.getKeyframeForFrameIndexByDesignObjectId = function (timeline, frameIndex, id) {
    for (var i = 0; i < timeline.layers.length; i++) {
        var layer = timeline.layers[i];
        var keyframe = VFabrikaPlayerHelper.getKeyframeForLayerByFrameIndex(layer, frameIndex);
        if (keyframe != null) {
            for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                var designObject = keyframe.designLayout.designObjects[k];

                if (designObject.id == id)
                    return keyframe;

                if (designObject.type == "content") {
                    if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                        for (var l = 0; l < designObject.designObjects.length; l++) {
                            var subDesignObject = designObject.designObjects[l];

                            if (subDesignObject.id == id)
                                return keyframe;
                        }
                    }
                }
            }
        }
    }

    return null;
};

VFabrikaPlayerHelper.getDesignObjectForTimelineByDesignObjectId = function (timeline, id) {
    for (var i = 0; i < timeline.layers.length; i++) {
        var layer = timeline.layers[i];

        for (var j = 0; j < layer.keyframes.length; j++) {
            var keyframe = layer.keyframes[j];

            for (var k = 0; k < keyframe.designLayout.designObjects.length; k++) {
                var designObject = keyframe.designLayout.designObjects[k];

                if (designObject.id == id)
                    return designObject;

                if (designObject.type == "content") {
                    if (designObject.designObjects != null && designObject.designObjects.length > 0) {
                        for (var l = 0; l < designObject.designObjects.length; l++) {
                            var subDesignObject = designObject.designObjects[l];

                            if (subDesignObject.id == id)
                                return subDesignObject;
                        }
                    }
                }
            }
        }
    }

    return null;
};

VFabrikaPlayerHelper.getFrameIndexByKeyframeName = function (timeline, keyframeName) {
    for (var i = 0; i < timeline.layers.length; i++) {
        var layer = timeline.layers[i];

        var frameIndex = 0;

        for (var j = 0; j < layer.keyframes.length; j++) {
            var keyframe = layer.keyframes[j];
            if (keyframe.name == keyframeName)
                return frameIndex;
            else
                frameIndex += keyframe.frameCount;
        }
    }

    return -1;
};

VFabrikaPlayerHelper.isDesignObjectOnStage = function (designObjectIds, designObject) {
    for (var i = 0; i < designObjectIds.length; i++)
        if (designObject.id == designObjectIds[i])
            return true;

    return false;
};

VFabrikaPlayerHelper.alignStage = function ($containerElement, stagePageAlign) {
    if (stagePageAlign == "center") {
        $containerElement.css("width", "100%");
        $containerElement.css("height", "100%");
        $containerElement.css("display", "flex");
        $containerElement.css("justify-content", "space-between");
        $containerElement.css("align-items", "center");
    }
};

VFabrikaPlayerHelper.equalsFloat = function (value1, value2) {
    var precision = 0.01;

    if (Math.abs(value1 - value2) <= precision)
        return true;
    else
        return false;
};
var VFabrikaPlayerConstants = {};

VFabrikaPlayerConstants.CONTAINER_ELEMENT_ID = "vfabrika-container";
VFabrikaPlayerConstants.STAGE_ELEMENT_ID = "vfabrika-stage";
VFabrikaPlayerConstants.LAYER_CSS_CLASS_NAME = "vfabrika-layer";
VFabrikaPlayerConstants.INTERACTION_DISABLER_ELEMENT_ID = "vfabrika-interaction-disabler";

VFabrikaPlayerConstants.APP_STARTER_LAYER_ELEMENT_ID = "vfabrika-app-starter-layer";
VFabrikaPlayerConstants.APP_STARTER_BACKGROUND_ELEMENT_ID = "vfabrika-app-starter-background";
VFabrikaPlayerConstants.APP_STARTER_BUTTON_ELEMENT_ID = "vfabrika-app-starter-button";
function VFabrikaBlocks(player, playerData) {
    this.variables = new Array();
    this.omitConsoleMessages = playerData.omitConsoleMessages;

    this.createVariables = function () {
        var variables = [];

        variables.add = function (name, value) {
            this.push({ name: name, value: value });
        }

        variables.getVariable = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name)
                    return variable;
            }
        }

        variables.contains = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name)
                    return true;
            }

            return false;
        }

        variables.getValue = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name)
                    return variable.value;
            }

            throw new Error("CreateVariables.getValue: variable not found! [" + name + "]");
        }

        variables.remove = function (name) {
            for (var i = 0; i < this.length; i++) {
                var variable = variables[i];
                if (variable.name == name) {
                    this.splice(index, 1);
                    break;
                }
            }

            throw new Error("CreateVariables.remove: variable not found! [" + name + "]");
        }

        return variables;
    }

    this.cloneScopeVariables = function (scopeVariables) {
        var newScopeVariables = this.createVariables();

        if (scopeVariables != null) {
            for (var i = 0; i < scopeVariables.length; i++) {
                var scopeVariable = scopeVariables[i];
                newScopeVariables.push(scopeVariable);
            }
        }

        return newScopeVariables;
    }

    this.createVariable = function (name, value) {
        return { name: name, value: value };
    }

    this.returnValue = function (aHasReturnValue, aValue) {
        return { hasReturnValue: aHasReturnValue, value: aValue };
    }

    ////////////////////////////////////
    // BlocksControllers registration //
    ////////////////////////////////////

    var blocksControllers = new Array();

    	blocksControllers.push(new SebitFrameworkBlockController(this, player, playerData));
	blocksControllers.push(new PrimitiveDesignObjectsBlockController(this, player, playerData));
	blocksControllers.push(new ImageDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new SoundDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new VideoDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new ContentDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new ImageButtonDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new ButtonDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new RadioButtonDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new CheckBoxDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new ComboBoxDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new TextBoxDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new JsonDataSetBlockController(this, player, playerData));
	blocksControllers.push(new SliderDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new TextDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new TimerDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new DelayDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new DataConnectorDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new Vector2dBlockController(this, player, playerData));
	blocksControllers.push(new AnimationBlockController(this, player, playerData));
	blocksControllers.push(new BuiltinBlockController(this, player, playerData));
	blocksControllers.push(new CanvasDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new TriggerDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new HighlightDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new TableDesignObjectBlockController(this, player, playerData));
	blocksControllers.push(new SmartDesignObjectsBlockController(this, player, playerData));


    var blockControllerTypes = {};

    for (var i = 0; i < blocksControllers.length; i++) {
        var blockController = blocksControllers[i];
        for (var j = 0; j < blockController.blockTypes.length; j++) {
            var blockType = blockController.blockTypes[j];
            blockControllerTypes[blockType] = blockController;
        }
    }

    //////////////////////////
    // Life-cycle functions //
    //////////////////////////

    var initializeFunctions = function () {
        for (var layerIndex = 0; layerIndex < playerData.layers.length; layerIndex++) {
            var layer = playerData.layers[layerIndex];

            for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
                var keyframe = layer.keyframes[keyframeIndex];

                if (keyframe.blockLayout.blocks != null) {
                    for (var blockIndex = 0; blockIndex < keyframe.blockLayout.blocks.length; blockIndex++) {
                        var block = keyframe.blockLayout.blocks[blockIndex];

                        initializeFunctionsRecursively(block);
                    }
                }
            }
        }
    }

    var initializeFunctionsRecursively = function (block) {
        // set getInput function
        block.getInput = function (name) {
            for (var i = 0; i < this.inputs.length; i++) {
                var input = this.inputs[i];

                if (input.name == name)
                    return input;
            }

            return null;
        };

        // set getItem function
        for (var blockInputIndex = 0; blockInputIndex < block.inputs.length; blockInputIndex++) {
            var blockInput = block.inputs[blockInputIndex];

            blockInput.getItem = function (name) {
                for (var i = 0; i < this.items.length; i++) {
                    var item = this.items[i];

                    if (item.name == name)
                        return item;
                }

                return null;
            };

            // set block function
            if (blockInput.block != null) {
                initializeFunctionsRecursively(blockInput.block);
            }

            // set blocks functions
            if (blockInput.flowBlock != null)
                initializeFunctionsRecursively(blockInput.flowBlock);

            // set item's block function
            for (var blockInputItemIndex = 0; blockInputItemIndex < blockInput.items.length; blockInputItemIndex++) {
                var blockInputItem = blockInput.items[blockInputItemIndex];

                if (blockInputItem.type == "container" && blockInputItem.block != null)
                    initializeFunctionsRecursively(blockInputItem.block);
            }
        }

        if (block.flowBlock != null)
            initializeFunctionsRecursively(block.flowBlock);
    }

    this.initialize = function () {
        initializeFunctions();

        // app initializing
        var appInitializingBlocks = VFabrikaBlockHelper.findBlocksInTimelineByTypeName(playerData, "onAppInitializing");
        for (var i = 0; i < appInitializingBlocks.length; i++) {
            var appInitializingBlock = appInitializingBlocks[i];
            this.executeBlock(appInitializingBlock, this.createVariables(), this.createVariables(), true, this.createFlowState());
        }

        // preInitialize
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            blocksController.preInitialize(this);
        }

        // initialize
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            blocksController.initialize(this);
        }

        // postInitialize
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            blocksController.postInitialize(this);
        }

        // app initialized
        var appInitializedBlocks = VFabrikaBlockHelper.findBlocksInTimelineByTypeName(playerData, "onAppInitialized");
        for (var i = 0; i < appInitializedBlocks.length; i++) {
            var appInitializedBlock = appInitializedBlocks[i];
            this.executeBlock(appInitializedBlock, this.createVariables(), this.createVariables(), true, this.createFlowState());
        }
    }

    this.setObjectProperty = function (obj, propertyName, value) {
        if (obj.value != undefined) {
            var designObjectElement = $(obj.value);

            if (propertyName.toLowerCase() == "id") {
                designObjectElement.attr("id", value);
                obj.id = value;
            } else if (propertyName.toLowerCase() == "locationx")
                designObjectElement.css("left", value + "px");
            else if (propertyName.toLowerCase() == "locationy")
                designObjectElement.css("top", value + "px");
            else if (propertyName.toLowerCase() == "width")
                designObjectElement.css("width", value + "px");
            else if (propertyName.toLowerCase() == "height")
                designObjectElement.css("height", value + "px");
            else if (propertyName.toLowerCase() == "isdroppable")
                designObject.droppable = value;
            else if (propertyName.toLowerCase() == "isdraggable") {
                designObject.draggable = value;

                var dragObject = designObjectElement.data("controllers.dragObject");
                dragObject.enable(value);
            }
            else if (propertyName.toLowerCase() == "visible") {
                designObject.isVisible = value;
                if (value)
                    designObjectElement.css("display", "block");
                else
                    designObjectElement.css("display", "none");
            } else if (propertyName.toLowerCase() == "enabled") {
                designObject.enabled = value;

                if (value)
                    designObjectElement.removeAttr("disabled");
                else
                    designObjectElement.attr("disabled", "disabled");
            } else if (propertyName.toLowerCase() == "alpha") {
                value = parseFloat(value / 100);
                designObject.alpha = value;
                designObjectElement.css("opacity", value);
            } else if (propertyName.toLowerCase() == "classname")
                designObjectElement.attr("class", value);
            else if (propertyName.toLowerCase() == "tag")
                designObject.tag = value;
            else if (propertyName.toLowerCase() == "text") {
                designObject.text = value;
                designObjectElement.html(value);
            }
            else if (propertyName.toLowerCase() == "value") {
                if (block.type == "slider_design_object_set_property") {
                    var slider = designObjectElement.data("controllers.slider");
                    slider.value = value;
                } else
                    designObjectElement.html(value);

                designObject.value = value;
            } else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
                if (!value)
                    designObjectElement.css("cursor", "default");
                else
                    designObjectElement.css("cursor", "pointer");

                designObject.useHandCursor = value;
            }
            else if (propertyName.toLowerCase().indexOf("css:") != -1) {
                var cssPropertyName = propertyName.substring(4, propertyName.length);
                designObjectElement.css(cssPropertyName, value);
            } else {
                obj[propertyName] = value;
            }
        } else
            obj[propertyName] = value;
    }

    this.getObjectProperty = function (obj, propertyName) {
        if (obj.value != undefined) {
            var designObjectElement = $(obj.value);
            var designObject = designObjectElement.data("designObject");

            if (propertyName.toLowerCase() == "id")
                return designObjectElement.attr("id");
            else if (propertyName.toLowerCase() == "locationx")
                return parseInt(designObjectElement.css("left").replace("px", ""));
            else if (propertyName.toLowerCase() == "locationy")
                return parseInt(designObjectElement.css("top").replace("px", ""));
            else if (propertyName.toLowerCase() == "width")
                return parseInt(designObjectElement.css("width").replace("px", ""));
            else if (propertyName.toLowerCase() == "height")
                return parseInt(designObjectElement.css("height").replace("px", ""));
            else if (propertyName.toLowerCase() == "isdroppable")
                return designObject.droppable;
            else if (propertyName.toLowerCase() == "isdraggable")
                return designObject.draggable;
            else if (propertyName.toLowerCase() == "visible")
                return designObject.isVisible;
            else if (propertyName.toLowerCase() == "enabled")
                return designObject.enabled;
            else if (propertyName.toLowerCase() == "alpha")
                return designObject.alpha;
            else if (propertyName.toLowerCase() == "classname")
                return designObjectElement.attr("class");
            else if (propertyName.toLowerCase() == "tag")
                return designObject.tag;
            else if (propertyName.toLowerCase() == "value") {
                if (block.type == BlockType.SLIDER_DESIGN_OBJECT_GET_PROPERTY) {
                    var slider = designObjectElement.data("controllers.slider");
                    return slider.value;
                }
                else
                    return designObject.value;
            }
            else if (propertyName.toLowerCase() == "text") {
                return designObject.text;
            }
            else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
                return designObject.useHandCursor;
            else if (propertyName.toLowerCase().indexOf("css:") != -1) {
                var cssPropertyName = propertyName.substring(4, propertyName.length);
                return designObjectElement.css(cssPropertyName);
            }
            else
                return obj[propertyName];
        }
        else
            return obj[propertyName];
    }

    var dragged = false;

    this.createFlowState = function () {
        return { modifierType: null, modifierValue: null };
    }

    this.executeBlock = function (block, eventVariables, scopeVariables, flow, flowState) {
        var isBlockTypeFound = false;

        if (blockControllerTypes[block.type] != null) {
            isBlockTypeFound = true;

            var blockController = blockControllerTypes[block.type];
            var result = blockController.executeBlock(block, eventVariables, scopeVariables, flow, flowState);
            if (result != null && result.hasReturnValue)
                return result;
        }

        /*
        for (var i = 0; i < blocksControllers.length; i++) {
            var blocksController = blocksControllers[i];
            if (blocksController.hasBlockType(block.type)) {
                isBlockTypeFound = true;

                var result = blocksController.executeBlock(block, eventVariables, scopeVariables, flow, flowState);
                if (result != null && result.hasReturnValue)
                    return result;

                break;
            }
        }
        */

        if (!isBlockTypeFound)
            throw new Error("block type not found! [" + block.type + "]");

        if (flow && block.flowBlock != null && flowState.modifierType == null) {
            var result = this.executeBlock(block.flowBlock, eventVariables, scopeVariables, flow, flowState);
            if (result != null && result.hasReturnValue)
                return result;
        }
    }

    this.startsWith = function (text, keyword) {
        if (text == undefined)
            return false;

        if (keyword == undefined)
            return false;

        for (var i = 0; i < keyword.length; i++) {
            if (i > text.length - 1)
                break;

            if (keyword.charAt(i) != text.charAt(i))
                return false;
        }

        return true;
    }

    this.getUserClass = function (classText) {
        return DesignObjectBlockControllerHelper.getUserClass(classText);
    }

    this.setUserClass = function (classText, value) {
        DesignObjectBlockControllerHelper.setUserClass(classText, value);
    }
}
var VFabrikaPlayerDragDropHelper = { };

VFabrikaPlayerDragDropHelper.createDragMembersForDesignObject = function (designObjectElementId) {
    var $designObjectElement = $("#" + designObjectElementId);
    var designObject = $designObjectElement.data("designObject");

    // dragObject
    var dragObject = $designObjectElement.data("controllers.dragObject");
    if (dragObject == null) {
        var dragObject = new Sbt.DragObject(designObjectElementId, { revert: designObject.revertDragging, container: '#' + designObject.parentElementId, handle: designObjectElementId });
        dragObject.eventBindingBehavior = Sbt.DragObject.EVENT_BINDING_BEHAVIOR.MODERATE; // << this is a patch for mouseDown issue on restart
        $designObjectElement.data("controllers.dragObject", dragObject);
        dragObject.enable(false);
    }

    // dragHandler
    var dragHandler = $designObjectElement.data("controllers.dragHandler");
    if (dragHandler == null) {
        var dragHandler = new VFabrikaPlayerDragHandler();

        dragObject.onDragStart = function (dragObject, event) {
            dragHandler.doDragBegin(event, dragObject);
        }

        dragObject.onMove = function (dragObject, event) {
            dragHandler.doDragMove(event, dragObject);
        }

        dragObject.onDragStop = function (dragObject, event) {
            dragHandler.doDragEnding(event, dragObject);
        }

        dragObject.onEnd = function (dragObject, event) {
            dragHandler.doDragEnd(event, dragObject);
        }

        $designObjectElement.data("controllers.dragHandler", dragHandler);
    }
}

VFabrikaPlayerDragDropHelper.enableDesignObjectAsDraggable = function (designObjectElementId) {
    VFabrikaPlayerDragDropHelper.createDragMembersForDesignObject(designObjectElementId);

    var $designObjectElement = $("#" + designObjectElementId);
    var dragObject = $designObjectElement.data("controllers.dragObject");
    dragObject.enable(true);
};

VFabrikaPlayerDragDropHelper.disableDesignObjectAsDraggable = function (designObjectElementId) {
    var $designObjectElement = $("#" + designObjectElementId);
    var dragObject = $designObjectElement.data("controllers.dragObject");
    if (dragObject != undefined)
        dragObject.enable(false);
};

VFabrikaPlayerDragDropHelper.enableDesignObjectAsDroppable = function (designObjectElementId) {
    var $designObjectElement = $("#" + designObjectElementId);
    var designObject = $designObjectElement.data("designObject");

    var dropHandler = VFabrikaPlayerDragDropHelper.createDropHandlerForDesignObject(designObjectElementId);

    if (designObject.highlightBehavior) {
        Sbt.Droparea.add(designObjectElementId,
            {
                onDrop: function (event, dragObject, dropArea) {
                    dropHandler.doDrop(event, dragObject, dropArea);
                },
                highLight: { width: parseInt(designObject.highlightWidth), height: parseInt(designObject.highlightHeight) }
            });
    } else {
        Sbt.Droparea.add(designObjectElementId,
            {
                onDrop: function (event, dragObject, dropArea) {
                    dropHandler.doDrop(event, dragObject, dropArea);
                }
            });
    }
};

VFabrikaPlayerDragDropHelper.createDropHandlerForDesignObject = function (designObjectElementId) {
    var $designObjectElement = $("#" + designObjectElementId);
    var designObject = $designObjectElement.data("designObject");

    var dropHandler = $designObjectElement.data("controllers.dropHandler");

    if (dropHandler == undefined) {
        var dropHandler = new VFabrikaPlayerDropHandler();

        dropHandler.designObject = designObject;
        dropHandler.designObjectId = designObjectElementId;
        dropHandler.designObjectSelector = $designObjectElement;

        $designObjectElement.data("controllers.dropHandler", dropHandler);
    }

    return dropHandler;
};

VFabrikaPlayerDragDropHelper.disableDesignObjectAsDroppable = function (designObjectElementId) {
    Sbt.DropArea.remove(designObjectElementId);
};

function VFabrikaPlayerDropHandler() {
    var base = this;

    this.doDrop = function (event, dragObject, dropHandler) {
        $(base).trigger("drop", [base, dragObject, dropHandler]);
    }

    this.doOver = function (event, dragObject, dropHandler) {
        $(base).trigger("over", [base, dragObject, dropHandler]);
    }

    this.doOut = function (event, dragObject, dropHandler) {
        $(base).trigger("out", [base, dragObject, dropHandler]);
    }
}
function VFabrikaPlayerDragHandler() {
    var base = this;

    this.doDragBegin = function (event, dragObject) {
        $(base).trigger("dragBegin", [base, dragObject]);
    }

    this.doDragMove = function (event, dragObject) {
        $(base).trigger("dragMove", [base, dragObject]);
    }

    this.doDragEnding = function (event, dragObject) {
        $(base).trigger("dragEnding", [base, dragObject]);
    }

    this.doDragEnd = function (event, dragObject) {
        $(base).trigger("dragEnd", [base, dragObject]);
    }
}
var VFabrikaHelper = {};

VFabrikaHelper.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
VFabrikaHelper.isFirefox = typeof InstallTrigger !== 'undefined';
VFabrikaHelper.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
VFabrikaHelper.isIE = /*@cc_on!@*/false || !!document.documentMode;
VFabrikaHelper.isEdge = !VFabrikaHelper.isIE && !!window.StyleMedia;
VFabrikaHelper.isChrome = !!window.chrome && !!window.chrome.webstore;
VFabrikaHelper.isBlink = (VFabrikaHelper.isChrome || VFabrikaHelper.isOpera) && !!window.CSS;

VFabrikaHelper.startsWith = function (text, prefix) {
    return text.indexOf(prefix, 0) === 0;
};

VFabrikaHelper.endsWith = function (text, suffix) {
    return text.indexOf(suffix, text.length - suffix.length) !== -1;
};
VFabrikaBlockHelper = {};

VFabrikaBlockHelper.findBlockInTimelineByTypeName = function (timeline, typeName) {
    for (var layerIndex = 0; layerIndex < timeline.layers.length; layerIndex++) {
        var layer = timeline.layers[layerIndex];
        for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
            var keyframe = layer.keyframes[keyframeIndex];
            var blockLayout = keyframe.blockLayout;
            if (blockLayout != null) {
                for (var blockIndex = 0; blockIndex < blockLayout.blocks.length; blockIndex++) {
                    var block = blockLayout.blocks[blockIndex];
                    var result = VFabrikaBlockHelper.findBlockInBlockByTypeName(block, typeName);
                    if (result != null)
                        return result;
                }
            }
        }
    }

    return null;
}

VFabrikaBlockHelper.findBlockInBlockByTypeName = function (block, typeName) {
    if (block.type == typeName)
        return block;

    for (var inputIndex = 0; inputIndex < block.inputs.length; inputIndex++) {
        var input = block.inputs[inputIndex];

        if (input["flowBlock"] != null) {
            var result = VFabrikaBlockHelper.findBlockInBlockByTypeName(input["flowBlock"], typeName);
            if (result != null)
                return result;
        }

        if (input["block"] != null) {
            var result = VFabrikaBlockHelper.findBlockInBlockByTypeName(input["block"], typeName);
            if (result != null)
                return result;
        }

        for (var itemIndex = 0; itemIndex < input.items.length; itemIndex++) {
            var item = input.items[itemIndex];

            if (item["block"] != null) {
                var result = VFabrikaBlockHelper.findBlockInBlockByTypeName(item["block"], typeName);
                if (result != null)
                    return result;
            }
        }
    }

    return null;
}

VFabrikaBlockHelper.findBlocksInTimelineByTypeName = function (timeline, typeName) {
    var result = new Array();

    for (var layerIndex = 0; layerIndex < timeline.layers.length; layerIndex++) {
        var layer = timeline.layers[layerIndex];
        for (var keyframeIndex = 0; keyframeIndex < layer.keyframes.length; keyframeIndex++) {
            var keyframe = layer.keyframes[keyframeIndex];
            var blockLayout = keyframe.blockLayout;
            if (blockLayout != null) {
                for (var blockIndex = 0; blockIndex < blockLayout.blocks.length; blockIndex++) {
                    var block = blockLayout.blocks[blockIndex];
                    VFabrikaBlockHelper.findBlocksInBlockByTypeName(block, typeName, result);
                }
            }
        }
    }

    return result;
}

VFabrikaBlockHelper.findBlocksInBlockByTypeName = function (block, typeName, result) {
    if (block.type == typeName)
        result.push(block);

    for (var inputIndex = 0; inputIndex < block.inputs.length; inputIndex++) {
        var input = block.inputs[inputIndex];

        if (input["flowBlock"] != null)
            VFabrikaBlockHelper.findBlockInBlockByTypeName(input["flowBlock"], typeName, result);

        if (input["block"] != null)
            VFabrikaBlockHelper.findBlockInBlockByTypeName(input["block"], typeName, result);

        for (var itemIndex = 0; itemIndex < input.items.length; itemIndex++) {
            var item = input.items[itemIndex];

            if (item["block"] != null)
                VFabrikaBlockHelper.findBlockInBlockByTypeName(item["block"], typeName, result);
        }
    }
}

VFabrikaBlockHelper.getMutatorInputByMutatorItemId = function (block, mutatorItemId, mutatorName) {
    var inputName = mutatorItemId + "_" + mutatorName;
    for (var i = 0; i < block.inputs.length; i++) {
        var input = block.inputs[i];
        if (input.name == inputName)
            return input;
    }

    return null;
}

VFabrikaBlockHelper.getMutatorInputItemByMutatorItemId = function (input, mutatorItemId, mutatorName) {
    var inputItemName = mutatorItemId + "_" + mutatorName;
    for (var i = 0; i < input.items.length; i++) {
        var inputItem = input.items[i];
        if (inputItem.name == inputItemName)
            return inputItem;
    }

    return null;
}
DataSet = function () {
    var tables = {};

    this.initialize = function () {
        this.addTable("question", Sbt.plugins.QuestionJSON); // <<<<< example
    }

    this.addTable = function (name, data) {
        tables[name] = data;
    }

    this.getTable = function (name) {
        return tables[name];
    }
}

DataSet.instance = null;

DataSet.getInstance = function () {
    if (DataSet.instance == null)
        DataSet.instance = new DataSet();

    return DataSet.instance;
}

/*
(var RotaryDrawer = function(scope) {
    this.value = 5;

    function()
    {
        
    }
})(create_namespace(this, "com.sebit.vfabrika"));

sbt.video.Video
var drawer = new com.sebit.vfabrika.RotaryDrawer();
drawer.value
*/

/////////////////////////////////////////
///
/// Javascript port of classic Actionscript Vector2
/// class for generic 2d vector operations
/// Murat Dogan CORUH
/// 11.01.2013
/// 
/////////////////////////////////////////

var MathHelper = {};

MathHelper.toDegree = function (angle) {
	return angle * 180 / Math.PI;
}

MathHelper.toRadian = function (angle) {
	return angle * Math.PI / 180;
}

function Vector2(x, y) {
	this.x = x;
	this.y = y;

	this.clone = function () {
		return new Vector2(this.x, this.y);
	}
}

/**
* Adds two vectors with each other
*/
Vector2.add = function(v1, v2) {
	return new Vector2(v1.x + v2.x, v1.y + v2.y);
}
/**
* Subtracts second vector from first vector
* @summary Subtracts second vector from first vector
*/
Vector2.subtract = function(v1, v2) {
	return new Vector2(v1.x - v2.x, v1.y - v2.y);
}
/**
* Multiplies vector x,y,z components with a scaler value
* @summary Multiplies vector x,y,z components with a scaler value
*/
Vector2.multiply = function(v, scaler) {
	return new Vector2(v.x * scaler, v.y * scaler);
}
/**
* Divides vector x,y,z components with a divider value
* @summary Divides vector x,y,z components with a divider value
*/
Vector2.divide = function(v, divider) {
	return new Vector2(v.x / divider, v.y / divider);
}
/**
* Inverses vector
* @summary Inverses vector
*/
Vector2.inverse = function(v) {
	return new Vector2(-v.x, -v.y);
}
/**
* sets length of given vector and return it
* @summary sets length of given vector and return it
*/
Vector2.setLength = function(v, length) {
	var len = Math.sqrt((v.x * v.x) + (v.y * v.y));
	return new Vector2(v.x * (length / len), v.y * (length / len));
}
/**
* returns true if the vector is zero vector
* @summary returns true if the vector is zero vector
*/
Vector2.isZeroVector = function(v) {
	return ((v.x == 0) && (v.y == 0));
}
/**
* returns the length of vector
* @summary returns the length of vector
*/
Vector2.magnitude = function(v) {
	return Math.sqrt((v.x * v.x) + (v.y * v.y));
}
/**
* returns unit vector from given vector
* @summary returns unit vector from given vector
*/
Vector2.normalize = function(v) {
	var mag = Vector2.magnitude(v);
	return new Vector2(v.x / mag, v.y / mag);
}
/**
* returns dot product of two given vectors
* @summary returns dot product of two given vectors
*/
Vector2.dot = function(v1, v2) {
	return (v1.x * v2.x) + (v1.y * v2.y);
}
/**
* returns cross product of two given vectors
* @summary returns cross product of two given vectors
*/
Vector2.cross = function(v1, v2) {
	return (v1.x * v2.y) - (v2.x * v1.y);
}
/**
* returns the distance from one vector to another
* @summary returns the distance from one vector to another
*/
Vector2.distance = function(v1, v2) {
	return Math.sqrt(((v1.x - v2.x) * (v1.x - v2.x)) + ((v1.y - v2.y) * (v1.y - v2.y)));
}
/**
* rotates a vector with given radian angle
* @summary rotates a vector with given radian angle
* @explicit thanks to Sinan
*/
Vector2.rotateRadian = function(v, radian) {
	var vr = new Vector2();

	vr.x = v.x * Math.cos(radian) - v.y * Math.sin(radian);
	vr.y = v.y * Math.cos(radian) + v.x * Math.sin(radian);

	return vr;
}
/**
* rotates a vector with given degree angle
* @summary rotates a vector with given degree angle
* @explicit thanks to Sinan
*/
Vector2.rotateDegree = function(v, degree) {
	return Vector2.rotateRadian(v, MathHelper.toRadian(degree));
}


/**
* returns unsigned degree angle between 0 and +180 by given two vectors
* @summary returns unsigned degree angle between 0 and +180 by given two vectors
*/
Vector2.angleUnsigned = function(v1, v2) {
	var va = Vector2.normalize(v1);
	var vb = Vector2.normalize(v2);
	var dot = Vector2.dot(va, vb);
	var rad = Math.acos(dot);
	var deg = MathHelper.toDegree(rad);

	return deg;
}
/**
* returns signed degree angle between -180 and +180 by given two vectors
* @summary returns signed degree angle between -180 and +180 by given two vectors
*/
Vector2.angleSigned = function(v1, v2) {
	var va = Vector2.normalize(v1);
	var vb = Vector2.normalize(v2);
	var dot = Vector2.dot(va, vb);
	var cross = Vector2.cross(vb, va);
	var rad = Math.acos(dot);
	var deg = MathHelper.toDegree(rad);

	if (cross >= 0) {
		cross = 1;
	}
	if (cross < 0) {
		cross = -1;
	}

	return deg * cross;
}
/**
* returns degree angle between 0 and 360 by given two vectors
* @summary returns degree angle between 0 and 360 by given two vectors
*/
Vector2.angle360 = function(v1, v2) {
	var va = Vector2.normalize(v1);
	var vb = Vector2.normalize(v2);
	var dot = Vector2.dot(va, vb);
	var cross = Vector2.cross(vb, va);
	var rad = Math.acos(dot);
	var deg = MathHelper.toDegree(rad);

	if (cross > 0)
		return deg;
	else
		return 360 - deg;
}

/**
	* Compares two vectors for their equality?
	* @summary Compares two vectors for their equality?
	* @param	v1 "First vector to compare."
	* @param	v2 "Second vector to compare."
	* @return "True of false by comparison."
	*/
Vector2.isEqual = function isEqual(v1, v2)
{
	return (v1.x == v2.x) && (v1.y == v2.y);
}

Vector2.centerOfPoints = function(points) {
	var vr = new Vector2(0, 0);

	for (var i = 0; i < points.length; i++) {
		vr.x += points[i].x;
		vr.y += points[i].y;
	}

	vr.x = vr.x / points.length;
	vr.y = vr.y / points.length;

	return vr;
}

Vector2.sortPointsByAngle = function (points) {
    var angles = new Array();

    var center = Vector2.centerOfPoints(points);

    for (var i = 0; i < points.length; i++) {
        var vx = Vector2.normalize(new Vector2(1, 0));
        var v = Vector2.normalize(Vector2.subtract(center, points[i]));
        var deg = Vector2.angle360(vx, v);

        angles.push({ order: i, degree: deg, vector: points[i] });
    }

    // bubble sort
    //angles.sortOn("degree", Array.NUMERIC);
    for (var i = 0; i < angles.length; i++) {
        for (var j = 0; j < angles.length - 1; j++) {
            var angle1 = angles[j];
            var angle2 = angles[j + 1];

            if (angle1.degree > angle2.degree) {
                var obj = angles[j];
                angles[j] = angles[j + 1];
                angles[j + 1] = obj;
            }
        }
    }

    var result = new Array();
    for (var i = 0; i < angles.length; i++)
        result.push(angles[i].vector);

    return result;
}

Vector2.areaOfPoints = function (points) {
    var points_ = Vector2.sortPointsByAngle(points);
    points_.reverse();

    var fp = points_[0];
    var sp;
    var fs = 0;

    for (var i = 1; i < points_.length; i++) {
        sp = points_[i];
        fs += (fp.x * sp.y) - (fp.y * sp.x);
        fp = points_[i];
    }

    sp = points_[0];
    fs += (fp.x * sp.y) - (fp.y * sp.x);
    fs = fs / 2;

    return fs;
}

var Easing = {};

Easing.PI = Math.PI;
Easing.HALF_PI = Easing.PI / 2;

Easing.linear = function (value) {
    return value;
};

Easing.quadraticEaseIn = function (value) {
    return value * value;
};

Easing.quadraticEaseOut = function (value) {
    return -(value * (value - 2));
};

Easing.quadraticEaseInOut = function (value) {
    if (value < 0.5)
        return 2 * value * value;
    else
        return (-2 * value * value) + (4 * value) - 1;
};

Easing.cubicEaseIn = function (value) {
    return value * value * value;
};

Easing.cubicEaseOut = function (value) {
    var f = value - 1;
    return f * f * f + 1;
};

Easing.cubicEaseInOut = function (value) {
    if (value < 0.5) {
        return 4 * value * value * value;
    } else {
        var f = ((2 * value) - 2);
        return 0.5 * f * f * f + 1;
    }
};

Easing.quarticEaseIn = function (value) {
    return value * value * value * value;
};

Easing.quarticEaseOut = function (value) {
    var f = value - 1;
    return f * f * f * (1 - value) + 1;
};

Easing.quarticEaseInOut = function (value) {
    if (value < 0.5) {
        return 8 * value * value * value * value;
    } else {
        var f = (value - 1);
        return -8 * f * f * f * f + 1;
    }
};

Easing.quinticEaseIn = function (value) {
    return value * value * value * value * value;
};

Easing.quinticEaseOut = function (value) {
    var f = value - 1;
    return f * f * f * f + 1;
};

Easing.quinticEaseInOut = function (value) {
    if (value < 0.5) {
        return 16 * value * value * value * value * value;
    } else {
        var f = ((2 * value) - 2);
        return 0.5 * f * f * f * f * f + 1;
    }
};

Easing.sineEaseIn = function (value) {
    return Math.sin((value - 1) * Easing.HALF_PI);
};

Easing.sineEaseOut = function (value) {
    return Math.sin(value * Easing.HALF_PI);
};

Easing.sineEaseInOut = function (value) {
    return 0.5 * (1 - Math.cos(value * Easing.PI));
};

Easing.circularEaseIn = function (value) {
    return 1 - Math.sqrt(1 - (value * value));
};

Easing.circularEaseOut = function (value) {
    return Math.sqrt((2 - value) * value);
};

Easing.circularEaseInOut = function (value) {
    if (value < 0.5)
        return 0.5 * (1 - Math.sqrt(1 - 4 * (value * value)));
    else
        return 0.5 * (Math.sqrt(-((2 * value) - 3) * ((2 * value) - 1)) + 1);
};

Easing.exponentialEaseIn = function (value) {
    return (value == 0.0) ? value : Math.pow(2, 10 * (value - 1));
};

Easing.exponentialEaseOut = function (value) {
    return (value == 1.0) ? value : 1 - Math.pow(2, -10 * value);
};

Easing.exponentialEaseInOut = function (value) {
    if (value == 0.0 || value == 1.0)
        return value;

    if (value < 0.5)
        return 0.5 * Math.pow(2, (20 * value) - 10);
    else
        return -0.5 * Math.pow(2, (-20 * value) + 10) + 1;
};

Easing.elasticEaseIn = function (value) {
    return Math.sin(13 * Easing.HALF_PI * value) * Math.pow(2, 10 * (value - 1));
};

Easing.elasticEaseOut = function (value) {
    return Math.sin(-13 * Easing.HALF_PI * (value + 1)) * Math.pow(2, -10 * value) + 1;
};

Easing.elasticEaseInOut = function (value) {
    if (value < 0.5)
        return 0.5 * Math.sin(13 * Easing.HALF_PI * (2 * value)) * Math.pow(2, 10 * ((2 * value) - 1));
    else
        return 0.5 * (Math.sin(-13 * Easing.HALF_PI * ((2 * value - 1) + 1)) * Math.pow(2, -10 * (2 * value - 1)) + 2);
};

Easing.backEaseIn = function (value) {
    return value * value * value - value * Math.sin(value * Easing.PI);
};

Easing.backEaseOut = function (value) {
    var f = 1 - value;
    return 1 - (f * f * f - f * Math.sin(f * Easing.PI));
};

Easing.backEaseInOut = function (value) {
    if (value < 0.5) {
        var f = 2 * value;
        return 0.5 * (f * f * f - f * Math.sin(f * Easing.PI));
    } else {
        var f = (1 - (2 * value - 1));
        return 0.5 * (1 - (f * f * f - f * Math.sin(f * Easing.PI))) + 0.5;
    }
};

Easing.bounceEaseIn = function (value) {
    return 1 - Easing.bounceEaseOut(1 - value);
};

Easing.bounceEaseOut = function (value) {
    if (value < 4 / 11.0)
        return (121 * value * value) / 16.0;
    else if (value < 8 / 11.0)
        return (363 / 40.0 * value * value) - (99 / 10.0 * value) + 17 / 5.0;
    else if (value < 9 / 10.0)
        return (4356 / 361.0 * value * value) - (35442 / 1805.0 * value) + 16061 / 1805.0;
    else
        return (54 / 5.0 * value * value) - (513 / 25.0 * value) + 268 / 25.0;
};

Easing.bounceEaseInOut = function (value) {
    if (value < 0.5)
        return 0.5 * Easing.bounceEaseIn(value * 2);
    else
        return 0.5 * Easing.bounceEaseOut(value * 2 - 1) + 0.5;
};
function DesignObjectHelper() { };

DesignObjectHelper.calculateTweenLocation = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    var result = {};

    result.x = designObject.x + ((nextKeyframeDesignObject.x - designObject.x) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    result.y = designObject.y + ((nextKeyframeDesignObject.y - designObject.y) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));

    return result;
}

DesignObjectHelper.calculatePivotTweenLocation = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    var result = {};

    result.x = designObject.pivotLocation.x + ((nextKeyframeDesignObject.pivotLocation.x - designObject.pivotLocation.x) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    result.y = designObject.pivotLocation.y + ((nextKeyframeDesignObject.pivotLocation.y - designObject.pivotLocation.y) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));

    return result;
}

DesignObjectHelper.calculateTweenSize = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    var result = {};

    result.width = designObject.width + ((nextKeyframeDesignObject.width - designObject.width) * (DesignObjectHelper.interpolate(keyframe, currentTime / totalTime)));
    result.height = designObject.height + ((nextKeyframeDesignObject.height - designObject.height) * (DesignObjectHelper.interpolate(keyframe, currentTime / totalTime)));

    return result;
}

DesignObjectHelper.calculateTweenAlpha = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    return designObject.alpha + ((nextKeyframeDesignObject.alpha - designObject.alpha) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.calculateTweenRotation = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    if (keyframe.rotationDirection == "clockwise")
        return designObject.rotation + ((nextKeyframeDesignObject.rotation - designObject.rotation) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    else
        return designObject.rotation - ((nextKeyframeDesignObject.rotation - designObject.rotation) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.calculateStrokeThickness = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    return designObject.strokeThickness + ((nextKeyframeDesignObject.strokeThickness - designObject.strokeThickness) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
}

DesignObjectHelper.calculateColor = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime, propertyName) {
    var currentColor = DesignObjectHelper.RgbaToObject(designObject[propertyName]);
    var color = DesignObjectHelper.RgbaToObject(nextKeyframeDesignObject[propertyName]);

    var newA = currentColor.a + ((color.a - currentColor.a) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    var newR = currentColor.r + ((color.r - currentColor.r) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    var newG = currentColor.g + ((color.g - currentColor.g) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    var newB = currentColor.b + ((color.b - currentColor.b) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));

    return "rgba(" + newR + ", " + newG + ", " + newB + ", " + newA + ")";
}

DesignObjectHelper.componentToHex = function (c) {
    var hex = c.toString(16);

    return hex.length == 1 ? "0" + hex : hex;
}

DesignObjectHelper.rgbToHex = function (r, g, b) {
    if (arguments.length == 1) {
        var rgb = r.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
        return DesignObjectHelper.rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    }
    return "#" + DesignObjectHelper.componentToHex(r) + DesignObjectHelper.componentToHex(g) + DesignObjectHelper.componentToHex(b);
}

DesignObjectHelper.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

DesignObjectHelper.RgbaToObject = function (rgba) {
    var colors = rgba.substring(rgba.indexOf('(') + 1, rgba.lastIndexOf(')')).split(/,\s*/);
    var red = colors[0];
    var green = colors[1];
    var blue = colors[2];
    var alpha = colors[3];

    return {
        r: parseInt(red),
        g: parseInt(green),
        b: parseInt(blue),
        a: parseInt(alpha)
    }
}


DesignObjectHelper.calculateCornerRadiusTopLeft = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    if (designObject.cornerRadius != undefined && designObject.cornerRadius["topLeft"] != undefined)
        return designObject.cornerRadius.topLeft + ((nextKeyframeDesignObject.cornerRadius.topLeft - designObject.cornerRadius.topLeft) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    else
        return 0;
}

DesignObjectHelper.calculateCornerRadiusTopRight = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    if (designObject.cornerRadius != undefined && designObject.cornerRadius["topRight"] != undefined)
        return designObject.cornerRadius.topRight + ((nextKeyframeDesignObject.cornerRadius.topRight - designObject.cornerRadius.topRight) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    else
        return 0;
}

DesignObjectHelper.calculateCornerRadiusBottomLeft = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    if (designObject.cornerRadius != undefined && designObject.cornerRadius["bottomLeft"] != undefined)
        return designObject.cornerRadius.bottomLeft + ((nextKeyframeDesignObject.cornerRadius.bottomLeft - designObject.cornerRadius.bottomLeft) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    else
        return 0;
}

DesignObjectHelper.calculateCornerRadiusBottomRight = function (keyframe, designObject, nextKeyframe, nextKeyframeDesignObject, totalTime, currentTime) {
    if (designObject.cornerRadius != undefined && designObject.cornerRadius["bottomRight"] != undefined)
        return designObject.cornerRadius.bottomRight + ((nextKeyframeDesignObject.cornerRadius.bottomRight - designObject.cornerRadius.bottomRight) * DesignObjectHelper.interpolate(keyframe, currentTime / totalTime));
    else
        return 0;
}

DesignObjectHelper.getElementX = function ($designObjectElement) {
    return parseInt($designObjectElement.css("left").replace("px", ""));
}

DesignObjectHelper.getElementY = function ($designObjectElement) {
    return parseInt($designObjectElement.css("top").replace("px", ""));
}

DesignObjectHelper.getElementWidth = function ($designObjectElement) {
    return $designObjectElement.width();
}

DesignObjectHelper.getElementHeight = function ($designObjectElement) {
    return $designObjectElement.height();
}

DesignObjectHelper.setLocation = function ($designObjectElement, designObject, location) {
    var position = $designObjectElement.position();

    if (!VFabrikaPlayerHelper.equalsFloat(position.left, location.x))
        $designObjectElement.css("left", location.x + "px");

    if (!VFabrikaPlayerHelper.equalsFloat(position.top, location.y))
        $designObjectElement.css("top", location.y + "px");
}

DesignObjectHelper.setSize = function ($designObjectElement, designObject, size) {
    if (!VFabrikaPlayerHelper.equalsFloat($designObjectElement.width(), size.width))
        $designObjectElement.css("width", size.width + "px");

    if (!VFabrikaPlayerHelper.equalsFloat($designObjectElement.height(), size.height))
        $designObjectElement.css("height", size.height + "px");
}

DesignObjectHelper.setAlpha = function ($designObjectElement, designObject, alpha) {
    if (DesignObjectHelper.getAlpha($designObjectElement) != alpha)
        $designObjectElement.css("opacity", alpha / 100);
}

DesignObjectHelper.getAlpha = function ($element) {
    var alphaStr = $element.css("opacity");
    if (alphaStr != "")
        return parseFloat(alphaStr) * 100;
    else
        return 100;
}

DesignObjectHelper.getRotation = function ($element) {
    var transform = $element.css("-webkit-transform") ||
        $element.css("-moz-transform") ||
        $element.css("-ms-transform") ||
        $element.css("-o-transform") || '';
    console.info(transform);
}

DesignObjectHelper.setRotation = function ($designObjectElement, designObject, size, rotation, pivot) {
    $designObjectElement.css("transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-webkit-transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-moz-transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-ms-transform-origin", pivot.x + "px " + pivot.y + "px");
    $designObjectElement.css("-o-transform-origin", pivot.x + "px " + pivot.y + "px");

    $designObjectElement.css("transform", "translateZ(0) rotate(" + rotation + "deg)");
    $designObjectElement.css("-webkit-transform", "translateZ(0) rotate(" + rotation + "deg)");
    $designObjectElement.css("-moz-transform", "translateZ(0) rotate(" + rotation + "deg)");
    $designObjectElement.css("-ms-transform", "translateZ(0) rotate(" + rotation + "deg)");
    $designObjectElement.css("-o-transform", "translateZ(0) rotate(" + rotation + "deg)");
    $designObjectElement.css("-khtml-transform", "translateZ(0) rotate(" + rotation + "deg)");
}

DesignObjectHelper.setSizeAttributes = function ($designObjectElement, size) {
    $designObjectElement.attr("width", parseInt(size.width));
    $designObjectElement.attr("height", parseInt(size.height));
}

DesignObjectHelper.applyRotation = function ($designObjectElement, designObject) {
    var pivot = designObject.pivotLocation;
    $designObjectElement.css("transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-webkit-transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-moz-transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-ms-transform-origin", pivot.x + " " + pivot.y);
    $designObjectElement.css("-o-transform-origin", pivot.x + " " + pivot.y);

    $designObjectElement.css("transform", "rotate(" + designObject.rotation + "deg)");
    $designObjectElement.css("-webkit-transform", "rotate(" + designObject.rotation + "deg)");
    $designObjectElement.css("-moz-transform", "rotate(" + designObject.rotation + "deg)");
    $designObjectElement.css("-ms-transform", "rotate(" + designObject.rotation + "deg)");
    $designObjectElement.css("-o-transform", "rotate(" + designObject.rotation + "deg)");
    $designObjectElement.css("-khtml-transform", "rotate(" + designObject.rotation + "deg)");
}

DesignObjectHelper.applyCssClasses = function ($designObjectElement, designObject, layer, keyframe) {
    $designObjectElement.removeClass();
    $designObjectElement.addClass("vfabrika-default-design-object-style");
    $designObjectElement.addClass('vfabrika-design-object-style_' + layer.id + '_' + keyframe.id + '_' + designObject.id);
}

DesignObjectHelper.applyUserCssClasses = function ($designObjectElement, designObject) {
    if (designObject.className != undefined) {
        if (designObject.className.indexOf(' ') != -1) {
            $(designObject.className.split(' ')).each(function () {
                $designObjectElement.addClass(this.toString());
            });
        } else
            $designObjectElement.addClass(designObject.className);
    }
}

DesignObjectHelper.interpolate = function (keyframe, value) {
    return DesignObjectHelper.easeValue(keyframe.easingFunction, value);
};

DesignObjectHelper.easeValue = function (easingFunction, value) {
    if (easingFunction == "linear")
        return Easing.linear(value);
    else if (easingFunction == "quadratic_ease_in")
        return Easing.quadraticEaseIn(value);
    else if (easingFunction == "quadratic_ease_out")
        return Easing.quadraticEaseOut(value);
    else if (easingFunction == "quadratic_ease_in_out")
        return Easing.quadraticEaseInOut(value);
    else if (easingFunction == "cubic_ease_in")
        return Easing.cubicEaseIn(value);
    else if (easingFunction == "cubic_ease_out")
        return Easing.cubicEaseOut(value);
    else if (easingFunction == "cubic_ease_in_out")
        return Easing.cubicEaseInOut(value);
    else if (easingFunction == "quartic_ease_in")
        return Easing.quarticEaseIn(value);
    else if (easingFunction == "quartic_ease_out")
        return Easing.quarticEaseOut(value);
    else if (easingFunction == "quartic_ease_in_out")
        return Easing.quarticEaseInOut(value);
    else if (easingFunction == "quintic_ease_in")
        return Easing.quinticEaseIn(value);
    else if (easingFunction == "quintic_ease_out")
        return Easing.quinticEaseInOut(value);
    else if (easingFunction == "sine_ease_in")
        return Easing.sineEaseIn(value);
    else if (easingFunction == "sine_ease_out")
        return Easing.sineEaseOut(value);
    else if (easingFunction == "sine_ease_in_out")
        return Easing.sineEaseInOut(value);
    else if (easingFunction == "circular_ease_in")
        return Easing.circularEaseIn(value);
    else if (easingFunction == "circular_ease_out")
        return Easing.circularEaseOut(value);
    else if (easingFunction == "circular_ease_in_out")
        return Easing.circularEaseInOut(value);
    else if (easingFunction == "exponential_ease_in")
        return Easing.exponentialEaseIn(value);
    else if (easingFunction == "exponential_ease_out")
        return Easing.exponentialEaseOut(value);
    else if (easingFunction == "exponential_ease_in_out")
        return Easing.exponentialEaseInOut(value);
    else if (easingFunction == "elastic_ease_in")
        return Easing.elasticEaseIn(value);
    else if (easingFunction == "elastic_ease_out")
        return Easing.elasticEaseOut(value);
    else if (easingFunction == "elastic_ease_in_out")
        return Easing.elasticEaseInOut(value);
    else if (easingFunction == "back_ease_in")
        return Easing.backEaseIn(value);
    else if (easingFunction == "back_ease_out")
        return Easing.backEaseOut(value);
    else if (easingFunction == "back_ease_in_out")
        return Easing.backEaseInOut(value);
    else if (easingFunction == "bounce_ease_in")
        return Easing.bounceEaseIn(value);
    else if (easingFunction == "bounce_ease_out")
        return Easing.bounceEaseOut(value);
    else if (easingFunction == "bounce_ease_in_out")
        return Easing.bounceEaseInOut(value);
    else
        throw new Error("Unsupported easing type [" + easingFunction + "]");
};

DesignObjectHelper.storeInitialProperties = function (designObject) {
    designObject.initialX = designObject.x;
    designObject.initialY = designObject.y;
    designObject.initialWidth = designObject.width;
    designObject.initialHeight = designObject.height;
    designObject.initialRotation = designObject.rotation;
    designObject.initialAlpha = designObject.alpha;

    if (designObject.pivotLocation != undefined) {
        designObject.initialPivotX = designObject.pivotLocation.x;
        designObject.initialPivotY = designObject.pivotLocation.y;
    }
}

DesignObjectHelper.restoreInitialProperties = function (designObject) {
    designObject.x = designObject.initialX;
    designObject.y = designObject.initialY;
    designObject.width = designObject.initialWidth;
    designObject.height = designObject.initialHeight;
    designObject.rotation = designObject.initialRotation;
    designObject.alpha = designObject.initialAlpha;

    if (designObject.pivotLocation != undefined) {
        designObject.pivotLocation.x = designObject.initialPivotX;
        designObject.pivotLocation.y = designObject.initialPivotY;
    }
}
var DesignObjectType = {};

DesignObjectType.TRIGGER = "trigger";
var DesignObjectBlockControllerHelper = {};

DesignObjectBlockControllerHelper.setUserClass = function (classText, value) {
    var classNames = classText.split(' ');

    // detach VFabrika- class names from class attribute
    var vFabrikaClassNames = new Array();

    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];

        if (VFabrikaHelper.startsWith(className, "vfabrika-"))
            vFabrikaClassNames.push(className);
    }

    // split new user class names
    var userClassNames = value.split(' ');

    // add VFabrika class names into new class names text
    var newClassNamesText = "";

    for (var i = 0; i < vFabrikaClassNames.length; i++) {
        newClassNamesText += vFabrikaClassNames[i];
        if (i != vFabrikaClassNames.length - 1)
            newClassNamesText += " ";
    }

    // add new user class names
    if (userClassNames.length > 0) {
        newClassNamesText += " ";

        for (var i = 0; i < userClassNames.length; i++) {
            newClassNamesText += userClassNames[i];

            if (i != userClassNames.length - 1)
                newClassNamesText += " ";
        }
    }

    return newClassNamesText;
};

DesignObjectBlockControllerHelper.getUserClass = function (classText) {
    var classNames = classText.split(' ');

    var userClassNames = new Array();

    // filter only user classes
    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];

        if (!className.startsWith("vfabrika-"))
            userClassNames.push(className);
    }

    // generate (user class names only) result
    var result = "";

    for (var i = 0; i < userClassNames.length; i++) {
        result += userClassNames[i];

        if (i != userClassNames.length - 1)
            result += " ";
    }

    return result;
};


DesignObjectBlockControllerHelper.getProperty = function (designObject, $designObjectElement, propertyName) {
    if (propertyName.toLowerCase() == "x".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("left").replace("px", "")) };
    else if (propertyName.toLowerCase() == "y".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("top").replace("px", "")) };
    else if (propertyName.toLowerCase() == "width".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("width").replace("px", "")) };
    else if (propertyName.toLowerCase() == "height".toLowerCase())
        return { hasReturnValue: true, value: parseInt($designObjectElement.css("height").replace("px", "")) };
    else if (propertyName.toLowerCase() == "enabled".toLowerCase())
        return { hasReturnValue: true, value: designObject.enabled };
    else if (propertyName.toLowerCase() == "visible".toLowerCase())
        return { hasReturnValue: true, value: designObject.visible };
    else if (propertyName.toLowerCase() == "alpha".toLowerCase())
        return { hasReturnValue: true, value: designObject.alpha };
    else if (propertyName.toLowerCase() == "rotation".toLowerCase())
        return { hasReturnValue: true, value: designObject.rotation };
    else if (propertyName.toLowerCase() == "isDraggable".toLowerCase())
        return { hasReturnValue: true, value: designObject.draggable };
    else if (propertyName.toLowerCase() == "isDroppable".toLowerCase())
        return { hasReturnValue: true, value: designObject.droppable };
    else if (propertyName.toLowerCase() == "className".toLowerCase())
        return { hasReturnValue: true, value: DesignObjectBlockControllerHelper.getUserClass($designObjectElement.attr("class")) };
    else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase())
        return { hasReturnValue: true, value: designObject.useHandCursor }
    else if (propertyName.toLowerCase() == "tag".toLowerCase())
        return { hasReturnValue: true, value: designObject.tag };
    else if (propertyName.toLowerCase() == "name".toLowerCase())
        return { hasReturnValue: true, value: designObject.name };
    else if (propertyName.toLowerCase() == "depth".toLowerCase())
        return { hasReturnValue: true, value: designObject.depth };
    else if (propertyName.toLowerCase() == "cursor")
        return { hasReturnValue: true, value: designObject.cursor };
    else
        return null;
};

DesignObjectBlockControllerHelper.setProperty = function (designObject, $designObjectElement, propertyName, value) {
    if (propertyName.toLowerCase() == "x".toLowerCase()) {
        designObject.x = value;
        $designObjectElement.css("left", value + "px");
        return true;
    } else if (propertyName.toLowerCase() == "y".toLowerCase()) {
        designObject.y = value;
        $designObjectElement.css("top", value + "px");
        return true;
    } else if (propertyName.toLowerCase() == "width".toLowerCase()) {
        $designObjectElement.css("width", value + "px");
        designObject.width = value;
        return true;
    } else if (propertyName.toLowerCase() == "height".toLowerCase()) {
        $designObjectElement.css("height", value + "px");
        designObject.height = value;
        return true;
    } else if (propertyName.toLowerCase() == "enabled".toLowerCase()) {
        // TODO: fix the issue for combobox in a different place
        if (designObject.type == "comboBox") {
            var dropDown = $designObjectElement.data("controllers.dropDownList");
            dropDown.enable = value;
        }

        if (!value)
            $designObjectElement.attr("disabled", "disabled");
        else
            $designObjectElement.removeAttr("disabled");

        return true;
    } else if (propertyName.toLowerCase() == "visible".toLowerCase()) {
        if (!value)
            $designObjectElement.css("display", "none");
        else
            $designObjectElement.css("display", "block");
        designObject.visible = value;
        return true;
    } else if (propertyName.toLowerCase() == "alpha".toLowerCase()) {
        if (value < 0)
            value = 0;

        if (value > 100)
            value = 100;

        designObject.alpha = value;

        value = parseFloat(value / 100);
        $designObjectElement.css("opacity", value);
        return true;
    } else if (propertyName.toLowerCase() == "rotation".toLowerCase()) {
        designObject.rotation = value;
        DesignObjectHelper.applyRotation($designObjectElement, designObject);
        return true;
    } else if (propertyName.toLowerCase() == "isDraggable".toLowerCase()) {
        designObject.draggable = value;

        if (value)
            VFabrikaPlayerDragDropHelper.enableDesignObjectAsDraggable(designObject.availableId);
        else
            VFabrikaPlayerDragDropHelper.disableDesignObjectAsDraggable(designObject.availableId);

        return true;
    } else if (propertyName.toLowerCase() == "isDroppable".toLowerCase()) {
        designObject.droppable = value;

        if (value)
            VFabrikaPlayerDragDropHelper.enableDesignObjectAsDroppable(designObject.availableId);
        else
            VFabrikaPlayerDragDropHelper.disableDesignObjectAsDroppable(designObject.availableId);

        return true;
    } else if (propertyName.toLowerCase() == "className".toLowerCase()) {
        var classNames = $designObjectElement.attr("class");
        classNames = DesignObjectBlockControllerHelper.setUserClass(classNames, value);
        $designObjectElement.attr("class", classNames);
        return true;
    } else if (propertyName.toLowerCase() == "tag".toLowerCase()) {
        designObject.tag = value;
        return true;
    } else if (propertyName.toLowerCase() == "useHandCursor".toLowerCase()) {
        if (!value)
            $designObjectElement.css("cursor", "default");
        else
            $designObjectElement.css("cursor", "pointer");

        designObject.useHandCursor = value;
        return true;
    } else if (propertyName.toLowerCase() == "depth".toLowerCase()) {
        $designObjectElement.css("z-index", value);
        return true;
    } else if (propertyName.toLowerCase() == "cursor") {
        $designObjectElement.css("cursor", value);
        return true;
    } else
        return false;
};
function ExecutionParameters() {
    this.flow = false;

    var scopeVariablesStack

    this.scopeVariables = null;
    this.eventVariables = null;
    this.returnVariables = null;

    this.pushScopeVariables = function () {
        
    }

    this.createScopeVariable = function (name, value) {
        var scopeVariable = {};
        scopeVariable.name = name;
        scopeVariable.value = value;
        return scopeVariable;
    }

    this.addScopeVariable = function (variable) {
        this.scopeVariables.push(variable);
    }

    this.removeScopeVariable = function (variable) {
        var index = this.scopeVariables.indexOf(variable);
        if (index != -1)
            this.scopeVariables.splice(index, 1);
    }

    this.getScopeVariable = function (name) {
        if (this.scopeVariables != null) {
            for (var i = 0; i < this.scopeVariables.length; i++) {
                var scopeVariable = this.scopeVariables[i];
                if (scopeVariable.name == name)
                    return scopeVariable;
            }
        }

        return null;
    }

    this.createEventVariable = function (name, value) {
        var eventVariable = {};
        eventVariable.name = name;
        eventVariable.value = value;
        return eventVariable;
    }

    this.addEventVariable = function (variable) {
        this.eventVariables.push(variable);
    }

    this.removeEventVariable = function (variable) {
        var index = this.eventVariables.indexOf(variable);
        if (index != -1)
            this.eventVariables.splice(index, 1);
    }

    this.getEventVariable = function (name) {
        if (this.eventVariables != null) {
            for (var i = 0; i < this.eventVariables.length; i++) {
                var eventVariable = this.eventVariables[i];
                if (eventVariable.name == name)
                    return eventVariable;
            }
        }

        return null;
    }

    this.createReturnVariable = function (name, value) {
        var returnVariable = {};
        returnVariable.name = name;
        returnVariable.value = value;
        return returnVariable;
    }

    this.addReturnVariable = function (variable) {
        this.returnVariables.push(variable);
    }

    this.removeReturnVariable = function (variable) {
        var index = this.returnVariables.indexOf(variable);
        if (index != -1)
            this.returnVariables.splice(index, 1);
    }

    this.getReturnVariable = function (name) {
        if (this.returnVariables != null) {
            for (var i = 0; i < this.returnVariables.length; i++) {
                var returnVariable = this.returnVariables[i];
                if (returnVariable.name == name)
                    return returnVariable;
            }
        }

        return null;
    }

    this.clone = function () {
        var executionParameters = new ExecutionParameters();

        executionParameters.flow = this.flow;
        
        // event variables
        if (this.eventVariables != null) {
            executionParameters.eventVariables = new Array();
            for (var i = 0; i < this.eventVariables.length; i++) {
                var eventVariable = this.eventVariables[i];
                var eventVariable_ = { name: eventVariable.name, value: eventVariable.value };
                executionParameters.eventVariables.push(eventVariable_);
            }
        }

        // scope variables
        if (this.scopeVariables != null) {
            executionParameters.scopeVariables = new Array();
            for (var i = 0; i < this.scopeVariables.length; i++) {
                var scopeVariable = this.scopeVariables[i];
                var scopeVariable_ = { name: scopeVariable.name, value: scopeVariable.value };
                executionParameters.scopeVariables.push(scopeVariable_);
            }
        }

        // return variables
        if (this.returnVariables != null) {
            executionParameters.returnVariables = new Array();
            for (var i = 0; i < this.returnVariables.length; i++) {
                var returnVariable = this.returnVariables[i];
                var returnVariable_ = { name: returnVariable.name, value: returnVariable.value };
                executionParameters.returnVariables.push(returnVariable_);
            }
        }

        return executionParameters;
    }
}
function showWatermark(container, language) {
    $("#" + container).append("<div id=\"watermark\" class=\"watermark-show\"></div>");

    var $watermark = $("#watermark");

    if (language == "tr")
        watermarkContent = "<div id='watermark-image'></div><span>ile geliştirilmiştir.</span>";
    else
        watermarkContent = "<span>Developed by</span><div id='watermark-image'></div>";

    $watermark.html(watermarkContent);
}
function Animation($animationBlockController, name, $designObjectElement, designObjectController, designObject, easingFunction, duration, fps, parameters) {

    var base = this;
    this.timer = null;
    this.timeout = null;
    this.name = name;

    this.start = function () {

        var timerInterval = 1000 / fps;
        var totalStep = (duration * 1000) / timerInterval;

        var delay = 0;

        for (var key in parameters) {
            if (key == "delay") {
                delay = parameters[key];
                break;
            }
        }

        base.timeout = setTimeout(function () {

            var initialX = 0;
            var initialY = 0;
            var initialWidth = 0;
            var initialHeight = 0;
            var initialAlpha = 0;
            var initialRotation = 0;
            var currentStep = 0;

            for (var key in parameters) {
                if (key == "x") {
                    initialX = parseInt($designObjectElement.css("left").replace("px", ""));
                } else if (key == "y") {
                    initialY = parseInt($designObjectElement.css("top").replace("px", ""));
                } else if (key == "width") {
                    initialWidth = parseInt($designObjectElement.css("width").replace("px", ""));
                } else if (key == "height") {
                    initialHeight = parseInt($designObjectElement.css("height").replace("px", ""));
                } else if (key == "alpha") {
                    initialAlpha = designObject.alpha;
                } else if (key == "rotation") {
                    initialRotation = designObject.rotation;
                } else if (key == "delay") {
                    delay = parameters[key];
                }
            }

            $designObjectElement.trigger("animationStarted", {
                designObject: designObject,
                name: name,
                easingFunction: easingFunction,
                duration: duration,
                fps: fps,
                parameters: parameters,
                progress: 0
            });

            $animationBlockController.trigger("animationStarted", {
                designObject: designObject,
                name: name,
                easingFunction: easingFunction,
                duration: duration,
                fps: fps,
                parameters: parameters,
                progress: 0
            });

            base.timer = setInterval(function () {

                currentStep++;

                for (var key in parameters) {
                    var value = parameters[key];
                    if (key == "x") {
                        var calculatedX = initialX + ((value - initialX) * DesignObjectHelper.easeValue(easingFunction, currentStep / totalStep));
                        designObjectController.setProperty(designObject, $designObjectElement, "x", calculatedX);
                    } else if (key == "y") {
                        var calculatedY = initialY + ((value - initialY) * DesignObjectHelper.easeValue(easingFunction, currentStep / totalStep));
                        designObjectController.setProperty(designObject, $designObjectElement, "y", calculatedY);
                    } else if (key == "width") {
                        var calculatedWidth = initialWidth + ((value - initialWidth) * DesignObjectHelper.easeValue(easingFunction, currentStep / totalStep));
                        designObjectController.setProperty(designObject, $designObjectElement, "width", calculatedWidth);
                    } else if (key == "height") {
                        var calculatedHeight = initialHeight + ((value - initialHeight) * DesignObjectHelper.easeValue(easingFunction, currentStep / totalStep));
                        designObjectController.setProperty(designObject, $designObjectElement, "height", calculatedHeight);
                    } else if (key == "alpha") {
                        var calculatedAlpha = initialAlpha + ((value - initialAlpha) * DesignObjectHelper.easeValue(easingFunction, currentStep / totalStep));
                        designObject.alpha = calculatedAlpha;

                        if (designObject.alpha > 100)
                            designObject.alpha = 100;
                        else if (designObject.alpha < 0)
                            designObject.alpha = 0;

                        $designObjectElement.css("opacity", parseFloat(designObject.alpha / 100));
                    } else if (key == "rotation") {
                        var calculatedRotation = initialRotation + ((value - initialRotation) * DesignObjectHelper.easeValue(easingFunction, currentStep / totalStep));

                        $designObjectElement.css("transform-origin", designObject.pivotLocation.x + "px " + designObject.pivotLocation.y + "px");
                        $designObjectElement.css("-webkit-transform-origin", designObject.pivotLocation.x + "px " + designObject.pivotLocation.y + "px");
                        $designObjectElement.css("-moz-transform-origin", designObject.pivotLocation.x + "px " + designObject.pivotLocation.y + "px");
                        $designObjectElement.css("-ms-transform-origin", designObject.pivotLocation.x + "px " + designObject.pivotLocation.y + "px");
                        $designObjectElement.css("-o-transform-origin", designObject.pivotLocation.x + "px " + designObject.pivotLocation.y + "px");

                        $designObjectElement.css("transform", "rotate(" + calculatedRotation + "deg)");
                        $designObjectElement.css("-webkit-transform", "rotate(" + calculatedRotation + "deg)");
                        $designObjectElement.css("-moz-transform", "rotate(" + calculatedRotation + "deg)");
                        $designObjectElement.css("-ms-transform", "rotate(" + calculatedRotation + "deg)");
                        $designObjectElement.css("-o-transform", "rotate(" + calculatedRotation + "deg)");
                        $designObjectElement.css("-khtml-transform", "rotate(" + calculatedRotation + "deg)");

                        designObject.rotation = calculatedRotation;
                    }
                }

                var progress = currentStep / totalStep;
                if (progress > 1)
                    progress = 1;

                $designObjectElement.trigger("animationProgress", {
                    designObject: designObject,
                    name: name,
                    easingFunction: easingFunction,
                    duration: duration,
                    fps: fps,
                    parameters: parameters,
                    progress: progress
                });

                $animationBlockController.trigger("animationProgress", {
                    designObject: designObject,
                    name: name,
                    easingFunction: easingFunction,
                    duration: duration,
                    fps: fps,
                    parameters: parameters,
                    progress: progress
                });

                if (currentStep >= totalStep) {
                    clearInterval(base.timer);

                    $designObjectElement.trigger("animationFinished", {
                        designObject: designObject,
                        name: name,
                        easingFunction: easingFunction,
                        duration: duration,
                        fps: fps,
                        parameters: parameters,
                        progress: 1
                    });

                    $animationBlockController.trigger("animationFinished", {
                        designObject: designObject,
                        name: name,
                        easingFunction: easingFunction,
                        duration: duration,
                        fps: fps,
                        parameters: parameters,
                        progress: 1
                    });
                }

            }, timerInterval);

        }, delay * 1000);

    }

    this.stop = function () {

        if (base.timeout != null)
            clearTimeout(base.timeout);

        if (base.timer != null)
            clearInterval(base.timer);

        $designObjectElement.trigger("animationStopped", {
            designObject: designObject,
            name: name,
            easingFunction: easingFunction,
            duration: duration,
            fps: fps,
            parameters: parameters
        });

        $animationBlockController.trigger("animationStopped", {
            designObject: designObject,
            name: name,
            easingFunction: easingFunction,
            duration: duration,
            fps: fps,
            parameters: parameters
        });
    }

}
var AnimationManager = {};
AnimationManager.instance = {};
AnimationManager.instance.animations = new Array();

AnimationManager.instance.defaultFps = 24;
AnimationManager.instance.defaultDuration = 1;
AnimationManager.instance.defaultEasingFunction = "linear";

AnimationManager.instance.animate = function ($animationBlockController, player, $designObjectElement, name, easingFunction, duration, fps, parameters) {

    var designObject_ = $designObjectElement.data("designObject");
    var designObjectController = player.getDesignObjectController(designObject_.type);

    var animation = new Animation($animationBlockController, name, $designObjectElement, designObjectController, designObject_, easingFunction, duration, fps, parameters);

    AnimationManager.instance.animations.push(animation);

    animation.start();
}

AnimationManager.instance.stopAnimation = function (name) {
    for (var i = 0; i < AnimationManager.instance.animations.length; i++) {
        if (AnimationManager.instance.animations[i].name == name) {
            AnimationManager.instance.animations[i].stop();
            // remove animation from array
            AnimationManager.instance.animations.splice(i, 1);
            break;
        }
    }
}

AnimationManager.instance.stopAllAnimations = function () {
    for (var i = 0; i < AnimationManager.instance.animations.length; i++) {
        var animation = AnimationManager.instance.animations[i];
        animation.stop();
    }

    AnimationManager.instance.animations = new Array();
}


