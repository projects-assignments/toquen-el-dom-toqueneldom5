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
/////////////////SEGUNDO////////////////////////
// const pianoContainer = document.getElementsByClassName("piano-container");
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

// const notas = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
// const sostenido=["Do#","Re#","Fa#","Sol#","La#","Do#","Re#","Fa#","Sol#","La#"]

// window.onload = () => {
//   for (let index = 1; index <= 24; index++) {
//    const div = document.createElement("div");
//     const isBlackKey = index <= 10;
//     div.classList.add("key" + index, isBlackKey ? "black-key" : "white-key");
    
//     if (!isBlackKey) {
//       const notaIndex = index -4; 
//       div.textContent = notas[notaIndex % notas.length]; 
//     }
//     if (isBlackKey) {
//       const notaIndex = index -1; 
//       div.textContent = sostenido[notaIndex % notas.length]; 
//       div.style.color="white"
//     }
//     limpiar()
   
  
//     const number = index;
//     div.addEventListener("click", () => {
//       playAudio(`key${number}`);
//     });

//     pianoContainer[0].appendChild(div);
//   }

//   document.addEventListener("keydown", (event) => {
//     const note = noteMappings[event.key];

//     if (note) {
//       console.log(note)
//       playAudio(note);
//       const div = document.querySelector(`.${note}`);
//       div.style.backgroundColor = '#504141';
//       setTimeout(()=>{
//           div.style.backgroundColor = '';
//       },300)
      
//     }
//   });
// };

// function playAudio(note) {
//   new Audio(`${base}${note}.mp3`).play();
// }

// function playAudio(note) {
//   new Audio(`${base}${note}.mp3`).play();
// }

// let checkN = document.getElementById('inputN');

// function limpiar(){ checkN.addEventListener("change", () => {
//   let div=document.querySelectorAll('.white-key')
//   if (checkN.checked) {
//     div.forEach(element => {
//       element.textContent=""  
//     })
//   }else{
//     console.log("wedew")
//   }
// });
// }
// const pianoContainer = document.getElementsByClassName("piano-container");
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

// const notas = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
// const sostenido=["Do#","Re#","Fa#","Sol#","La#","Do#","Re#","Fa#","Sol#","La#"]

// window.onload = () => {
//   for (let index = 1; index <= 24; index++) {
//    const div = document.createElement("div");
//     const isBlackKey = index <= 10;
//     div.classList.add("key" + index, isBlackKey ? "black-key" : "white-key");
    
//     if (!isBlackKey) {
//       const notaIndex = index -4; 
//       div.textContent = notas[notaIndex % notas.length]; 
//     }
//     if (isBlackKey) {
//       const notaIndex = index -1; 
//       div.textContent = sostenido[notaIndex % notas.length]; 
//       div.style.color="white"
//     }
  
//     const number = index;
//     div.addEventListener("click", () => {
//       playAudio(`key${number}`);
//     });

//     pianoContainer[0].appendChild(div);
//   }

//   document.addEventListener("keydown", (event) => {
//     const note = noteMappings[event.key];

//     if (note) {
//       console.log(note)
//       playAudio(note);
//       const div = document.querySelector(`.${note}`);
//       div.style.backgroundColor = '#504141';
//       setTimeout(()=>{
//           div.style.backgroundColor = '';
//       },300)
      
//     }
//   });


// let checkN = document.getElementById('inputN');

// checkN.addEventListener("change", () => {
//   let div = document.querySelectorAll('.white-key')
//   if (checkN.checked) {
//     div.forEach(element => {
//       console.log(element.textContent = notas[notaIndex % notas.length])
//     })
//   } else {
//     div.forEach(element => {
//       element.textContent = "";
//     })
//   }
// });
// };

// function playAudio(note) {
//   new Audio(`${base}${note}.mp3`).play();
// }
/////////////AQUII
// const pianoContainer = document.getElementsByClassName("piano-container");
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

// const notas = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
// const sostenido=["Do#","Re#","Fa#","Sol#","La#","Do#","Re#","Fa#","Sol#","La#"]

// window.onload = () => {
//   for (let index = 1; index <= 24; index++) {
//     const div = document.createElement("div");
//     const isBlackKey = index <= 10;
//     div.classList.add("key" + index, isBlackKey ? "black-key" : "white-key");
    
//     if (!isBlackKey) {
//       const notaIndex = index - 4; 
//       div.textContent = notas[notaIndex % notas.length]; 
//     }
//     if (isBlackKey) {
//       const notaIndex = index - 1; 
//       div.textContent = sostenido[notaIndex % notas.length]; 
//       div.style.color = "white";
//     }
  
//     const number = index;
//     div.addEventListener("click", () => {
//       playAudio(`key${number}`);
//     });

//     pianoContainer[0].appendChild(div);
//   }

//   document.addEventListener("keydown", (event) => {
//     const note = noteMappings[event.key];

//     if (note) {
//       console.log(note);
//       playAudio(note);
//       const div = document.querySelector(`.${note}`);
//       div.style.backgroundColor = '#504141';
//       setTimeout(() => {
//         div.style.backgroundColor = '';
//       }, 300);
//     }
//   });

//   let checkN = document.getElementById('inputN');

//   checkN.addEventListener("change", () => {
//     let div = document.querySelectorAll('.white-key');
//     if (checkN.checked) {
//       div.forEach(element => {
//         const notaIndex = parseInt(element.classList[0].replace("key", "")) - 4;
//         console.log(element.textContent = notas[notaIndex % notas.length]);
//       });
//     } else {
//       div.forEach(element => {
//         element.textContent = "";
//       });
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

const notas = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
const sostenido = ["Do#", "Re#", "Fa#", "Sol#", "La#"];

window.onload = () => {
  for (let index = 1; index <= 24; index++) {
    const div = document.createElement("div");
    const isBlackKey = index <= 10;
    div.classList.add("key" + index, isBlackKey ? "black-key" : "white-key");

    if (!isBlackKey) {
      const notaIndex = index - 4; // Índice para el array de notas
      div.textContent = notas[notaIndex % notas.length]; // Asignar la nota correspondiente
    }
    if (isBlackKey) {
      const notaIndex = index - 1; // Índice para el array de notas sostenidas
      div.textContent = sostenido[notaIndex % sostenido.length];
      div.style.color = "white";
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
      console.log(note);
      playAudio(note);
      const div = document.querySelector(`.${note}`);
      div.style.backgroundColor = '#504141';
      setTimeout(() => {
        div.style.backgroundColor = '';
      }, 300);
    }
  });

  let checkN = document.getElementById('inputN');

  checkN.addEventListener("change", () => {
    let div = document.querySelectorAll('.white-key');
    if (checkN.checked) {
      div.forEach(element => {
        const isSostenido = element.classList.contains("black-key");
        const notaIndex = parseInt(element.classList[0].replace("key", isSostenido ? "" : "")) - (isSostenido ? 1 : 4);
        console.log(element.textContent = isSostenido ? sostenido[notaIndex % sostenido.length] : notas[notaIndex % notas.length]);
      });
    } else {
      div.forEach(element => {
        element.textContent = "";
      });
    }
  });
};

function playAudio(note) {
  new Audio(`${base}${note}.mp3`).play();
}
