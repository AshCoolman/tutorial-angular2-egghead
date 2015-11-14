import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService, TodoModel} from './todo-service';

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES],
	template: `
		<div>
			<form (ng-submit)="doSubmit()">
				<input
					type="text"
						[(ng-model)]="todoModel.title"
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
}