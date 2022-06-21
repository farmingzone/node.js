var k = {name:'k', first:10, second:20}
var l = {name:'l', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
console.log(sum.call(k, '>')); //apply
console.log(sum.call(l, ':'));
var kimsum = sum.bind(k, '-');
console.log(kimsum());