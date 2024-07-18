<template>
    <div>
        <p>{{message}}</p>
    </div>
    <div>
        <h4>Precio Total: {{totalPrice}} {{cart.currency}}</h4>
        <p>Productos almacenados: {{producto_en_carrito}}</p>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive} from 'vue'

const cart = reactive({
    category:"hosting",
    description:"Carrito de compras",
    currency: 'USD',
    items: [
        {
            id: 1,
            name: 'basic',
            price: 20,
        },
        {
            id: 2,
            name: 'medium',
            price: 40,
        },
        {
            id: 3,
            name: 'pro',
            price: 60,
        }
    ]
})

let message = computed(() => {
    return cart.description
})

/*Un valor computable, permite que cada vez que se vuelve a renderizar un componente o toda la pagina, este valor,
no tiene que volver a calcularse, se almacena en la cache, para que esta operacion o la logica que se realice solamente
se ejecute una vez (si el valor no ha cambiado) y despues capturarla de la cache, mejorando el performance*/
const totalPrice = computed(() => {
    return cart.items.reduce((accumulator,current) => accumulator + current.price,0)
})
const producto_en_carrito = computed(() => cart.items.length)

</script>

<style scoped>

</style>