<template>
  <q-page class="q-mx-sm" style="min-height: auto;">
    <!-- <MySearch class="q-my-md"></MySearch> -->
    <q-scroll-area style="height: calc(100vh - 180px)">
      <q-list class="list">
        <MyItem v-for="item in transactions" 
          :item="item" 
          @click="$router.push(`/transaction/${item.id}`)"
        ></MyItem>
      </q-list>
    </q-scroll-area>
    <MyDialog 
      :dialog="dialog" 
      @btn-close="dialogVisible" 
      :title="'Новая транзакция'" 
      :type="'transaction'"
    ></MyDialog>
    <q-page-sticky position="bottom-left" :offset="[10, 0]">
      <MyButton
        class="q-my-lg q-mx-sm"
        :type="'create'"
        :label="'Создать'"
        @btn-click="dialogVisible"
      ></MyButton>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { MyButton, MySearch, MyItem, MyDialog } from "@/components";
import router from "@/router/index";
import { ref } from "vue";
import { useStore } from "@/store/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { transactions } = storeToRefs(store);

const dialog = ref(false);
const dialogVisible = () => {
  dialog.value = !dialog.value;
};

</script>

<style scoped>
@import "./index.css";

</style>
