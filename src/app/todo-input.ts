import {bootstrap, Component} from 'angular2/angular2';

@Component({
	selector: 'todo-input',
	template: `
		<span>
			Input:
			<input type="text" #log-me/>
			<button (click)="onClick(logMe.value)">Log input</button>
		</span>
	`	
})

export class TodoInput {
	onClick (value) {
		console.log(value);
	}
}