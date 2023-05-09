<template>
    <section>
        <h2>Bienvenido a la PokeApp</h2>
        <p>Lista de pokemones</p>
        <div>
            <p v-for="pokemon in pokemones" :key="pokemon.id">{{ pokemon.name }}</p>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { obtenerPokemones } from '../services/pokemon.service'
const pokemones = ref([])

onMounted(async () => {
    pokemones.value = await obtenerPokemones()
})
</script>