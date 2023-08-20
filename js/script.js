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

let divCardPrincipal = document.getElementById("card-principal");
let divCards3 = document.getElementById("cards-3");
let divNovidadesGeral = document.getElementById("novidades-geral");
let divVerMais = document.getElementById("conteudo");

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

  console.log(divCards3);
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

      let btn = document.createElement("button");
      btn.setAttribute("class", "btn btn-secondary");
      btn.setAttribute("id", "https://api-rest-post-diegocandido.herokuapp.com/postagem/"+i);
      btn.textContent = "Ver Mais";

      espacamento.appendChild(divShadow);

      divShadow.appendChild(imagem);
      divShadow.appendChild(cardBody);

      cardBody.appendChild(h5);
      cardBody.appendChild(btn);

      if(i<3){
        console.log("teste");
        rowUm.appendChild(espacamento);
      }else{
        console.log("teste")
        rowDois.appendChild(espacamento);
      }

      btn.addEventListener("click", gerarInformacoes);
    }

    console.log("teste");
    divCards3.appendChild(rowUm);
    divCards3.appendChild(rowDois);
    
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

      let data = document.createElement("p");
      data.setAttribute("class", "card-text");
      data.textContent = resp[i].postDate;

      let btn = document.createElement("button");
      btn.setAttribute("class", "btn btn-secondary");
      btn.setAttribute("id", "https://api-rest-post-diegocandido.herokuapp.com/postagem/"+i);
      btn.textContent = "Ver Mais";

      btn.addEventListener("click", gerarInformacoes);

      row.appendChild(espacamentoBranco);
      row.appendChild(espacamento);

      espacamento.appendChild(card);
      
      card.appendChild(g0);

      g0.appendChild(colMd4);
      g0.appendChild(colMd8);

      colMd4.appendChild(imagem);

      colMd8.appendChild(cardBody);

      cardBody.appendChild(h5);

      cardBody.appendChild(data);
      cardBody.appendChild(btn);

      divGeral.appendChild(row);
    }
  })
  
}

async function gerarInformacoes(btn){
  let e = await btn;
  console.log(e.srcElement.id);
        divCardPrincipal.style.display = "none";
        divCards3.style.display = "none";
        divNovidadesGeral.style.display = "none";

        fetch(e.srcElement.id)
          .then(resp => resp.json())
          .then(resp =>{
            console.log(resp);
            /*
              <div id="div-img-mais" class="col-md-4">
                <img src="" alt="img-ver-mais" class="img-fluid rounded-start">
              </div>
              <div id="todos-detalhes" class="col-md-8">
                <div class="card-body">
                  <h1 id="titulo-mais" class="card-title"></h1>
                  <h10 id="descricao-mais" class="card-text"></h10>
                  <h6 id="data-mais" class="card-text"></h6>
                  <h6 id="criador-mais" class="card-text"></h6>
                </div>
              </div>
            */

            
            divVerMais.setAttribute("class", "row g-0 pt-5")

            let divImg = document.createElement("div");
            divImg.setAttribute("class", "col-md-3 pb-5 mb-5");

            let imgMais = document.createElement("img");
            imgMais.setAttribute("class", "img-fluid rounded-start");
            imgMais.src = "https://api-rest-post-diegocandido.herokuapp.com"+resp.thumbImage;

            let col1 = document.createElement("div");
            col1.setAttribute("class", "col-md-1");
            let col1Dois = document.createElement("div");
            col1Dois.setAttribute("class", "col-md-1");

            let divCardGeral = document.createElement("div");
            divCardGeral.setAttribute("class", "col-md-6");

            let divCard = document.createElement("div");
            divCard.setAttribute("class", "card-body");

            let titulo = document.createElement("h1");
            titulo.setAttribute("class", "card-title");
            titulo.textContent = resp.title;

            let descricao = document.createElement("h10");
            descricao.setAttribute("class", "card-text pb-5");
            descricao.textContent = resp.description;

            let data = document.createElement("h6");
            data.setAttribute("class", "card-text");
            data.textContent = "publidado em: "+resp.postDate;

            let autor = document.createElement("h6");
            autor.setAttribute("class", "card-text");
            autor.textContent = resp.profileName;

            let btnVoltar = document.createElement("button");
            btnVoltar.setAttribute("class", "btn btn-secondary");
            btnVoltar.textContent = "Voltar";

            divImg.appendChild(imgMais);

            divCardGeral.appendChild(divCard);
            divCard.appendChild(titulo);
            divCard.appendChild(descricao);
            divCard.appendChild(data);
            divCard.appendChild(autor);
            divCard.appendChild(btnVoltar);

            divVerMais.appendChild(col1);
            divVerMais.appendChild(divImg);
            divVerMais.appendChild(col1Dois);
            divVerMais.appendChild(divCardGeral);

            btnVoltar.onclick = (e) =>{
              divVerMais.innerHTML = "";
              divCardPrincipal.style.display = "block";
              divCards3.style.display = "block";
              divNovidadesGeral.style.display = "block";
            }
          })
}

gerarCardPrincipal();
gerarCards();
gerarImagemFixa();
gerarCardsNovidades();