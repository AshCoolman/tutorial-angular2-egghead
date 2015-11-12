import {Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from './todo-service';


@Component({
	selector: 'todo-list',
	directives: [NgFor, FORM_DIRECTIVES],
	template: `
		<div>
			<div *ng-for="#todo of todoService.todos">
				<div>
					<span 
						[content-editable]="todo.status !== 'completed'"
						[(text-content)]="todo.title"
						>
					</span>
					<button (click)="todo.toggle()">
						{{'Set '+todo.notStatus()}}
					</button>
				</div>
				
			</div>
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