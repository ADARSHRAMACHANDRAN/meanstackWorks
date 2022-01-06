var arr=[1,2,6,4,9,36]
element=45;
var flag=0;
for(let num of arr){
    if(element==num){
        flag=1;
        break
    }
}
console.log(flag==0?"not found":"element found");



//reduce