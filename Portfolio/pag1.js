function salvaform()
{
    alert("enviado com sucesso");

    
    let nometemp = document.getElementById('nome').value
    let emailtemp =  document.getElementById('email').value
    let msgtemp = document.getElementById('msg').value

    
    localStorage.setItem("nome", nometemp)
    localStorage.setItem("email", emailtemp)
    localStorage.setItem("msg", msgtemp)
}
