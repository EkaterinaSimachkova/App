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
          <MyItem :type="'withToggle'"></MyItem>
          <MyItem :type="'withToggle'"></MyItem>
          <MyItem :type="'withToggle'"></MyItem>
        </q-list>
      </q-card-section>

      <q-card-section v-if="type == 'category'" class="q-mx-md">
        <div class="column justify-center q-my-md">
          <q-img
            class="img"
            :src="(category != null) ? category.imageURL : 'https://cdn.quasar.dev/img/parallax2.jpg' "
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
              @change-value="inputUpdate"
            ></MyInput>
            <MyInput
              class="input"
              :type="'textarea'"
              :label="'Описание'"
              :text-value="(category != null) ? category.description : '' "
              @change-value="inputUpdate"
            ></MyInput>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-if="type == 'transaction'" class="q-mx-sm">
        <div class="column justify-center q-mt-sm">
          <q-img
            class="image"
            :src="(transaction != null) ? transaction.imageURL : 'https://cdn.quasar.dev/img/parallax2.jpg' "
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
              @change-value="inputUpdate"
            ></MyInput>
            <div class="row q-gutter-x-xs">
              <MyInput
                class="content_"
                :label="'Сумма'"
                :text-value="(transaction != null) ? transaction.cost : '' "
                @change-value="inputUpdate"
              ></MyInput>
              <MySelect
                class="select"
                :options="options"
                :label="'Валюта'"
                @change-value="selectUpdate"
              ></MySelect>
            </div>
            <MyInput
              class="content"
              :label="'Дата'"
              :text-value="(transaction != null) ? transaction.date : '' "
              @change-value="inputUpdate"
            ></MyInput>
            <MySelect
              class="content"
              :options="options"
              :label="'Путешествие'"
            ></MySelect>
            <MySelect
              class="content"
              :options="options"
              :label="'Категория'"
            ></MySelect>
            <MyInput
              class="content"
              :type="'textarea'"
              :label="'Описание'"
              :text-value="(transaction != null) ? transaction.description : '' "
              @change-value="inputUpdate"
            ></MyInput>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <MyButton 
          class="action" 
          :label="'Сохранить'" 
          :type="'save'"
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
import { useStore } from "@/stores/store.js";

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
});

const emit = defineEmits(['btnClose']);

const btnClose = () => {
    emit('btnClose')
};

const maximize = props.type == "transaction" ? true : false;

const btnEdit = () => {};

const inputUpdate = (value) => {
  console.log(value);
};

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const store = useStore();

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
