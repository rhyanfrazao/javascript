window.document.write(window.document.charset);
window.document.write("<br>");
window.document.write(window.navigator.appName);
window.document.write("<br>");

var p1 = window.document.getElementsByTagName('p')[0]; // o zero indica o primeiro paragrafo dos dois que temos no html
var p2 = window.document.getElementsByTagName('p')[1];
window.document.write("O texto do primeiro parágrafo é: " + p1.innerText);
// p1.style.color = "black"
window.alert(p2.innerHTML)

var d = window.document.getElementById('msg');
d.style.backgroundColor = "darkgrey";