import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoodsList from '@/view/GoodsList'
import Cart from '@/view/cart'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'GoodsList',
            component: GoodsList
        },
        {
            path: '/cart', 
            component: Cart
        },
       
    ]
})
