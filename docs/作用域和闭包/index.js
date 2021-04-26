var module1 = (function() {
    var circle = {x: 0, y: 0, r: 1}

    function calculate(r) {
        return Math.PI * Math.pow(r, 2);
    }

    calculate(circle.r);
})();

var module2 = (function() {
    var rect = {w: 1, h: 1}

    function calculate(w, h) {
        return w * h;
    }

    calculate(rect.w, rect.h);

    console.log(module1.circle);
})();