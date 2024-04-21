<template>
    <q-page>
        <MyTabs @change-tab="tabUpdate"></MyTabs>
        <q-tab-panels v-model="tab" animated>
            <ProfileTab name="profile"></ProfileTab>
            <CategoriesTab name="categories"></CategoriesTab>
            <TripsTab name="trips"></TripsTab>
        </q-tab-panels>
    </q-page>
</template>

<script setup>
import { MyTabs } from '@/components';
import { ProfileTab, CategoriesTab, TripsTab } from '@/pages';
import { ref } from 'vue';

const tab = ref('profile');

const tabUpdate = (value) => {
    tab.value = value;
};

</script>

<style scoped>

</style>