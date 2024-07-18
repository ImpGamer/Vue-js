<template>
    <div>
        <h2>Usuarios:</h2>
        <ul>
            <!--Iterar los elementos de una lista con un bucle-->
            <li v-for="user in users" :key="user">
                {{user.firstname}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface User {
    firstname:undefined,
    lastname:string,
    age:number
}
const names = ref<string[]>(["Axel","Lorenzo","Emiliano","Francisco","Martinez"])

const users = ref<User[]>([
    {
        firstname:"David",
        lastname:"Romero",
        age:18
    },
    {
        firstname:"Pedro",
        lastname:"Matias",
        age:33
    },
    {
        firstname:"Axel",
        lastname:"Martinez",
        age:24
    }
])

</script>

<style scoped>

</style>