var pattern="ABACC"
var rec={}
var op=[]
pattern.split("").map(char=>char in rec? op.push(char):rec[char]=1)
// Array.from(pattern).map(char=>char in rec? op.push(char):rec[char]=1)
console.log(op[0]);
// for(let char of pattern){
//     if(char in rec){
//         console.log("first recursive character is" ,char);
//         break
//     }
//     else
//     rec[char]=1
// }