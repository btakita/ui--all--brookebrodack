import { class_ } from 'ctx-core/html'
import { type nullish } from 'ctx-core/rmemo'
export function override_class_o_(
	override_class:string|nullish,
	default_class:string,
	props:{ class?:string }
) {
	return {
		class: override_class ?? class_(default_class, props.class)
	}
}
export type override_class_props_T = {
	override_class?:string
	class?:string
}
