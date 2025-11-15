function somar(a, b) { return a + b; }
function multiplicar(a, b) { return a * b; }
function subtrair(a, b) { return a - b; }
function dividir(a, b) { return b === 0 ? "Erro: divisão por zero" : a / b; }
function calcularMedia(n1, n2, n3, n4) { return dividir(n1 + n2 + n3 + n4, 4); }
function elevarPotencia(base, expoente) { return Math.pow(base, expoente); }
function calcularAreaRetangulo(l, a) { return multiplicar(l, a); }
function verificarParOuImpar(n) { return n % 2 === 0 ? "par" : "ímpar"; }
function calcularRaizQuadrada(n) { return Math.sqrt(n); }
function calcularHipotenusa(c1, c2) {
  return calcularRaizQuadrada(somar(elevarPotencia(c1,2), elevarPotencia(c2,2)));
}
module.exports = {
  somar, multiplicar, subtrair, dividir, calcularMedia,
  elevarPotencia, calcularAreaRetangulo, verificarParOuImpar,
  calcularRaizQuadrada, calcularHipotenusa
};
