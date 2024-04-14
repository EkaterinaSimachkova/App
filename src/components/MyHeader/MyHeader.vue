<template>
    <q-header class="bg-teal text-white" style="height: 70px">
        <q-toolbar class="fit">
            <q-toolbar-title>
                {{ title }}
            </q-toolbar-title>
            <q-space ></q-space>
            <q-icon name="account_circle" size="md"/>
        </q-toolbar>
    </q-header>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        require: true
    }
})
</script>

<style scoped>

</style>