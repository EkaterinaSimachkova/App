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
import router from "@/router/router";

const btnLogIn = () => {
  router.push(`/main`);
};

const btnReg = () => {
  router.push(`/register`);
};

const inputUpdate = (value) => {
  console.log(value);
};
</script>

<style scoped>
.content {
  width: 100%;
}

.button {
  width: 100%;
  margin-bottom: 15px;
}
</style>
