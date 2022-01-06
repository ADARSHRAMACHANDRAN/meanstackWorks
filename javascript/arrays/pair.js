var array=[2,3,4,5]
var element=8;
//for(let i of array){
  //  for(let j of array){
    //    if((i+j)==sum){
      //      console.log("pairs are", i , j);
        //}
        //break;
//    }
//}
var lower=0 , upper=array.length-1;
while(lower<upper){
    let current_sum=array[lower]+array[upper]
    if(element==current_sum){
        console.log("pairs :", array[lower],array[upper]);
        break
    }
    else if(current_sum<element){
        lower++
    }
    else if(current_sum>element){
        upper--
    }
}
