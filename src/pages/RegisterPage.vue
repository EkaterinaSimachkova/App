<template>
    <MyInput
      class="content"
      :type="'placeholder'"
      :placeholder="'Ввведите логин'"
      :label="'Логин'"
      @change-value="inputUpdate"
    />
    <MyInput
      class="content"
      :type="'placeholder'"
      :placeholder="'Введите пароль'"
      :label="'Пароль'"
      @change-value="inputUpdate"
    />
    <MyInput
      class="content"
      :type="'placeholder'"
      :placeholder="'Введите пароль еще раз'"
      :label="'Пароль'"
      @change-value="inputUpdate"
    />
    <q-space></q-space>
    <MyButton :label="'Зарегестрироваться'" @btn-click="btnReg"></MyButton>
</template>

<script setup>
import { MyButton, MyInput } from "@/components";
import router from "@/router/router";

const btnReg = () => {
  router.push(`/main`);
};

const inputUpdate = (value) => {
  console.log(value);
};
</script>

<style scoped>
.content {
  width: 100%;
}
</style>
