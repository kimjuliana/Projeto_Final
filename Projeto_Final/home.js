const jumbotron = document.querySelector('.jumbotron')


fetch(`http://localhost:3000/filmes`
    ).then((response) => {
        
        return response.json();
    })
    .then((filmes) => {
        console.log(filmes)
        let randomObjs = [];
        for(let i=0; i < 3; i++){
            let random = Math.floor(Math.random() * filmes.length)
            let randomObj = filmes[random];
            randomObjs.push(randomObj)
        }
        console.log(randomObjs)
        randomObjs.forEach(filme =>{
            console.log(filme)
            let box = document.createElement("div");
            box.setAttribute('class', 'col')
            box.innerHTML=`
                <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                    <h5 class="card-title"><strong>Titulo:</strong> ${filme.Nome}</h5>
                    <p class="card-genero">Gênero: ${filme.genero}</p>
                    <p class="card-ano">Ano: ${filme.Ano}</p>
                    <p class="card-direcao">Direção: ${filme.direcao}</p>
                    <p class="card-produtora">Produtora: ${filme.produtora}</p>
                    <img width="215px" src=" ${filme.imagem}">
                    </div>
                </div>
                </div>
                ` 
               
                jumbotron.appendChild(box)
        })
       
    })