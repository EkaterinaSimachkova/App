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
      :type="'placeholder'"
      :placeholder="'Введите пароль'"
      :label="'Пароль'"
      @change-value="user.password = $event"
    />
    <MyInput
      class="content"
      :type="'placeholder'"
      :placeholder="'Введите пароль еще раз'"
      :label="'Пароль'"
      @change-value="passwordChek = $event"
    />
    <q-space></q-space>
    <MyButton 
      :label="'Зарегестрироваться'" 
      @btn-click="btnReg"
    ></MyButton>
</template>

<script setup>
import { MyButton, MyInput } from "@/components";
import router from "@/router/index";
import { ref } from 'vue'

const btnReg = () => {
  if (user.password != passwordChek.value) {
    alert("Пароль не совпадает");
  } else {
    router.push(`/main`);
    console.log(user);
  };
};

const user = {
  login: null,
  password: null
};
const passwordChek = ref('');

</script>

<style scoped>
@import "./index.css";

</style>
