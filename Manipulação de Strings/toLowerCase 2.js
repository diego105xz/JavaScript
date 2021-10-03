let email = "diego-melo@uni9.edu.br";

let confirmar_email = "DIEGO-MELO@UNI9.EDU.BR";

if(email.toLowerCase() == confirmar_email.toLowerCase()){//Coloca a variavel string com letras minusculas
    console.log("Confimação de E-mail feita com sucesso!");
}else{
    console.log("ERRO! E-mails diferentes!");
}