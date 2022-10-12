/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector('.pokemons');

function renderPokemons(pokemons) {
	// uzupełnij tutaj
	pokemonsContainer.innerHTML = '';

	pokemons.forEach((pokemon) => {
		const card = document.createElement('div');
		card.id = pokemon.id;
		card.classList = pokemon.types;
		const img = document.createElement('img');
		img.setAttribute('src', pokemon.image);
		img.setAttribute('alt', `${pokemon.name} image`);

		const data = document.createElement('div');
		const name = document.createElement('h3');
		name.textContent = pokemon.name;
		const types = document.createElement('p');
		types.textContent = pokemon.types.toString().replaceAll(',', ', ');
		data.append(name, types);

		card.append(img, data);
		pokemonsContainer.append(card);
	});
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
	// uzupełnij tutaj
	// zwróć odfiltrowaną tablicę pokemonów
	const checked = document.querySelectorAll('input:checked');
	const pokemonTypes = [];
	checked.forEach((checkbox) => {
		pokemonTypes.push(checkbox.id);
	});
	pokemons = pokemons.filter((pokemon) => {
		for (type of pokemon.types) {
			if (pokemonTypes.includes(type)) {
				return true;
			}
		}
		return false;
	});
	const inputName = document.querySelector('#pokemon-name').value.toLowerCase();
	pokemons = pokemons.filter((pokemon) => {
		return pokemon.name.toLowerCase().includes(inputName);
	});
	return pokemons;
}

const inputName = document.querySelector('#pokemon-name');

function render() {
	// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
	renderPokemons(filterPokemons(pokemons));
}

inputName.addEventListener('keyup', render);
const checkboxes = document.querySelectorAll('#form-filters label');
checkboxes.forEach((checkbox) => checkbox.addEventListener('click', render));

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
