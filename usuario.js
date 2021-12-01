function preencheCampos(campos){
    document.getElementById("id").value = campos.id;
    document.getElementById("login").value = campos.login;
    document.getElementById("senha").value = campos.senha;
    document.getElementById("nome").value = campos.nome;
    document.getElementById("curso").value = campos.curso;

    console.log(campos.nome)
}


async function achaUser() {
    let id = document.getElementById("id").value;
  
    console.log(id);
  
    const url = `https://api-univesp.herokuapp.com/apicadusuario/cadusuario/${id}`;
  
    //const object = { cep, nome, email, telefone };
  
    const myInitGet = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    const dados = await fetch(url, myInitGet);
    const elens = await dados.json();
    preencheCampos(elens);
  }