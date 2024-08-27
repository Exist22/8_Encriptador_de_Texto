const textArea = document.querySelector(".ingreso_texto_caja");
const mensaje = document.querySelector(".devuelve_texto_resultado");
const muñeco = document.querySelector(".devuelve_texto_imagen");
const contenedor = document.querySelector(".devuelve_texto_parrafo");
const paste = document.querySelector(".btn_copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    ocultarAdelante();
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = darFormato(textoEncriptado);
    textArea.value = " ";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function darFormato(cadena){
    let aMinus = cadena.replace(/[áàäâ]/g,'a');
    let eMinus = aMinus.replace(/[éèëê]/g,'e');
    let iMinus = eMinus.replace(/[íìïî]/g,'i');
    let oMinus = iMinus.replace(/[óòöô]/g,'o');
    let uMinus = oMinus.replace(/[úùüû]/g,'u');
    let enieMinus = uMinus.replace(/[ñ]/g,'n');
    let coma = enieMinus.replace(/['|°¬!^`~"#$%&/@()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');
    let yesp = coma.replace(/[-]/g,'');
    let resultado = yesp.replace(/[ýÿÝ]/g,'y');

    return resultado;
}

function btnDesencriptar() {
    ocultarAdelante();
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = darFormato(textoDesencriptado);
    textArea.value = " ";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function ocultarAdelante(){
    muñeco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    paste.style.visibility = "visible";
}

function btnCopiar(){
    let resultado = document.querySelector(".devuelve_texto_resultado");
    let copiar = document.querySelector(".btn_copiar");

    navigator.clipboard.writeText(resultado.value);
    copiar.textContent = "Copiar";
}