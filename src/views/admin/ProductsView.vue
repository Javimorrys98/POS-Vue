<script setup>
import Link from '@/components/Link.vue';
import { useProductStore } from '@/stores/productStore';
import Product from '@/components/Product.vue'

const productStore = useProductStore()
</script>

<template>
    <div>
        <Link to="new-product">
        Nuevo producto
        </Link>
        <h1 class="text-4xl font-black my-10">Productos</h1>
        <p v-if="productStore.noResults">No hay resultados</p>
        <ul v-else role="list" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
            <Product v-for="product in productStore.productsCollection" :key="product.id" :product="product"/>
        </ul>
    </div>
</template>

<style scoped></style>