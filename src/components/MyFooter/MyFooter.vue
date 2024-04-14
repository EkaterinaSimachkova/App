<template>
    <q-footer class="bg-teal text-white" style="height: 70px">
      <q-toolbar>
        <q-tabs no-caps v-model="tab" class="justify-between" active-color="teal-10">
            <q-route-tab :ripple="false" to="/main" name="main" icon="home" label="Главная" />
            <q-route-tab :ripple="false" to="/expenses" name="expenses" icon="receipt" label="Расходы" />
            <q-tab :ripple="false" name="charts" icon="leaderboard" label="Аналитика" />
            <q-route-tab :ripple="false" to="/user" name="user" icon="perm_identity" label="Профиль" />
        </q-tabs>
      </q-toolbar>
    </q-footer>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('')
</script>

<style scoped>

</style>