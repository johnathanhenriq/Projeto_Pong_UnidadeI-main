class RecompensaAmarelo extends Recompensa{
    constructor(x, y, canvas) {
        super(x, y, canvas, 'yellow');
    }

    aplicar(barraEsquerda, barraDireita, pontuacao, lado) {
        // Aumenta a altura da barra do lado contrário ao que colidiu
        if (lado === 'esquerda') {
            barraDireita.height *= 1.2;
        } else {
            barraEsquerda.height *= 1.2;
        }
    }
}
