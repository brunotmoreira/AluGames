let jogosAlugados = [];

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let jogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao ='';

        do{

            confirmacao = prompt('Deseja devolver o jogo? Aperta 1 para SIM e 2 para Não.');

        } while(confirmacao < 1 || confirmacao > 2 || isNaN(confirmacao));

        if(confirmacao === '1'){

            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';

            const index = jogosAlugados.findIndex(item => item === jogo);
                if( index !== -1){
                    jogosAlugados.splice(index, 1);
                }

        }else{

            alert('Aproveite o jogo.');

        };
        

    }else{
               
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados.push(jogo);
    };
};

function mostrarAlugados(){
    if(jogosAlugados.length > 0){
        alert(jogosAlugados.join(", "));
    }else{
        alert('Não há jogos alugados!');
    }
}