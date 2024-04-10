<template>
  <q-btn label="Click me" color="primary" @click="dialog = true" />

  <q-dialog v-model="dialog" :maximized="maximize">
    <q-card class="card">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <MyButton :type="'close'"></MyButton>
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
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          ></q-img>
          <MyButton class="btn" :type="'edit'" @btn-click="btnEdit"></MyButton>
          <div class="q-gutter-y-lg">
            <MyInput
              class="input"
              :label="'Название'"
              @change-value="inputUpdate"
            ></MyInput>
            <MyInput
              class="input"
              :type="'textarea'"
              :label="'Описание'"
              @change-value="inputUpdate"
            ></MyInput>
          </div>
        </div>
      </q-card-section>

      <q-card-section v-if="type == 'transaction'" class="q-mx-sm">
        <div class="column justify-center q-mt-sm">
          <q-img
            class="image"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
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
              @change-value="inputUpdate"
            ></MyInput>
            <MyInput
              class="content"
              :label="'Сумма'"
              @change-value="inputUpdate"
            ></MyInput>
            <MyInput
              class="content"
              :label="'Дата'"
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
              @change-value="inputUpdate"
            ></MyInput>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <MyButton class="action" :label="'Сохранить'" :type="'save'"></MyButton>
        <MyButton
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
import { MyButton } from "@/components";
import MyInput from "@/components/MyInput.vue";
import MyItem from "@/components/MyItem.vue";
import MySelect from "@/components/MySelect.vue";

const props = defineProps({
  title: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});

const maximize = props.type == "transaction" ? true : false;

const dialog = ref(false);

const btnEdit = () => {};

const inputUpdate = (value) => {
  console.log(value);
};

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<style scoped>
.button {
  left: 12px;
  bottom: 50px;

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
.btn {
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
</style>
