const inputText = document.querySelector("#inputText");
if(inputText) {
    inputText.addEventListener("keyup", () => {
      let code = document.getElementById("code").value;
      const regex = /^[0-9]+$/;
      const text = inputText.value;

      if(regex.test(code)) {
        encryptMessage(text);
      } else {
        alert("Insira uma chave numérica")
      } 
    });

    inputText.addEventListener("click", () => {
      let code = document.getElementById("code").value;
      const regex = /^[0-9]+$/;
      const text = inputText.value;

      if(regex.test(code)) {
        encryptMessage(text);
      } else {
        alert("Insira uma chave numérica")
      } 
    });
}

function encryptMessage(text) {
    let code = parseInt(document.getElementById("code").value);
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";
  
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = alphabet.indexOf(char);
  
      if (index === -1) {
        encrypted += char;
        continue;
      }
  
      let newPosition = (index+code)%alphabet.length;
      if (newPosition >= alphabet.length) {
        newPosition -= alphabet.length;
      }

      encrypted += alphabet[newPosition];
    }

  document.getElementById("result").innerHTML = encrypted
}

function copyTexto(id){
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  try {
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      console.log('Texto copiado com sucesso. ' + r);
  } catch (err) {
      console.log('Não foi possível copiar!');
  }
}