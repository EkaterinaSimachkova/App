<template>
  <q-layout >
    <q-header>
      <slot name="header"></slot>
    </q-header>
    <q-page-container class="flex">
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

<style lang="scss" scoped></style>
