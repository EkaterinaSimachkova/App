<template>
  <q-tab-panel class="column justify-center items-center q-my-md">
    <div class="column justify-center">
      <q-img
        class="image_"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      ></q-img>
      <MyButton class="button" :type="'edit'" @btn-click="btnEdit"></MyButton>
    </div>
    <div class="info">
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Имя'"
        @change-value="user.name = $event"
      ></MyInput>
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Логин'"
        @change-value="user.login = $event"
      ></MyInput>
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Пароль'"
        @change-value="user.password = $event"
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

const btnEdit = () => {};

const btnSave = () => {
  console.log(user);
};

const user = {
  name: null,
  login: null,
  password: null,
};

</script>

<style scoped>
@import "./index.css";

</style>
