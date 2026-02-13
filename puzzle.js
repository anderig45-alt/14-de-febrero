const puzzleContainer = document.getElementById("puzzle-container");

const size = 5;
const image = "foto.jpg";

let tiles = [];
let draggedTile = null;

const messages = [
  "Me haces mucha falta ❤️",
  "Extraño tus abrazos ",
  "Eres lo mejor que me ha pasado en la vida",
  "Quiero volver a sonreír contigo",
  "Te pienso todos los días",
  "Ojalá estuviéramos juntos ahora",
  "Tu sonrisa es mi lugar favorito",
  "Te quiero solo para mi",
  "Te amo muchísimo",
  "Siempre tú 💕",
  "Me haces sentir completo ❤️",
  "No hay día en que no piense en ti",
  "Tu voz es mi paz",
  "Contigo todo se siente mejor",
  "Eres mi persona favorita 💕",
  "Te extraño más de lo que imaginas",
  "Mi lugar seguro siempre será contigo",
  "Quiero abrazarte muy fuerte",
  "Eres mi mundo",
  "A tu lado todo tiene sentido",
  "No dejo de sonreír cuando pienso en ti",
  "Te amo más cada día",
  "Quiero construir todo contigo",
  "Eres mi paz en medio del caos",
  "Te elegiría una y otra vez",
  "Mi corazón siempre te busca",
  "Contigo quiero todo 💖",
  "Cosita bonita",
  "Te necesito cerquita de mí",
  "Mi amor por ti no cambia"
];


function createPuzzle() {
  puzzleContainer.innerHTML = "";
  tiles = [];

  for (let i = 0; i < size * size; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.draggable = true;
    tile.dataset.correct = i;

    tile.style.backgroundImage = `url(${image})`;

    // divide la imagen correctamente
    const posX = (i % size) * (100 / (size - 1));
    const posY = Math.floor(i / size) * (100 / (size - 1));
    tile.style.backgroundPosition = `${posX}% ${posY}%`;

    tile.addEventListener("dragstart", () => draggedTile = tile);
    tile.addEventListener("dragover", e => e.preventDefault());
    tile.addEventListener("drop", () => swapTiles(tile));
    tile.addEventListener("click", () => swapTiles(tile));

    tiles.push(tile);
    puzzleContainer.appendChild(tile);
  }

  shuffle();
}

function shuffle() {
  tiles.sort(() => Math.random() - 0.5);
  renderTiles();
}

function renderTiles(){
  puzzleContainer.innerHTML = "";
  tiles.forEach(tile => puzzleContainer.appendChild(tile));
}

function swapTiles(targetTile) {
  if (!draggedTile || draggedTile === targetTile) return;

  const i1 = tiles.indexOf(draggedTile);
  const i2 = tiles.indexOf(targetTile);

  [tiles[i1], tiles[i2]] = [tiles[i2], tiles[i1]];
  renderTiles();

  showFloatingMessage();

  if (isSolved()) {
    setTimeout(showCompletionBox, 400);
  }
}

function isSolved() {
  return tiles.every((tile, index) =>
    tile.dataset.correct == index
  );
}

function showFloatingMessage() {
  const msg = document.createElement("div");
  msg.className = "floating-msg";
  msg.innerText = messages[Math.floor(Math.random() * messages.length)];

  document.body.appendChild(msg);

  setTimeout(() => msg.style.opacity = "0", 2500);
  setTimeout(() => msg.remove(), 3000);
}

function showCompletionBox(){
  const box = document.getElementById("puzzleCompleteBox");
  box.classList.remove("hidden");

  // oscurece fondo románticamente
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* BOTÓN CONTINUAR */
document.getElementById("nextBtn").onclick = () => {

  // quitar fondo oscuro
  document.body.style.backgroundColor = "#ffd9e6";

  // ocultar cuadro final
  document.getElementById("puzzleCompleteBox").classList.add("hidden");

  // ir al juego
  document.getElementById("puzzle").classList.add("hidden");
  document.getElementById("juego").classList.remove("hidden");

};

createPuzzle();
