//serve para carregar toda a pagina 
window.onload = function() {
    var stage = document.getElementById('stage'); //declara a variavel 
    var ctx = stage.getContext("2d"); //define a var ctx, é a parte grafica do jogo 
    document.addEventListener("keydown", keyPush); //ele espera o evento acontecer para aparecer na tela 
    setInterval(game, 85); //tempo, quanto maior o tempo mais lento a snake

    const vel = 1; //qt de vezes q a snake vai andar 
    var vx = vy = 0; //velocidade
    var px = 10; //pocição que vai começar 
    var py = 15;
    var tp = 30;
    var qp = 20;
    var ax = ay = 15; // pocicao inicial da food  (ponto vermelho)

    var trail = []; // é o rastro, quando a cabeça anda +1, o final -1 
    tail = 5; // tamanho inicial da snake 

    function game() {
        px += vx; //cada vez q a snake andar ele ja pinta o proximo 
        py += vy;
        //se ela anda 1, ela perde -1 
        if (px < 0) {
            px = qp - 1;
        }

        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }


        // é o estilo do preenchimento do palco 
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp); // o ponto vermelho no tamanho da peca 

        // rastro da cobra 
        ctx.fillStyle = "gray";
        //ela está na posicao zero, ela vai acrescentar 1 quadrado 
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1); //trail(rastro) é exatamente o efeito, 
            //game over 
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0; //para a snake
                tail = 5; // quando ela bater nela mesmo, volta ao seu tamanho inicial 

            }


        }

        trail.push({ x: px, y: py }) // se ela n bater nela mesmo, quero q ela se movimente 
        while (trail.length > tail) { // enquanto o rastro seja maior que o tamanho da calda
            trail.shift();
        }
        // quando a posicao da maca foi igual a da snake 
        if (ax == px && ay == py) {
            tail++ // se eu como uma maça a calda fica maior 
            ax = math.floor(math.ramdom() * qp);
            ay = math.floor(math.ramdom() * qp);
        }
    }
    //como vamos controlar a cobra 
    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
                vx = -vel;
                vy = 0;
                break;
            case 38:
                vx = 0;
                vy = -vel;
            case 39:
                vx = vel;
                vy = 0;
                break;
            case 40:
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }

    }


}