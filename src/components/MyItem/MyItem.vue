<template>
    <q-item v-if="type=='withAvatar'" clickable v-ripple class="item">
        <q-item-section avatar>
          <q-avatar>
            <img :src="item.imageURL" style="object-fit: contain;">
          </q-avatar>
        </q-item-section>

        <q-item-section>
            <q-item-label class="text-deep-purple">{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.description }}</q-item-label>
        </q-item-section>

        <q-item-section side>
            <q-icon name="arrow_right" color="grey-10"></q-icon>
        </q-item-section>   
    </q-item>
    
    <q-item v-else-if="type=='withToggle'" clickable v-ripple class="item">
        <q-item-section>
            <q-item-label class="text-deep-purple">{{ item.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
            <MyToggle @change-value="changeToggle($event, item)" :toggle-value="toggleValue"/>
        </q-item-section>
    </q-item>

    <q-item v-else clickable v-ripple class="item">
        <q-item-section>
            <q-item-label class="text-deep-purple">{{ item.name }}</q-item-label>
            <q-item-label caption>{{ date }} - {{ item.cost }}{{ currencySymbol }}</q-item-label>
        </q-item-section>
        
        <q-item-section side>
            <q-icon name="arrow_right" color="grey-10"></q-icon>
        </q-item-section>
    </q-item>
</template>

<script setup>
import { ref } from 'vue'
import { MyToggle } from '@/components';
import { useStore } from "@/store/store.js";

const props = defineProps({
    type: {
        type: String,
        require: false
    },
    item: {
        type: Object,
        require: true
    },
    tripCategory: {
        type: Object,
        require: false,
    }
});

const store = useStore();

const date = (props.item.date != null) ? new Date(props.item.date).toLocaleDateString() : '';

const currency = store.getCurrencyById(props.item.currencyId);
const currencySymbol = (currency != undefined) ? currency.symbol : '';

const emit = defineEmits(['changeToggle']);

const changeToggle = (value, item) => {
    emit('changeToggle', [value, item]);
};

const toggleValue = (props.tripCategory != undefined) ? true : false;

</script>

<style scoped>
.item {
    min-height: 88px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
}
</style>