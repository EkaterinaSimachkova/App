<template>
  <q-tab-panel>
    <MySearch class="q-my-sm"></MySearch>
    <q-scroll-area style="height: 550px">
      <div class="list">
        <MyCard v-for="item in tripsList" :item="item"></MyCard>
      </div>
    </q-scroll-area>
    <q-page-sticky position="bottom-left" :offset="[10, 0]">
      <MyButton
        class="q-my-lg q-mx-sm"
        :type="'create'"
        :label="'Создать'"
        @btn-click="btnCreate"
      ></MyButton>
    </q-page-sticky>
  </q-tab-panel>
</template>

<script setup>
import { MyButton, MyCard, MySearch } from "@/components";
import router from "@/router/index";
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { trips } = storeToRefs(store);

const tripsList = trips.value;

const btnCreate = () => {
  router.push(`/edit-trip`);
};

</script>

<style scoped>
@import "./index.css";

</style>
