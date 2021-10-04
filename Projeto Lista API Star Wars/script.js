const nomes = ["João", "Maria", "Ana", "José", "Marcos", "Cristina"];
let pessoas = [];

const listaNomes = document.getElementById("nomes");
const inputNome = document.getElementById("nome");
const btInserir = document.getElementById("btInserir");
const btNext = document.getElementById("btNext");
const btBack = document.getElementById("btBack");
let pageNum = 1;
let max;

function carregarPessoas() {
  fetch("https://swapi.dev/api/people/?page="+`${pageNum}`)
    .then(response => response.json())
    .then(dados => {
      pessoas = dados.results;
      criarListaPessoas();
    })
    .catch(e => {
      console.log("Erro", e);
    });
}

function maxPage() {
  fetch("https://swapi.dev/api/people/?page="+`${pageNum}`)
    .then(response => response.json())
    .then(dados => {
      max = dados.count;
    });
  max = Math.ceil(max/10);
}

function nextPage() {
  maxPage();
  pageNum++;
  
  if (pageNum > max) {
    pageNum = max;
    alert("Não existe uma próxima página!");
  }

  fetch("https://swapi.dev/api/people/?page="+`${pageNum}`)
    .then(response => response.json())
    .then(dados => {
      pessoas = dados.results;
      criarListaPessoas();
    })
    .catch(e => {
      console.log("Erro", e);
    });
}

function backPage() {
  pageNum--;
  
  if (pageNum < 1) {
    pageNum = 1;
    alert("Não existe uma página anterior!");
  }

  fetch("https://swapi.dev/api/people/?page="+`${pageNum}`)
    .then(response => response.json())
    .then(dados => {
      pessoas = dados.results;
      criarListaPessoas();
    })
    .catch(e => {
      console.log("Erro", e);
    });
}

function criarListaPessoas() {
  listaNomes.type = "I";
  listaNomes.innerHTML = "";
  pessoas.forEach(pessoa => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${pessoa.name} - ${pessoa.gender}`);
    newLi.appendChild(newText);
    listaNomes.appendChild(newLi);
  });
}

function inserirNome() {
  let nome = inputNome.value.trim();
  if (!nome) {
    alert("Digite um nome!");
    return;
  }
  nomes.push(nome);
  inputNome.value = "";
  inputNome.focus();
  criarLista2();
}

function criarLista1() {
  listaNomes.type = "A";
  listaNomes.innerHTML = "";
  nomes.forEach(nome => {
    listaNomes.innerHTML += `<li>${nome}</li>`;
  });
}

function criarLista2() {
  listaNomes.type = "I";
  listaNomes.innerHTML = "";
  nomes.forEach(nome => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${nome}!`);
    newLi.appendChild(newText);
    listaNomes.appendChild(newLi);
  });
}

btInserir.onclick=inserirNome;
btNext.onclick=nextPage;
btBack.onclick=backPage;
carregarPessoas();