<template>
    <q-btn v-if="type=='close-bg'"
        round
        unelevated
        color="teal-5"
        text-color="white"
        icon="close"
        @click="btnClick"
    />
    <q-btn v-else-if="type=='close'"
        flat 
        round
        dense 
        v-close-popup
        icon="close"
        @click="btnClick"
    />
    <q-btn v-else-if="type=='edit'"
        style="border-radius: 16px;"
        unelevated
        color="deep-purple-1"
        text-color="deep-purple-10"
        icon="edit"
        @click="btnClick"
    />
    <q-btn v-else-if="type=='plus'"
        style="border-radius: 16px;"
        unelevated
        color="deep-purple-1"
        text-color="deep-purple-10"
        icon="add"
        @click="btnClick"
    />
    <q-btn v-else-if="type=='arrow'"
        color="grey-10"
        round
        flat
        dense
        icon="arrow_right"
        @click="btnClick"
    />
    <q-btn v-else-if="type=='create'"
        no-caps 
        rounded 
        unelevated
        color="teal-1"
        text-color="deep-purple"
        icon="add"
        :label="label" 
        @click="btnClick"
    />
    <q-btn v-else-if="type=='cancel'"
        v-close-popup 
        no-caps 
        rounded 
        unelevated
        outline
        color="white"
        text-color="deep-purple"
        :label="label" 
        @click="btnClick"
    />
    <q-btn v-else-if="type=='save'"
        v-close-popup 
        no-caps 
        rounded 
        unelevated
        color="teal"
        :label="label" 
        @click="btnClick"
    />
    <q-btn v-else
        no-caps 
        rounded 
        unelevated
        color="teal"
        :label="label" 
        :icon="iconName"
        @click="btnClick"
    />
</template>

<script setup>
const emit = defineEmits(['btnClick'])

const btnClick = () => {
    emit('btnClick')
}

const props = defineProps({
    type: {
        type: String,
        require: false
    },
    iconName: {
        type: String,
        require: false
    },
    label: {
        type: String,
        require: false
    },
})
</script>

<style scoped>

</style>