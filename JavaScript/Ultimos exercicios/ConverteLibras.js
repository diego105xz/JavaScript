function converteParaQuilos(pesoLibras)
{
    let pesoQuilos = pesoLibras * 0.45;

    return pesoQuilos;
}


let libras= 40;
let quilos = converteParaQuilos(libras);

console.log(quilos);