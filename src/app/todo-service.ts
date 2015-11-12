class TodoModel {
	public status : string = 'started';
	constructor (
		public title : string = '' 
	) {
	}
}

class TodoService {
	public todos: TodoModel[] = [
		new TodoModel('1'),
		new TodoModel('2'),
		new TodoModel('3')
	];
	addTodo (value: TodoModel) {
		this.todos.push(value);
		console.log("todos:" + this.todos.length);
	}
}

export {TodoModel, TodoService}