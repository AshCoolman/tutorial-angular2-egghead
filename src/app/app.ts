import {bootstrap, Component, View} from 'angular2/angular2';
import {TodoInput} from './todo-input';
import {TodoService} from './todo-service';

@Component({
	selector: '	app'
})

@View({
	directives: [TodoInput],
	template: `
		<div> 
			<h1>An app</h1>
			<todo-input></todo-input>
		</div>
	`
}) 

// decorators way to add behavior
class App {} 

bootstrap(App, [TodoService]);