let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: 'Cuenta Corriente',
    saldoEnPesos: 27771,
    titularCuenta: 'Abigael Natte',
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: 'Caja de Ahorro',
    saldoEnPesos: 8675,
    titularCuenta: 'Ramon Connell',
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: 'Caja de Ahorro',
    saldoEnPesos: 27363,
    titularCuenta: 'Jarret Lafuente',
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: 'Cuenta Corriente',
    saldoEnPesos: 32415,
    titularCuenta: 'Ansel Ardley',
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: 'Cuenta Unica',
    saldoEnPesos: 18789,
    titularCuenta: 'Jacki Shurmer',
  },
];

let banco = {
  clientes: arrayCuentas,

  consultarCliente: function (titular) {
    for (let i = 0; i <= arrayCuentas.length; i++) {
      if (arrayCuentas[i].titularCuenta === titular) {
        return arrayCuentas[i];
      }
    }
  },

  deposito: function (titular, dinero) {
    let clienteTitular = this.consultarCliente(titular);
    clienteTitular.saldoEnPesos += dinero;
    console.log(
      `Depósito realizado, su nuevo saldo es: ${clienteTitular.saldoEnPesos}`
    );
  },

  extraccion: function (titular, extraer) {
    let cliente = this.consultarCliente(titular);
    cliente.saldoEnPesos -= extraer;
    if (cliente.saldoEnPesos > 0) {
      console.log(
        `Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`
      );
    } else {
      console.log(`Fondos insuficientes`);
    }
  },
};

let clienteEncontrado = banco.deposito('Ramon Connell', 10);
console.log(clienteEncontrado);
