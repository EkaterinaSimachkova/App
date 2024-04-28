import { defineStore } from 'pinia'
import { ref, reactive, computed, watch } from 'vue'

import getData from '@/queries/getData.js';
import getCurrenciesRates from "@/queries/getCurrenciesRates.js";

export const useStore = defineStore('store', () => {
    const user = ref(
        {
            id: 1,
            login: 'Ekaterina',
            name: 'Kate',
            password: '0609',
            imageURL: "https://i.pinimg.com/originals/07/9b/53/079b53e0f063fa190e0f122d70699282.jpg",
        }
    )

    const categories = ref([
        {
            id: 1,
            name: 'Транспорт',
            description: 'Расходы на передвижения',
            imageURL: "https://u-tranzit.ru/images/uslugi/tamoj3.jpg",
        },
        {
            id: 2,
            name: 'Питание',
            description: 'Расходы на еду',
            imageURL: "https://t31863f.sch.obrazovanie33.ru/upload/site_files/3f/bforme.ru_.jpg",
        },
        {
            id: 3,
            name: 'Проживание',
            description: null,
            imageURL: "https://xn--d1abefklmdnjlga.xn--p1ai/wp-content/uploads/2021/02/kartinki-na-sajt3.png",
        },
        {
            id: 4,
            name: 'Развлечения',
            description: null,
            imageURL: "https://static.vecteezy.com/system/resources/previews/000/474/842/large_2x/vector-theme-park-background-scene.jpg",
        },
        {
            id: 5,
            name: 'Здоровье',
            description: 'Расходы на медикаменты',
            imageURL: "https://xyth.gr/wp-content/uploads/2019/08/20dffb6c8bd3ce7c0acacac547e66526-1024x768@2x.jpg",
        },
        {
            id: 6,
            name: 'Разное',
            description: 'Различные расходы',
            imageURL: "https://sun6-20.userapi.com/s/v1/if1/fIrljJJYGZIqJ_Yq1QA085rOcHyYwxpXfVUqxRfIcs49_kqc8pxKAj0X2JgUQGmdgaF7xFsc.jpg?size=2017x2017&quality=96&crop=71,71,2017,2017&ava=1",
        }
    ])

    const tripsCategories = ref([
        {
            id: 1,
            limit: 10000,
            tripId: 1,
            categoryId: 2,
        },
        {
            id: 2,
            limit: 12000,
            tripId: 2,
            categoryId: 3,
        },
        {
            id: 3,
            limit: 7000,
            tripId: 2,
            categoryId: 2,
        },
        {
            id: 4,
            limit: 3000,
            tripId: 2,
            categoryId: 1,
        }
    ])

    const currencies = ref([
        {
            id: 1,
            name: 'RUR',
            fullName: null,
            symbol: '₽',
        },
        {
            id: 'R01235',
            name: 'USD',
            fullName: null,
            symbol: '$',
        },
        {
            id: 'R01239',
            name: 'EUR',
            fullName: null,
            symbol: '€',
        },
        {
            id: 'R01375',
            name: 'CNY',
            fullName: null,
            symbol: '¥',
        },
        {
            id: 'R01230',
            name: 'AED',
            fullName: null,
            symbol: 'د.إ',
        },
        {
            id: 'R01210',
            name: 'GEL',
            fullName: null,
            symbol: '₾',
        },
        {
            id: 'R01090B',
            name: 'BYN',
            fullName: null,
            symbol: 'Br',
        },
    ])

    const rates = ref([])
    getCurrenciesRates().then(res => rates.value = res)

    const trips = ref([
        {
            id: 1,
            name: 'Венеция',
            budget: 100000,
            dayLimit: 9000,
            startDate: '2024-05-01',
            endDate: '2024-05-11',
            description: null,
            imageURL: "https://cdn.quasar.dev/img/parallax1.jpg",
            currencyId: 1,
        },
        {
            id: 2,
            name: 'Лондон',
            budget: 50000,
            dayLimit: 7000,
            startDate: '2024-01-01',
            endDate: '2024-01-08',
            description: "Лучшее путешествие, подарившее море впечатлений!",
            imageURL: "https://cdn.quasar.dev/img/parallax2.jpg",
            currencyId: 1,
        }
    ])

    const transactions = ref([
        {
            id: 1,
            name: 'Перелет',
            cost: 5000,
            date: '2024-01-01',
            description: null,
            imageURL: "https://cdn4.vectorstock.com/i/1000x1000/65/33/paper-cash-sell-receipt-vector-23876533.jpg",
            tripId: 2,
            categoryId: 1,
            currencyId: 1,
        },
        {
            id: 2,
            name: 'Ужин в ресторане',
            cost: 4000,
            date: '2024-01-02',
            description: 'Праздничный ужин в кругу близких людей',
            imageURL: "https://media.istockphoto.com/id/1285504723/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8.jpg?s=612x612&w=0&k=20&c=-KgtNpCZDTvD8DLn3_d3LEAPhrBkvjSGgVxsSxjHeI0=",
            tripId: 2,
            categoryId: 2,
            currencyId: 1,
        },
        {
            id: 3,
            name: 'Перекус в аэропорту',
            cost: 1000,
            date: '2024-01-08',
            description: null,
            imageURL: "https://kartinki.pibig.info/uploads/posts/2023-04/1682059230_kartinki-pibig-info-p-kartinka-cheka-v-mashine-arti-vkontakte-48.jpg",
            tripId: 2,
            categoryId: 2,
            currencyId: 1,
        },
        {
            id: 4,
            name: 'Поездка загород',
            cost: 2000,
            date: '2024-01-05',
            description: null,
            imageURL: "https://thumbs.dreamstime.com/b/realistic-paper-shop-receipt-barcode-vector-shop-terminal-atm-bill-white-background-realistic-paper-shop-receipt-107601495.jpg",
            tripId: 2,
            categoryId: 1,
            currencyId: 1,
        },
        {
            id: 5,
            name: 'Обед на природе',
            cost: 5000,
            date: '2024-01-05',
            description: null,
            imageURL: "https://as2.ftcdn.net/v2/jpg/02/11/49/41/1000_F_211494142_xekWE4XQFoBrF4dex1DQKc7xBBon1HYo.jpg",
            tripId: 2,
            categoryId: 1,
            currencyId: 1,
        },
        {
            id: 6,
            name: 'Оплата за отель',
            cost: 10000,
            date: '2024-01-01',
            description: null,
            imageURL: "https://media.istockphoto.com/id/1285504723/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8.jpg?s=612x612&w=0&k=20&c=-KgtNpCZDTvD8DLn3_d3LEAPhrBkvjSGgVxsSxjHeI0=",
            tripId: 2,
            categoryId: 3,
            currencyId: 1,
        },
        {
            id: 7,
            name: 'Такси до аэропорта',
            cost: 1000,
            date: '2024-01-08',
            description: null,
            imageURL: "https://img.freepik.com/premium-vector/receipt-template-collection-with-realistic-design_23-2147909119.jpg?w=1800",
            tripId: 2,
            categoryId: 3,
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

    const getLastTrip = () => {
        return trips.value.at(-1)
    }

    const getTripCategoriesByTripId = (id) => {
        return tripsCategories.value.filter(el => el.tripId == id)
    }

    const getTripCategoriesNamesByTripId = (tripId) => {
        let result = []
        const categoriesId = getTripCategoriesByTripId(tripId).map(el => el.categoryId)
        for (let categoryId of categoriesId) {
            result.push(getCategoryById(categoryId).name)
        }
        return result
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

    const getTransactionsDatesByTripId = (tripId) => {
        const set = new Set(transactions.value
                                              .filter(el => el.tripId == tripId)
                                              .map(el => el.date))
        return Array.from(set)
                              .sort((a, b) => new Date(a) - new Date(b))
                              .map(el => new Date(el).toLocaleDateString())
    }

    const getTransactionsCostByTripDays = (tripId) => {
        let result = []
        const days = getTransactionsDatesByTripId(tripId)
        for (let day of days) {
            result.push(transactions.value
                            .filter(el => new Date(el.date).toLocaleDateString() == day && el.tripId == tripId)
                            .map(el => el.cost)
                            .reduce((sum, current) => sum + current, 0))
        }
        return result
    }

    const getTransactionsCostByTripCategories = (tripId) => {
        let result = []
        const tripCategories = getTripCategoriesByTripId(tripId)
        for (let tripCategory of tripCategories) {
            result.push(transactions.value
                            .filter(el => el.categoryId == tripCategory.categoryId && el.tripId == tripCategory.tripId)
                            .map(el => el.cost)
                            .reduce((sum, current) => sum + current, 0))
        }
        return result
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
        rates,
        trips,
        transactions,
        getCategoriesOptions,
        getCategoryById,
        getTripCategoriesByTripId,
        getTripCategoriesNamesByTripId,
        getTripCategoryById,
        getTripCategoryByKey,
        getCurrenciesOptions,
        getCurrencyById,
        getTripsOptions,
        getTripById,
        getLastTrip,
        getTransactionById,
        getTransactionsDatesByTripId,
        getTransactionsCostByTripDays,
        getTransactionsCostByTripCategories,
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