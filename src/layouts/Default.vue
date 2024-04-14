<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <slot name="header"></slot>
    </q-header>
    <q-page-container>
      <router-view
        class="layout-view col-grow"
        :class="contentClass"
        :key="$route.path"
      />
    </q-page-container>
    <slot name="footer"></slot>
  </q-layout>
</template>

<script setup></script>

<style scoped></style>
