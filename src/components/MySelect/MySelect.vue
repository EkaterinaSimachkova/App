<template>
    <q-select 
        class="my-select"
        rounded
        outlined 
        color="deep-purple" 
        label-color="deep-purple"
        v-model="model" 
        :options="options" 
        :label="label" 
        transition-show="jump-up"
        transition-hide="jump-up"
        @update:model-value="changeValue"
    />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    options: {
        type: Array,
        require: true
    },
    label: {
        type: String,
        require: true
    }
})

const model = ref(null)

const emit = defineEmits(['changeValue'])

const changeValue = () => {
    emit('changeValue', model.value)
}
</script>

<style scoped>
.q-field.row.no-wrap.items-start.q-field--outlined.q-select.q-field--auto-height.q-select--without-input.q-select--without-chips.q-select--single.q-field--rounded.q-field--labeled {
    border: 1px solid teal;
    border-radius: 50px;
}

</style>