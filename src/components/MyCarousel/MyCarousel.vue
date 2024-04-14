<template>
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="200px"
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">First stop</div>
          <div class="text-caption">Mountains</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Second stop</div>
          <div class="text-caption">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">Third stop</div>
          <div class="text-caption">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref('first')
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>