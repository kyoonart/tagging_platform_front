/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../components/index.vue'
import Entity from '../components/Entity.vue'
import EntityType from '../components/EntityType.vue'
import EntityHistory from '../components/EntityHistory.vue'
import TaggingEntity from '../components/TaggingEntity.vue'
import Relation from '../components/Relation.vue'
import RelationType from '../components/RelationType.vue'
import RelationHistory from '../components/RelationHistory.vue'
import TaggingRelation from '../components/TaggingRelation.vue'
import Sentence from '../components/Sentence.vue'
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
                path: '/entityType',
                component: EntityType
            },
            {
                path: '/sentence',
                component: Sentence
            },
            {
                path: '/taggingEntity',
                component: TaggingEntity
            },
            {
                path: '/relation',
                component: Relation
            },
            {
                path: '/relationType',
                component: RelationType
            },
            {
                path: '/relationHistory',
                component: RelationHistory
            },
            {
                path: '/taggingRelation',
                component: TaggingRelation
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router