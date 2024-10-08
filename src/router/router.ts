import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from '~pages';

import { Urls } from '@/constants/urls';
import { useAccountStore } from '@/stores';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const accountStore = useAccountStore();

  if (accountStore.account && to.name === 'sign-in') return next(from.fullPath);

  if (!accountStore.account && to.name !== 'sign-in') {
    try {
      await accountStore.fetchAccountData();

      if (!accountStore.account) return next(Urls.SignIn);
    } catch (error) {
      return next(Urls.SignIn);
    }
  }

  next();
});

export default router;
