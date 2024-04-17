<template>
  <q-tab-panel>
    <MySearch class="q-my-sm"></MySearch>
    <q-scroll-area style="height: 550px">
      <q-list class="list">
        <MyItem
          v-for="item in categoriesList"
          :item="item"
          :type="'withAvatar'"
        ></MyItem>
      </q-list>
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
import { MyButton, MyItem, MySearch } from "@/components";
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { categories } = storeToRefs(store);

const categoriesList = categories.value;
console.log(categoriesList);

const btnCreate = () => {};
</script>

<style scoped>
@import "./index.css";

</style>
