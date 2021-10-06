const xhr = new XMLHttpRequest();
xhr.open('GET', './data/characters.json');
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        let characters = xhr.response;
        console.log('Characters:', characters);
        console.log('Characters parsed:', JSON.parse(characters));
    }
}

xhr.send();
