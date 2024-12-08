let puntuacion = 0;
let referenciaAlDivPuntuacion: HTMLElement | null;

const cartas: Array<string> = [
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",

  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
];

const muestraPuntuacion = () => {
  if (referenciaAlDivPuntuacion) {
    referenciaAlDivPuntuacion.innerHTML = `Puntuacion : ${puntuacion}`;
    if (puntuacion > 7.5) {
      referenciaAlDivPuntuacion.innerHTML = "Game over!";
      const botonPedirCarta = document.getElementById(
        "damecarta"
      ) as HTMLButtonElement;
      botonPedirCarta.disabled = true;
      const botonNuevaPartida = document.getElementById(
        "nuevapartida"
      ) as HTMLButtonElement;
      if (botonNuevaPartida) {
        botonNuevaPartida.style.display = "block";
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  referenciaAlDivPuntuacion = document.getElementById("puntuacion");
  const botonDameCarta = document.getElementById("damecarta");
  if (botonDameCarta) {
    botonDameCarta.addEventListener("click", dameCarta);
  }
  const botonMePlanto = document.getElementById("plantarse");
  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", mePlanto);
  }
  const botonNuevaPartida = document.getElementById(
    "nuevapartida"
  ) as HTMLButtonElement;
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "none";
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }
});

const dameCarta = () => {
  const valoresCartas = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
  const lenghtArray = valoresCartas.length;
  const indexSelecionado = Math.floor(Math.random() * lenghtArray);
  muestraCarta(valoresCartas[indexSelecionado]);
};

const muestraCarta = (numeroDeCarta: number) => {
  const referenciaAlElementoImage = document.getElementById(
    "carta"
  ) as HTMLImageElement;
  if (numeroDeCarta <= 7) {
    referenciaAlElementoImage.src = cartas[numeroDeCarta - 1];
  } else {
    referenciaAlElementoImage.src = cartas[numeroDeCarta - 3];
  }
  updatePuntuacion(numeroDeCarta);
  muestraPuntuacion();
};

const updatePuntuacion = (numeroDeCarta: number) => {
  if (numeroDeCarta <= 7) {
    puntuacion += numeroDeCarta;
  } else {
    puntuacion += 0.5;
  }
};

const mePlanto = () => {
  if (referenciaAlDivPuntuacion && puntuacion < 4) {
    referenciaAlDivPuntuacion.innerHTML = "Has sido muy conservador";
  } else if (referenciaAlDivPuntuacion && puntuacion == 5) {
    referenciaAlDivPuntuacion.innerHTML = "Te ha entrado el canguelo eh?";
  } else if (referenciaAlDivPuntuacion && puntuacion >= 6 && puntuacion <= 7) {
    referenciaAlDivPuntuacion.innerHTML = "Casi casi...";
  } else if (referenciaAlDivPuntuacion && puntuacion == 7.5) {
    referenciaAlDivPuntuacion.innerHTML = "¡ Lo has clavado! ¡Enhorabuena!";
  }
  const botonPedirCarta = document.getElementById(
    "damecarta"
  ) as HTMLButtonElement;
  botonPedirCarta.disabled = true;
  const botonNuevaPartida = document.getElementById(
    "nuevapartida"
  ) as HTMLButtonElement;
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "block";
  }
};

const nuevaPartida = () => {
  puntuacion = 0;
  muestraPuntuacion();
  const botonNuevaPartida = document.getElementById(
    "nuevapartida"
  ) as HTMLButtonElement;
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = "none";
  }
  const botonDameCarta = document.getElementById(
    "damecarta"
  ) as HTMLButtonElement;
  if (botonDameCarta) {
    botonDameCarta.disabled = false;
  }
  const referenciaAlElementoImage = document.getElementById(
    "carta"
  ) as HTMLImageElement;
  referenciaAlElementoImage.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
};
