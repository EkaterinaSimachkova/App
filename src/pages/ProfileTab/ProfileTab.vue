<template>
  <q-tab-panel class="column justify-center items-center q-my-md">
    <div class="column justify-center">
      <q-img
        class="image"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      ></q-img>
      <MyButton class="button" :type="'edit'" @btn-click="btnEdit"></MyButton>
    </div>
    <div class="info">
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Имя'"
        @change-value="inputUpdate"
      ></MyInput>
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Логин'"
        @change-value="inputUpdate"
      ></MyInput>
      <MyInput
        class="content"
        :type="'filled'"
        :label="'Пароль'"
        @change-value="inputUpdate"
      ></MyInput>
    </div>
  </q-tab-panel>
</template>

<script setup>
import { MyButton, MyInput } from "@/components";

const btnEdit = () => {};

const inputUpdate = (value) => {
  console.log(value);
};
</script>

<style scoped>
.button {
    left: 12px;
    top: -58px;
    
    width: 46px;
    height: 46px;
    
    /*opacity: 70%;*/
}
.image {
    width: 175px;
    height: 175px;
    
    border-radius: 25px;
}
.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;
    
    width: 80%;
}
.content {
    width: 100%;
    margin-bottom: 0px;
}
</style>
