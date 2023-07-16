<template>
  <div class="nav">
    <div class="nav-logo">
      <svg>
        <use :xlink:href="isProd?'spritemap.svg#sprite-Logo':'__spritemap#sprite-Logo'"></use>
      </svg>
    </div>
    <button class="button button-normal">Произвести биоробота</button>
  </div>
</template>
<script setup lang="ts">
const isProd=ref<boolean>(import.meta.env.PROD)
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  