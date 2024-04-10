<template>
  <q-layout class="justify-center items-center">
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style lang="scss" scoped></style>
