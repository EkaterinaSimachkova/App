<template>
  <q-tab-panel>
    <!-- <MySearch class="q-my-sm"></MySearch> -->
    <q-scroll-area style="height: calc(100vh - 240px)">
      <q-list class="list">
        <MyItem
          v-for="item in categories"
          :item="item"
          :type="'withAvatar'"
          @click="dialogCategoryVisible(item)"
        ></MyItem>
      </q-list>
    </q-scroll-area>
    <MyDialog 
      :dialog="dialogCategory" 
      @btn-close="dialogCategoryVisible(null)" 
      :title="(category != null) ? category.name : '' " 
      :type="'category'"
      :category="category"
    ></MyDialog>
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
import { useStore } from "@/store/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { categories } = storeToRefs(store);

const dialog = ref(false);
const dialogVisible = () => {
  dialog.value = !dialog.value;
};

const category = ref();
const dialogCategory = ref(false);
const dialogCategoryVisible = (item) => {
  if (item != null) {
    category.value = store.getCategoryById(item.id);
  }
  dialogCategory.value = !dialogCategory.value;
};

</script>

<style scoped>
@import "./index.css";

</style>
