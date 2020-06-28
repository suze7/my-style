import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'MyFunctionComponent',
    component: () =>
      import(
        /* webpackChunkName: "myMainLayout" */

        '../views/singleMain/SingleMain.vue'
      ),

    children: [
      {
        path: '/tableComponent',
        name: 'TableComponent',
        component: () =>
          import(
            /* webpackChunkName: "myFunctionComponent" */

            '../pages/tableComponent/TableComponent.vue'
          )
      }
    ]
  },
  {
    path: '/canvasPage',
    name: 'canvasPage',
    component: () =>
      import(
        /* webpackChunkName: "myMainLayout" */
        '../views/singleMain/SingleMain.vue'
      ),

    children: [
      {
        path: 'first',
        name: 'first',
        component: () =>
          import(
            /* webpackChunkName: "canvasPage" */

            '../pages/canvasPage/first/first.vue'
          )
      },
      {
        path: 'second',
        name: 'second',
        component: () =>
          import(
            /* webpackChunkName: "canvasPage" */

            '../pages/canvasPage/second/second.vue'
          )
      },
      {
        path: 'earthSingle',
        name: 'earthSingle',
        component: () =>
          import(
            /* webpackChunkName: "canvasPage" */

            '../pages/canvasPage/earthSingle/earthSingle.vue'
          )
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
