var arr1=[11,10,20,21];
var arr2=[12,11,34,21];
let p1=0 ,p2=0;
//for(let num1 of arr1){
 //   for(let num2 of arr2){
//        if(num1==num2){
//            arr3.push(num1)  
//            num2++
//        }
//    }
//}
//console.log(arr3);
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log("common elements" , arr1[p1]);
        p1++;
        p2++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
}