<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="background">
      <h1 class="title">
        Подбери программу для реализации своего проекта
      </h1>
      <div class="card-container">
        <Slide class="last"
               logo="images/logo_last.webp"
               img="/images/last.webp"
               width="494px"
               height="457px"
               logo-width="150px"
               logo-height="42px"
               img-width="441px"
               img-height="274px"
               gap="71px"
               description="Грантовая поддержка: Микрогранты"
               back="url('/images/slide3.svg') no-repeat"
        />
        <Slide class="second"
               logo="images/logo_second.webp"
               img="/images/second.webp"
               width="548px"
               height="372px"
               logo-width="163px"
               logo-height="73px"
               img-width="477px"
               img-height="259px"
               gap="91px"
               description="Поддежрка проектов молодых инноваторов"
               back="url('/images/slide2.svg') no-repeat"
        />
        <Slide class="first"
            logo="images/logo_first.webp"
            img="/images/first.webp"
            width="596px"
            height="300px"
            logo-width="168.88px"
            logo-height="87px"
            img-width="490px"
            img-height="184px"
            gap="111px"
            description="Грантовая поддержка малых и крупных проектов"
            font-size="20px"
            back="url('/images/slide.svg') no-repeat"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1880px;
}

.background {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 620px;
  background: var(--background-image) no-repeat;
}

.title {
  width: 1021px;
  color: #FFF;
  font-size: 84px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 0;
}

.second {
  position: absolute;
  bottom: 15px;
}

.last {
  position: absolute;
  bottom: 5px
}
</style>