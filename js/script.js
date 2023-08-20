function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function toggleDivVisibility() {//faz a imagem fixada sumir
    const minhaDiv = document.getElementById("foto-fixada");

    if (window.innerWidth <= 960) { // Altere o valor para o tamanho de tela desejado
      minhaDiv.style.display = 'none'; // Oculta a div
    } else {
      minhaDiv.style.display = 'block'; // Mostra a div
    }
}
toggleDivVisibility();
window.addEventListener('resize', toggleDivVisibility);

function embaralharArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let urlGeral = "https://api-rest-post-diegocandido.herokuapp.com/postagens/";

function gerarCardPrincipal(){

  let imagem= document.getElementById("card-principal-img");
  let titulo = document.getElementById("card-titulo");
  let descricao = document.getElementById("card-descricao");
  let data = document.getElementById("card-data");
  let btn = document.getElementById("btn-card-principal");

  fetch(urlGeral)
  .then(resp => resp.json())
  .then(resp =>{
    console.log(resp);

    resp = embaralharArray(resp);
    console.log(resp[0]);
    let cardImagem = "https://api-rest-post-diegocandido.herokuapp.com"+resp[0].thumbImage;
    let cardTitulo = resp[0].title;
    let cardDescricao = resp[0].description;
    let cardData = resp[0].postDate;


    imagem.src = cardImagem;
    titulo.textContent = cardTitulo;
    descricao.textContent = cardDescricao;
    data.textContent = cardData;
    btn.setAttribute("id", "https://api-rest-post-diegocandido.herokuapp.com/postagem/"+0)
  });
}


function gerarCards(){

  let divGeral = document.getElementById("cards-3");

  console.log(divGeral);
  /*
      <div class="row mt-5 justify-content-center">
            <div class="col-md-4 col-10 mt-4">
              <div class="card shadow meu-card" style="width: 100%;">
                <img class="card-img-top minha-imagem-card" src="card-img" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title meu-titulo-card">Card title</h5>
                  <p class="card-text minha-descricao-card">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-secondary">Ver Mais</a>
                </div>
              </div>
            </div>
    */

  fetch(urlGeral)
  .then(resp => resp.json())
  .then(resp =>{
    resp = embaralharArray(resp);
    console.log(resp);

    let rowUm = document.createElement("div");
    rowUm.setAttribute("class", "row mt-5 justify-content-center");

    let rowDois = document.createElement("div");
    rowDois.setAttribute("class", "row mt-5 justify-content-center");
    
    for(let i=0; i<resp.length; i++){//for que cria card por card;

      let espacamento = document.createElement("div");
      espacamento.setAttribute("class", "col-md-4 col-10 mt-4");

      let divShadow = document.createElement("div");
      divShadow.setAttribute("class", "card shadow meu-card");

      let imagem = document.createElement("img");
      imagem.setAttribute("class", "card-img-top minha-imagem-card");
      imagem.src = "https://api-rest-post-diegocandido.herokuapp.com"+resp[i].thumbImage;

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");

      let h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title meu-titulo-card");
      h5.textContent = resp[i].title;

      let descricao = document.createElement("p");
      descricao.setAttribute("class", "card-text minha-descricao-card");
      descricao.textContent = resp[i].description;

      let btn = document.createElement("button");
      btn.setAttribute("class", "btn btn-secondary");
      btn.setAttribute("id", "https://api-rest-post-diegocandido.herokuapp.com/postagem/"+i);
      btn.textContent = "Ver Mais";

      espacamento.appendChild(divShadow);

      divShadow.appendChild(imagem);
      divShadow.appendChild(cardBody);

      cardBody.appendChild(h5);
      cardBody.appendChild(descricao);
      cardBody.appendChild(btn);

      if(i<3){
        console.log("teste");
        rowUm.appendChild(espacamento);
      }else{
        console.log("teste")
        rowDois.appendChild(espacamento);
      }
    }

    divGeral.appendChild(rowUm);
    divGeral.appendChild(rowDois);
  });

}

function gerarImagemFixa(){
  let imagemFixa = document.getElementById("em-pe");
  
  fetch(urlGeral)
    .then(resp => resp.json())
    .then(resp =>{

      resp = embaralharArray(resp);
      imagemFixa.src = "https://api-rest-post-diegocandido.herokuapp.com"+resp[0].thumbImage;
    })
}

function gerarCardsNovidades(){

  let divGeral = document.getElementById("cards-compridos");

  console.log(divGeral);

  fetch(urlGeral)
  .then(resp => resp.json())
  .then(resp =>{

    resp = embaralharArray(resp);
    for(let i=0; i<3; i++){

      let row = document.createElement("div");
      row.setAttribute("class", "row pt-5");

      let espacamentoBranco = document.createElement("div");
      espacamentoBranco.setAttribute("class", "col-1");

      let espacamento = document.createElement("div");
      espacamento.setAttribute("class", "col-lg-6 col-10");

      let card = document.createElement("div");
      card.setAttribute("class", "card mb-3 shadow cards-novidades");

      let g0 = document.createElement("div");
      g0.setAttribute("class", "row g-0");

      let colMd4 = document.createElement("div");
      colMd4.setAttribute("class", "col-md-4");

      let imagem = document.createElement("img");
      imagem.setAttribute("class", "img-fluid rounded-start imagens-novidade");
      imagem.src = "https://api-rest-post-diegocandido.herokuapp.com"+resp[i].thumbImage;

      let colMd8 = document.createElement("div");
      colMd8.setAttribute("class", "col-md-8");

      let cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");

      let h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title titulos-novidade");
      h5.textContent = resp[i].title;

      let descricao = document.createElement("p");
      descricao.setAttribute("class", "card-text descricoes-novidade");
      descricao.textContent = resp[i].description;

      let data = document.createElement("p");
      data.setAttribute("class", "card-text");
      data.textContent = resp[i].postDate;

      let btn = document.createElement("button");
      btn.setAttribute("class", "btn btn-secondary");
      btn.setAttribute("id", "https://api-rest-post-diegocandido.herokuapp.com/postagem/"+i);
      btn.textContent = "Ver Mais";

      row.appendChild(espacamentoBranco);
      row.appendChild(espacamento);

      espacamento.appendChild(card);
      
      card.appendChild(g0);

      g0.appendChild(colMd4);
      g0.appendChild(colMd8);

      colMd4.appendChild(imagem);

      colMd8.appendChild(cardBody);

      cardBody.appendChild(h5);
      cardBody.appendChild(descricao);
      cardBody.appendChild(data);
      cardBody.appendChild(btn);

      divGeral.appendChild(row);
    }
  })
  
}

gerarCardPrincipal();
gerarCards();
gerarImagemFixa();
gerarCardsNovidades();