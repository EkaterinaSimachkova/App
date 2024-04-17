<template>
  <q-layout view="lHh lpr lFf">
    <MyHeader :title="title.value"></MyHeader>
    <q-page-container>
      <router-view
        class="layout-view col-grow"
        :class="contentClass"
        :key="$route.path"
      />
    </q-page-container>
    <MyFooter></MyFooter>
  </q-layout>
</template>

<script setup>
import { MyFooter, MyHeader } from "@/components";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = computed(() => route.meta.title);
console.log(title.value);
</script>

<style scoped></style>
