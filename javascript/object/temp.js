var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},
    {district:"ekm",temparature:27},
    {district:"ekm",temparature:32},


]
var weather_data={}
for(data of dataset){
    distname=data.district
    curTemp=data.temparature
    if(distname in weather_data){
        let oldTemp=weather_data[distname]
        if(curTemp>oldTemp){
            weather_data[distname]=curTemp
        }

    }
    else{
        weather_data[distname]=curTemp
    }
}
console.log(weather_data);