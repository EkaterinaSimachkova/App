<template>
    <q-tab-panel>
        <MySearch class="q-my-sm"></MySearch>
        <q-scroll-area style="height: 550px;">
            <q-list class="list">
                <MyItem :type="'withAvatar'"></MyItem>
                <MyItem :type="'withAvatar'"></MyItem>
                <MyItem :type="'withAvatar'"></MyItem>
            </q-list>
        </q-scroll-area>
        <q-page-sticky position="bottom-left" :offset="[10, 0]">
            <MyButton class="q-my-lg q-mx-sm" :type="'create'" :label="'Создать'" @btn-click="btnCreate"></MyButton>
        </q-page-sticky>
    </q-tab-panel>
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import MyItem from '@/components/MyItem.vue';
import MyButton from '@/components/MyButton.vue';


const btnCreate = () => {
    
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    margin-top: 15px;
}
</style>