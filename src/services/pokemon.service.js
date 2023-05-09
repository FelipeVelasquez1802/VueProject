const URL_BASE = 'https://jsonplaceholder.typicode.com'

export async function obtenerPokemones() {
try {
    const respuestaJson = await fetch(`${URL_BASE}/users`);
    const respuesta = await  respuestaJson.json()
    return respuesta
} catch (error) {
    throw new Error(error)
}
}