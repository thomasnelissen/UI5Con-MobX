/* global mobx:true */
/* global _:true */
sap.ui.define([], function() {
	var mTodos = [{
		"title": "Create todo list",
		"completedBy": "Thomas",
		"completed": true
	}, {
		"title": "Check off first item on TODO list",
		"completedBy": "",
		"completed": false
	}, {
		"title": "Realize you've already accomplished 2 todo's today",
		"completedBy": "",
		"completed": false
	}];

	function State() {
		mobx.extendObservable(this, {
			todos: [],
			get total() {
				return this.todos.length;
			},
			get open() {
				return _.filter(this.todos.slice(), {
					"completed": false
				}).length;
			}
		});
		
		var _this = this;
		_.forEach(mTodos, function(oTodo) {
			_this.createTodo(oTodo);
		});
	}

	State.prototype.createTodo = function(oTodo) {
		oTodo = mobx.observable(oTodo);
		this.todos.push(mobx.extendObservable(oTodo, {
			get icon() {
				return oTodo.completed ? "sap-icon://accept" : "sap-icon://status-inactive";
			},
			get completedText() {
				return oTodo.completed && oTodo.completedBy !== "" ? "Completed by " + oTodo.completedBy : "";
			}
		}));
	};

	return new State();

});