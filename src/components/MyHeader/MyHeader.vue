<template>
    <q-header class="bg-teal text-white" style="height: 70px">
        <q-toolbar class="fit">
            <q-toolbar-title>
                {{ title }}
            </q-toolbar-title>
            <q-space ></q-space>
            <q-img class="image" :src="user.imageURL"/>
        </q-toolbar>
    </q-header>
</template>

<script setup>
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { user } = storeToRefs(store);

const props = defineProps({
    title: {
        type: String,
        require: true
    }
});
</script>

<style scoped>
.image {
    width: 45px;
    height: 45px;

    border-radius: 50px;;
}
</style>