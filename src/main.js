import Vue from 'vue'

import App from './App.vue'

import VueRouter from 'vue-router'

import VueResource from 'vue-resource'

import Mintui from 'mint-ui'

import '../node_modules/mint-ui/lib/style.css' 

import router from './js/router.js'

import { Switch } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

import { Indicator } from 'mint-ui';


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Switch.name, Switch);

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.use(VueRouter)
Vue.use(Mintui)
Vue.use(VueResource)





new Vue({
  el: '#app',
  render: h => h(App),
  router
})

