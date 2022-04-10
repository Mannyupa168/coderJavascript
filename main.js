/* Catalog */
const products = [
  {
    id: 1,
    game: "Daysgone",
    platform: "PC",
    genre: "Open World",
    price: 37.49,
  },
  {
    id: 2,
    game: "Battlefield 2042",
    platform: "Xbox",
    genre: "Action",
    price: 44.53,
  },
  {
    id: 3,
    game: "Pokemon",
    platform: "Playstation",
    genre: "Adventure",
    price: 36.29,
  },
  { id: 4, game: "Elden Ring", platform: "PC", genre: "Action", price: 28.74 },
];

/* Functions */

function validation(text) {
  var regex = new RegExp("^[A-Z]+$", "i");

  while (regex.test(text) == false) {
    alert("Ingresa caracteres de texto");
    text = prompt("Vuelve a ingresar tu nombre o apellido:");
  }
}

function showGames(games) {
  var output = "";
  for (var property in games) {
    output += property + ": " + games[property] + "\n";
  }
  alert(output);
}

function buyGame(videogame) {
  while (videogame != "0") {
    switch (videogame) {
      case "1":
        console.log(videogame);
        alert("Adquiriste el juego: " + game1.Nombre + " por " + game1.Precio);
        break;
      case "2":
        alert("Adquiriste el juego: " + game2.Nombre + " por " + game2.Precio);
        break;
      case "3":
        alert("Adquiriste el juego: " + game3.Nombre + " por " + game3.Precio);
        break;
      case "4":
        alert("Adquiriste el juego: " + game4.Nombre + " por " + game4.Precio);
        break;
    }
    alert("Gracias por tu compra. Vuelve pronto.");
    break;
  }
}

/* Classes */
class game {
  constructor(Nombre, Plataforma, Género, Precio) {
    this.Nombre = Nombre;
    this.Plataforma = Plataforma;
    this.Género = Género;
    this.Precio = Precio;
  }
}
const game1 = new game(
  "Deathstranding",
  "Playstation",
  "Open world",
  29.25 + " USD"
);
const game2 = new game("Daysgone", "PC", "Open world", 37.49 + " USD");
const game3 = new game("Battlefield 2042", "Xbox", "Action", 44.53 + " USD");
const game4 = new game("Pokemon", "Nintendo", "Adventure", 36.29 + " USD");

/*User experience*/

let account = prompt(
  "¡Hola! Bienvenido a Gameser Store. ¿Tienes cuenta con nosotros? (Si / No)"
);

if (account == "Si") {
  let question1 = prompt(
    "¿Te gustaría ver nuestro catálogo de productos? (Si / No)"
  );
  if (question1 == "Si") {
    showGames(game1);
    showGames(game2);
    showGames(game3);
    showGames(game4);

    let question2 = prompt(
      "¿Cual de los juegos que viste anteriormente te gustaria adquirir? Ingresa el número del juego" +
        "\n" +
        "Juego 1: Deathstranding, Juego 2: Daysgone, Juego 3: Battlefield 2042 o Juego 4:Pokemon"
    );

    buyGame(question2);
  }
  if (question1 == "No") {
    alert("Gracias por visitarnos. Vuelva pronto.");
  }
}
if (account == "No") {
  alert("Crea una cuenta con solo ingresar tu nombre y apellido");
  let userName = prompt("Ingresa tu(s) nombre(s): ");
  validation(userName);

  let userLastName = prompt("Ingresa tu apellido: ");
  validation(userLastName);

  alert("Bienvenido " + userName + " " + userLastName + " ");

  let question1 = prompt(
    "¿Te gustaría ver nuestro catálogo de productos? (Si / No)"
  );
  if (question1 == "Si") {
    showGames(game1);
    showGames(game2);
    showGames(game3);
    showGames(game4);

    let question2 = prompt(
      "¿Cual de los juegos que viste anteriormente te gustaria adquirir? Ingresa el número del juego" +
        "\n" +
        "Juego 1: Deathstranding, Juego 2: Daysgone, Juego 3: Battlefield 2042 o Juego 4:Pokemon"
    );

    buyGame(question2);
  }
  if (question1 == "No") {
    alert("Gracias por visitarnos. Vuelva pronto.");
  }
}
