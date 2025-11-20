import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import SectionView from '../views/SectionView.vue';
import { flatSections } from '../constants/sections';

const sectionRoutes = flatSections.map((section) => ({
  path: `section/${section.id}`,
  name: section.id,
  component: SectionView,
  props: () => ({
    sectionId: section.id,
  }),
}));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Dashboard,
      children: [
        {
          path: '',
          redirect: `/section/${flatSections[0].id}`,
        },
        ...sectionRoutes,
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;

