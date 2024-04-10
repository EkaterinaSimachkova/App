<template>
  <q-layout>
    <q-page-container>
      <div class="my-image">
        <div class="row items-center q-pa-md">
          <q-space />
          <MyButton :type="'close-bg'"></MyButton>
        </div>
      </div>

      <div class="my-layout">
        <div class="q-mx-xl q-pt-md">
          <div class="row justify-between q-my-md">
            <div class="q-my-lg q-ml-none">
              <div class="text-h5 text-deep-purple-10 q-mb-sm">Название</div>
              <div class="text-subtitle1 text-deep-purple">
                01.01.2024-10.01.2024
              </div>
            </div>

            <div class="text-h5 text-green">100000₽</div>
          </div>

          <div class="text-body1 text-grey-10 q-mb-xl">
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </div>

          <MyCarousel></MyCarousel>

          <div class="row items-center q-mt-xl">
            <q-space />
            <MyButton :icon-name="'edit'" :label="'Редактировать'"></MyButton>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { MyButton } from "@/components";
import MyCarousel from "@/components/MyCarousel.vue";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
});

const btnEdit = () => {};
</script>

<style scoped>
.my-layout {
  position: absolute;
  top: 275px;
  background-color: white;
  border-radius: 50px 50px 0 0;
}
.my-image {
  height: 325px;

  background-image: url("https://cdn.quasar.dev/img/parallax2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
