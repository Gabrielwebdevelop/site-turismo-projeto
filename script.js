var botao = document.getElementById('botao');

botao.addEventListener('mouseenter', entrar);
botao.addEventListener('mouseout', sair);
function entrar(){
    botao.value = "Abrir";
    botao.style.backgroundColor = "black";
    botao.style.color = "white";
    
};
function sair(){
    botao.value = "Mostrar mais";
    botao.style.backgroundColor = "white";
    botao.style.color = "black";
};

