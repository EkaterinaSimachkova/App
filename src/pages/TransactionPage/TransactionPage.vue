<template>
  <q-page>
    <div class="row items-center q-pa-md">
      <q-space />
      <MyButton 
        :type="'close-bg'"
        @btn-click="btnClose"
      ></MyButton>
    </div>

    <div class="row justify-between q-ma-lg">
      <div class="column q-ma-none">
        <q-img
          class="image"
          :src="transaction.imageURL"
        ></q-img>
        <MyButton
          class="button"
          :type="'plus'"
          @btn-click="btnEdit"
        ></MyButton>
      </div>
      <div class="info_ column items-end q-my-xl">
        <div class="text-h5 text-deep-purple-10 q-mb-md text-right">{{ transaction.name }}</div>
        <div class="text-h6 text-deep-purple q-mb-lg">{{ date }}</div>
        <div class="text-h5 text-green">{{ transaction.cost }}{{ currencySymbol }}</div>
      </div>
    </div>

    <div class="column q-ma-lg">
      <div class="row justify-between items-baseline q-mb-lg">
        <div class="text-subtitle1 text-grey-10">Путешествие</div>
        <div class="text-body1 text-deep-purple">{{ tripName }}</div>
      </div>
      <div class="row justify-between items-baseline q-mb-xl">
        <div class="text-subtitle1 text-grey-10">Категория</div>
        <div class="text-body1 text-deep-purple">{{ categoryName }}</div>
      </div>

      <q-separator></q-separator>
      <div class="text-body1 text-deep-purple q-mt-lg q-mb-xl">{{ transaction.description }}</div>
    </div>

    <div class="row items-center q-px-lg q-pt-xl q-mt-xl q-gutter-x-md">
      <q-space />
      <MyButton 
        :icon-name="'edit'" 
        :label="'Редактировать'"
        @btn-click="dialogVisible"
      ></MyButton>
      <MyButton
        class="btn"
        :label="'Удалить'"
        :type="'cancel'"
        @btn-click="btnDelete"
      ></MyButton>
    </div>

    <MyDialog 
      :dialog="dialog" 
      @btn-close="dialogVisible" 
      :title="transaction.name" 
      :type="'transaction'" 
      :transaction="transaction"
    ></MyDialog>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { MyButton, MyDialog } from "@/components";
import { useStore } from "@/store/store.js";
import { storeToRefs } from "pinia";
import router from "@/router/index";
import { useRoute } from 'vue-router'

const route = useRoute();
const store = useStore();

const transaction = store.getTransactionById(route.params.id);

const date = computed(() => (transaction.date != null) ? new Date(transaction.date).toLocaleDateString() : '');

const currency = computed(() => store.getCurrencyById(transaction.currencyId));
const currencySymbol = computed(() => (currency.value != undefined) ? currency.value.symbol : '');

const trip = computed(() => store.getTripById(transaction.tripId));
const tripName = computed(() => (trip.value != undefined) ? trip.value.name : 'Нет');

const category = computed(() => store.getCategoryById(transaction.categoryId));
const categoryName = computed(() => (category.value != undefined) ? category.value.name : 'Нет');

const dialog = ref(false);
const dialogVisible = () => {
  dialog.value = !dialog.value;
};

const btnClose = () => {
  router.back();
};

const btnEdit = () => {};

const btnDelete = () => {
  store.deleteTransactionById(transaction.id);
  router.back();
};

</script>

<style scoped>
@import "./index.css";

</style>
