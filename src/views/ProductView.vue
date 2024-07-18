<template>
    <div>
        <!--Acceso a las variables de la URL-->
        <h1>Producto {{route.params.id}}</h1>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'

const route = useRoute()

</script>

<style scoped>

</style>