function compound(p, i, t) {
    return ((p * ((1 + (i / 100)) ** t)) - p);
}

function simple(p, i, t) {
    return ((p * i * t) / 100);
}

function doublecompound(i) {
    console.log(1 + (i/100));
    return ((Math.log(2))/(Math.log(1 + (i/100))));
}

function triplecompound(i) {
    return ((Math.log(3))/(Math.log(1 + (i/100))));
}

function quadruplecompound(i) {
    return ((Math.log(4))/(Math.log(1 + (i/100))));
}

function doublesimple(i) {
    console.log(1 + (i/100));
    return (100/i);
}

function triplesimple(i) {
    return (200/i);
}

function quadruplesimple(i) {
    return (300/i);
}

function calculate() {
    var principal = document.getElementById("principal").value;
    var interest = document.getElementById("roi").value;
    var time = document.getElementById("time").value;

    document.getElementById("interest-final").innerHTML = "Interest: " + compound(principal, interest, time).toFixed(2);
    document.getElementById("doublefill").innerHTML = doublecompound(interest).toFixed(1);
    document.getElementById("triplefill").innerHTML = triplecompound(interest).toFixed(1);
    document.getElementById("quadruplefill").innerHTML = quadruplecompound(interest).toFixed(1);
    document.getElementById("interest-final-simple").innerHTML = "Interest: " + simple(principal, interest, time).toFixed(2);
    document.getElementById("doublefill-simple").innerHTML = doublesimple(interest).toFixed(1);
    document.getElementById("triplefill-simple").innerHTML = triplesimple(interest).toFixed(1);
    document.getElementById("quadruplefill-simple").innerHTML = quadruplesimple(interest).toFixed(1);
    document.getElementById("compare").classList.remove('compare1');
}
