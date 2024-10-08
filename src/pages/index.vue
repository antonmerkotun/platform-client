<template>
  <div>
    <div class="flex gap-1 text-3xl">
      <span>{{ account?.firstName }}</span>
      <span>{{ account?.lastName }}</span>
    </div>
    <div>
      <span>{{ account?.email }}</span>
    </div>
    <div class="flex gap-1">
      <span>isVerifiedEmail:</span>
      <span>{{ account?.isVerifiedEmail }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores';

const { account } = useAccountStore();
</script>
