import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppHeader from './shared/components/layout/AppHeader.vue'
import router from './router'

//Montamos el contenido de la App(Vue) en el div del index.html con id="app"
const app = createApp(App)
//Importacion de un componente de manera global, sin necesidad de importarlo en el App.vue
app.component('AppHeader',AppHeader)
//Declaracion para que la aplicacion utilice el router configurado
app.use(router)

app.mount("#app")
