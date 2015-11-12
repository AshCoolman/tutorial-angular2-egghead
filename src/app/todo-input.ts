import {bootstrap, Component} from 'angular2/angular2';

@Component({
	selector: 'todo-input',
	template: `
		<span>
			Input:
			<input type="text"/>
		</span>
	`	
})

export class TodoInput {}