import {Component} from 'angular2/angular2';

export class TodoService {
	todos: string[] = ['1','2','3'];
	addTodo (value) {
		this.todos.push(value);
		console.log(this.todos);
	}
}