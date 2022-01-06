var num=0123;
var res="";
while(num !=0){
    let last_digit=num % 10;
    console.log(last_digit);
    res+=last_digit;
    num=Math.floor(num/10)
}
console.log(res);