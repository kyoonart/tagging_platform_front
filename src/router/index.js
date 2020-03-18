/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Entity from '../components/Entity.vue'
import Realation from '../components/EntityHistory.vue'
import index from '../components/index.vue'
import Select from '../components/Select.vue'
import ViewList from '../components/ViewList.vue'
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
            },
            {
                path: '/viewlist',
                component: ViewList
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router