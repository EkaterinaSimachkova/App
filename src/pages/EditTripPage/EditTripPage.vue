<template>
  <q-page>
    <div class="my-image">
      <div class="row items-center q-pa-md">
        <q-space />
        <MyButton :type="'close-bg'"></MyButton>
      </div>

      <MyButton class="button" :type="'edit'" @btn-click="btnEdit"></MyButton>
    </div>

    <div class="my-layout">
      <div class="q-mx-lg q-pt-xl">
        <div class="q-gutter-y-lg">
          <MyInput
            :label="'Название'"
            @change-value="data['name'] = $event"
          ></MyInput>
          <div class="row q-gutter-x-sm">
            <MyInput
              class="input"
              :label="'Бюджет'"
              @change-value="data['budget'] = +$event"
            ></MyInput>
            <MySelect
              class="select"
              :options="options"
              :label="'Валюта'"
              @change-value="selectUpdate"
            ></MySelect>
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <MyInput
              :label="'Дата начала'"
              @change-value="data['start_date'] = $event"
            ></MyInput>
            <MyInput
              :label="'Дата окончания'"
              @change-value="data['end_date'] = $event"
            ></MyInput>
          </div>
          <MyInput
            :label="'Лимит на день'"
            @change-value="data['day_limit'] = +$event"
          ></MyInput>
          <MyInput
            :type="'textarea'"
            :label="'Описание'"
            @change-value="data['description'] = $event"
          ></MyInput>
        </div>

        <div class="row justify-end items-end q-mt-lg q-gutter-sm">
          <MyButton
            :icon-name="'edit'"
            :label="'Управлять категориями'"
          ></MyButton>
          <MyButton :label="'Сохранить'" @btn-click="btnSubmit"></MyButton>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { MyButton, MyInput, MySelect } from "@/components";
import postData from "@/queries/postData.js";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
});

const btnEdit = () => {};

const data = {
    name: null,
    budget: null,
    startDate: null,
    endDate: null,
    dayLimit: null,
    description: null,
};

console.log(data);

const btnSubmit = () => {
    console.log(data);
    //postData('trips/2/edit', data).then();
};
const options = store.getCurrenciesNames();
console.log(options);
</script>

<style scoped>
@import "./index.css";

</style>
