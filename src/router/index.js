/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Entity from '../components/Entity.vue'
import EntityHistory from '../components/EntityHistory.vue'
import index from '../components/index.vue'
import TaggingEntity from '../components/TaggingEntity.vue'
import EntityType from '../components/EntityType.vue'
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
                path: '/entityHistory',
                component: EntityHistory
            },
            {
                path: '/realation',
                component: TaggingEntity
            },
            {
                path: '/entityType',
                component: EntityType
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router