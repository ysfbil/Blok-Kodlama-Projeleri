(function () {
    var documentClassProjem2;
	


    function Projem2() {
		
			
        var player = new VFabrikaPlayer(vFabrikaPlayerData_Projem2);
		
	this.deneme=		function(){
		$(player).on("denemem2", denemem2);   //deneme fonksiyonu buraya eklenmiş (sadece ilk çalıştırmada çalışıyor)
	alert("hi");
	return "hi";
}

function denemem2(){    //deneme fonksiyonu buraya eklenmiş
	alert("hi2");
	return "hi2";
}

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
        documentClassProjem2 = new Projem2();
        documentClassProjem2.initialize();
		documentClassProjem2.deneme(); //deneme fonksiyonu buraya eklenmiş
    });
})();


	function denemem3(params){
			alert("hi3");
			return "hi3";
		}

