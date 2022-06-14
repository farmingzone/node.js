class Person{
    constructor(name, fitst, second){
        this.name = name;
        this.fitst = fitst;
        this.second = second; 
    }
    sum(){
        return 'prototype : '+(this.fitst+this.second);
    }
}

var kim = new Person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10)
console.log('kim.sum',kim.sum());
console.log('lee.sum',lee.sum());