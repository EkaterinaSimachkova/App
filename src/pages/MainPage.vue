<template>
  <q-layout view="lHh lpr lFf">
    <MyHeader :title="'Главная'"></MyHeader>
    <q-page-container class="q-mx-sm">
      <div class="text-h5 text-bold text-deep-purple-10 q-ma-md">Курс валют</div>
      <div class="content">
        <MyInput class="input" :label="'Сумма'" @change-value="inputUpdate"></MyInput>
        <MySelect class="select" :options="options" :label="'Валюта'" @change-value="selectUpdate"></MySelect>
        <MyInput class="input" :label="'Сумма'" @change-value="inputUpdate"></MyInput>
        <MySelect class="select" :options="options" :label="'Валюта'" @change-value="selectUpdate"></MySelect>
      </div>
      <MyCard class="q-mt-md" :with-info="true"></MyCard>
    </q-page-container>
    <MyFooter></MyFooter>
  </q-layout>
</template>
  
<script setup>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import MyCard from '@/components/MyCard.vue';
import MyInput from '@/components/MyInput.vue';
import MySelect from '@/components/MySelect.vue';
import { useStore } from '@/stores/store.js'

const store = useStore()

const options = store.currencies.map(el => el.name)
console.log(options)

const inputUpdate = (value) => {
    console.log(value)
}

const selectUpdate = (value) => {
    console.log(value)
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 5px;

  margin-bottom: 25px;
}
.select {
  min-width: 120px;
}
.input {
  width: calc(100% - 130px);
}
</style>@/queries/getCategories.js