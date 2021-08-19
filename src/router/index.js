import Vue from 'vue'
import Router from 'vue-router'
// import main from '@/views/layout/mains'
 


Vue.use(Router)
 
const routes = [
        {
            path: '/main',
            nameKey: "main",
            name: 'main',
            component: resolve => require(['@/views/layout/mains'], resolve)
        },
        {
            path: '/',
            nameKey: "login",
            name: 'login',
            component: resolve => require(['@/views/layout/login'], resolve)
        }  
    ]
    const router = new Router({
        routes
    });
    const originalPush = Router.prototype.push;
    Router.prototype.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
        return originalPush.call(this, location).catch(err => err)
    }

    export default router
