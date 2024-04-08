<template>
    <q-card class="card" flat bordered>
      <div v-if="withInfo" class="text-h5 text-bold text-deep-purple-10 q-ma-md">Title</div>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="row justify-between">
            <div>
                <div class="text-h6 text-deep-purple">{{ item.name }}</div>
                <div class="text-subtitle1">{{ item.description }}</div>
            </div>
            <div>
                <div class="text-subtitle1 text-green">{{ item.budget }}</div>
                <MyButton v-if="!withInfo" :type="'arrow'"></MyButton> 
            </div>
        </div>

        <div v-if="withInfo" class="row no-wrap justify-between items-end">
            <div class="text-caption text-grey-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <MyButton :type="'arrow'"></MyButton>  
        </div>
              
      </q-card-section>

    </q-card>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue';
const props = defineProps({
    withInfo: {
        type: Boolean,
        require: false
    },
    item: {
        type: Object,
        require: true
    }
})
</script>

<style scoped>
.card {
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.1));
    border-radius: 12px;
}

</style>