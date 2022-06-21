var k = {
    name:'kim',
    fitst:10,
    second:20,
    sum:function(){
        return this.fitst+this.second;
    }
}
console.log("kim.sum(kim.first, kim.second)", kim.sum());