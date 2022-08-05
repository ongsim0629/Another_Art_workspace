import {createWebHistory, createRouter} from "vue-router";
import About from './components/AboutPage.vue';
import Artworks from './components/ArtworksPage.vue';
import Community from './components/CommunityPage.vue';
import Contact from './components/ContactPage.vue';
import MyPage from './components/MyPage.vue';
import Setting from './components/SettingPage.vue';

const routes = [
    {
        path:"/mypage/:id",
        component: MyPage,
        children: [
            {
                path:"setting",
                component: Setting,
            },
        ]
    },
    {
        path:"/about",
        component: About,
    },
    {
        path:"/artworks",
        component: Artworks,
    },
    {
        path:"/community",
        component: Community,
    },
    {
        path:"/contact",
        component: Contact,
    },
   
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;