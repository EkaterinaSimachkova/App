<template>
  <q-page>
    <div class="row items-center q-pa-md">
      <q-space />
      <MyButton :type="'close-bg'"></MyButton>
    </div>

    <div class="row justify-between q-mx-lg q-my-md">
      <div class="column q-ma-none">
        <q-img
          class="image"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        ></q-img>
        <MyButton
          class="button"
          :type="'plus'"
          @btn-click="btnEdit"
        ></MyButton>
      </div>
      <div class="column items-end q-my-xl">
        <div class="text-h5 text-deep-purple-10 q-mb-sm">Название</div>
        <div class="text-h6 text-deep-purple q-mb-lg">01.01.2024</div>
        <div class="text-h5 text-green">100000₽</div>
      </div>
    </div>

    <div class="column q-my-lg q-mx-lg">
      <div class="row justify-between items-baseline q-mb-lg">
        <div class="text-subtitle1 text-grey-10">Путешествие</div>
        <div class="text-body1 text-deep-purple">Название</div>
      </div>
      <div class="row justify-between items-baseline q-mb-xl">
        <div class="text-subtitle1 text-grey-10">Категория</div>
        <div class="text-body1 text-deep-purple">Название</div>
      </div>

      <q-separator></q-separator>
      <div class="text-body1 text-deep-purple q-mt-lg q-mb-xl">
        Supporting line text lorem ipsum dolor sit amet, consectetur.
      </div>
    </div>

    <div class="row items-center q-px-lg q-pt-xl q-mt-xl">
      <q-space />
      <MyButton :icon-name="'edit'" :label="'Редактировать'"></MyButton>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { MyButton } from "@/components";
const props = defineProps({
  title: {
    type: String,
    require: true,
  },
});

const btnEdit = () => {};
</script>

<style scoped>
.button {
  left: 12px;
  bottom: 50px;

  width: 40px;
  height: 40px;

  /*opacity: 70%;*/
}
.image {
  height: 250px;
  width: 150px;

  border-radius: 25px;
}
</style>
