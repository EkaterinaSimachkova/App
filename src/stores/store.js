import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

import getData from '@/queries/getData.js';

export const useStore = defineStore('store', () => {
    const user = ref(
        {
            id: 1,
            login: 'Ekaterina',
            name: 'Kate',
            password: '0609',
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
        }
    )

    const categories = ref([
        {
            id: 1,
            name: 'food',
            description: null,
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
            id: 2,
            name: 'food2',
            description: 'null',
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
        }
    ])

    const tripsCategories = ref([
        {
            id: 1,
            limit: 100,
            tripId: 1,
            categoryId: 1,
        },
        {
            id: 2,
            limit: 200,
            tripId: 1,
            categoryId: 2,
        }
    ])

    const currencies = ref([
        {
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
        }
    ])

    const trips = ref([
        {
            id: 1,
            name: 'Paris',
            budget: 100000,
            dayLimit: 1000,
            startDate: null,
            endDate: null,
            description: null,
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
            currencyId: 1,
        }
    ])

    const transactions = ref([
        {
            id: 1,
            name: 'dinner',
            cost: 1000,
            date: null,
            description: null,
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
            tripId: 1,
            categoryId: 1,
            currencyId: 1,
        },
        {
            id: 2,
            name: 'dinner2',
            cost: 2000,
            date: null,
            description: null,
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
            tripId: 1,
            categoryId: 1,
            currencyId: 1,
        }
    ])


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

    const getTripCategoriesByTripId = (id) => {
        return tripsCategories.value.filter(el => el.tripId == id)
    }

    const getTransactionById = (id) => {
        return transactions.value.find(el => el.id == id)
    }

    
    const updateUser = (login = null, password = null, name = null) => {
        user.value.login = (login != null) ? login : user.value.login
        user.value.password = (password != null) ? password : user.value.password
        user.value.name = (name != null) ? name : user.value.name
    }

    const deleteCategoryById = (id) => {
        categories.value = categories.value.filter(el => el.id != id)
    }
    
    const deleteTripById = (id) => {
        trips.value = trips.value.filter(el => el.id != id)
    }

    const deleteTransactionById = (id) => {
        transactions.value = transactions.value.filter(el => el.id != id)
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
        getTripCategoriesByTripId,
        getCurrenciesNames,
        getCurrencyById,
        getTripsNames,
        getTripById,
        getTransactionById,
        updateUser,
        deleteCategoryById,
        deleteTransactionById,
        deleteTripById
    }
})