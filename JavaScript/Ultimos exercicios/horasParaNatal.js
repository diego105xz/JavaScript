const dataHoje = new Date();
const dataNatal = new Date('2022-12-25T00:00');

const timeHoje = dataHoje.getTimestamp();
const timeNatal = dataNatal.getTimestamp();

const tempoFalta = timeHoje - timeNatal;

const segundos = tempoFalta / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

if(horas > 1)
{
    console.log("Faltam "+horas+" horas para o Natal de 2022");
}
else
{
    console.log("Falta "+horas+" hora para o Natal de 2022");
}