<template>
  <q-page class="q-mx-sm" style="min-height: auto;">
    <div class="text-h5 text-bold text-deep-purple-10 q-ma-md">
      Конвертер валют
    </div>
    <div class="content">
      <MyInput
        class="input"
        :label="'Сумма'"
        :text-value="firstInputValue.toString()"
        @change-value="firstInputUpdate"
      ></MyInput>
      <MySelect
        class="select"
        :options="options"
        :label="'Валюта'"
        :disable="true"
        :value="defaultCurrency"
      ></MySelect>
      <MyInput
        class="input"
        :label="'Сумма'"
        :text-value="secondInputValue.toString()"
        @change-value="secondInputUpdate"
      ></MyInput>
      <MySelect
        class="select"
        :options="options"
        :label="'Валюта'"
        @change-value="secondSelectUpdate"
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
import { ref } from "vue";
import getCurrenciesRates from "@/queries/getCurrenciesRates.js";

const store = useStore();

const defaultCurrency = {
  label: 'RUR', 
  value: 1
}
const options = store.getCurrenciesOptions().filter(el => el.label != 'RUR');

const trip = store.getLastTrip();
const goToTrip = () => {
  router.push(`/trip/${trip.id}`);
};

let rates = [];
getCurrenciesRates().then(res => rates = res);

const firstInputValue = ref('');
const secondInputValue = ref('');
const secondSelectValue = ref('');

const firstInputUpdate = (value) => {
  console.log(value);
  firstInputValue.value = value;

  if (secondSelectValue.value != '') {
    console.log(+firstInputValue.value / rates.find(el => el.id == secondSelectValue.value).value)
    secondInputValue.value = (+firstInputValue.value / rates.find(el => el.id == secondSelectValue.value).value).toFixed(2);
  }
};

const secondInputUpdate = (value) => {
  console.log(value);
  secondInputValue.value = value;

  if (secondSelectValue.value != '') {
    console.log(+secondInputValue.value * rates.find(el => el.id == secondSelectValue.value).value)
    firstInputValue.value = (+secondInputValue.value * rates.find(el => el.id == secondSelectValue.value).value).toFixed(2);
  }
};

const secondSelectUpdate = (value) => {
  console.log(value);
  secondSelectValue.value = value;

  if (firstInputValue.value != '') {
    console.log(+firstInputValue.value / rates.find(el => el.id == secondSelectValue.value).value)
    secondInputValue.value = (+firstInputValue.value / rates.find(el => el.id == secondSelectValue.value).value).toFixed(2);
  }
};

</script>

<style scoped>
@import "./index.css";

</style>
