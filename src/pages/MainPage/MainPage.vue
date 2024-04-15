<template>
  <q-page class="q-mx-sm">
    <div class="text-h5 text-bold text-deep-purple-10 q-ma-md">
      Курс валют
    </div>
    <div class="content">
      <MyInput
        class="input"
        :label="'Сумма'"
        @change-value="inputUpdate"
      ></MyInput>
      <MySelect
        class="select"
        :options="options"
        :label="'Валюта'"
        @change-value="selectUpdate"
      ></MySelect>
      <MyInput
        class="input"
        :label="'Сумма'"
        @change-value="inputUpdate"
      ></MyInput>
      <MySelect
        class="select"
        :options="options"
        :label="'Валюта'"
        @change-value="selectUpdate"
      ></MySelect>
    </div>
    <MyCard class="q-mt-md" :item="item" :with-info="true"></MyCard>
  </q-page>
</template>

<script setup>
import { MyCard, MyInput, MySelect } from "@/components";
import { useStore } from "@/stores/store.js";

const store = useStore();

const options = store.getCurrenciesNames;
console.log(options);

console.log(store.getTrips);
const item = store.getTrips.at(-1);

const inputUpdate = (value) => {
  console.log(value);
};

const selectUpdate = (value) => {
  console.log(value);
};
</script>

<style scoped>
@import "./index.css";

</style>
