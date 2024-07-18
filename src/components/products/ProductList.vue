<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                <div>{{product.name}}</div>
                <div>Precio: ${{product.price}}</div>
                <button @click="() => addToCart(product)">Agregar al Carrito</button>
            </li>
            <br>
            <li v-for="product in products" :key="product.id">
                <ProductListener>
                    <!--A comparacion de una insercion con un template, esque con un template se debe especificar a que
                    slot se agregara el elemento, en caso que no se haga, el elemento quedara en el arbol DOM pero no lo renderizara
                    o mostrara al usuario si no se especifica que sera en el #default-->
                    <template #title><div>{{product.name}}</div></template>
                    <template #price><div>{{product.price}}</div></template>
                    <!--Almacena este elemento dentro de los button container, al no tener especificado,
                    busca el primer <slot></slot> y lo agrega en ese elemento-->
                    <!--Tendra la clase "disabled" en caso que la propiedad (isAvailable) sea false-->
                    <button :class="{disabled: !product.isAvailable}" @click="() => addToCart(product)">Agregar al Carrito</button>
                </ProductListener>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {defineProps,toRef} from 'vue'
import type {Product} from '../../interfaces/Product'
import ProductListener from './ProductListener.vue';

interface Props {
    products: Product[],
}

//Definir propiedades del componente, en este caso sera un arreglo de Productos
const props = defineProps<Props>()
//Declaracion y conversion reactiva de las propiedades, y declaracion de la propiedad como "products"
const products = toRef(props,"products")
//Definir funciones de emision entre componentes
const emit = defineEmits<{
    //Declaramos que una funcion emisora, capturara un evento y pedira como parametro un objeto Producto
    (e: 'addToCart', product:Product):void
    (e: 'removeToCart', id:number):void
}>()

//Creacion de la funcion, que capturar y mandara el objeto al otro componente
const addToCart = (producto:Product) => {
    //Evento escuchado por un componente especifico, donde le mandaremos un dato, en este caso un objeto Producto
    emit('addToCart',producto)
}
</script>

<style scoped>
.disabled {
  background: red;
}
</style>