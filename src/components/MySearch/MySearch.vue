<template>
    <q-input
        v-model="search" 
        outlined 
        rounded
        bg-color="teal-1"
        color="deep-purple"
        placeholder="Поиск"
        type="search"
    >
        <template v-slot:append>
          <q-icon name="search"/>
        </template>
    </q-input>
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
</script>

<style scoped>
.q-field.row.no-wrap.items-start.q-field--outlined.q-input.q-field--rounded ::before {
    border: 0px solid teal;
    border-radius: 50px;
}
.q-field.row.no-wrap.items-start.q-field--outlined.q-input.q-field--rounded ::after {
    border: 0px solid teal;
    border-radius: 50px;
}
</style>