<template>
  <q-layout class="bg column justify-center items-center">
    <q-page-container class="page">
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;

  width: 80%;
}

.bg {
  background-image: url("@/assets/image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
