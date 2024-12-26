// input1 = 3
// input2 = 4
// output = 12
// condition - don't use multiplication, use minimum + operator

function multiplyWithAdd(a,b) {
    var max = Math.max(a,b);
    var min = Math.min(a,b);
    var result = 0;
    for(let i=0;i<min;i++) {
        result += max;
    }
    console.log(result);
}
var input1 = 3
var input2 = 40
multiplyWithAdd(input1, input2);
