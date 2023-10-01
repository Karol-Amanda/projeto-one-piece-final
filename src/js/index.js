/*
O que precisamos fazer ? - quando clicar no botão de personagem na lista temos que marcar o botão como selecionado e mostrar o personagem correspondente

OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado.
passo 1 - pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles
passo 2 - adicionar classe "selecionado" no botao que o usuario clicou
passo 3 - verificar se ja existe um borao selecionado, se sim, devemos remover a selecao dele

OBJETIVO 2 - quando clicar no botao do personagem mostrar as informacoes do personagem
passo 1 - pegar os personagens do JS pra poder mostrar ou esconder ele
passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado.
// passo 1 - pegar os botoes no JS pra poder verificar quando o usuario clicar em cima de um deles
const botoes = document.querySelectorAll(".botao");

//OBJETIVO 2 - quando clicar no botao do personagem mostrar as informacoes do personagem
//passo 1 - pegar os personagens do JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //passo 3 - verificar se ja existe um borao selecionado, se sim, devemos remover a selecao dele
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    console.log(botaoSelecionado);
    botaoSelecionado.classList.remove("selecionado");

    // //passo 2 - adicionar classe "selecionado" no botao que o usuario clicou
    botao.classList.add("selecionado");

    //passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover
    const personagemSelecionado = document.querySelector(
      ".personagem.selecionado"
    );
    personagemSelecionado.classList.remove("selecionado");

    //passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
    personagens[indice].classList.add("selecionado");
  });
});
