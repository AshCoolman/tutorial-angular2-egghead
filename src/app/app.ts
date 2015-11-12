import {bootstrap, Component, View} from 'angular2/angular2';
import {TodoInput} from './todo-input';
import {TodoService} from './todo-service';
import {TodoList} from './todo-list';

@Component({
	selector: '	app'
})

@View({
	directives: [TodoInput, TodoList],
	template: `
		<div> 
			<h1>An app</h1>
			<todo-input></todo-input>
			<todo-list></todo-list>
		</div>
	`
}) 

// decorators way to add behavior
class App {} 

bootstrap(App, [TodoService]);