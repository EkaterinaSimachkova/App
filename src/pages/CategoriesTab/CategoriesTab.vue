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
    <MyDialog 
      :dialog="dialog" 
      @btn-close="dialogVisible" 
      :title="'Новая категория'" 
      :type="'category'"
    ></MyDialog>
    <q-page-sticky position="bottom-left" :offset="[10, 0]">
      <MyButton
        class="q-my-lg q-mx-sm"
        :type="'create'"
        :label="'Создать'"
        @btn-click="dialogVisible"
      ></MyButton>
    </q-page-sticky>
  </q-tab-panel>
</template>

<script setup>
import { MyButton, MyItem, MySearch, MyDialog } from "@/components";
import { ref } from "vue";
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { categories } = storeToRefs(store);

const categoriesList = categories.value;

const dialog = ref(false);
const dialogVisible = () => {
  dialog.value = !dialog.value;
};

</script>

<style scoped>
@import "./index.css";

</style>
