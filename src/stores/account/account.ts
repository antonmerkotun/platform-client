import { defineStore } from 'pinia';
import { ref } from 'vue';

import { AuthGateway } from '@/api';
import type { IAccount } from '@/types/models/account';

export const useAccountStore = defineStore(
  'account',
  () => {
    const account = ref<IAccount.Model | null>(null);
    const accountSettings = ref();

    function setAccount(data: IAccount.Model | null) {
      account.value = data;
    }

    async function fetchAccountData() {
      const accountData = await AuthGateway.getMe();

      setAccount(accountData);
    }

    async function signIn(body: { clientRedirectUrl: string }) {
      const { redirectUrl } = await AuthGateway.signIn(body);

      return redirectUrl;
    }

    async function signOut() {
      await AuthGateway.signOut();

      setAccount(null);
    }

    return {
      account,
      accountSettings,
      setAccount,
      fetchAccountData,
      signIn,
      signOut,
    };
  },
  { persist: true },
);
