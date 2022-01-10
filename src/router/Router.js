import Pages from '@/router/Pages';
import Layout_Blog from "@/layouts/layouts-blog/Layout_Blog";
import Router from 'vue-router'
import Home from "@/views/home/Home";
import Article from "@/views/articles/Article"
import Login from "@/views/login/Login"
import Layout_Admin from "@/layouts/layouts-admin/Layout_Admin";

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Layout_Blog,
            children: [
                {
                    ...Pages.home,
                    component: Home
                },
                {
                    ...Pages.article,
                    component: Article
                },
            ]
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/admin",
            component: Layout_Admin,
        },
    ]
});

export default router;