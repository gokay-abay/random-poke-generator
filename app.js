
displayPokemon()

function displayPokemon() {
    const apiData = {
        url: "https://pokeapi.co/api/v2/",
        type: 'pokemon',
        id: ''
    }
    
    apiData.id =  Math.floor((Math.random() * 700) + 1)
    
    console.log(apiData.id)
    
    // deconstruction
    const {url, type, id} = apiData
    
    const apiUrl = `${url}${type}/${id}` // Use back ticks to insert expression ALT + the button next to shift
    
    fetch(apiUrl) // This creates a promise meaning that the data is ready for use
        .then(data => {
            return data.json()
        }) 
        .then( pokemon => {
            generateHtml(pokemon)
        })
    
    const generateHtml = (data) => {
    
        const capitalizedName = data.name.substring(0, 1).toUpperCase() + data.name.substring(1);
        
        const html = `
            <div class="card"><p class="name">Yabani bir <span>${capitalizedName}</span> belirdi!</p>
                <img class="sprite" src="${data.sprites.front_default}">
            </div>
        `
        const pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html
    }
}

