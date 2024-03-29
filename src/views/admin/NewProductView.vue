<script setup>
import Link from '@/components/Link.vue'

</script>

<template>
    <div>
        <Link to="products">
        Volver
        </Link>
        <h1 class="text-4xl font-black my-10">Nuevo producto</h1>
        <div class="flex justify-center bg-white shadow+">
            <div class="mt-10 p-10 w-full 2xl:w-2/4">
                <FormKit type="form" submit-label="Agregar producto">
                    <FormKit type="text" label="Nombre" name="name" placeholder="Nombre del producto"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del producto es obligatorio' }" />
                    <FormKit type="file" label="Imagen producto" name="image" validation="required"
                        :validation-messages="{ required: 'La imagen del producto es obligatoria' }" accept=".jpg" />
                    <FormKit type="select" label="Categoría" name="category" validation="required"
                        :validation-messages="{ required: 'La categoría del producto es obligatoria' }"
                        :options="[1, 2, 3]" />
                    <FormKit type="number" label="Precio" name="price" validation="required"
                        placeholder="Precio del producto"
                        :validation-messages="{ required: 'El precio del producto es obligatorio' }" min="0" />
                    <FormKit type="number" label="Disponibles" name="availability" validation="required"
                        placeholder="Cantidad disponible"
                        :validation-messages="{ required: 'La cantidad es obligatoria' }" min="0" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style scoped></style>