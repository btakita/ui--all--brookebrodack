import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { template_ } from 'relementjs/html'
import { spinner__div_ } from './spinner__div.js'
export function spinner__template_<env_T extends relement_env_T>({
	class:_class,
	center,
	center_x,
	spinner_class,
}:{
	class?:string
	center?:boolean
	center_x?:boolean
	spinner_class?:string
}) {
	return (
		template_<env_T>({
			id: 'spinner__template',
			class: class_(
				'hidden',
				_class),
			/** @see {import('@btakita/ui--browser--brookebrodack/spinner').spinner__template__hyop} */
			hyop: 'spinner__template__hyop'
		}, [
			spinner__div_({
				center,
				center_x,
				class: class_(
					'spinner',
					spinner_class)
			})
		])
	)
}
