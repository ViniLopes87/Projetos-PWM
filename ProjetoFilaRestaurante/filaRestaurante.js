const inserirNome = document.getElementById("inputName"); 
const colorCliente = document.getElementById("inputColor"); 
const inserirFila = document.getElementById("inputFila"); 
const retirarFila = document.getElementById("outputFila");
const nomes = document.getElementById("nomes");
const filaCliente = [];
let cont = 1;

function criarLista() {
    if(inserirNome.value === ""){
        alert("Você deve inserir um nome!");
    }
    else if(inserirNome.value.length > 15){
        alert("O nome deve ser menor que 15 caracteres."); 
    }
    else{
        if (cont === 10) {
            alert("A lista está cheia!");
        }
        else{
            const cliente = {
                nome:inserirNome.value,
                color:colorCliente.value
            };
            filaCliente.push(cliente);
            document.getElementById("p"+cont).innerHTML = inserirNome.value;
            document.getElementById("num"+cont).innerHTML = cont;
            document.getElementById("num"+cont).style.backgroundColor = colorCliente.value
            document.getElementById("nome"+cont).style.display = "block";
            cont++;
        }
    }
}

function ConcluirLista(){
    if(filaCliente.length == ""){
        alert("A fila está vazia!");
    }
    filaCliente.shift();
    cont = 1;
    for (var i = 0; i < filaCliente.length; i++) {
        document.getElementById("p"+cont).innerHTML = filaCliente[i].nome;
        document.getElementById("num"+cont).innerHTML = cont;
        document.getElementById("num"+cont).style.backgroundColor = filaCliente[i].color;
        document.getElementById("nome"+cont).style.display = "block";
        cont++;
    }
    document.getElementById("nome"+(cont)).style.display = "none";
}

inserirFila.onclick=criarLista;
retirarFila.onclick=ConcluirLista;