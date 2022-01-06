var num=12;
var res=0;
while(num !=0){
    let last_digit=num % 10;
    res+=last_digit*last_digit*last_digit;
    num=Math.floor(num/10)
}
console.log(res);