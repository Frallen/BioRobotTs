<template>
  <div>
    <div class="header">
      <div class="section">
        <div class="section-number">01</div>
        <div class="section-next">
          <span>скролл</span>
          <svg width="24px" height="24px">
            <use :xlink:href="svgResolved('sprite-arrowDown')"></use>
          </svg>
        </div>
      </div>
      <div class="header-wrapper">
        <div class="header-text">
          <h1>Фабрика по производству биороботов</h1>
          <h3>класса «монитор-кресло»</h3>
        </div>
        <div class="header-img">
          <svg width="176px" height="309px">
            <use :xlink:href="svgResolved('sprite-FrontMale')"></use>
          </svg>
          <svg width="138px" height="195px">
            <use :xlink:href="svgResolved('sprite-DesignerMale')"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {svgResolved} = storeToRefs(useMain())
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;

  .section {
    width: 2%;
  }

  &-wrapper {
    width: 89%;
    display: flex;
    justify-content: space-between;

  }

  &-text {
    width: 44%;

    h3 {
      margin: 24px 0 0;
      color: #A3B8CC;
    }
  }

  &-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>