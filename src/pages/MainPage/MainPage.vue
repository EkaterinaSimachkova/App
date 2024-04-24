<template>
  <q-page class="q-mx-sm" style="min-height: auto;">
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
    <MyCard 
      class="q-mt-xl" 
      :item="trip" 
      :with-info="true" 
      @btn-click="goToTrip"
    ></MyCard>
  </q-page>
</template>

<script setup>
import { MyCard, MyInput, MySelect } from "@/components";
import router from "@/router/index";
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";

const store = useStore();

const options = store.getCurrenciesOptions();

const trip = store.getLastTrip();
const goToTrip = () => {
  router.push(`/trip/${trip.id}`);
};

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
