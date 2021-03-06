
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect:'/home' },
      { path: '/howto', component: () => import('pages/Howto.vue') },
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/todos', component: () => import('pages/Todo.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
