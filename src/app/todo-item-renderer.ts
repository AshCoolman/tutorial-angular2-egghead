import {Component, Input, NgClass} from 'angular2/angular2';
import {TodoModel} from './todo-service';

@Component({
	selector: 'todo-item-render',
	directives: [NgClass],
	styles: [`
	.${TodoModel.STARTED} { color: green }
	.${TodoModel.COMPLETED} { text-decoration: line-through }
	`	
	],
	template: `
		<div>
			<span 
				[ng-class]="todo.status"
				[(text-content)]="todo.title"
				>
			</span>
			<span 
				[ng-class]="todo.status"
				[(text-content)]="todo.action"
				>
			</span>
			<button (click)="todo.toggle()">
				{{'Set '+todo.notStatus()}}
			</button>
		</div>
	`
})



export class TodoItemRenderer {
	@Input('todo') todo:TodoModel;
}