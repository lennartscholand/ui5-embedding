sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			//Methode aussen oder innen?
			window.addEventListener("message", receivePostMessage2, false);

			let searchParams = new URLSearchParams(window.location.search);
			let urlParamter = searchParams.get('param1');
			console.log(urlParamter);
		},

		receivePostMessage : function(event){
			console.log(event);
		},

		sendPostMessage : function(){
			let parent = window.parent;
			parent.postMessage("Message from SAPUI5", "https://conet-business.eu10.hcs.cloud.sap/sap/fpa/ui/tenants/f491c/bo/application/98D29EB2BE5DCD489C585004656A2AE3?mode=present");
		},

		openURL : function(url) {
			window.open(url, '_blank').focus();
		}
		   
	});

	function receivePostMessage2(event){
		console.log(event);
	}
});