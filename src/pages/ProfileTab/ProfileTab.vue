<template>
  <q-tab-panel class="column justify-center items-center q-my-md">
    <div class="column justify-center">
      <q-img
        class="image_"
        :src="user.imageURL"
      ></q-img>
      <MyButton 
        class="button" 
        :type="'edit'" 
        @btn-click="btnEdit"
      ></MyButton>
    </div>
    <div class="info">
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Имя'"
        :textValue="user.name"
        @change-value="newUser.name = $event"
      ></MyInput>
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Логин'"
        :textValue="user.login"
        @change-value="newUser.login = $event"
      ></MyInput>
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Пароль'"
        :textValue="user.password"
        @change-value="newUser.password = $event"
      ></MyInput>
    </div>
    <MyButton 
      class="q-mt-xl"
      :label="'Сохранить изменения'" 
      :type="'save'"
      @btn-click="btnSave"
    ></MyButton>
  </q-tab-panel>
</template>

<script setup>
import { MyButton, MyInput } from "@/components";
import { useStore } from "@/stores/store.js";
import { storeToRefs } from "pinia";

const store = useStore();
const { user } = storeToRefs(store);

const btnEdit = () => {};

const btnSave = () => {
  store.updateUser(newUser.login, newUser.password, newUser.name);
};

const newUser = {
  name: null,
  login: null,
  password: null,
};

</script>

<style scoped>
@import "./index.css";

</style>
