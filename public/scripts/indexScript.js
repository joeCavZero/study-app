const searchButton = document.getElementById('search-button');
const randomButton = document.getElementById('random-button');

const inputText = document.getElementById('input-text');

if (searchButton && inputText){
    searchButton.addEventListener('click', ()=>{
        let value = inputText.value;
        value = parseInt(value);
        
        if (value !== NaN && value > 0) {
            window.location.href = `/q/${value}`;
        }
    })
}

if( randomButton ){
    randomButton.addEventListener('click' , ()=>{
        window.location.href = '/random';
    })
}

