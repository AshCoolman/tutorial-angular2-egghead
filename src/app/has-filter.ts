import {Pipe} from "angular2/angular2"

@Pipe({
	name: 'has',
	pure: false
})

export class HasFilter {
	transform(list, [fields, obj]) {
		// let [title, action] = fields;
		if (obj) {
			let result = list.filter(function (item) {
				return fields.some(function (field) {
					return item[field].includes(obj[field]);	
				});
			});
			if (result.length !== 0) {
				return result;
			}
		}
		return list

	}
}