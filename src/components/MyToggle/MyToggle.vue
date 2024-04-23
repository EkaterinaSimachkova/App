<template>
    <q-toggle
        v-model="value"
        color="deep-purple"
        keep-color
        size="md"
        checked-icon="check"
        unchecked-icon="clear"
        @update:model-value="changeValue"
    />
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  toggleValue: {
    type: Boolean,
    require: true,
  }
});

const value = ref(props.toggleValue);

const emit = defineEmits(['changeValue']);

const changeValue = () => {
    emit('changeValue', value.value);
};

</script>

<style scoped>

</style>