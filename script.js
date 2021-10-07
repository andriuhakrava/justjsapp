let characters;
const tableView = 'TABLEVIEW';
const preView = 'PREVIEW';

function fetchCharacters() {
    fetch('./data/characters.json')
        .then(response => response.json())
        .then(data => characters = data);
}

function displayCharacters(characters, viewType) {
    const characterList = document.querySelector('.character__list');
    characterList.classList.add(`character__list--${viewType === tableView ? 'table' : 'preview'}`);
}

document.addEventListener('DOMContentLoaded', fetchCharacters);

displayCharacters(characters, tableView);
