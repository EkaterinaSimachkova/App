<template>
    <q-layout class="column justify-center items-center">
        <q-page-container class="page">
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
        </q-page-container>
    </q-layout>
</template>

<script setup>
    import MyInput from '@/components/MyInput.vue';
    import MyButton from '@/components/MyButton.vue';
    import router from '@/router/router';

    const btnReg = () => {
        router.push(`/main`)
    }

    const inputUpdate = (value) => {
        console.log(value)
    }
</script>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;

    width: 90%;
}

.content {
    width: 100%;
}
</style>