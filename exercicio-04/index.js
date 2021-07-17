function processData(input) {
    const linhas = input.trim().split("\n");
    const numeroFuncionarios = linhas[0];
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++){
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0]),
            y: parseFloat(coord[1]),
        });
    };
    let distancia = 0;

    for (let i = 0; i < coordenadas.length; i++){
        for (let j = 0; j < coordenadas.length; j++){
            let novaDistancia = Math.sqrt((Math.pow(coordenadas[j].x - coordenadas[i].x, 2) + Math.pow(coordenadas[j].y - coordenadas[i].y, 2)));
            if(distancia < novaDistancia){
                distancia = novaDistancia;
            };
        };
    };
    console.log(distancia);    
};

processData(`5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7`);