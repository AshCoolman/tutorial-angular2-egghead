import {bootstrap, Component} from 'angular2/angular2';
import {TodoService} from './todo-service';

@Component({
	selector: 'todo-input',
	template: `
		<span>
			Input:
			<input type="text" #log-me/>
			<button (click)="onClick(logMe.value)">Log input</button>
		</span>
	`	
})

export class TodoInput {
	constructor (
		/* public` adds to `this` */
		public todoService:TodoService 
	) {
		console.log(todoService);
	}
	
	onClick (value) {
		this.todoService.addTodo(value);
	}
}