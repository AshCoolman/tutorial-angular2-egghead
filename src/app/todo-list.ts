import {Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from './todo-service';
import {TodoItemRenderer} from './todo-item-renderer';

@Component({
	selector: 'todo-list',
	directives: [NgFor, FORM_DIRECTIVES, TodoItemRenderer],
	template: `
	<div>
		<todo-item-render
			*ng-for="#todo of todoService.todos"
			[todo]="todo">
		</todo-item-render>
	</div>
	`
})
// How would I bind to the text node? [(text-content)]="todo.title"
export class TodoList {
	constructor(
		public todoService:TodoService
	) {
		
	}
}