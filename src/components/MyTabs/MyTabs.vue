<template>
    <q-tabs
        v-model="tab"
        no-caps
        class="bg-teal-1"
        active-color="deep-purple"
        indicator-color="deep-purple"
        @update:model-value="changeTab"
    >
        <q-tab :ripple="false" name="profile" label="Профиль" />
        <q-tab :ripple="false" name="categories" label="Категории" />
        <q-tab :ripple="false" name="trips" label="Путешествия" />
    </q-tabs>

</template>

<script setup>
import { ref } from 'vue'
const tab = ref('profile')

const emit = defineEmits(['changeTab'])

const changeTab = () => {
    emit('changeTab', tab.value)
}
</script>

<style lang="scss" scoped>

</style>