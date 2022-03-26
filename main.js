let name = prompt("Hola! Para comenzar por favor, indícame tu nombre.");

while (name === "") {
  alert("Ingresa un nombre válido.");
  name = prompt("Hola! Para comenzar por favor, indícame tu nombre.");
}

let lastName = prompt(
  "Bienvenido " + name + " de favor indícame tu apellido" + " "
);

while (lastName === "") {
  alert("Ingresa un apellido válido.");
  lastName = prompt(
    "Bienvenido " + name + " de favor indícame tu apellido" + " "
  );
}

alert("Bienvenido " + name + " " + lastName + " ");

let answer = prompt("Te gustaría conocer el IVA de tus productos? (si / no)");

if (answer == "si") {
  let country = prompt(
    "¿Cuál es tu país de latinoamérica del que nos visitas? (Escribe el nombre completo de tu país)"
  );

  if (country === "Mexico") {
    iva = 0.16;
  } else if (country === "Argentina") {
    iva = 0.21;
  } else if (country === "Chile") {
    iva = 0.19;
  } else if (country === "Perú") {
    iva = 0.18;
  } else if (country === "Venezuela") {
    iva = 0.12;
  } else if (country === "Uruguay") {
    iva = 0.22;
  }

  let price = parseInt(prompt("¿Cuál es el precio de tu producto?"));

  let tax = price * iva;

  alert("El IVA de tu producto es: " + "$" + tax);
} else {
  alert("Gracias por usar la calculadora de IVA, buen día.");
}
