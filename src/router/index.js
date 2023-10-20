import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
let configRouters = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue')
    },
]

const manageFiles = require.context('.', true, /\.js$/)
manageFiles.keys().forEach(key => {
    if (key === './index.js') return //    如果是当前文件，则跳过
    configRouters = configRouters.concat(manageFiles(key).default) // 读取出文件中的default模块
})


const redirect = {
    path: '*',
    redirect: '/404',
}

const scrollBehavior = function (to, from, savedPosition) {
    if (to.hash) {
        return {
            // 通过 to.hash 的值來找到对应的元素
            selector: to.hash
        }
    } else {
        return {
            x: 0,
            y: 0
        }
    }
}

configRouters.push(redirect)
const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior,
    routes: configRouters
})

const router = createRouter()

export default router