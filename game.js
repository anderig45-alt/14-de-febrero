/* =========================
   JUEGO COMPLETA FRASES
========================= */

const frases = [
  { texto:"No existe Josep", pareja:"Sin Allison" },
  { texto:"Sin Allison", pareja:"No existe Josep" },

  { texto:"Aron", pareja:"nuestro hijito" },
  { texto:"nuestro hijito", pareja:"Aron" },

  { texto:"Allison es", pareja:"El amor de mi vida" },
  { texto:"El amor de mi vida", pareja:"Allison es" }
];

const gameContainer = document.getElementById("memoryGame");
let seleccion = [];
let aciertos = 0;

// mezclar tarjetas
frases.sort(()=> Math.random()-0.5);

frases.forEach(item=>{
  const card = document.createElement("div");
  card.className = "memory-card";
  card.textContent = item.texto;
  card.dataset.pareja = item.pareja;

  card.onclick = () => {

    if(card.classList.contains("correcta") || seleccion.length === 2) return;

    card.classList.add("activa");
    seleccion.push(card);

    if(seleccion.length === 2){

      if(seleccion[0].dataset.pareja === seleccion[1].textContent){
        seleccion.forEach(c=>{
          c.classList.remove("activa");
          c.classList.add("correcta");
        });

        aciertos++;

        if(aciertos === 3){
          document.getElementById("memoryMsg").innerHTML =
            "💖 Siempre estaremos juntos 💖";

          mostrarBotonFinal();
        }

        seleccion = [];
      } else {
        setTimeout(()=>{
          seleccion.forEach(c=>c.classList.remove("activa"));
          seleccion = [];
        },700);
      }

    }
  };

  gameContainer.appendChild(card);
});

function mostrarBotonFinal(){
  const btn = document.createElement("button");
  btn.textContent = "Continuar 💕";
  btn.onclick = ()=> mostrar("video");
  gameContainer.appendChild(btn);
}

