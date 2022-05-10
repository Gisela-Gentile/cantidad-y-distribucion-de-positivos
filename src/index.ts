import "./styles.css";
let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;

let num: number = Number(prompt("Ingrese un número"));
while (num !== 0) {
  if (num > 0) {
    cantPositivos++;
  }
  cantTotal++;
  num = Number(prompt("Ingrese un número"));
}
if (cantTotal > 0) {
  porcPositivos = (cantPositivos * 100) / cantTotal;
  console.log(
    "hay " +
      cantPositivos +
      " positivos y es el " +
      porcPositivos +
      "% del total de números ingresados."
  );
}
