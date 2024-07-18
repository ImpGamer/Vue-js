<template>
    <div>
        <h1>New</h1>
        <div>
            <form action="">
                <div>
                    <label>Nombre</label>
                    <input v-model="name" type="text">
                </div>
                <div>
                    <label>Precio</label>
                    <input v-model="price" type="text">
                </div>
                <div>
                    <label>Esta disponible</label>
                    <input v-model="isAvailable" type="checkbox">
                </div>
                <button type="button" @click="submit">Guardar Producto</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import useProduct from '../components/composables/useProducts.ts'

//Al momento que se instancie el componente, llamara a la funcion "useProduct()" el cual capturara los datos del producto
const {name,price,isAvailable,submit} = useProduct()

</script>

<style scoped>

</style>