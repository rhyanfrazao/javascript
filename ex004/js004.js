var nome = window.prompt("Qual é o seu nome?");
// document.write("Seja bem-vindo(a) " + nome);
document.write(`Seja bem-vindo <strong>${nome.toUpperCase()}</strong>`);
document.write(`<br>Seu nome tem ${nome.length} letras`);