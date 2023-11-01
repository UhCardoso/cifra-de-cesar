const inputText = document.querySelector("#inputText-decrypt");
if(inputText) {
    inputText.addEventListener("keyup", () => {
        let code = document.getElementById("code-decrypt").value;
        const regex = /^[0-9]+$/;
        const text = inputText.value;
  
        if(regex.test(code)) {
          decryptMessage(text);
        } else {
          alert("Escreva a chave para decifrar a mensagem")
        } 
      });

      inputText.addEventListener("click", () => {
        let code = document.getElementById("code-decrypt").value;
        const regex = /^[0-9]+$/;
        const text = inputText.value;
  
        if(regex.test(code)) {
          decryptMessage(text);
        } else {
          alert("Escreva a chave para decifrar a mensagem")
        } 
      });
}

function decryptMessage(text) {
    if(text != undefined) {
        let code = parseInt(document.getElementById("code-decrypt").value);
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let decrypted = "";
    
        for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const index = alphabet.indexOf(char);
    
        if (index === -1) {
            decrypted += char;
            continue;
        }
        
        let newPosition = (index-code+alphabet.length)%alphabet.length;
        if(newPosition < 0) {
          newPosition+= alphabet.length
        }

        decrypted += alphabet[newPosition];
      }

      document.getElementById("result-decrypt").innerHTML = decrypted
    }
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