<script setup lang="ts">
import BaseLayout from './layouts/BaseLayout.vue';
import Loading from './views/Loading.vue';

</script>

<template>
  <div class="admin">
    <BaseLayout />
    <Loading />
  </div>
</template>

<style scoped>
.admin {
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
