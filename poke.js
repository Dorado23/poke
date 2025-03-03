       const MAX_POKEMON = 151;
       const listWrapper = document.querySelector(".list-wrapper");
       const searchInput = document.querySelector("#search-input");
       const numberFilter = document.querySelector("#number");
       const nameFilter = document.querySelector("#name");
       const notFoundMessage = document.querySelector("#not-found-message");

       let allPokemons = [];

       fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
       .then((response)=> response.json())
       .then((data) => {
        allPokemons = data.results;
        displayPokemons(allPokemons);
        //console.log(data);
        console.log(data.results);
        //console.log(data.results[0]);
       //console.log(data.results[0].name);
        //console.log(data.results[0].url);
       });

       async function fetchPokemonDataBeforeRedirect(id) {
        try{
            const [pokemon, pokemonSpecies] = await Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res)=> 
                res.json()
        ),

            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res)=> 
                res.json()
            ),
        ])

        return true
    }catch (error) {
        console.error("Failed to fetch Pokemon data before redirect");
    }
        }
       
    function displayPokemons(pokemon) {
        listWrapper.innerHTML = "";

        pokemon.forEach((pokemon) => {
            const pokemonID = pokemon.url.split("/")[6];
            const listItem = document.createElement("div");
            listItem.className = "list-item";
            listItem.innerHTML = `
            <div class="number-wrap">
              <p class="captian-fonts">#${pokemonID}</p>
            </div>

            <div class="img-wrap">
            <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt="${pokemon.name}" />
            </div>

            <div class="name-wrap">
            <p class="body3-fonts">#${pokemon.name}</p>
            </div>
            `;

            listItem.addEventListener("click", async () => {
                const success = await fetchPokemonDataBeforeRedirect(pokemonID);
                if (success){
                    window.location.href = `./detail.html?id=$
                    {pokemonID}`;
                }

            });
            listWrapper.appendChild(listItem);
        });
    }
    
    /*let count = 0;
    const counterEl = document.getElementById("counter");
    document.getElementById("increaseBtn").addEventListener('click', function() {
        count++;
        counterEl.textContent = count; // Update counter display
    });

    //Decrease by 1
    document.getElementById("decreaseBtn").addEventListener('click', function() {
    count--;
    counterEl.textContent = count; // Update counter display( this makes it count not on console. it comes alive!)
    });

    //Reset
    document.getElementById("resetBtn").addEventListener('click', function() {
    count = 0;
    counterEl.textContent = count;
    });*/

   


    searchInput.addEventListener("keyup", handleSearch);

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        let filteredPokemons;

        if(numberFilter.checked) {
            filteredPokemons = allPokemons.filter((pokemon) => {
                const pokemonID = pokemon.url.split("/")[6];
                return pokemonID.startsWith(searchTerm);
            });
        
        } else if (nameFilter.checked) {
            filteredPokemons = allPokemons.filter((pokemon) => {
            return pokemon.name.toLowerCase().startsWith(searchTerm);
            });


        } else {
            filteredPokemons = allPokemons;
        }

        displayPokemons(filteredPokemons);

        if(filteredPokemons.length === 0){
            notFoundMessage.style.display = "block";
        } else {
            notFoundMessage.style.display = "none";
        }
    }
        //const closeButton = document.querySelector(".search-close-icon");
        //closeButton.addEventListener("click", clearSearch);
        
        function clearSearch() {
            searchInput.value = "";
            displayPokemons(allPokemons);
            notFoundMessage.style.display = none;
        }
    
    //changes between pages
    function showReserve(){
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Reserve').style.display = 'block';
    }
    
    function showHome(){
        document.getElementById('Reserve').style.display = 'none';
        document.getElementById('Home').style.display = 'block';

    }
    
    