import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
	selector: 'app'
})

@View({
	template: `
		<div> An app</div>
	`
}) 

// decorators way to add behavior
class App {} 

bootstrap(App);