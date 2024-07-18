<script setup lang="ts">

//Logica de dicho componente
const saludo = "Hola a todos!"
</script>
<template>
    <div>
        <!--Creacion del HTML para el componente  -->
        <p>{{saludo}}</p>
    </div>
</template>
<style scoped>
/*Estilos aplicados al componente, se le agrega la etiqueta "scoped" para indicarle que los estilos solo se aplicara
aqui y no chocaran con ningun otro*/
p {
    font-size: large;
    font-weight: bold;
    color: gold;
}
</style>