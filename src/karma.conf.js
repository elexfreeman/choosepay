var а = {};

(function clear(a) {
    a.a = 10;
    a = null;
})(a);

console.log(a); // ???