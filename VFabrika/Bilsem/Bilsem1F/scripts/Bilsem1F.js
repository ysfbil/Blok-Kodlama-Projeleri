﻿(function () {
    var documentClassBilsem1F;

    function Bilsem1F() {
        var player = new VFabrikaPlayer(vFabrikaPlayerData_Bilsem1F);

        this.initialize = function () {
            $(player).on("frameChange", onFrameChange);
            $(player).on("frameObject", onFrameObject);
            $(player).on("frameTrigger", onFrameTrigger);

            player.initialize();
        }

        function onFrameChange(event, sender, frameIndex) {
            // frame change event handler
        }

        function onFrameObject(event, sender, object) {
            if (object.id == "anyObjectId") {
                // handle object reference here
            }
        }

        function onFrameTrigger(event, sender, trigger) {
            if (trigger.id == "anyTriggerId") {
                // handle trigger reference here
                // example : VFabrika.player.timeline.stop();
            }
        }
    }

    $(framework).on(Framework.ONREADY, function () {
        documentClassBilsem1F = new Bilsem1F();
        documentClassBilsem1F.initialize();
    });
})();


