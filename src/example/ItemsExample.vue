<template>
    <q-layout>
        <q-page-container>
            <q-list class="my">
                <MyItem :type="'withAvatar'"></MyItem>
                <MyItem :type="'withToggle'"></MyItem>
                <MyItem></MyItem>
            </q-list>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { MyItem } from "@/components";
</script>

<style scoped>
.my{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>