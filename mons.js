const pokemonData =[
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Charmander" },
    { id: 3, name: "Squirtle" },
    { id: 4, name: "Pikachu" },
    { id: 5, name: "Jigglypuff" },
    { id: 6, name: "Meowth" }
];

function renderPokemon(){
    const select = document.querySelector('.selected-pokemons');
    select.innerHTML = '';

    pokemonData.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('select-card');
        card.textContent = pokemon.name;
        card.addEventListener('click', () => toggleSelection(card));
        container.appendChild(card);
    });


// select / count 0-3
let count = 0;
const counterEl = document.getElementById("counter");

//update counter display
function updateCounter(){
    counterEl.textContent = count;
}

function toggleSelection(card) {
    card.classList.toggle('selected');

    const selectedPokemon = document.querySelectorAll('.pokemon-card.selected');
    if (selectedPokemon.length > 3) {
        card.classList.remove('selected');
        alert('You can only select up to 3 Pokemon!');
        return;
    }
    count = selectedPokemon.length;
    updateCounter();
}

function renderPokemon(){
    const pokemonCards = document.querySelectorAll('.pokemon-card');
    pokemonCards.forEach(card => {
        card.addEventListener('click', () => toggleSelection(card));
    })
}
// Counter buttons functionality
document.getElementById("increaseBtn").addEventListener('click', function() {
    count++;
    updateCounter();
});

document.getElementById("decreaseBtn").addEventListener('click', function() {
    if (count > 0) count--; // Ensure counter doesn't go below 0
    updateCounter();
});

document.getElementById("resetBtn").addEventListener('click', function() {
    count = 0;
    updateCounter();

    // Deselect all Pokémon cards
    const selectedPokemon = document.querySelectorAll('.pokemon-card.selected');
    selectedPokemon.forEach(card => card.classList.remove('selected'));
});

// Call render function to initialize Pokémon cards
renderPokemon();

}

/*function showReserve() {
    const showReserve = document.querySelector('#Home');
    console.log("Show reserve function called.");
}
const cartegories = [...new Set(product.map((item)=>
{return item}))]
let i=0;*/

// search
//use the API to be able to click by using the id 