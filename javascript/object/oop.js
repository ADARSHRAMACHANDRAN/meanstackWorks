// prototype inheritence
var baleno={
    name:"baleno",
    manufacture:"suzuki",
    colors:["blue","red","white"],
    varients:"petrol",
    price:"8lacks",
    getPrice(){
        return this.price
    }
}



var glanza={
    name:"glanza",
    manufacture:"toyota",
    price:"9lacks"
}
glanza.__proto__=baleno
console.log(glanza.name);
