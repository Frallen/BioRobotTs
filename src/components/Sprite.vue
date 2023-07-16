<template>
  <svg>
    <use :xlink:href="`svg/#${Name}`"></use>
  </svg>
</template>
<script setup lang="ts">
type propsType={
  Name:string
}
const {Name} = defineProps<propsType>()
</script>
