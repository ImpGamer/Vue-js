<template>
    <div>
        <h2>Perfil del Usuario</h2>
        <ul>
            <li v-for="item in cart" :key="item.id">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Product from '/vue_desde_cero/src/interfaces/Product.ts'
import {inject,Ref} from 'vue'

const cart = inject<Ref<Product[]>>('cart')

</script>

<style scoped>

</style>