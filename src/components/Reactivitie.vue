<template>
    <div>
        <input v-model="message" type="text">
        <p>{{message}}</p>
        <input type="checkbox" v-model="isVisible">
        <button @click="incrementar()">Incrementar valor</button>
        <p>Total de clicks: {{total}}</p>

        <div>
            <p>Datos del usuario: </p>
            <p>Nombre: {{user.firstName}}</p>
            <p>Apellido: {{user.lastname}}</p>
            <p>Edad: {{user.age}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
interface User {
    firstName:string,
    lastname:string,
    age:number
    isAdult:boolean
}

//Un valor reactivo a comparacion de un valor de variable, es que no es necesario recargar el navegador
//? Para ver el nuevo valor ingresado
//Los valores reactivos permiten cualquier tipo de dato
const message = ref<String>("Valor reactivo. Interesante...")
const isVisible = ref<boolean>(true)
const total = ref(100)
//reactive() se usa para envolver de mejor manera los objetos en lugar de valores primitivos
const user = reactive<User>({
    firstName:'Juan',
    lastname:'Perez',
    age:20,
    isAdult:true
})

const actualizar = () => {
    console.log(user.firstName)
}

function incrementar() {
    return total.value++
}
</script>

<style scoped>

</style>