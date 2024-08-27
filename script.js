// Event listener para el botón de encriptar
document.getElementById('encryptBtn').addEventListener('click', () => {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    document.getElementById('outputText').value = encrypt(inputText);
});

// Event listener para el botón de desencriptar
document.getElementById('decryptBtn').addEventListener('click', () => {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    document.getElementById('outputText').value = decrypt(inputText);
});

// Event listener para el botón de copiar
document.getElementById('copyBtn').addEventListener('click', () => {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});

// Función para encriptar el texto según las reglas especificadas
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto según las reglas especificadas
function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
