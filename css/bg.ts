/// <reference lib="dom" />
import { background_image_style_, style_ } from 'ctx-core/html'
import { type nullish, nullish__none_ } from 'ctx-core/rmemo'
import { run_or_val_ } from 'ctx-core/run'
import { memo_, type memo_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { type known_keys__render_props_T, type render_props_T } from 'relementjs/any'
import { type tag_T } from 'relementjs/isomorphic'
export function bg_c_<env_T extends relement_env_T>(
	tag_:tag_T<env_T, HTMLElement>,
	{
		bg_url,
		style,
		...props
	}:render_props_T&known_keys__render_props_T<Node>&{
		bg_url:string|memo_T<string|nullish>
		style?:string
	},
	...children:tag__dom_T[]
) {
	return tag_({
		...props,
		style:
			(
				typeof bg_url === 'function'
					? memo_
					: (fn:()=>string)=>fn()
			)(()=>
				style_(
					nullish__none_([run_or_val_(bg_url)],
						_bg_url=>
							background_image_style_(_bg_url)),
					style)),
	}, ...children)
}
