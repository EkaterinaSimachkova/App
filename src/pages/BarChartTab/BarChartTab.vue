<template>
    <q-tab-panel>
        <div v-if="categoriesCosts.length != 0">
            <div class="text-h6 text-bold text-deep-purple-10 q-ma-md">
                Диаграмма расходов по категориям
            </div>
            <div ref="barChartElementRef" class="chart"></div>
        </div>
        <div v-else class="text-h6 text-bold text-deep-purple-10 q-ma-md text-center">
                Расходов по категориям для последнего путешествия не найдено!
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

  const barChartElementRef = ref();

  const lastTrip = trips.value.at(-1);
  const lastTripId = lastTrip.id;

  const categories = store.getTripCategoriesNamesByTripId(lastTripId);
  const categoriesCosts = store.getTransactionsCostByTripCategories(lastTripId);
  const categoriesLimit = store.getTripCategoriesByTripId(lastTripId).map(el => el.limit);

  const barOption = ref({
    grid: {
        left: '15%',
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    xAxis: {
        type: 'category',
        data: categories,
        axisTick: {
            interval: 0
        },
        axisLabel: {
            interval: 0
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Потрачено',
            data: categoriesCosts,
            type: 'bar'
        },
        {
            name: 'Лимит',
            data: categoriesLimit,
            type: 'line',
            color: 'orange'
        }
    ]
  });

  onMounted(() => {
    if (categoriesCosts.length != 0) {
        let barChart = echarts.init(barChartElementRef.value);
        barChart.setOption(barOption.value);
    };
  });

</script>

<style scoped>
@import "./index.css";

</style>