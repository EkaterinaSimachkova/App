<template>
  <q-dialog :model-value="dialog" :maximized="maximize">
    <q-card class="card">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <MyButton 
          :type="'close'" 
          @btn-click="btnClose"
        ></MyButton>
      </q-card-section>

      <q-card-section v-if="type == 'categories'">
        <q-list class="list">
          <MyItem v-for="item in categories" 
            :type="'withToggle'" 
            :item="item" 
            :trip-category="store.getTripCategoryByKey(props.tripId, item.id)"
            @change-toggle="changeToggle"
            @click="promtVisible(item)"
          ></MyItem>
        </q-list>
      </q-card-section>

      <q-card-section v-if="type == 'category'" class="q-mx-md">
        <div class="column justify-center q-my-md">
          <q-img
            class="img"
            :src="(category != null) ? category.imageURL : 'https://avatars.mds.yandex.net/i?id=0e38338142f14770ce1e86098529106e_l-4907652-images-thumbs&n=13' "
          ></q-img>
          <MyButton 
            class="btn_" 
            :type="'edit'" 
            @btn-click="btnEdit"
          ></MyButton>
          <div class="q-gutter-y-lg">
            <MyInput
              class="input"
              :label="'Название'"
              :text-value="(category != null) ? category.name : '' "
              @change-value="newCategory.name = $event"
            ></MyInput>
            <MyInput
              class="input"
              :type="'textarea'"
              :label="'Описание'"
              :text-value="(category != null) ? category.description : '' "
              @change-value="newCategory.description = $event"
            ></MyInput>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-if="type == 'transaction'" class="q-mx-sm">
        <div class="column justify-center q-mt-sm">
          <q-img
            class="image"
            :src="(transaction != null) ? transaction.imageURL : 'https://avatars.mds.yandex.net/i?id=0e38338142f14770ce1e86098529106e_l-4907652-images-thumbs&n=13' "
          ></q-img>
          <MyButton
            class="button"
            :type="'edit'"
            @btn-click="btnEdit"
          ></MyButton>
          <div class="q-gutter-y-sm">
            <MyInput
              class="content"
              :label="'Название'"
              :text-value="(transaction != null) ? transaction.name : '' "
              @change-value="newTransaction.name = $event"
            ></MyInput>
            <div class="row q-gutter-x-xs">
              <MyInput
                class="content_"
                :label="'Сумма'"
                :type="'number'"
                :text-value="(transaction != null) ? transaction.cost : '' "
                @change-value="newTransaction.cost = $event"
              ></MyInput>
              <MySelect
                class="select"
                :options="currenciesOptions"
                :label="'Валюта'"
                :value="(transaction != null) ? currenciesOptions.find(el => el.value == transaction.currencyId) : null "
                @change-value="newTransaction.currencyId = $event"
              ></MySelect>
            </div>
            <MyInput
              class="content"
              :label="'Дата'"
              :type="'date'"
              :text-value="(transaction != null) ? transaction.date : '' "
              @change-value="newTransaction.date = $event"
            ></MyInput>
            <MySelect
              class="content"
              :options="tripsOptions"
              :label="'Путешествие'"
              :value="(transaction != null) ? tripsOptions.find(el => el.value == transaction.tripId) : null "
              @change-value="newTransaction.tripId = $event"
            ></MySelect>
            <MySelect
              class="content"
              :options="categoriesOptions"
              :label="'Категория'"
              :value="(transaction != null) ? categoriesOptions.find(el => el.value == transaction.categoryId) : null "
              @change-value="newTransaction.categoryId = $event"
            ></MySelect>
            <MyInput
              class="content"
              :type="'textarea'"
              :label="'Описание'"
              :text-value="(transaction != null) ? transaction.description : '' "
              @change-value="newTransaction.description = $event"
            ></MyInput>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right" v-if="type != 'categories'">
        <MyButton 
          class="action" 
          :label="'Сохранить'" 
          :type="'save'"
          @btn-click="btnSubmit"
        ></MyButton>
        <MyButton v-if="type == 'category' && category != null"
          class="action"
          :label="'Удалить'"
          :type="'cancel'"
          @btn-click="deleteCategory"
        ></MyButton>
        <MyButton v-else
          class="action"
          :label="'Отменить'"
          :type="'cancel'"
        ></MyButton>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from "vue";
import { MyButton, MyInput, MyItem, MySelect } from "@/components";
import { useStore } from "@/store/store.js";
import { storeToRefs } from "pinia";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  dialog: {
    type: Boolean,
    require: false,
  },
  category: {
    type: Object,
    require: false,
    default: null
  },
  transaction: {
    type: Object,
    require: false,
    default: null
  },
  tripId: {
    type: Number,
    require: false,
  }
});

const emit = defineEmits(['btnClose', 'changeToggle', 'promtVisible']);

const promtVisible = (item) => {
    emit('promtVisible', item);
};

const changeToggle = ([value, item]) => {
    emit('changeToggle', [value, item]);
};

const btnClose = () => {
    emit('btnClose')
};

const maximize = props.type == "transaction" ? true : false;

const store = useStore();
const { categories, transactions } = storeToRefs(store);

const currenciesOptions = store.getCurrenciesOptions();
const categoriesOptions = store.getCategoriesOptions();
const tripsOptions = store.getTripsOptions();

const btnEdit = () => {};

const newCategory = {
  id: null,
  name: null,
  description: null,
  imageURL: null,
}

const transactionId = (props.transaction != null) ? props.transaction.id : transactions.value.length + 1;
const transactionImage = (props.transaction != null) ? props.transaction.imageURL : 'https://avatars.mds.yandex.net/i?id=0e38338142f14770ce1e86098529106e_l-4907652-images-thumbs&n=13'
const newTransaction = {
  id: transactionId,
  name: null,
  cost: null,
  date: null,
  description: null,
  imageURL: transactionImage,
  tripId: null,
  categoryId: null,
  currencyId: null,
}

const btnSubmit = () => {
  if (props.type == 'category') {
    newCategory.id = (props.category != null) ? props.category.id : categories.value.length + 1;
    newCategory.imageURL = (props.category != null) ? props.category.imageURL : 'https://avatars.mds.yandex.net/i?id=0e38338142f14770ce1e86098529106e_l-4907652-images-thumbs&n=13'
    store.updateCategory(newCategory);
    console.log(newCategory);
  };
  if (props.type == 'transaction') {
    store.updateTransaction(newTransaction);
    console.log(newTransaction);
  };
};

const deleteCategory = () => {
  store.deleteCategoryById(props.category.id);
};

</script>

<style scoped>
.button {
  left: 12px;
  top: -50px;

  width: 40px;
  height: 40px;

  /*opacity: 70%;*/
}
.image {
  height: 185px;
  max-width: 150px;

  border-radius: 25px;
}
.img {
  width: 275px;

  border-radius: 25px;
}
.btn_ {
  left: 12px;
  bottom: 58px;

  width: 46px;
  height: 46px;

  /*opacity: 70%;*/
}
.content {
  width: 100%;
  min-width: 300px;
}
.input {
  width: 100%;
}
.card {
  border-radius: 16px;
}
.action {
  width: 100px;
}
.list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  margin-top: 15px;
  min-width: 300px;
  min-height: 500px;
}
.select {
    min-width: 120px;
}
.content_ {
    width: calc(100% - 130px);
}
</style>
