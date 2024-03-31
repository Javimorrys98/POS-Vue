import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useFirestore } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'

export const useProductStore = defineStore('products', () => {
    const db = useFirestore()
    const categories = [
        { id: 1, name: 'Sudaderas' },
        { id: 2, name: 'Zapatillas' },
        { id: 3, name: 'Gafas' },
    ]
    async function createProduct(product) {
        await addDoc(collection(db, 'products'), product)
    }

    const categoryOptions = computed(() => {
        const options = [
            {
                label: 'Seleccione una categoría',
                value: '',
                attrs: { disabled: true },
            },
            ...categories.map((c) => ({ label: c.name, value: c.id })),
        ]
        return options
    })

    return {
        categoryOptions,
        createProduct,
    }
})
