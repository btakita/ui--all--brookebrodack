/// <reference lib="dom" />
import { id__dom__handler_ } from '@ctx-core/dom'
import { be_, type Ctx } from 'ctx-core/object'
export const brookers__page__onbind_ = be_<
	((brookers__page_c:HTMLElement, ctx:Ctx)=>Promise<void>)|null
>(()=>null,
	{ id: 'brookers__page__onbind_' })
export const brookers__page__onbind = id__dom__handler_(
	'brookers__page__onbind',
	(brookers__page_c:HTMLDivElement, ctx:Ctx)=>
		brookers__page__onbind_(ctx)!(brookers__page_c, ctx))
