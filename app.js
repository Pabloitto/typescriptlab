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
//# sourceMappingURL=app.js.map