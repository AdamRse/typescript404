var str = "a";
var nb = 3;
var bl = true;
var any = "any";
var unknown = 0;
var nl = null;
var undef = undefined;
function vd(message) {
    console.log("coucou");
}
function error(message) {
    throw new Error(message);
}
var arr = [0, 1];
var tuple = [3, "Coucou"];
console.log(str, nb, bl, any, unknown, nl, undef, vd, error, arr, tuple);
