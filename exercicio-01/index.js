function processData(input) {
    input = input.trim();
    let qtdGrupos = input.split(" ");
    qtdGrupos = qtdGrupos.map(x => parseInt(x));

    let numeroTaxis = 0
    const qtdQuartetos = qtdGrupos[3];
    let qtdTrios = qtdGrupos[2];
    let qtdDuplas = qtdGrupos[1];
    let qtdSolos = qtdGrupos[0];

    // Soma grupos com 4:
    numeroTaxis += qtdQuartetos;

    // Combinacao grupos 3 e 1
    const qtdMinimaTriosESolos = Math.min(qtdTrios, qtdSolos)
    numeroTaxis += qtdMinimaTriosESolos;
    qtdTrios -= qtdMinimaTriosESolos;
    qtdSolos -= qtdMinimaTriosESolos;

    // Combinacao grupos de 2
    if (qtdDuplas >= 2){
        numeroTaxis += (Math.floor(qtdDuplas / 2));
        qtdDuplas = qtdDuplas % 2;
    };
    
    // Combinacao 1 e 2
    if (qtdDuplas !== 0 && qtdSolos >= 2){
        qtdSolos -= 2;
        qtdDuplas --;
        numeroTaxis += 1;
    } else if (qtdDuplas !== 0 && qtdSolos === 1){
        qtdSolos --;
        qtdDuplas --;
        numeroTaxis += 1;
    }
    qtdSolos = Math.ceil(qtdSolos / 4);
    numeroTaxis = numeroTaxis + qtdSolos + qtdDuplas + qtdTrios;
    
    console.log(numeroTaxis);
};

processData(`4 0 2 3`);