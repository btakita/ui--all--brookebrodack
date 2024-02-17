import { class_ } from 'ctx-core/html'
import { path_, svg_ } from 'relementjs/svg'
// !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
export function fa_patreon_(props?:{
	class?:string
}) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 512 512',
			class: class_(props?.class)
		}, [
			path_({
				d: 'M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z'
			})
		])
	)
}
