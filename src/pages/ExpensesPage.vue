<template>
  <q-layout view="lHh lpr lFf">
    <MyHeader :title="'Расходы'"></MyHeader>
    <q-page-container class="q-mx-sm">
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
    </q-page-container>
    <MyFooter></MyFooter>
  </q-layout>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import MySearch from "@/components/MySearch.vue";
import MyItem from "@/components/MyItem.vue";
import { MyButton } from "@/components";
import { useStore } from "@/stores/store.js";

const store = useStore();

const transactions = store.transactions;
console.log(transactions);

const btnCreate = () => {};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  margin-top: 10px;
}
</style>
