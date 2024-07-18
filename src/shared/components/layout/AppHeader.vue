<template>
    <div>
        <img :src="logo" alt="Logo" width="30">
        <div class="menu">
            <ul class="flex flex-row">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="about">About Us</RouterLink></li>
                <li><RouterLink to="new">New Page</RouterLink></li>
            </ul>
        </div>
        <div class="">
            <a @click="redirectToProfile">Cart: {{totalCart}}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
//El arroba '@' hace referencia al archivo src
import logo from '@/assets/logo.png'
import { computed, inject, ref } from 'vue';
import { useRouter } from 'vue-router';
const userId = ref<string>("")

function setRandomId() {userId.value = (Math.random()*10).toFixed(0)}

//Objeto que me permite moverme entre las enpoints de mi router
const router = useRouter()

//Captura del valor global con la llave declarada
const cart:any = inject('cart')
console.log(cart)

const totalCart = computed(() => cart.value.length)

const redirectToProfile = () => {
    setRandomId()
    //Ruta de redireccionamiento /user/{id}/profile
    //Tambien se puede hacer mediante strings
    router.push({
        name:'profile',
        params: {id: userId.value}
    })
}
</script>

<style scoped>

</style>