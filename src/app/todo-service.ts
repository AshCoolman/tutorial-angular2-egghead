class TodoModel {
	static STARTED:string = 'started';
	static COMPLETED:string = 'completed';
	
public status : string = TodoModel.STARTED;
	
	constructor (
		public title : string = '',
		public action : string = ''
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
		new TodoModel('11', 'eleven'),
		new TodoModel('12', 'twelve'),
		new TodoModel('13', 'thirteen')
	];
	addTodo (value: TodoModel) {
		this.todos.push(value);
	}
}

export {TodoModel, TodoService}