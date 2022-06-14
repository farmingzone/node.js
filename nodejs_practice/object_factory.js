function Person(name, first, second, third){
    this.name = name,
    this.fitst = first,
    this.second = second,
    this.third = third,
    this.sum = function(){
        return this.fitst+this.second+this.third;
    }
}
var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 20 ,10);
console.log("kim.sum", kim.sum());
console.log("lee.sum", lee.sum());