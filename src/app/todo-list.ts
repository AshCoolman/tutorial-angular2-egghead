import {Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from './todo-service';
import {TodoItemRenderer} from './todo-item-renderer';
import {HasFilter} from './has-filter';

@Component({
	selector: 'todo-list',
	pipes: [HasFilter],
	directives: [NgFor, FORM_DIRECTIVES, TodoItemRenderer],
	template: `
	Filter <input type="text" [(ng-model)]="needle">
	<div>
		<todo-item-render
			*ng-for="#todo of todoService.todos | has : 'title' : needle"
			[todo]="todo">
		</todo-item-render>
	</div>
	`
})
// How would I bind to the text node? [(text-content)]="todo.title"
export class TodoList {
	needle:string = '1';
	constructor(
		public todoService:TodoService
	) {
		
	}
}