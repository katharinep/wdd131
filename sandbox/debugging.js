const pi = 3.14;
let area = 0;

function circleArea (radius) {
    area = radius * radius * pi;
    return area;
}

area = circleArea(3);
console.log("The first area is " + area + "(28.26 expected)");

area = circleArea(4);
console.log("The second area is "+ area + "(50.24 expected)");
