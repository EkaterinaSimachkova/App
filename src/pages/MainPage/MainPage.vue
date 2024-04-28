<template>
  <q-page class="q-mx-sm" style="min-height: auto;">
    <div class="text-h5 text-bold text-deep-purple-10 q-ma-md">
      Конвертер валют
    </div>
    <div class="content">
      <MyInput
        class="input"
        :label="'Сумма'"
        :type="'converter'"
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
        :type="'converter'"
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
    <MyCard v-if="trip != undefined"
      class="q-mt-xl" 
      :item="trip" 
      :with-info="true" 
      @btn-click="goToTrip"
    ></MyCard>
    <div v-else class="text-h5 text-bold text-deep-purple-10 q-mx-md q-my-xl">
      Путешествий не найдено!
    </div>
  </q-page>
</template>

<script setup>
import { MyCard, MyInput, MySelect } from "@/components";
import router from "@/router/index";
import { useStore } from "@/store/store.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStore();
const { rates } = storeToRefs(store);

const defaultCurrency = {
  label: 'RUR', 
  value: 1
}
const options = store.getCurrenciesOptions().filter(el => el.label != 'RUR');

const trip = store.getLastTrip();
const goToTrip = () => {
  router.push(`/trip/${trip.id}`);
};

const firstInputValue = ref('');
const secondInputValue = ref('');
const secondSelectValue = ref('');

const firstInputUpdate = (value) => {
  firstInputValue.value = value;
  if (secondSelectValue.value != '') {
    secondInputValue.value = (+firstInputValue.value / rates.value.find(el => el.id == secondSelectValue.value).value).toFixed(2);
  }
};

const secondInputUpdate = (value) => {
  secondInputValue.value = value;
  if (secondSelectValue.value != '') {
    firstInputValue.value = (+secondInputValue.value * rates.value.find(el => el.id == secondSelectValue.value).value).toFixed(2);
  }
};

const secondSelectUpdate = (value) => {
  secondSelectValue.value = value;
  if (firstInputValue.value != '') {
    secondInputValue.value = (+firstInputValue.value / rates.value.find(el => el.id == secondSelectValue.value).value).toFixed(2);
  }
};

</script>

<style scoped>
@import "./index.css";

</style>
