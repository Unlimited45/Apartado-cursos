function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "1- ¿En que año se creo la primera versión de Microsoft word?",
      respuesta: "Se creo en 1981",
      distractores: ["Se creo en 1951", "Se creo en 1967", "se creo en 1930"],
    },
    {
      pregunta: "2-¿Quien creo la primera versión de Microsoft word?",
      respuesta: "Charles Simonyi y Richard Brodie",
      distractores: ["La fundo Bill Gates y Cris Amterdan", "Stefan Cruz y Petter Swer", "Ninguno de ellos la creo"],
    },
    {
      pregunta: "3-  ¿Es posible insertar imagenes?",
      respuesta: "Sí, en la sección insertar de la barra de herramientas se pueden insertar imágenes que estén archivadas o directamente de internet",
      distractores: ["Si tienen derechos de autor no se permitira.", " Ninguna de las anteriores", "No, no se permite manejar imagenes"],
    },
    {
        pregunta: "4- ¿Además de texto e imágenes, que elementos acepta Word?",
        respuesta: "Se pueden insertar tablas, formas, smarArt y gráficos",
        distractores: ["No se puede insertar nada mas que imagenes", " Se pueden insertar paginas enteras de codigos", "Solo se pueden insertar textos"],
      },
      {
        pregunta: "5- ¿Se puede imprimir un documento desde Word?",
        respuesta: "Sí, puede ser utilizando el atajo de teclas CRTL + P o desde la pestaña archivo de la barra de herramientas",
        distractores: ["No, aun no esta disponible", "Si, pero es necesario instalar otro programa", "Si, aunque se necesita una impresora para poder imprimir"],
      },
      {
        pregunta: "6- ¿Como obtener Word?",
        respuesta: " Se debe descargar el paquete de Microsoft Office desde la web oficial del desarrollador",
        distractores: ["Se puede obtener de manera ilegal en la red", "Se le puede pagar a una persona para poder instalarlo", "No se puede obtener"],
      },
      {
        pregunta: "7- ¿Permite Word modificar las dimensiones del documento?",
        respuesta: "Sí, en la sección formato de la barra de herramientas, se puede modificar los márgenes, dimensiones y orientación del documento, entre otros ajustes personalizables",
        distractores: ["En cierto modo si es legal si deja modificarlos", "No, word no deja modificar el documento una vez este guardado", "Ninguna de las anteriores"],
      },
      {
        pregunta: "8- ¿Cómo colocar encabeza y pie de página?",
        respuesta: " En la sección insertar de la barra de herramientas aparecerán estas opciones",
        distractores: ["Se puede hacer desde internet mirando un tutorial", "Dirijase en la parte inferior del menú y busque la opción", "Guarde el documento y abralo nuevamente y se hara de manera automatica"],
      },
      {
        pregunta: "9- ¿Como ingresar la sangría para los documentos?",
        respuesta: "Puede hacerse desde la sección inicio o formato, en ambas pestañas aparece el aumento y disminución de la sangría",
        distractores: ["Solo lo puede hacer un profesional", "En la parte superior en la opcion menu despegable", "En la parte superior donde dice insertar imagen"],
      },
      {
        pregunta: "10-¿Cómo acceder a Word?",
        respuesta: "Podemos acceder directo desde la carpeta donde se instaló el programa. También desde el menú de inicio Windows donde podemos buscar el programa.",
        distractores: ["Entre en su navegador favorito y le da en click abrir", "Se accede desde un pc de nivel medio", "Solo se puede acceder mediante el administrador y se busca en la barra de tareas"],
      },
  ];
  var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);