const movies = document.querySelector('#movie');
const container = document.querySelector('.movies');
const button = document.querySelector('.btn-search-movie')


button.addEventListener('click', (evento) =>{
    evento.preventDefault();
    container.innerHTML =""

    fetch(`http://www.omdbapi.com/?s=${movies.value}&apikey=db677b8f`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.Search.forEach(movie =>{
            const card = document.createElement('div');
            card.setAttribute('class', 'box');
            card.setAttribute('data-id', movie.imdbID);
            container.appendChild(card);
            
            
            const imagem = document.createElement('img');
            imagem.setAttribute('src', movie.Poster);
            card.appendChild(imagem);

            const cardInfo = document.createElement('div');
            cardInfo.setAttribute('class', 'box-divider');
            card.appendChild(cardInfo);

            const paragrafo = document.createElement('p');
            cardInfo.appendChild(paragrafo);
            
            const titulo = document.createElement('span');
            titulo.textContent = movie.Title + " ";
            paragrafo.appendChild(titulo);

            const ano = document.createElement('span');
            ano.textContent = '(' + movie.Year +')';
            paragrafo.appendChild(ano);

            const tipo = document.createElement('p');
            tipo.textContent = movie.Type;
            cardInfo.appendChild(tipo);


        })
        console.log(data);
    })
    .catch((erro) => {
        console.log(erro)
    })
    })