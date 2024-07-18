<template>
    <div>
      <h1>Pagina Inicio</h1>
      <p>Bienvenido a la pagina de inicio o home!</p>
      <ProductList :products="products" @add-to-cart="getProduct"></ProductList>
    </div>
</template>

<script setup lang="ts">
import {inject, Ref} from 'vue'
import ProductList from '../components/products/ProductList.vue';
import Product from '/vue_desde_cero/src/interfaces/Product.ts'
import useProduct from '../components/composables/useProducts.ts'

const {products} = useProduct()

const carts = inject<Ref<Product[]>>('cart')

const getProduct = (product:Product) => {
  console.log(`Producto '${product.name}' agregado al carrito`)
  carts?.value.push(product)
}
</script>

<style scoped>

</style>