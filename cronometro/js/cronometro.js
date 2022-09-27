cronometro = document.getElementById("cronometro");
botao_iniciar = document.getElementById("iniciar");
minutos = 10;
segundos = 0;
var intervalo;

function timer() {
  if (minutos < 0) return;
  cronometro.innerHTML = minutos.toString().padStart(2, "0") + ":" + segundos.toString().padStart(2, "0")
  if (segundos < 1) {
    minutos = minutos - 1
    segundos = 59
  }
  
  segundos = segundos - 1
}

function iniciar() {
  intervalo = setInterval(timer, 1000)
  botao_iniciar.disabled = true;
}

function resetar() {
  minutos = 10;
  segundos = 0;
  cronometro.innerHTML = "10:00"
  botao_iniciar.disabled = false;
  clearInterval(intervalo)
}