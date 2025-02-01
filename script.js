const words = [
    "abeto", "actor", "aguas", "agudo", "alado", "albas", "altar", "anton", "atizo", "avala", "avion", "azul",
    "bacas", "bache", "balas", "bebes", "belen", "berto", "bicho", "bizco", "bueno", "busca",
    "cabra", "cajas", "calla", "calma", "camba", "campo", "canas", "cantos", "queso",
    "caras", "carro", "casas", "catar", "caida", "cejas", "celia", "cenas", "cepas", "cerca",
    "cerdo", "chile", "china", "ciego", "cines", "citas", "clara", "clavo", "colas", "colon", "colon",
    "coral", "corea", "corro", "cosas", "costo", "crudo", "curar", "dados", "dagas", "datos", "danos",
    "dejar", "denso", "dices", "divos", "dotes", "dunas", "dures", "duros", "ellos", "echas", "edito",
    "emulo", "enoje", "error", "estar", "fallo", "falto", "feria", "fetos", "fijos", "filas", "filia",
    "finca", "gafas", "galas", "gales", "galos", "ganas", "ganes", "gases", "gasto", "giras", "gordo", "gorro",
    "grave", "grito", "hacer", "heces", "hielo", "ideas", "india", "islas", "japon", "jefas", "jerga",
    "julio", "malos", "mania", "marca", "marco", "marti", "maria", "melon", "menos", "meter", "metro",
    "moler", "monte", "morir", "nacer", "nadar", "narro", "natas", "naves", "necio", "ninos", "notas", "nubes",
    "obras", "ollas", "ondas", "onzas", "opera", "otros", "palas", "pedir", "pelea", "pelos", "peras", "perro",
    "pesos", "pilas", "poder", "quema", "reloj", "rubio", "rasco", "ratas", "ratos", "redes", "remar", "renos",
    "rentas", "sabio", "sacar", "salir", "selva", "sanar", "sopas", "secar", "serio", "sitio", "sobar", "sonar",
    "subir", "sucio", "siete", "tabla", "tacos", "tania", "tapas", "tazas", "telon", "tener", "tenis", "terco",
    "texas", "tipos", "tiras", "todas", "todos", "tomar", "tomas", "tonos", "tonto", "toque", "torpe",
    "trote", "vacas", "vagos", "valer", "valor", "veces", "vedas", "velas", "vemos", "venas", "venir", "verde",
    "vigas", "vinos", "vivir", "volar", "votar", "yates", "yemas", "zonas", "zorro", "zurdo"
];
  // Lista de palabras en español
const targetWord = words[Math.floor(Math.random() * words.length)]; 
let attempts = 0;
let currentWord = ["", "", "", "", ""];  

function createGrid() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < 6; i++) {  
        for (let j = 0; j < 5; j++) {  
            const cell = document.createElement("div");
            grid.appendChild(cell);
        }
    }
}

function insertLetter(letter) {
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === "") {
            currentWord[i] = letter;
            document.getElementById(`input-word-${i}`).value = letter.toUpperCase();
            break;
        }
    }
}

function deleteLetter() {
    for (let i = currentWord.length - 1; i >= 0; i--) {
        if (currentWord[i] !== "") {
            currentWord[i] = "";
            document.getElementById(`input-word-${i}`).value = "";
            break;
        }
    }
}

function checkWord() {
    const input = currentWord.join("");
    
    if (input.length !== 5) {
        document.getElementById("message").innerText = "La palabra debe tener 5 letras.";
        return;
    }

    if (!words.includes(input)) {
        document.getElementById("message").innerText = "La palabra no está en el diccionario.";
        return;
    }

    attempts++;

    const grid = document.getElementById("grid");
    const cells = grid.children;
    const start = (attempts - 1) * 5;

    for (let i = 0; i < 5; i++) {
        const cell = cells[start + i];
        const letter = input[i];

        if (letter === targetWord[i]) {
            cell.style.backgroundColor = "green";  // Correcta y en la posición correcta
        } else if (targetWord.includes(letter)) {
            cell.style.backgroundColor = "yellow";  // Correcta pero en la posición incorrecta
        } else {
            cell.style.backgroundColor = "gray";  // Incorrecta
        }

        cell.innerText = letter.toUpperCase();
    }

    if (input === targetWord) {
        document.getElementById("message").innerText = "¡Felicidades, has acertado!";
        return;
    }

    if (attempts === 6) {
        document.getElementById("message").innerText = `¡Has perdido! La palabra era: ${targetWord}`;
    }

    currentWord = ["", "", "", "", ""];
    for (let i = 0; i < 5; i++) {
        document.getElementById(`input-word-${i}`).value = "";
    }
}

createGrid();
