<template>
    <q-layout>
        <q-page-container class="my">
            <MyPromt></MyPromt>
            <MyDialog :title="'Категория'" :type="'category'"></MyDialog>
            <MyDialog :title="'Категории'" :type="'categories'"></MyDialog>
            <MyDialog :title="'Транзакция'" :type="'transaction'"></MyDialog>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import MyDialog from '@/components/MyDialog.vue';
import MyPromt from '@/components/MyPromt.vue';



</script>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    gap: 10px
}
</style>