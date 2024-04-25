<template>
  <q-page>
    <div class="my-image_" :style="`background-image: url(${trip.imageURL});`">
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
            @change-value="newTrip.name = $event"
          ></MyInput>
          <div class="row justify-between q-gutter-x-xs">
            <MyInput
              class="input_"
              :label="'Бюджет'"
              :text-value="(trip != undefined) ? trip.budget : '' "
              @change-value="newTrip.budget = +$event"
            ></MyInput>
            <MySelect
              class="select_"
              :options="options"
              :label="'Валюта'"
              @change-value="newTrip.currencyId = $event"
            ></MySelect>
          </div>
          <div class="row no-wrap q-gutter-x-sm">
            <MyInput
              :label="'Дата начала'"
              :text-value="(trip != undefined) ? trip.startDate : '' "
              @change-value="newTrip.startDate = $event"
            ></MyInput>
            <MyInput
              :label="'Дата окончания'"
              :text-value="(trip != undefined) ? trip.endDate : '' "
              @change-value="newTrip.endDate = $event"
            ></MyInput>
          </div>
          <MyInput
            :label="'Лимит на день'"
            :text-value="(trip != undefined) ? trip.dayLimit : '' "
            @change-value="newTrip.dayLimit = +$event"
          ></MyInput>
          <MyInput
            :type="'textarea'"
            :label="'Описание'"
            :text-value="(trip != undefined) ? trip.description : '' "
            @change-value="newTrip.description = $event"
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
      :title="'Категории'" 
      :type="'categories'" 
      :trip-id="tripId"
      @change-toggle="changeToggle"
      @promt-visible="promtVisible"
      @btn-close="dialogVisible" 
    ></MyDialog>

    <MyPromt :promt="promt" @change-value="changeLimit" :trip-category-id="tripCategoryId"></MyPromt>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router/index";
import { MyButton, MyInput, MySelect, MyDialog, MyPromt } from "@/components";
import { useStore } from "@/stores/store.js";
import postData from "@/queries/postData.js";
import { useRoute } from 'vue-router'
import { storeToRefs } from "pinia";

const route = useRoute();
const store = useStore();

const tripId = +route.params.id;
const dialog = ref(false);
const promt = ref(false);
const tripCategoryId = ref('');

const { tripsCategories } = storeToRefs(store);
const options = store.getCurrenciesOptions();
const trip = store.getTripById(tripId);


const dialogVisible = () => {
  dialog.value = !dialog.value;
};

const promtVisible = (item) => {
  const tripCategory = store.getTripCategoryByKey(tripId, item.id);
  if (tripCategory != undefined) {
    tripCategoryId.value = tripCategory.id;
    promt.value = !promt.value;
  };
};

const btnClose = () => {
  router.back();
};

const btnEdit = () => {};

const newTrip = {
  id: tripId,
  name: null,
  budget: null,
  dayLimit: null,
  startDate: null,
  endDate: null,
  description: null,
  imageURL: null,
  currencyId: null,
};

const btnSubmit = () => {
  store.updateTrip(newTrip);
  console.log(newTrip);
  router.back();
  //postData('trips/2/edit', data).then();
};

const changeToggle = ([value, category]) => {
  if (value == true) {
    store.addTripCategory({
      id: tripsCategories.value.at(-1).id + 1,
      limit: null,
      tripId: tripId,
      categoryId: category.id
    });
    console.log(tripsCategories.value);
  } else {
    store.deleteTripCategoryByKey(tripId, category.id);
    console.log(tripsCategories.value);
  };
};

const changeLimit = ([value, tripCategoryId]) => {
  store.updateTripCategory(tripCategoryId, value);
  console.log(store.tripsCategories);
};

</script>

<style scoped>
@import "./index.css";

</style>
