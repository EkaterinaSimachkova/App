<template>
    <q-layout>
        <q-page-container>
            <div class="my-image">
                <div class="row items-center q-pa-md">
                    <q-space />
                    <MyButton :type="'close-bg'"></MyButton>
                </div>

                <MyButton class="button" :type="'edit'" @btn-click="btnEdit"></MyButton>
            </div>

            <div class="my-layout">
                <div class="q-mx-lg q-pt-xl">
                    <div class="q-gutter-y-lg">
                        <MyInput class="input" :label="'Название'" @change-value="inputUpdate"></MyInput>
                        <MyInput class="input" :label="'Бюджет'" @change-value="inputUpdate"></MyInput>
                        <div class="row no-wrap q-gutter-x-sm">
                            <MyInput class="input" :label="'Дата начала'" @change-value="inputUpdate"></MyInput>
                            <MyInput class="input" :label="'Дата окончания'" @change-value="inputUpdate"></MyInput>
                        </div>
                        <MyInput class="input" :label="'Лимит на день'" @change-value="inputUpdate"></MyInput>
                        <MyInput class="input" :type="'textarea'" :label="'Описание'" @change-value="inputUpdate"></MyInput>
                    </div>

                    <div class="row justify-end items-end q-mt-lg q-gutter-sm">
                        <MyButton :icon-name="'edit'" :label="'Управлять категориями'"></MyButton>
                        <MyButton :label="'Сохранить'"></MyButton>
                    </div>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import MyButton from '@/components/MyButton.vue';
import MyInput from '@/components/MyInput.vue';

const props = defineProps({
    title: {
        type: String,
        require: true
    },
})

const btnEdit = () => {
    
}

</script>

<style scoped>
.button {
    left: 12px;
    top: 90px;

    width: 46px;
    height: 46px;

    /*opacity: 70%;*/

}
.my-layout {
    position: absolute;
    top: 225px;
    background-color: white;
    border-radius: 50px 50px 0 0;
}
.my-image {
    height: 275px; 

    background-image: url("https://cdn.quasar.dev/img/parallax2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size:  cover;
}
</style> 