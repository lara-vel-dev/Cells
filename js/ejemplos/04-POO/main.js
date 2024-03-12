// Class declaration
class Cliente {
  // Propiedades privadas
  #nombre;

  // Constructor (inicializa la clase)
  constructor(nombre, saldo) {
    // Atributos
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  // Métodos
  mostrarInfo() {
    console.log(`Cliente: ${this.#nombre} Saldo: $${this.saldo.toFixed(2)}`);
  }

  // Métodos estáticos (no necesitan una instancia de la clase)
  static saludo() {
    console.log("Hola desde cliente");
  }
}

// Class expression
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const cliente1 = new Cliente("Cliente 1", 2000);
const cliente2 = new Cliente2("Cliente 2", 3000);

cliente1.mostrarInfo();
Cliente.saludo();

// Herencia
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    // Super trae los atributos que le pidas del constructor de la clase padre
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  // Polimorfismo (sobre escritura de método)
  static saludo() {
    console.log("Hola desde empresa");
  }
}

const empresa = new Empresa("Empresa 1", 5000);
empresa.mostrarInfo();
Empresa.saludo();
