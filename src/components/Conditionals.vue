<template>
    <!--Manera de colocar condicionales desde el HTML-->
    <input v-model ="description" type="text">
    <div v-if="age < 18"><p>Eres menor de edad</p></div>
    <div v-else-if="age === 18">
        <p>Acabas de cumplir la mayoria de edad</p>
        <br>
        <!--En caso de que el usuario tenga  18 anios y la descripcion tenga algo, se mostrara-->
        <p v-show="description.length > 0">{{description}}</p>
    </div>
    <div v-else><p>Eres mayor</p></div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

let description = ref<string>("")
const text = ref<string>("Hola chicos!")
const isVisible = ref<boolean>(false)
const age = ref<number>(18)
</script>

<style scoped>

</style>