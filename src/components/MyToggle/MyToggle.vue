<template>
    <q-toggle
        v-model="value"
        color="deep-purple"
        keep-color
        size="md"
        checked-icon="check"
        unchecked-icon="clear"
    />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<style scoped>

</style>