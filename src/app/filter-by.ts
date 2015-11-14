import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'filter-by',
    directives: [ FORM_DIRECTIVES],
    template: `
    <form>
        <input [(ng-model)]="title" placeholder="Filter title">
        <input [(ng-model)]="action" placeholder="Filter action">
    </form>
    `
})

export class FilterBy {
    public title :string;
    public action : string;
    constructor() {
    }
}