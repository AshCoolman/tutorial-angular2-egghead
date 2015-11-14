import {Pipe} from "angular2/angular2"

@Pipe({
	name: 'has',
	pure: false
})

export class HasFilter {
	transform(list, [field, needle]) {
		let result = list.filter(function (e) {
			console.log('Testing', field, needle)
			return e[field].includes(needle);
		});
		if (result.length === 0) {
			return list;
		}
		return result;
	}
}