// Prototipos
function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Añadir un método Clase.prototype.nombreMetodo = function(){}
Cliente.prototype.saludo = function () {
  console.log("Hola desde un prototipo");
};

Cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo >= 10000) {
    tipo = "Gold";
  } else if (this.saldo >= 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }

  console.log(tipo);
};

Cliente.prototype.infoCliente = function () {
  console.log(`Nombre: ${this.nombre} Saldo: $${this.saldo.toFixed(2)}`);
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
  console.log(
    `Haz retirado $${retira.toFixed(
      2
    )}\nAhora cuentas con un saldo de $${this.saldo.toFixed(2)}`
  );
};

// Instancia
const dani = new Cliente("Dani", 10000);
dani.saludo();
dani.tipoCliente();
dani.infoCliente();
dani.retiraSaldo(2500.25);

// Herencia de prototipos
function Persona(nombre, saldo, telefono) {
  // Función que trae las propiedades del prototipo que necesitamos
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
}

// Se clona el prototipo con el constructor
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

const persona1 = new Persona("Persona 1", 8500, 1234567890);
persona1.infoCliente();
persona1.saludo();
