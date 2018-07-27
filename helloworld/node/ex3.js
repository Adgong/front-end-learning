var geval = eval;
var x = "global" ; var y = "global";
function f() {
    var x = "local";
    eval("x += 'changed';");
    return x;
}
function g() {
    var y = "local";
    eval("y += 'changed';");
    return y;
}
console.log(f(), x);
console.log(g(), y);