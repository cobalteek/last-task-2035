<script setup lang="ts">
const props = defineProps<{
  logo: string,
  img: string,
  description: string,
  width: string,
  height: string,
  logoWidth: string,
  logoHeight: string,
  imgWidth: string,
  imgHeight: string,
  fontSize?: string,
  gap?: string,
  back: string
}>();
</script>

<template>
  <div class="card" :style="
  {'width': props.width,
  'height': props.height,
  'background': props.back}
">
    <div class="up" :style="
        {'gap': props.gap}
">
      <img
          class="logo"
          :style="
          {'width': props.logoWidth,
          'height': props.logoHeight}"
          :src=props.logo
          alt="Логотип">
      <h2
          class="description"
          :style="{'font-size': props.fontSize || '18px'}"
      >
        {{props.description}}
      </h2>
    </div>
    <div class="down">
      <img
          :style="
          {'width': props.imgWidth,
          'height': props.imgHeight}"
          :src=props.img
          alt="Изображение партнёра">
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: no-repeat;
  backdrop-filter: blur(10px);
}


.up {
  display: inline-flex;
}

.logo {
  margin-left: 18px;
  margin-top: 11px;
}

.down {
  width: 490px;
  margin: auto 53px 0 53px;
}

.description {
  margin-top: 20px;
  margin-right: 22px;
  color: #FFF;
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 123%; /* 24.6px */
}
</style>