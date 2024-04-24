<template>
    <q-tabs
        v-model="tab"
        no-caps
        class="bg-teal-1"
        active-color="deep-purple"
        indicator-color="deep-purple"
        @update:model-value="changeTab"
    >
        <q-tab v-for="tab in tabs" :ripple="false" :name="tab.name" :label="tab.label" />
    </q-tabs>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    tabs: {
        type: Array,
        require: true
    }
})
const tab = ref(props.tabs[0].name)

const emit = defineEmits(['changeTab'])

const changeTab = () => {
    emit('changeTab', tab.value)
}
</script>

<style lang="scss" scoped>

</style>