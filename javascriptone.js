var alphabets = function(x, y, max) {
    function expression(x, y) {
        return Math.log(y) / Math.log(x);
    }
    let arr = [],res = []
    let maxg = x===1 ? 0 : Math.round(expression(x,max-1))
    let maxh = y===1 ? 0 : Math.round(expression(y,max-1))
    for(i=0;i<=maxg;i++) {
        for(j=0;j<=maxh;j++) {
            let sum = Math.pow(x,i) + Math.pow(y,j)
            if(sum<=b) {
                arr.push(sum)
            } else {break}
        }
    }
 
     console.log(res);
    return res
   
};
console.log(alphabets(15,15));

