/*
Este es un comentario

function Sumar () {
    var a = document.Formulario.a.value;
    var b = document.Formulario.b.value;
    var r = document.Formulario.c.value;
    r=parseFloat(a)=parseFloat(b);
    document.Formulario.c.value=r;
}

function Resta () {
    var a = document.Formulario.a.value;
    var b = document.Formulario.b.value;
    var r = document.Formulario.c.value;
    r=parseFloat(a)=parseFloat(b);
    document.Formulario.c.value=r;
}

function Multiplica () {
    var a = document.Formulario.a.value;
    var b = document.Formulario.b.value;
    var r = document.Formulario.c.value;
    r=parseFloat(a)=parseFloat(b);
    document.Formulario.c.value=r;
}

function Divide () {
    var a = document.Formulario.a.value;
    var b = document.Formulario.b.value;
    var r = document.Formulario.c.value;
    r=parseFloat(a)=parseFloat(b);
    document.Formulario.c.value=r;
}


*/




function Sumar () {
    var a = parseFloat(document.Formulario.a.value);
    var b = parseFloat(document.Formulario.b.value);
    var r = a + b;
    document.Formulario.c.value = r;
}

function Resta () {
    var a = parseFloat(document.Formulario.a.value);
    var b = parseFloat(document.Formulario.b.value);
    var r = a - b;
    document.Formulario.c.value = r;
}

function Multiplica () {
    var a = parseFloat(document.Formulario.a.value);
    var b = parseFloat(document.Formulario.b.value);
    var r = a * b;
    document.Formulario.c.value = r;
}

function Divide () {
    var a = parseFloat(document.Formulario.a.value);
    var b = parseFloat(document.Formulario.b.value);
    if (b !== 0) {
        var r = a / b;
        document.Formulario.c.value = r;
    } else {
        alert("¡Error! No se puede dividir por cero.");
    }
}

function Reset () {
    document.Formulario.a.value = "";
    document.Formulario.b.value = "";
    document.Formulario.c.value = "";
}


function Salida() {
    // Redireccionar a la página de agradecimiento
    window.location.href = "salida.html";
}
