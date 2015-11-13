class TodoModel {
	static STARTED:string = 'started';
	static COMPLETED:string = 'completed';
	
	public status : string = TodoModel.STARTED;
	
	constructor (
		public title : string = '' 
	) {
	}
	
	notStatus() {
		return (this.status !== TodoModel.STARTED) ? TodoModel.STARTED : TodoModel.COMPLETED;
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
	}
}

export {TodoModel, TodoService}