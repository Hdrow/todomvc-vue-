;(function (Vue) {
	// 注册一个全局自定义指令 v-focus
	Vue.directive('focus', {

 		 // 当绑定元素插入到 DOM 中。
  		inserted: function (el) {
   		 // 聚焦元素
    	el.focus()
  		},

  		componentUpdated (el) {
  			el.focus()
  		},

	})

	const app = new Vue({
		el: '#app',
		data: {
			currentEdit: null,
			allCompleted: false,
			titleText: '',
			todos: [
				{ id:1, title:'吃饭', completed: false },
				{ id:2, title:'睡觉', completed: true },
				{ id:3, title:'打豆豆', completed: false }
			]
		},
		methods: {
			addTodo() {
				let [title, todos, id = 1] = [this.titleText.trim(), this.todos];
				
				if(title.length === 0) return;

				const lastTodo = todos[todos.length - 1];

				if(lastTodo) {
					id = lastTodo.id + 1;
				}

				this.todos.push({
					id,
					title,
					completed: false,
				}); 
				this.titleText = '';
			},

			toggleAll() {
				this.todos.forEach(t => t.completed = this.allCompleted);
			},

			toogle() {
				this.allCompleted = this.todos.every(t => t.completed)
			},

			removeTodo(id) {
				const removeIndex = this.todos.findIndex(t => t.id === id);
				this.todos.splice(removeIndex, 1);
			},

			getEditing(todo) {
				this.currentEdit = todo;
			}
		},

		



	})

})(Vue);
