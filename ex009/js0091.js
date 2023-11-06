var idade = 64
if (idade < 16){
    console.log(`Com ${idade} anos você ainda não pode votar`)
} else{
    if (idade < 18 && idade >= 16 || idade >= 65){
        console.log(`Com ${idade} anos o voto é opcional`)
    } else{
        console.log(`Com ${idade} anos o voto é obrigatório`)
    }
}