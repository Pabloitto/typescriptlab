var user1 = {
    dataSource: [1, 2, 3, 4, 1, 2, 3],
    findValue: function (n) {
        return this.dataSource.filter(function (i) { return i === n; });
    }
};
var user2 = {
    dataSource: [1, 1, 1, 1, 1, 1, 1],
    findValue: function (n) {
        return this.dataSource.filter(function (i) { return i === n; });
    }
};
console.log(user2.findValue(1));
var x = "Hola Mundo";
console.log(x);
x = 123;
console.log(x);
var y = 123;
console.log(typeof y);
/*function myFn():never{
    while(true){
        break;
    }
    //return 1;
}*/
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
(function () {
    if (true) {
        var variable = "test1";
    }
    console.log(variable);
}());
var addNumbers = function (n1, n2) {
    return n1 + n2;
};
var multiplyNumbers = function (n1, n2) { return n1 * n2; };
console.log(addNumbers(10, 3));
console.log(multiplyNumbers(10, 3));
var greet = function (friend) { return console.log("Hello " + friend); };
greet("Juan");
var countdown = function (start, middle) {
    if (start === void 0) { start = 10; }
    if (middle === void 0) { middle = start / 2; }
    while (start > 0) {
        start--;
    }
    console.log("Done", start, middle);
};
//countdown(50);
var numbers = [1, 2, 3, 99, -5];
console.log(Math.max.apply(Math, numbers));
function makeArray(n, n2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return args;
}
console.log(makeArray.apply(void 0, [1, 2].concat([5, 5, 5, 5, 5, 5])));
console.log(makeArray(1, 2, 3, 4, 5));
var myHobbies = ["Cooking", "Sports"];
var h1 = myHobbies[0], h2 = myHobbies[1];
console.log("My hobbies are", h1, h2);
var userData = { userName: "Juan", age: 27 };
var userName = userData.userName, age = userData.age;
console.log(userName, age);
var myName = "Juan";
//# sourceMappingURL=app.js.map