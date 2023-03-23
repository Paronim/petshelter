const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("../pages/AnimalsSortPage.vue"),
      },
      {
        path: "/info",
        component: () => import("pages/UserInfoPage.vue"),
      },
      {
        path: "/chat",
        component: () => import("pages/ChatPage.vue"),
      },
      {
        path: "/posts",
        component: () => import("pages/TestPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
