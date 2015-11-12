import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService, TodoModel} from './todo-service';

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES],
	template: `
		<form (ng-submit)="doSubmit()">
			<input
				type="text"
				[(ng-model)]="todoModel.status"
				placeholder="(press ENTER to submit)"
				>
			<button type="submit">Manual submit</button>
		</form>
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