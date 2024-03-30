import { defineStore } from "pinia";

export const useProductStore = defineStore('products', () => {
    async function createProduct(product) {
        console.log(product);
    }

    return {
        createProduct,
    }
}) 