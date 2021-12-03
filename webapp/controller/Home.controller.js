sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			window.addEventListener("message", receivePostMessage2, false);
		},

		receivePostMessage : function(event){
			console.log(event);
		},

		sendPostMessage : function(){
			let parent = window.parent;
			parent.postMessage("Message from SAPUI5", "https://conet-business.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/f491c/bo/application/98D29EB2BE5DCD489C585004656A2AE3?mode=present");
		}
	});

	function receivePostMessage2(event){
		console.log(event);
	}
});