var cesar =
    cesar ||
    (() => {
        //funcion para la operacion del cifrado
        var doStaff = (txt, desp, action) => {
            var rotate = (() => {
                var abc = [
                    "a",
                    "b",
                    "c",
                    "d",
                    "e",
                    "f",
                    "g",
                    "h",
                    "i",
                    "j",
                    "k",
                    "l",
                    "m",
                    "n",
                    "ñ",
                    "o",
                    "p",
                    "q",
                    "r",
                    "s",
                    "t",
                    "u",
                    "v",
                    "w",
                    "x",
                    "y",
                    "z",
                ];
                return (c) => {
                    var i = abc.indexOf(c.toLowerCase());
                    if (i != -1) {
                        var pos = i;
                        if (action) {
                            pos = (pos + desp) % 27;
                        } else {
                            pos =
                                pos - desp < 0
                                    ? pos - desp + 27
                                    : (pos - desp) % 27;
                        }
                        return abc[pos];
                    }
                    return c;
                };
            })();
            var re = /([a-zñ])/gi;
            return String(txt).replace(re, (match) => {
                return rotate(match);
            });
        };
        return {
            encode: (txt, desp) => {
                return doStaff(txt, desp, true);
            },
            decode: (txt, desp) => {
                return doStaff(txt, desp, false);
            },
        };
    })();

function codificar() {
    let desp = document.getElementById("desp").value;
    let cadena = document.getElementById("cadena").value;
    if (desp != "" && cadena != "") {
        if (Number(desp) < 27) {
            document.getElementById("resultado").innerHTML =
                '<div class="alert alert-info" role="alert">' +
                cesar.encode(cadena, Number(desp)) +
                "</div>";
            document.getElementById("msg").innerHTML = "";
        } else {
            document.getElementById("msg").innerHTML =
                '<div class="alert alert-warning" role="alert">se a excedido el numero de desplazamientos</div>';
        }
    } else {
        document.getElementById("msg").innerHTML =
            '<div class="alert alert-warning" role="alert">No deje campos vacios</div>';
    }
}
function decodificar() {
    let desp = document.getElementById("desp").value;
    let cadena = document.getElementById("cadena").value;
    if (desp != "" && cadena != "") {
        if (Number(desp) < 27) {
            document.getElementById("resultado").innerHTML =
                '<div class="alert alert-info" role="alert">' +
                cesar.decode(cadena, Number(desp)) +
                "</div>";
            document.getElementById("msg").innerHTML = "";
        } else {
            document.getElementById("msg").innerHTML =
                '<div class="alert alert-warning" role="alert">se a excedido el numero de desplazamientos</div>';
        }
    } else {
        document.getElementById("msg").innerHTML =
            '<div class="alert alert-warning" role="alert">No deje campos vacios</div>';
    }
}
function V_01() {
    let test = document.getElementById("desp").value;
    let reg = /[1-9][0-9]*/;
    test = String(test).match(reg);
    if (test > 26) {
        document.getElementById("msg").innerHTML =
            '<div class="alert alert-warning" role="alert">se a excedido el numero de desplazamientos</div>';
    } else {
        document.getElementById("msg").innerHTML = "";
    }
    document.getElementById("desp").value = test;
}

/*function V_02() {
    let test = document.getElementById("cadena").value;
    let reg = /[^ñ]+/;
    document.getElementById("cadena").value = String(test).match(reg);
}*/
