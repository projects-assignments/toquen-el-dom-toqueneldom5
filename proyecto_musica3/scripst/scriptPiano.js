// let pianoContainer = document.getElementsByClassName("piano-container");
// const base = "../assets/audio/";

// const noteMappings = {
//   "a": "key01",
//   "w": "key02",
//   "s": "key03",
//   "e": "key04",
//   "d": "key05",
//   "f": "key06",
//   "t": "key07",
//   "g": "key08",
//   "y": "key09",
//   "h": "key10",
//   "u": "key11",
//   "j": "key12",
//   "k": "key13",
//   "o": "key14",
//   "l": "key15",
//   "p": "key16",
//   ";": "key17",
//   "'": "key18",
//   "Enter": "key19",
//   "Shift": "key20",
//   "z": "key21",
//   "x": "key22",
//   "c": "key23",
//   "v": "key24",
// };
// const notas=["do","re","mi","fa","sol","la","si"]
// window.onload = () => {
 
//   for (let index = 1; index <= 24; index++) {
//     let div = document.createElement("div");
//     const isBlackKey = index <= 10;
//     div.classList.add("key"+index, isBlackKey ? "black-key" : "white-key");
//     const notas=["do","re","mi","fa","sol","la","si"]
//     let teclaB = document.querySelectorAll('div')
//     if(index > 10){
//     notas.forEach((n)=>{
      
//       div.textContent=n
//     })  }

//     const number = index ;
//     div.addEventListener("click", () => {
//       playAudio(`key${number}`);
//     });

//     pianoContainer[0].appendChild(div);
//   }

//   document.addEventListener("keydown", (event) => {
//     const note = noteMappings[event.key];
   
//     console.log(note)
//     if (note) {  
//       playAudio(note);
//        event.style.backgroundColor = 'red'
//     }

//   });

// };


// function playAudio(note) {
//   new Audio(`${base}${note}.mp3`).play(); 
// }

const pianoContainer = document.getElementsByClassName("piano-container");
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

const notas = ["do", "re", "mi", "fa", "sol", "la", "si"];

window.onload = () => {
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    const isBlackKey = index <= 10;
    div.classList.add("key" + index, isBlackKey ? "black-key" : "white-key");
    
    if (!isBlackKey) {
      const notaIndex = index -4; // Índice para el array de notas
      div.textContent = notas[notaIndex % notas.length]; // Asignar la nota correspondiente
    }

    const number = index;
    div.addEventListener("click", () => {
      playAudio(`key${number}`);
    });

    pianoContainer[0].appendChild(div);
  }

  document.addEventListener("keydown", (event) => {
    const note = noteMappings[event.key];

    if (note) {
      playAudio(note);
      const div = document.querySelector(`.${note}`);
      div.style.backgroundColor = '#504141';
      setTimeout(()=>{
          div.style.backgroundColor = '';
      },800)
      
    }
  });
};

function playAudio(note) {
  new Audio(`${base}${note}.mp3`).play();
}
