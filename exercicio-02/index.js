function processData(input) {
    // Validar input:
    input = input.trim();
    // Transformar em array e armazenar a primeira palavra em senhaCorreta e a segunda em senhaInserida:
    const arrayInput = input.split("\n");
    const senhaCorreta = arrayInput[0].split("");
    const senhaInserida = arrayInput[1].split("");
    // Checar se senhaInserida contem todas as letras de senhaCorreta:
    let contador = 0;
    let indices = [];
    let i = 0;
    senhaCorreta.forEach(x => {    
        let verificaLetra = senhaInserida.find((y) => y === x);
        if (verificaLetra !== undefined) {
            i = senhaInserida.indexOf(verificaLetra, i);
            indices.push(i);
            senhaInserida.splice(i, 1);
            contador ++;
        };
    });
    const indicesOriginal = indices.join("")
    const indicesCrescente = indices.sort((a, b) => a - b).join("")
    console.log(contador === senhaCorreta.length && indicesOriginal === indicesCrescente ? `SIM` : `NAO`);
};

processData(`cubos\newvelrabsocaeln\n`);