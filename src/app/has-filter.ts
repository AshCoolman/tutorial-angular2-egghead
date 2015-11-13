import {Pipe} from "angular2/angular2"

@Pipe({
	name: 'has'
})

export class HasFilter {
	transform(list, [field, needle]) {
		return list.filter(function (e) {
			return e[field].includes(needle)
		});
	}
}
