<script setup lang="ts">

</script>

<template>
  <div class="page-container">
    <Header/>
    <Filters class="filters"/>
    <main class="content-wrap">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">

.page-container {
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--default-background-color);
}

.content-wrap {
  flex: 1; /* Растягиваем контент, чтобы футер прижимался к низу */
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center;     /* Центрирование по вертикали */
  width: 100%;
}

.filters {
  min-height: 0;
  align-self: start;
  margin-left: 25px;
}

</style>