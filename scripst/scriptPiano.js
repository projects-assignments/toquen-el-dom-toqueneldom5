// let pianoContainer = document.getElementsByClassName("piano-container");
// const base = "./audio/";
// window.onload = () => {

//   for (let index = 1; index <= 24; index++) {
//     let div = document.createElement("div");
//     div.classList.add("key", index <= 10 ? "black-key" : "white-key");

//     const number = index <= 9 ? "0" + index : index;
//     div.addEventListener("click", () => {
//       new Audio(`${base}key${number}.mp3`).play();
//     });
//     pianoContainer[0].appendChild(div);
//   }
// };

let pianoContainer = document.getElementsByClassName("piano-container");
const base = "../assets/audio/";

const noteMappings = {
  "a": "key01",
  "w": "key02",
  "s": "key03",
  "e": "key04",
  "d": "key05",
  "f": "key06",
  "t": "key07",
  "g": "key08",
  "y": "key09",
  "h": "key10",
  "u": "key11",
  "j": "key12",
  "k": "key13",
  "o": "key14",
  "l": "key15",
  "p": "key16",
  ";": "key17",
  "'": "key18",
  "Enter": "key19",
  "Shift": "key20",
  "z": "key21",
  "x": "key22",
  "c": "key23",
  "v": "key24",
};




// Función que se ejecuta cuando la ventana ha terminado de cargar.
window.onload = () => {
  // Crea 24 teclas (divs) y las agrega al contenedor pianoContainer.
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    const isBlackKey = index <= 10;
    div.classList.add("key", isBlackKey ? "black-key" : "white-key");

    // Agrega un evento de clic a cada tecla para reproducir el sonido correspondiente.
    const number = index ;
    div.addEventListener("click", () => {
      playAudio(`key${number}`);
    });

    pianoContainer[0].appendChild(div);
  }

  // Agrega un evento de escucha para las teclas del teclado físico.
  document.addEventListener("keydown", (event) => {
    const note = noteMappings[event.key];
    console.log(note)
    if (note) {
      playAudio(note);
    }
  });
};

// Función para reproducir el sonido de una nota específica.
function playAudio(note) {
  new Audio(`${base}${note}.mp3`).play(); 
}