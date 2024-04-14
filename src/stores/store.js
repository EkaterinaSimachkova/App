import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

import getData from '@/queries/getData.js';

export const useStore = defineStore('store', () => {
    const categories = ref([])
    const currencies = ref([])
    const trips = ref([])
    const transactions = ref([])

    /*
    getData('categories')
                    .then(data => categories.value = data)
                    .catch(err => console.log(err))
                    .finally(console.log(`get categories: ${categories.value}`))

    getData('currencies')
                    .then(data => currencies.value = data)
                    .catch(err => console.log(err))
                    .finally(console.log(`get currencies: ${currencies.value}`))

    getData('trips')
                    .then(data => trips.value = data)
                    .catch(err => console.log(err))
                    .finally(console.log(`get trips: ${trips.value}`))
    
    getData('transactions')
                    .then(data => transactions.value = data)
                    .catch(err => console.log(err))
                    .finally(console.log(`get transactions: ${transactions.value}`))
                
    */
   
    return {
        categories,
        currencies,
        trips,
        transactions
    }
})