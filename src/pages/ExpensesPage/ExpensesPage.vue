<template>
  <q-page class="q-mx-sm">
    <MySearch class="q-my-md"></MySearch>
    <q-scroll-area style="height: 550px">
      <q-list class="list">
        <MyItem v-for="item in transactions" :item="item"></MyItem>
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
  </q-page>
</template>

<script setup>
import { MyButton, MySearch, MyItem } from "@/components";
import { useStore } from "@/stores/store.js";

const store = useStore();

const transactions = store.transactions;
console.log(transactions);

const btnCreate = () => {};
</script>

<style scoped>
@import "./index.css";

</style>
