import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from './todo-service';

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES],
	template: `
		<form (ng-submit)="doSubmit()">
			<input
				type="text"
				[(ng-model)]="todoModel"
				placeholder="(press ENTER to submit)"
				>
			<button type="submit">Manual submit</button>
		</form>
	`	
})

export class TodoInput {
	todoModel : string;
	constructor (
		/* public` adds to `this` */
		public todoService:TodoService 
	) {
		console.log(todoService);
	}
	
	doSubmit () {
		this.todoService.addTodo(this.todoModel);
		this.todoModel = '';
	}
}