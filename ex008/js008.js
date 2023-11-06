
function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var vel = Number.parseFloat(txtv.value)
    var x = vel - 110
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Sua velocidade atual é ${vel} km/h<p>`
    
    if (vel >= 110){
        res.innerHTML += `<p>Você está <strong>multado</strong> por estar ${x} km/h acima da velocidade permitida</p>`
    }else{
        res.innerHTML += "<p>Diriga com cuidado!</p>"
    }
}