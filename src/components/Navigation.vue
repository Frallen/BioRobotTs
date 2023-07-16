<template>
  <div class="nav">
    <div class="nav-logo">
      <svg width="70px" height="40px">
        <use :xlink:href="svgResolved('sprite-Logo')"></use>
      </svg>
    </div>
    <button class="button button-normal">Произвести биоробота</button>
  </div>
</template>
<script setup lang="ts">
const {svgResolved} = storeToRefs(useMain())
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  @media #{$md}{
    justify-content: center;
  }

  &-logo {
    @media #{$md}{
      display: none;
    }
  }

  .button {

  }
}
</style>
  