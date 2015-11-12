class TodoModel {
	public status : string = 'started';
	
	constructor (
		public title : string = '' 
	) {
	}
	
	notStatus() {
		return (this.status !== 'started') ? 'started' : 'completed';
	}
	
	toggle() {
		this.status = this.notStatus(); 
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