function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var ano_nasc = Number.parseInt(fano.value)
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else{
        var fgen = document.getElementsByName('radgen')
        var idade = ano - ano_nasc
        var genero = ''
        var img = document.createElement('img')     // criando uma tag img no html
        img.setAttribute('id','foto')   // criando um id igual a foto para a img criada
        if (fgen[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 18){
                img.setAttribute('src','imagens/baby-boy.jpg')
            } else if (idade >= 18 && idade < 60){
                img.setAttribute('src','imagens/homem-adulto.jpg')
            } else{
                img.setAttribute('src','imagens/old-man.png')
            }
        } else{
            genero = 'Mulher'
            if (idade >= 0 && idade <18){
                img.setAttribute('src','imagens/baby-girl.jpg')
            } else if (idade >=18 && idade <60){
                img.setAttribute('src','imagens/mulher-adulto.jpg')
            } else{
                img.setAttribute('src','imagens/old-lady.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        res.appendChild(img)    // sem esse comando a imagem não aparece
    }
}