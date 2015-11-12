import {Component} from 'angular2/angular2';

export class TodoService {
	todos: string[] = [];
	addTodo (value) {
		this.todos.push(value);
		console.log(this.todos);
	}
}