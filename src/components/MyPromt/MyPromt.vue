<template>
    <q-dialog :model-value="promt" persistent>
      <q-card style="min-width: 350px; border-radius: 12px; box-shadow: 1px 3px 5px 3px rgba(0, 0, 0, 0.15);">
        <q-card-section>
          <div class="text-h6">Лимит в валюте путешествия</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input 
            color="deep-purple" 
            label-color="deep-purple" 
            label="Лимит" 
            dense 
            v-model="limit" 
            autofocus />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn no-caps flat label="Отменить" v-close-popup class="text-grey-10"/>
          <q-btn no-caps flat label="Сохранить" v-close-popup class="text-green" @click="changeValue"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  promt: {
    type: Boolean,
    require: true,
  },
  tripCategoryId: {
    type: Number,
    require: true,
  }
});

const limit = ref('');

const emit = defineEmits(['changeValue']);

const changeValue = () => {
    emit('changeValue', [limit.value, props.tripCategoryId]);
};

</script>

<style scoped>

</style>