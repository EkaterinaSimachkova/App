<template>
    <q-tab-panel>
        <div v-if="daysCosts.length != 0">
            <div class="text-h6 text-bold text-deep-purple-10 q-ma-md">
                График расходов по дням
            </div>
            <div ref="lineChartElementRef" class="chart"></div>
        </div>
        <div v-else class="text-h6 text-bold text-deep-purple-10 q-ma-md text-center">
                Расходов для последнего путешествия не найдено!
        </div>
    </q-tab-panel>
</template>

<script setup>
  import * as echarts from 'echarts';
  import { ref, onMounted } from 'vue';
  import { useStore } from "@/store/store.js";
  import { storeToRefs } from 'pinia';

  const store = useStore();
  const { trips } = storeToRefs(store);

  const lineChartElementRef = ref();

  const lastTrip = trips.value.at(-1);
  const lastTripId = lastTrip.id;

  const dates = store.getTransactionsDatesByTripId(lastTripId);
  const daysCosts = store.getTransactionsCostByTripDays(lastTripId);
  const dayLimit = new Array(dates.length).fill(lastTrip.dayLimit);

  const lineOption = ref({
    grid: {
        left: '15%',
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "line"
        }
    },
    xAxis: {
        type: 'category',
        data: dates,
        axisTick: {
            alignWithLabel: true
        },
        boundaryGap: false,
        axisLabel: {
            margin: 15
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Потрачено',
            data: daysCosts,
            type: 'line',
            areaStyle: {},
            smooth: false
        },
        {
            name: 'Лимит',
            data: dayLimit,
            type: 'line',
            showSymbol: false,
            color: 'orange'
        }
    ]
  });

  onMounted(() => {
    if (daysCosts.length != 0) {
        let lineChart = echarts.init(lineChartElementRef.value);
        lineChart.setOption(lineOption.value);
    };
  });

</script>

<style scoped>
@import "./index.css";

</style>