sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			//Methode aussen oder innen?
			window.addEventListener("message", receivePostMessage, false);

			let searchParams = new URLSearchParams(window.location.search);
			let urlParamter = searchParams.get('param1');
			console.log(urlParamter);
		},

		sendPostMessage : function(){
			let parent = window.parent;
			parent.postMessage("Message from SAPUI5", "https://conet-business.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/f491c/bo/application/98D29EB2BE5DCD489C585004656A2AE3?mode=present");
		},

		openURL : function(url) {
			window.open(url, '_blank').focus();
		},

		onButtonPressed : function(){
			let oIFrame = this.byId("saciframe");
			var jsIFrame = document.getElementById("container-sap.ui.demo.basicTemplate---home--saciframe");
			jsIFrame.src = "https://www.h-brs.de/de";
		}
		   
	});

	function receivePostMessage(event){
		console.log(event);
		console.log(event.data);
		if(!event.data.service && !(event.data == 'embed:ready') && !(event.data.event_type == 'resize')){
			let oText = sap.ui.getCore().byId("container-sap.ui.demo.basicTemplate---home--messageText");
			oText.setText(event.data);
		}	
	}
}); 