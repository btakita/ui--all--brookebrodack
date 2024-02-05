import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
export function heroicons_video_camera_(props?:{
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
				d: 'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0' +
					' 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
			})
		])
	)
}
