const pokemon = document.querySelector('#pokemon')

function renderPokemon(image) {
    pokemon.setAttribute('src', image)
}

fetch('pokemon.json', {

})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        //debugger
        renderPokemon(data[0].image)
    })
/*
fetch('url',{
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
    }
    body: JSON.stringify({
        name:'juan',
        age:29,
    })
})
.then
.catch
*/