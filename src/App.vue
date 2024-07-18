<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SingleFile from './components/SingleFile.vue'
import Reactivitie from './components/Reactivitie.vue';
import Conditionals from './components/Conditionals.vue'
import RenderList from './components/render-list.vue'
import ComputedSample from './components/computed-sample.vue'
import Event_handling from './components/event_handling.vue'
import Watcher from './components/watchers_components.vue'
import ProductList from './components/products/ProductList.vue'
import type {Product} from './interfaces/Product'
import {provide, ref} from 'vue'
import { RouterView } from 'vue-router';
const carts = ref<Product[]>([])
//Creacion de un llave-valor que se podra compartir con todos aquellos hermanos de este componente
provide('cart',carts)

</script>

<template>
  <div class="flex flex-column w-100">
    <AppHeader/>
  <!-- <Event_handling></Event_handling> -->
  <!-- <Watcher></Watcher> -->
   <RouterView></RouterView> <!--Componente para visualizar cada router y ponerlo en su respectivo path o endpoint-->
  </div>
</template>

<style scoped>

</style>
