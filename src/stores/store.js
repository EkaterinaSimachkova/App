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
            description: 'description',
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
        },
        {
            id: 2,
            name: 'London',
            budget: 110000,
            dayLimit: 1100,
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


    const getCategoriesOptions = () => {
        return categories.value.map(el => {return {label: el.name, value: el.id}})
    }

    const getCategoryById = (id) => {
        return categories.value.find(el => el.id == id)
    }

    const getCurrenciesOptions = () => {
        return currencies.value.map(el => {return {label: el.name, value: el.id}})
    }

    const getCurrencyById = (id) => {
        return currencies.value.find(el => el.id == id)
    }

    const getTripsOptions = () => {
        return trips.value.map(el => {return {label: el.name, value: el.id}})
    }

    const getTripById = (id) => {
        return trips.value.find(el => el.id == id)
    }

    const getTripCategoriesByTripId = (id) => {
        return tripsCategories.value.filter(el => el.tripId == id)
    }

    const getTripCategoryById = (id) => {
        return tripsCategories.value.find(el => el.id == id)
    }

    const getTripCategoryByKey = (tripId, categoryId) => {
        return tripsCategories.value.find(el => el.tripId == tripId && el.categoryId == categoryId)
    }

    const getTransactionById = (id) => {
        return transactions.value.find(el => el.id == id)
    }

    
    const updateUser = (login = null, password = null, name = null) => {
        user.value.login = (login != null) ? login : user.value.login
        user.value.password = (password != null) ? password : user.value.password
        user.value.name = (name != null) ? name : user.value.name
    }

    const updateTrip = (newTrip) => {
        const trip = getTripById(newTrip.id)
        if (trip != undefined) {
            trip.name = (newTrip.name != null) ? newTrip.name : trip.name
            trip.budget = (newTrip.budget != null) ? newTrip.budget : trip.budget
            trip.dayLimit = (newTrip.dayLimit != null) ? newTrip.dayLimit : trip.dayLimit
            trip.startDate = (newTrip.startDate != null) ? newTrip.startDate : trip.startDate
            trip.endDate = (newTrip.endDate != null) ? newTrip.endDate : trip.endDate
            trip.description = (newTrip.description != null) ? newTrip.description : trip.description
            trip.imageURL = (newTrip.imageURL != null) ? newTrip.imageURL : trip.imageURL
            trip.currencyId = (newTrip.currencyId != null) ? newTrip.currencyId : trip.currencyId
        } else {
            trips.value.push(newTrip)
        }
    }

    const updateCategory = (newCategory) => {
        const category = getCategoryById(newCategory.id)
        if (category != undefined) {
            category.name = (newCategory.name != null) ? newCategory.name : category.name
            category.description = (newCategory.description != null) ? newCategory.description : category.description
            category.imageURL = (newCategory.imageURL != null) ? newCategory.imageURL : category.imageURL
        } else {
            categories.value.push(newCategory)
        }
    }

    const updateTransaction = (newTransaction) => {
        const transaction = getTransactionById(newTransaction.id)
        if (transaction != undefined) {
            transaction.name = (newTransaction.name != null) ? newTransaction.name : transaction.name
            transaction.cost = (newTransaction.cost != null) ? newTransaction.cost : transaction.cost
            transaction.date = (newTransaction.date != null) ? newTransaction.date : transaction.date
            transaction.description = (newTransaction.description != null) ? newTransaction.description : transaction.description
            transaction.imageURL = (newTransaction.imageURL != null) ? newTransaction.imageURL : transaction.imageURL
            transaction.tripId = (newTransaction.tripId != null) ? newTransaction.tripId : transaction.tripId
            transaction.categoryId = (newTransaction.categoryId != null) ? newTransaction.categoryId : transaction.categoryId
            transaction.currencyId = (newTransaction.currencyId != null) ? newTransaction.currencyId : transaction.currencyId
        } else {
            transactions.value.push(newTransaction)
        }
    }

    const addTripCategory = (newTripCategory) => {
        tripsCategories.value.push(newTripCategory)
    }

    const updateTripCategory = (id, limit) => {
        getTripCategoryById(id).limit = limit
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

    const deleteTripCategoryByKey = (tripId, categoryId) => {
        tripsCategories.value = tripsCategories.value.filter(el => (el.tripId != tripId || el.categoryId != categoryId))
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
        getCategoriesOptions,
        getCategoryById,
        getTripCategoriesByTripId,
        getTripCategoryById,
        getTripCategoryByKey,
        getCurrenciesOptions,
        getCurrencyById,
        getTripsOptions,
        getTripById,
        getTransactionById,
        updateUser,
        updateTrip,
        updateCategory,
        updateTransaction,
        addTripCategory,
        updateTripCategory,
        deleteCategoryById,
        deleteTransactionById,
        deleteTripById,
        deleteTripCategoryByKey
    }
})