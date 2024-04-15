<template>
  <q-layout view="lHh lpr lFf">
    <MyHeader :title="$route.matched[0].props.default.title"></MyHeader>
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
</script>

<style scoped></style>
