import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function heroicons_pause_(props?:{
	class?:string
}) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			fill: 'none',
			viewBox: '0 0 24 24',
			'stroke-width': '1.5',
			stroke: 'currentColor',
			class: class_(props?.class)
		}, [
			path_({
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				d: 'M15.75 5.25v13.5m-7.5-13.5v13.5'
			})
		])
	)
}
