<template>
  <q-layout>
    <q-page-container class="my">
      <MyInput
        :type="'placeholder'"
        :placeholder="'placeholder'"
        :label="'label'"
      ></MyInput>
      <MyInput :label="'label'"></MyInput>
      <MyInput :type="'filled'" :label="'label'"></MyInput>
      <MyInput :type="'borderless'" :label="'label'"></MyInput>
      <MyInput :type="'textarea'" :label="'label'"></MyInput>

      <div>
        <MyButton :type="'create'" :label="'create'"></MyButton>
        <MyButton :type="'edit'"></MyButton>
        <MyButton :type="'close-bg'"></MyButton>
        <MyButton :type="'arrow'"></MyButton>
        <MyButton :label="'default'"></MyButton>
        <MyButton :icon-name="'edit'" :label="'Label'"></MyButton>
        <MyButton :label="'border'" :type="'cancel'"></MyButton>
      </div>

      <MySearch></MySearch>
      <MyToggle></MyToggle>
      <MySelect :options="options"></MySelect>
      <MyTabs></MyTabs>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { MyInput, MySelect, MyButton, MySearch, MyToggle, MyTabs } from "@/components";

const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>

<style scoped>
.my {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
