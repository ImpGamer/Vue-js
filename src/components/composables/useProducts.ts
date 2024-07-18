import { ref } from "vue"
import Product from '@/interfaces/Product.ts'
import {useRouter} from 'vue-router'

const products = ref<Product[]>(
    [
        {
          id:1,
          name:"Curso Vue.js",
          price:200,
          isAvailable:true
        },
        {
          id:2,
          name:"Curso HTML5",
          price:130,
          isAvailable: true
        },
        {
          id:3,
          name:"Curso CSS",
          price:100,
          isAvailable: false
        }
      ]
)

/*Los composable functions o funciones reutilizables, sirven para reutilizar informacion o aspectos
para un componente, ya sea usando un Trigger para llamar a la funcion o en situaciones especificas*/
const useProduct = () => {
    const router = useRouter()

    const name = ref<string>("")
    const price = ref<number>(0)
    const isAvailable = ref<boolean>(true)

    const submit = () => {
        const data = {
            id: products.value.length+1,
            name: name.value,
            price: price.value,
            isAvailable: isAvailable.value,
            products: products.value
        }

        products.value.push(data)
        console.log(data)
        router.push('/')
    }

    return {
        products,
        name,
        price,
        isAvailable,
        submit
    }
}

export default useProduct