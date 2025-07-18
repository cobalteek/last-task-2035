<script setup lang="ts">

const filterNames = ['Название фильтра','Название фильтра','Название фильтра','Название фильтра']

</script>

<template>
<div class="back">
  <div class="up">
    <p class="title">Фильтр</p>
    <button class="reset">Сбросить</button>
  </div>
  <div class="filters">
    <p class="section">Название раздела</p>
    <ul>
      <div class="list" v-for="filter in filterNames">
        <input type="checkbox">
        <li >
          {{ filter }}
        </li>
      </div>
    </ul>
  </div>
</div>
</template>

<style scoped>

.back {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 47px;
  width: 400px;
  height: 1223px;
  background: url("/images/filters_back.svg");
}

.up {
  display: inline-flex;
  align-items: start;
  justify-content: space-between;
}

.filters {
  display: flex;
  flex-direction: column;
}

input::after {
  background-image: url("/images/fi-rr-check.svg");
  background-repeat: no-repeat;  width: 30px;
  height: 30px;
}

.list {
  display: inline-flex;
  gap: 18px;
  margin-bottom: 34px;
}

.title {
  margin-top: 15px;
  margin-left: 24px;
  height: 42px;
  color: #000;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 123%; /* 41.82px */
}

.section {
  color: #000;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 123%; /* 29.52px */
}


li {
  color: #6E7880;
  font-family: "Open Sans";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%; /* 25.83px */
}

.reset {
  width: 142px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  margin-right: 15px;
  border-radius: 100px;
  border: 1px solid #99A7B2;
  color: #6E7880;
  text-align: center;
  font-family: "Open Sans", serif;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 123%; /* 25.83px */
}

</style>