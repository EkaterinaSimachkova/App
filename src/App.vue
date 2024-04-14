<template>
  <div>
    <slot>
      <component :is="layout?.component" v-bind="layout?.props"></component>
    </slot>
  </div>
</template>

<script setup>
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);

const layout = computed(() => {
  return route.meta?.layout;
});
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
