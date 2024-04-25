<template>
  <q-page>
    <div class="my-image" :style="`background-image: url(${trip.imageURL});`">
      <div class="row items-center q-pa-md">
        <q-space />
        <MyButton 
          :type="'close-bg'"
          @btn-click="btnClose"
        ></MyButton>
      </div>
    </div>

    <div class="my-layout">
      <div class="q-mx-xl q-pt-md">
        <div class="row justify-between q-my-md">
          <div class="q-my-lg q-ml-none">
            <div class="text-h5 text-deep-purple-10 q-mb-sm">{{ trip.name }}</div>
            <div class="text-subtitle1 text-deep-purple">
              {{ trip.startDate }} - {{ trip.endDate }}
            </div>
          </div>

          <div class="text-h5 text-green">{{ trip.budget }}</div>
        </div>

        <div class="text-body1 text-grey-10 q-mb-xl">{{ trip.description }}</div>

        <MyCarousel v-if="tripCategories.length != 0" :trip-categories="tripCategories"></MyCarousel>

        <div class="row justify-end items-center q-mt-xl q-gutter-x-sm">
          <MyButton 
            :icon-name="'edit'" 
            :label="'Редактировать'"
            @btn-click="btnEdit"
          ></MyButton>
          <MyButton
            class="btn"
            :label="'Удалить'"
            :type="'cancel'"
            @btn-click="btnDelete"
          ></MyButton>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import router from "@/router/index";
import { MyButton, MyCarousel } from "@/components";
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";
import { useRoute } from 'vue-router'

const route = useRoute();
const store = useStore();

const trip = store.getTripById(route.params.id);
const tripCategories = computed(() => store.getTripCategoriesByTripId(trip.id));
console.log(tripCategories)

const btnClose = () => {
  router.back();
};

const btnEdit = () => {
  router.push(`/edit-trip/${trip.id}`)
};

const btnDelete = () => {
  store.deleteTripById(trip.id);
  router.back();
};

</script>

<style scoped>
@import "./index.css";

</style>
