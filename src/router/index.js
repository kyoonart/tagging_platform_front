/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Entity from '../components/Entity.vue'
import Realation from '../components/Realation.vue'
import index from '../components/index.vue'
import Select from '../components/Select.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/home'

    },
    {
        path: '/home',
        component: Home,
        redirect: '/index',
        children: [{
                path: '/index',
                component: index
            }, {
                path: '/entity',
                component: Entity
            }, {
                path: '/realation',
                component: Realation
            },
            {
                path: '/select',
                component: Select
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router