import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService, TodoModel} from './todo-service';

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES],
	template: `
		<div>
			<p>
				<button (click)="logModel()">Output</button>
			</p>
			<form (ng-submit)="doSubmit()">
				<input
					type="text"
						[(ng-model)]="todoModel.status"
						placeholder="(press ENTER to submit)"
					>
			</form>
		</div>
	`	
})

export class TodoInput {

	public todoModel : TodoModel = new TodoModel('');
	
	constructor (
		public todoService:TodoService 
	) {}
	
	doSubmit () {
		this.todoService.addTodo(this.todoModel);
		this.todoModel = new TodoModel('');
	}
	
	logModel() {
		this.todoService.todos.map(function(e) { 
			console.log(e.status, e.title);	
		});
	}
}