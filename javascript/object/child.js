class parent{
    bike(){
        console.log("pulser");
    }
}

class child extends parent{
    bike(){
        super.bike()
        console.log("himalayan"); //overriding over parent bike()
    }
}
var ch=new child()
ch.bike()

// this - reffering current object
// super - reffering parent object
// 