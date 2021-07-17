function processData(input) {
    input = input.trim();
    if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122){
        const restoString = input.slice(1).split("");
        const ehTudoMaiusculo = restoString.every(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90);
        console.log(ehTudoMaiusculo === true ? `${input[0].toUpperCase() + input.slice(1).toLowerCase()}` : `${input}`);
    } else {
        const restoString = input.slice(1).split("");
        const ehTudoMaiusculo = restoString.every(x => x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90);
        console.log(ehTudoMaiusculo === true ? `${input.toLowerCase()}` : `${input}`);
    };
};

processData(`cAPS`);