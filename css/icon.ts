import { class_ } from 'ctx-core/html'
import { type nullish, nullish__none_ } from 'ctx-core/rmemo'
import { type relement_env_T, type rmemo_T, type tag_dom_T } from 'relementjs'
import { div_, span_ } from 'relementjs/html'
import { type tag_T } from 'relementjs/isomorphic'
import { bg__tag_ } from './bg__tag.js'
import { override_class_o_, type override_class_props_T } from './class.js'
export const no_size_icon_class = class_(
	'inline-block',
	'bg-no-repeat',
	'bg-contain',
	'bg-center',
	'cursor-pointer')
export const icon_class = class_(
	no_size_icon_class,
	'h-6',
	'w-6')
export function icon_div_c_<env_T extends relement_env_T>(
	props:icon_c_props_T,
	...children:tag_dom_T<env_T>[]
) {
	return icon_c_(div_ as tag_T<env_T, HTMLDivElement>, props, ...children)
}
export function icon_span_c_<env_T extends relement_env_T>(
	props:icon_c_props_T,
	...children:tag_dom_T<env_T>[]
) {
	return icon_c_<env_T>(span_ as tag_T<env_T, HTMLSpanElement>, props, ...children)
}
export function icon_c_<env_T extends relement_env_T>(
	tag_:tag_T<env_T, HTMLElement>,
	{
		bg_url,
		id,
		override_class,
		...props
	}:icon_c_props_T,
	...children:tag_dom_T<env_T>[]
) {
	return bg__tag_(
		tag_,
		{
			bg_url,
			id,
			...override_class_o_(
				nullish__none_([override_class], ()=>
					class_(no_size_icon_class, override_class)),
				icon_class,
				props)
		},
		...children)
}
export type icon_c_props_T = {
	bg_url:string|rmemo_T<string|nullish>
	id?:string
	class?:string
	style?:string
}&override_class_props_T
