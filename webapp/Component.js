sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"org/ui5con/todo/TodoList/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("org.ui5con.todo.TodoList.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
		}
	});
});