<template>
    <q-layout>
        <q-page-container class="my">
            <MyCard :with-info="true"></MyCard>
            <MyCard></MyCard>
            <MyCarousel></MyCarousel>
        </q-page-container>
    </q-layout>
        
</template>

<script setup>
import { MyCard, MyCarousel } from "@/components";



</script>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    gap: 10px
}
</style>