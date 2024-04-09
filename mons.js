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
}

function toggleSelection(card) {
    card.classList.toggle('selected');

    const selectedPokemon = document.querySelectorAll('.pokemon-card.selected')
    if (selectedPokemon.length > 3) {
        card.classList.remove('selected');
    }
}
renderPokemon();

function showReserve() {
    const showReserve = document.querySelector('#Home');
    console.log("Show reserve function called.");
}
