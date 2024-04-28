<template>
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="200px"
    >
      <q-carousel-slide v-for="item in tripCategories" :name="item.id" :img-src="getImage(item)">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6">{{ getName(item) }}</div>
          <div class="text-caption">{{ item.limit }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from "@/store/store.js";
import { storeToRefs } from "pinia";

const store = useStore();

const props = defineProps({
  tripCategories: {
    type: Array,
    require: false,
  },
});

const slide = ref();
if (props.tripCategories.length != 0) {
  slide.value = props.tripCategories[0].id;
}

const getImage = (item) => {
  const category = store.getCategoryById(item.categoryId);
  return category.imageURL;
};

const getName = (item) => {
  const category = store.getCategoryById(item.categoryId);
  return category.name;
};

</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
</style>