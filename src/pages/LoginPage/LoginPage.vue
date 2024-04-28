<template>
    <MyInput
      class="content"
      :type="'placeholder'"
      :placeholder="'Ввведите логин'"
      :label="'Логин'"
      @change-value="user.login = $event"
    />
    <MyInput
      class="content"
      :type="'placeholder-password'"
      :placeholder="'Введите пароль'"
      :label="'Пароль'"
      @change-value="user.password = $event"
    />
    <q-space></q-space>
    <div class="column justify-center items-center">
      <MyButton
        class="button"
        :label="'Войти'"
        @btn-click="btnLogIn"
      ></MyButton>
      <MyButton
        :label="'Зарегестрироваться'"
        :type="'cancel'"
        @btn-click="btnReg"
      ></MyButton>
    </div>
</template>

<script setup>
import { MyButton, MyInput } from "@/components";
import router from "@/router/index";

const btnLogIn = () => {
  router.push(`/main`);
  console.log(user);
};

const btnReg = () => {
  router.push(`/register`);
};

const user = {
  login: null,
  password: null
};

</script>

<style scoped>
@import "./index.css";

</style>
