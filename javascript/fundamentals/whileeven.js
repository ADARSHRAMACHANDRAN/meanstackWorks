var lower_limit=10, upper_limit=50;

if(lower_limit>upper_limit){
    console.log("please enter the correct value for lower_limit");
}
else{
while(lower_limit<=upper_limit){
    if(lower_limit%2==0){
        console.log(lower_limit);
    }
    lower_limit++;
}
}