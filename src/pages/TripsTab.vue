<template>
    <q-tab-panel>
        <MySearch class="q-my-sm"></MySearch>
        <q-scroll-area style="height: 550px;">
            <div class="list">
                <MyCard></MyCard>
                <MyCard></MyCard>
                <MyCard></MyCard>
            </div>
        </q-scroll-area>
        <q-page-sticky position="bottom-left" :offset="[10, 0]">
            <MyButton class="q-my-lg q-mx-sm" :type="'create'" :label="'Создать'" @btn-click="btnCreate"></MyButton>
        </q-page-sticky>
    </q-tab-panel>
</template>

<script setup>
import MySearch from '@/components/MySearch.vue';
import MyButton from '@/components/MyButton.vue';
import MyCard from '@/components/MyCard.vue';


const btnCreate = () => {
    
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    margin-top: 20px;
}
</style>