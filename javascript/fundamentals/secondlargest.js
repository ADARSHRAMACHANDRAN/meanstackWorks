var num1=31;
var num2=8;
var num3=6;
if((num1>num2)&&(num1>num3)){
    if(num2>num3){
        console.log(`2nd largest is ${num2}`);
    }
    else{
        console.log(`2nd largest is ${num3}`);
    }
}
else if((num2>num1)&&(num2>num3)){
    if(num1>num3){
        console.log(`2nd largest is ${num1}`);
    }
    else{
        console.log(`2nd largest is ${num3}`);
    }
}
else if ((num3>num1)&&(num3>num2)) {
    if(num1>num2){
        console.log(`2nd largest is ${num1}`);
    }
    else{
        console.log(`2nd largest is ${num2}`);
    }
}
