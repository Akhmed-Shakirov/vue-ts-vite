<template>
    <select @change="change($event)" v-model="lang">
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
    </select>
    <Items :text="$t('text')" />
</template>

<script setup lang="ts">
import Items from './components/Items.vue';
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import axios from 'axios'

const { locale } = useI18n()
const lang = ref(locale.value)

const change = (event: any): string => locale.value = event.target.value

const users: Array<object> = reactive([])

axios.get('/users').then(res => users.values = res.data).catch(error => console.log(error))
</script>

<style lang="scss">
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.fo {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;

    .ba {
        width: 20px;
        height: 20px;
        background: red;
    }
}
</style>
