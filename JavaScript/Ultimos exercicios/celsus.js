let celsius = 25;


function celsiusParaFahrenheit ( celsius){
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

let fahrenheit = celsiusParaFahrenheit(celsius);

console.log(fahrenheit);