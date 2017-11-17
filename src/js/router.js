import VueRouter from 'vue-router'
import bj from "../component/bj/bj.vue"
import loadright from "../component/loading/loadright.vue"
//加载完成点击后页面

import enroll from "../component/enroll/enroll.vue"
import entry from "../component/entry/entry.vue"
import list from "../component/entry/list.vue"
import classify from "../component/entry/classify.vue"
import special from "../component/entry/special.vue"
import search from "../component/entry/search.vue"
import shujia from "../component/shujia/shujia.vue"
import shezi from "../component/shujia/shezi.vue"
import me from "../component/shujia/me.vue"
import novel from "../component/novel/novel.vue"
import novel01 from "../component/novel/novel01.vue"
import novel02 from "../component/novel/novel02.vue"
import novel03 from "../component/novel/novel03.vue"
import novel04 from "../component/novel/novel04.vue"
import novel05 from "../component/novel/novel05.vue"
import novel06 from "../component/novel/novel06.vue"
import novel07 from "../component/novel/novel07.vue"



import novels from "../component/novel/novelssss.vue"

export default new VueRouter({
	routes: [{
			path: '/bj',
			component: bj
		},{
			path: '/loadright',
			component: loadright
		},{
			path:'/enroll',
			component:enroll
		},{
			path:'/entry',
			component:entry
				
		},{
			path:'/list',
			component:list
		},
		{
			path:'/classify',
			component:classify
		},
		{
			path:'/special',
			component:special
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/shujia',
			component:shujia
		},
		{
			path:'/shezi',
			component:shezi
		},
		{
			path:'/me',
			component:me
		},
		{
			path:'/novel',
			component:novel
		},
		{
			path:'/novel01',
			component:novel01
		},
		{
			path:'/novel02',
			component:novel02
		},
		{
			path:'/novel03',
			component:novel03
		},
		{
			path:'/novel04',
			component:novel04
		},
		{
			path:'/novel05',
			component:novel05
		},
		{
			path:'/novel06',
			component:novel06
		},
		{
			path:'/novel07',
			component:novel07
		},
		{
			path:'/novels',
			component:novels
		},
		
		{
			path:'*',
			redirect:'/bj'
		}
	]
})