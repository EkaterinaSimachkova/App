import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

import getData from '@/queries/getData.js';

export const useStore = defineStore('store', () => {
    const user = ref({
        id: 1,
        login: 'Ekaterina',
        name: 'Kate',
        password: '0609'
    })

    const categories = ref([{
        id: 1,
        name: 'food',
        description: null,
    }])

    const tripsCategories = ref([{
        id: 1,
        limit: 100,
        tripId: 1,
        categoryId: 1
    }])

    const currencies = ref([{
        id: 1,
        name: 'RUR',
        fullName: null,
        symbol: null,
    },
    {
        id: 2,
        name: 'USD',
        fullName: null,
        symbol: null,
    }])

    const trips = ref([{
        id: 1,
        name: 'Paris',
        budget: 100000,
        dayLimit: 1000,
        startDate: null,
        endDate: null,
        description: null,
    }])

    const transactions = ref([{
        id: 1,
        name: 'dinner',
        cost: 1000,
        date: null,
        description: null,
    }])


    const getCategoriesNames = () => {
        return categories.value.map(el => el.name)
    }

    const getCategoryById = (id) => {
        return categories.value.find(el => el.id == id)
    }

    const getCurrenciesNames = () => {
        return currencies.value.map(el => el.name)
    }

    const getCurrencyById = (id) => {
        return currencies.value.find(el => el.id == id)
    }

    const getTripsNames = () => {
        return trips.value.map(el => el.name)
    }

    const getTripById = (id) => {
        return trips.value.find(el => el.id == id)
    }

    const getTransactionById = (id) => {
        return transactions.value.find(el => el.id == id)
    }

    

    /*
    const categories = ref([])
    const currencies = ref([])
    const trips = ref([])
    const transactions = ref([])

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
        user,
        categories,
        tripsCategories,
        currencies,
        trips,
        transactions,
        getCategoriesNames,
        getCategoryById,
        getCurrenciesNames,
        getCurrencyById,
        getTripsNames,
        getTripById,
        getTransactionById,
    }
})