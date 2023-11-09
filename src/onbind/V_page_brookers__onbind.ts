/// <reference lib="dom" />
import { id__dom__handler_ } from '@ctx-core/dom'
import { be_, type Ctx } from '@ctx-core/object'
export const V_page_brookers__onbind_ = be_<
	((V_page_home:HTMLElement, ctx:Ctx)=>Promise<void>)|null
>('V_page_brookers__onbind_', ()=>null)
export const V_page_brookers__onbind = id__dom__handler_(
	'V_page_brookers__onbind',
	(V_page_home:HTMLDivElement, ctx:Ctx)=>
		V_page_brookers__onbind_(ctx)!(V_page_home, ctx))
