<template>
    <div>
        <h2>Usuario {{route.params.id}}</h2>
        <div>
            <!--Componente router, que me permite redireccionar al usuario a los paths definidos en el router-->
            <RouterLink to="home">Inicio</RouterLink> <br>
            <RouterLink to="profile">Mi Perfil</RouterLink> <br>
            <RouterLink to="posts">Mis Posts</RouterLink> <br>
            <!--Tambien le podemos pasar por la ruta completa-->
            <RouterLink to="/user/1">Usuario 1</RouterLink>
        </div>
        <!--Componente RouterView para observar las rutas hijas-->
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'

const route = useRoute()

</script>

<style scoped>

</style>