<template>
  <div>
    <Error v-if="isError"></Error>
    <div v-else class="container">
      <router-view v-slot="{ Component }">
        <suspense>
          <component :is="Component"/>
        </suspense>
      </router-view>
      <Navigation></Navigation>
    </div>
  </div>
</template>
<script setup lang="ts">
const {isError} = storeToRefs(useMain())

</script>
<style lang="less">

</style>
