<template>
    <q-page>
        <MyTabs @change-tab="tabUpdate" :tabs="tabs"></MyTabs>
        <q-tab-panels v-model="tab" animated>
            <LineChartTab name="lineChart"></LineChartTab>
            <BarChartTab name="barChart"></BarChartTab>
        </q-tab-panels>
    </q-page>
</template>

<script setup>
import { MyTabs } from '@/components';
import { LineChartTab, BarChartTab } from '@/pages';
import { ref } from 'vue';

const tabs = [
    {
        name: 'lineChart',
        label: 'По дням'
    },
    {
        name: 'barChart',
        label: 'По категориям'
    }
];

const tab = ref('lineChart');

const tabUpdate = (value) => {
    tab.value = value;
};

</script>

<style scoped>

</style>
  