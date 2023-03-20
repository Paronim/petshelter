
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/animals/list', component: () => import('../pages/AnimalsSortPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/info',
    component: () => import('pages/UserInfoPage.vue')
  }

]

export default routes
