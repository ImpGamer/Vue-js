<template>
    <div>
        <p>Mensaje: {{message}}</p>
        <input type="text" v-model="message"/><br>
        <span style="color: red">{{error}}</span>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'

const message = ref<string>("Hola a todos!")
const error = ref<string>("")

/*Como primer parametro de la funcion, pasaremos el valor que estaremos visualizando en todo momento, y luego llamaremos
a un callback o funcion, donde la funcion recibira como parametro en todo momento el nuevo valor recibido */
watch(message, m => {
    //Valida si el string es blanco o vacio
    if(m == "" || m.trim() == '') {
        error.value = "Este campo es requerido"
    } else {
        if(m.length > 15) {
            error.value = "El mensaje no debe ser superior a 15 caracteres"
        } else {
            error.value = ""
        }
    }
})


</script>

<style scoped>

</style>