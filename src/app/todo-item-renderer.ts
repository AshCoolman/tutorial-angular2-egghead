import {Component, Input} from 'angular2/angular2';
import {TodoModel} from './todo-service';

@Component({
	selector: 'todo-item-render',
	template: `
		<div>
			<span 
				[hidden]="todo.status === 'completed'"
				[(text-content)]="todo.title"
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