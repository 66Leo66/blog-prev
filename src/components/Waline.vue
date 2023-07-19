<template>
  <Waline :serverURL="serverURL" :path="path" />
</template>
<script setup>
import { Waline } from '@waline/client/component';

import '@waline/client/dist/waline.css';

const props = defineProps(['path'])

const serverURL = 'https://waline.6leo6.com';
// const path = computed(() => useRoute().path);
</script>
