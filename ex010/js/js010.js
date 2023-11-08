function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12){
        img.src = "imagens/imagem-dia.png"
        document.body.style.backgroundColor = "#707245"
    } else if (hora >= 12 && hora < 18){
        img.src = "imagens/imagem-tarde.png"
        document.body.style.backgroundColor = "#e3850a"
    } else{
        img.src = "imagens/imagem-noite.png"
        document.body.style.backgroundColor = "#15294a"
    }
}
