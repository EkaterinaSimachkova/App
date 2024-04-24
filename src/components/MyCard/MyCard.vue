<template>
  <q-card class="card" flat bordered>
    <div v-if="withInfo" class="text-h5 text-bold text-deep-purple-10 q-ma-md">
      Последнее путешествие
    </div>
    <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

    <q-card-section>
      <div class="row justify-between">
        <div class="text">
          <div class="text-h6 text-deep-purple">{{ item.name }}</div>
          <div v-if="!withInfo" class="text-caption">{{ item.description }}</div>
        </div>
        <div>
          <div class="text-subtitle1 text-green">{{ item.budget }}</div>
          <MyButton v-if="!withInfo" :type="'arrow'" @btn-click="btnClick"></MyButton>
        </div>
      </div>

      <div v-if="withInfo" class="row no-wrap justify-between items-end">
        <div class="text-subtitle1 text-grey-10">{{ item.description }}</div>
        <MyButton :type="'arrow'" @btn-click="btnClick"></MyButton>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { MyButton } from "@/components";
const props = defineProps({
  withInfo: {
    type: Boolean,
    require: false,
  },
  item: {
    type: Object,
    require: true,
  },
});

const emit = defineEmits(['btnClick']);

const btnClick = () => {
    emit('btnClick');
};

</script>

<style scoped>
.card {
  filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
}
.text {
  width: 80%;
}
</style>
