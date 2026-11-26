const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/HomePage.vue') },
      { path: 'korisnik', component: () => import('@/pages/KorisnikPage.vue') },
      { path: 'aktivnost', component: () => import('@/pages/AktivnostPage.vue') },
      { path: 'dogadjaj', component: () => import('@/pages/DogadjajPage.vue') },
      { path: 'poruka', component: () => import('@/pages/PorukaPage.vue') },
      { path: 'timovi', component: () => import('@/pages/TimoviPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
