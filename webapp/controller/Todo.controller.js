/* global mobx:true */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../libs/MobxModel",
	"../model/state"
], function(Controller, MobxModel, state) {
	"use strict";

	return Controller.extend("org.ui5con.todo.TodoList.controller.Todo", {
		onInit: function() {
			var oModel = new MobxModel(state);
			this.getView().setModel(oModel, "todo");
			mobx.autorun(function() {
				if (state.open === 0) {
					sap.m.MessageToast.show("Congrats, now take a nap");
				}
			});
		},

		onToggleTodo: function(oEvt) {
			var todo = oEvt.getSource().getBindingContext("todo").getObject();
			todo.completedBy = "Thomas";
			todo.completed = !todo.completed;
		},

		onAddTodo: function(oEvt) {
			state.createTodo({
				"title": this.getView().byId("inputText").getValue(),
				"completed": false,
				"completedBy": ""
			});
			this.getView().byId("inputText").setValue("");
		}
	});
});