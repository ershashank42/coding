// Expected
// input = 'aabbbccdddd'
// output = 'a2b3c2d4'

function countAplha(str) {
    let newStr = '';
    let count = 1;
    let i;
    if(str.length > 0) {
        for(i=1;i<str.length;i++) {
            if(str[i] == str[i-1]) {
                count++;
            } else {
                newStr+=str[i-1];
                newStr+= count;
                count = 1;
            }
        }
        newStr+=str[i-1];
        newStr+=count;
        console.log(newStr);
    } else {
        console.log("empty input");
    }
}
var str = 'abb';
countAplha(str);

