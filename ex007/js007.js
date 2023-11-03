function somar(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var r = window.document.getElementById('res');
    var n1 = Number.parseFloat(tn1.value);
    var n2 = Number.parseFloat(tn2.value);
    var soma = n1 + n2;
    r.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}