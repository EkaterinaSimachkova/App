<template>
    <q-btn label="Prompt" color="primary" @click="prompt = true" />
    
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px; border-radius: 12px; box-shadow: 1px 3px 5px 3px rgba(0, 0, 0, 0.15);">
        <q-card-section>
          <div class="text-h6">Your Limit</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input 
            color="deep-purple" 
            label-color="deep-purple" 
            label="Label" 
            dense 
            v-model="limit" 
            autofocus />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn no-caps flat label="Cancel" v-close-popup class="text-grey-10"/>
          <q-btn no-caps flat label="Save" v-close-popup class="text-green"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
const prompt = ref(false)
const limit = ref('')
</script>

<style scoped>

</style>