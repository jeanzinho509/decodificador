// Criar um array de bytes (simulando dados codificados)
const encodedBytes = new Uint8Array([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]);

// Criar uma string a partir dos bytes
const decodedString = String.fromCharCode.apply(null, encodedBytes);

// Exibir a string decodificada no console
console.log(decodedString);

// O resultado será: "Hello World"
