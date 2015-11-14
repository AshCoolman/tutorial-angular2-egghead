import {Component, NgFor} from 'angular2/angular2';
import {TodoService} from './todo-service';
import {TodoItemRenderer} from './todo-item-renderer';
import {HasFilter} from './has-filter';
import {FilterBy} from './filter-by';

@Component({
	selector: 'todo-list',
	pipes: [HasFilter],
	directives: [NgFor, FilterBy, TodoItemRenderer],
	template: `	
<div>
	<filter-by #filter-by></filter-by> {{filterBy.title}}
	<todo-item-render
		*ng-for="
		#todo of todoService.todos
		| has:['title', 'action']:filterBy
		"
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