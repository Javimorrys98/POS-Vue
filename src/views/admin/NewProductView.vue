<script setup>
import { reactive } from 'vue';
import Link from '@/components/Link.vue'
import useImage from '@/composables/useImage';
import { useProductStore } from '@/stores/productStore'

const { onFileChange, url, isImageUploaded } = useImage()
const productStore = useProductStore()

const formData = reactive({
    name: '',
    category: '',
    price: '',
    availability: '',
    image: ''
})

const submitHandler = data => {
    console.log(data);
}
</script>

<template>
    <div>
        <Link to="products">
        Volver
        </Link>
        <h1 class="text-4xl font-black my-10">Nuevo producto</h1>
        <div class="flex justify-center bg-white shadow+">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit type="form" submit-label="Agregar producto"
                    incomplete-message="No se pudo enviar. Revisa los campos." @submit="submitHandler"
                    :value="formData">
                    <FormKit type="text" label="Nombre" name="name" placeholder="Nombre del producto"
                        validation="required" v-model.trim="formData.name"
                        :validation-messages="{ required: 'El nombre del producto es obligatorio' }" />
                    <FormKit type="file" label="Imagen producto" name="image" validation="required"
                        :validation-messages="{ required: 'La imagen del producto es obligatoria' }" accept=".jpg"
                        @change="onFileChange" v-model.trim="formData.image" />
                    <div v-if="isImageUploaded">
                        <p class="font-black">Imagen producto:</p>
                        <img :src="url" alt="Nueva imagen producto" class="w-32" />
                    </div>
                    <FormKit type="select" label="Categoría" name="category" validation="required"
                        :validation-messages="{ required: 'La categoría del producto es obligatoria' }"
                        :options="[1, 2, 3]" v-model.number="formData.category" />
                    <FormKit type="number" label="Precio" name="price" validation="required"
                        placeholder="Precio del producto" v-model.number="formData.price"
                        :validation-messages="{ required: 'El precio del producto es obligatorio' }" min="0" />
                    <FormKit type="number" label="Disponibles" name="availability" validation="required"
                        placeholder="Cantidad disponible" v-model.number="formData.availability"
                        :validation-messages="{ required: 'La cantidad es obligatoria' }" min="0" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style scoped></style>