<template>
  <div class="error">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <path
            d="M17 11.6V15a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-3.4a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6ZM12 9c0-1 .714-2 2.143-2v0A2.857 2.857 0 0 0 17 4.143V3.5M8 9v-.5a3 3 0 0 1 3-3v0a2 2 0 0 0 2-2V3"/>
        <path d="M16 11h2.5a2.5 2.5 0 0 1 0 5H17"/>
      </g>
    </svg>
    <h4>Service unavailable <span>try later</span></h4>
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped lang="less">
.error {
  position: fixed;
  z-index: 6;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h4 {
    margin: 1em 0 0;
    font-size: 2em;
    color: #000;

    span {
      font-size:1em;
      display: block;
    }
  }
}
</style>