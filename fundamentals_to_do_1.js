// Multiples of three but not all - Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.


for(var num = -300; num <= 0; num = num + 3){
    if(num == -3 || num == -6){
        continue;
    }
    console.log( num);
}

// Print integers from 2000 to 5280, using a WHILE.

var int = 2000;
while (int < 5281)
{
    console.log(int);
    int++;
}
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
var arr = [];
for(var inte = 1; inte <= 100; inte++){
    if(inte%10 == 0){
        arr.push("Coding Dojo");
    }else if(inte%5 == 0){
        arr.push("Coding");
    }else{
        arr.push(inte);
    }
}
console.log(arr);

// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

for(var mult = 9; mult > 2; mult -= 3){
    console.log(mult)
}


