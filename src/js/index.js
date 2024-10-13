/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");//document é o html, querySelectorAll é busque todos os seletores (classes) que estão em pokedev
console.log(listaSelecaoPokedevs);


//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {//percorre cada pokedev
    pokedev.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();

        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevNaListagem();

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        ativarPokedevNaListagemSelecionadoNaListagem(idPokedevSelecionado);
    })
})//adiciona um "ouvinte" em cada elemento da lista, que ta so esperando pelo clique. Depois eu passo como argumento o que eu estou escutando (click) e passo o que eu quero que ele faça depois que ocorrer o click (a funcao). Pra fazer a função: () => {}


function ativarPokedevNaListagemSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value; //pego o valor do id
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado; //criando um novo ID
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto"); //adicionando uma classe aberto

    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto"); //busca o elemento que tem a classe aberto
    cartaoPokedevAberto.classList.remove("aberto");//remove
}
//const devchu = document.getElementById("devchu")
//devchu.addEventListener("click", () => {}) pra fazer um por um
