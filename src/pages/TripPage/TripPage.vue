<template>
  <q-page>
    <div class="my-image">
      <div class="row items-center q-pa-md">
        <q-space />
        <MyButton 
          :type="'close-bg'"
          @btn-click="btnClose"
        ></MyButton>
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

        <div class="row justify-end items-center q-mt-xl q-gutter-x-sm">
          <MyButton 
            :icon-name="'edit'" 
            :label="'Редактировать'"
          ></MyButton>
          <MyButton
            class="btn"
            :label="'Удалить'"
            :type="'cancel'"
          ></MyButton>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router/index";
import { MyButton, MyCarousel } from "@/components";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
});

const btnClose = () => {
  router.back();
};

const btnEdit = () => {};

</script>

<style scoped>
@import "./index.css";

</style>
