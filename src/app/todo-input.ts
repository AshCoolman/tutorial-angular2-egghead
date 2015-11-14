import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService, TodoModel} from './todo-service';

@Component({
	selector: 'todo-input',
	directives: [FORM_DIRECTIVES],
	template: `
<div>
	<form (ng-submit)="title.focus() && doSubmit()">
		<input
			#title
			type="text"
			[(ng-model)]="todoModel.title"
			placeholder="(title)"
			>
		<input
			type="text"
			[(ng-model)]="todoModel.action"
			placeholder="(action)"
			(keyup)="log($event)"
			>
		<button hidden type="submit">
			Save
		</button>
	</form>
</div>
`
})

export class TodoInput {

	public todoModel : TodoModel = new TodoModel();
	
	constructor (
		public todoService:TodoService 
	) {}
	
	doSubmit () {
		let {title, action} = this.todoModel;
		if (title && action) {
			this.todoService.addTodo(this.todoModel);
			this.todoModel = new TodoModel();
		} else {
			console.log()
		}
	}
	log (e) {
		
		console.log.apply(console, Array.prototype.splice.apply(this, arguments))
	}
}