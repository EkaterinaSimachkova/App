<template>
    <q-input v-if="type=='placeholder'"
        color="deep-purple" 
        label-color="deep-purple" 
        rounded
        outlined 
        v-model="text"
        :label="label" 
        :placeholder="placeholder"
        @update:model-value="changeValue"
    />
    <q-input v-else-if="type=='filled'"
        color="deep-purple" 
        label-color="deep-purple" 
        bg-color="teal-1"
        rounded
        outlined 
        v-model="text"
        stack-label
        :label="label" 
        @update:model-value="changeValue"
    />
    <q-input v-else-if="type=='borderless'"
        color="deep-purple" 
        label-color="deep-purple" 
        v-model="text"
        :label="label" 
        @update:model-value="changeValue"
    />
    <q-input v-else-if="type=='textarea'"
        color="deep-purple" 
        label-color="deep-purple" 
        rounded
        outlined 
        v-model="text"
        :label="label" 
        type="textarea"
        @update:model-value="changeValue"
    />
    <q-input v-else
        color="deep-purple" 
        label-color="deep-purple" 
        rounded
        outlined 
        v-model="text"
        :label="label" 
        @update:model-value="changeValue"
    />
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    type: {
        type: String,
        require: false
    },
    label: {
        type: String,
        require: false
    },
    placeholder: {
        type: String,
        require: false
    }
})

const text = ref('')

const emit = defineEmits(['changeValue'])

const changeValue = () => {
    emit('changeValue', text.value)
}
</script>

<style scoped>
.q-field.row.no-wrap.items-start.q-field--outlined.q-input.q-field--rounded.q-field--labeled {
    border: 1px solid teal;
    border-radius: 50px;
}

.q-field.row.no-wrap.items-start.q-field--outlined.q-textarea.q-field--rounded.q-field--labeled ::before {
    border: 1px solid teal;
    border-radius: 30px;
}

.q-field.row.no-wrap.items-start.q-field--outlined.q-input.q-field--rounded.q-field--float.q-field--labeled ::before {
    border: 0px solid teal;
    border-radius: 50px;
}

.q-field.row.no-wrap.items-start.q-field--standard.q-input.q-field--labeled ::before {
    border-bottom: 1px solid #673ab7;
}

</style>