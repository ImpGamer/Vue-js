<template>
    <div>
        <p>{{message}}</p>
    </div>
    <div>
        <p>Productos almacenados: {{producto_en_carrito}}</p>

        <!--Capturar el evento de un click-->
        <button v-on:click="changeMessage">Presiona para cambiar</button><br>
        <!--Manera de simplificar el v-on-->
        <button @click="showAlert">Mostrar Card</button>
        <!--Capturar un evento de teclado especifico-->
        <input type="text" placeholder="Buscar" @keypress.enter="showAlert"/>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, reactive,ref} from 'vue'
interface Cart {
    category:string,
    description:string,
    currency:string,
    items:Product[]
}

interface Product {
    id:number,
    name:string,
    price:number
}


/*Un hook o evento de comportamiento por parte del componente, es una captura de evento dependiendo del contexto, en este
caso con el hook "onMounted" queremos realizar una accion cuando nuestro componente se encuentre montado en al arbol DOM de la pagina,
pero existen otros hooks para capturar eventos en situaciones especificas*/
onMounted(() => {
    console.log("Componenete cargado")
    cart.items = [
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

//Si el componente cambia o es eliminado ejecuta este hook
onUnmounted(() => {
    console.log("Componente destruido")
})

const cart:Cart = reactive<Cart>({
    category:"hosting",
    description:"Carrito de compras",
    currency: 'USD',
    items: []
})

let message = ref(cart.description)

const changeMessage = () => {
    message.value = 'Has presionado el boton'
}

const showAlert = () => {
    alert("La alerta a aparecido!")
}

const producto_en_carrito = computed(() => cart.items.length)

</script>

<style scoped>

</style>