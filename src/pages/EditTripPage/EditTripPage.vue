<template>
  <q-page>
    <div class="my-image_">
      <div class="row items-center q-pa-md">
        <q-space />
        <MyButton 
          :type="'close-bg'"
          @btn-click="btnClose"
        ></MyButton>
      </div>

      <MyButton 
        class="button_" 
        :type="'edit'" 
        @btn-click="btnEdit"
      ></MyButton>
    </div>

    <div class="my-layout_">
      <div class="q-mx-lg q-pt-xl">
        <div class="q-gutter-y-lg">
          <MyInput
            :label="'Название'"
            :text-value="(trip != undefined) ? trip.name : '' "
            @change-value="data.name = $event"
          ></MyInput>
          <div class="row justify-between q-gutter-x-xs">
            <MyInput
              class="input_"
              :label="'Бюджет'"
              :text-value="(trip != undefined) ? trip.budget : '' "
              @change-value="data.budget = +$event"
            ></MyInput>
            <MySelect
              class="select_"
              :options="options"
              :label="'Валюта'"
              @change-value="selectUpdate"
            ></MySelect>
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <MyInput
              :label="'Дата начала'"
              :text-value="(trip != undefined) ? trip.startDate : '' "
              @change-value="data.startDate = $event"
            ></MyInput>
            <MyInput
              :label="'Дата окончания'"
              :text-value="(trip != undefined) ? trip.endDate : '' "
              @change-value="data.endDate = $event"
            ></MyInput>
          </div>
          <MyInput
            :label="'Лимит на день'"
            :text-value="(trip != undefined) ? trip.dayLimit : '' "
            @change-value="data.dayLimit = +$event"
          ></MyInput>
          <MyInput
            :type="'textarea'"
            :label="'Описание'"
            :text-value="(trip != undefined) ? trip.description : '' "
            @change-value="data.description = $event"
          ></MyInput>
        </div>

        <div class="row justify-end items-end q-mt-lg q-gutter-sm">
          <MyButton
            :icon-name="'edit'"
            :label="'Управлять категориями'"
            @btn-click="dialogVisible"
          ></MyButton>
          <MyButton 
            :label="'Сохранить'" 
            @btn-click="btnSubmit"
          ></MyButton>
        </div>
      </div>
    </div>

    <MyDialog 
      :dialog="dialog" 
      @btn-close="dialogVisible" 
      :title="'Категории'" 
      :type="'categories'" 
    ></MyDialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router/index";
import { MyButton, MyInput, MySelect, MyDialog } from "@/components";
import { useStore } from "@/stores/store.js";
import postData from "@/queries/postData.js";
import { useRoute } from 'vue-router'

const route = useRoute();
const store = useStore();

const dialog = ref(false);
const dialogVisible = () => {
  dialog.value = !dialog.value;
};

const btnClose = () => {
  router.back();
};

const btnEdit = () => {};

const trip = store.getTripById(route.params.id);

const data = {
    name: null,
    budget: null,
    startDate: null,
    endDate: null,
    dayLimit: null,
    description: null,
};

const btnSubmit = () => {
    console.log(data);
    //postData('trips/2/edit', data).then();
};

const options = store.getCurrenciesNames();

</script>

<style scoped>
@import "./index.css";

</style>
