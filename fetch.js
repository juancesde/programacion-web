const pokemon = document.querySelector('#pokemon')

let renderPokemon= (image) =>{
    pokemon.setAttribute('src',image)
}

fetch('https://pokeapi.co/api/v2/pokemon/pikachu',{
    method:'GET',
    headers:{
        'Content-Type': 'application/json'
    }
})
.then((response) =>{
    return response.json()
})
.then((data)=>{
    debugger
    renderPokemon(data.sprites.back_default)
})