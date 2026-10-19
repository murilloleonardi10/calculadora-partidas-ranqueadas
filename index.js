
let vitorias = 85;
let derrotas = 30;
let saldoVitorias = 0;
let nivel = "";

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

saldoVitorias = calcularSaldo(vitorias, derrotas);

if (vitorias <= 10) {
    nivel = "Ferro";
} else if (vitorias <= 20) {
    nivel = "Bronze";
} else if (vitorias <= 50) {
    nivel = "Prata";
} else if (vitorias <= 80) {
    nivel = "Ouro";
} else if (vitorias <= 90) {
    nivel = "Diamante";
} else if (vitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(
    `O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`
);
