let valor_produto = 500; //variavel

for ( let contador = 1; contador <= 5; contador++ ) //Enquanto contador for menor ou igual a 5 repita a execução
{
    let valor_parcela = valor_produto / contador; //opcao de divisao de parcelas
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));//.toFixed 2 casa depois da virgula
}

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00
// Nº de parcelas: 5 - Valor da parcela: R$100.00