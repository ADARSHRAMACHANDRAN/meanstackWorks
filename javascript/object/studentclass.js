// classical approach

class student{
    constructor(name,age,rollNo,standard,gender){  //setStudent
        this.name=name
        this.age=age
        this.rollNo=rollNo
        this.standard=standard
        this.gender=gender
    }
    printStudent(){
        console.log(this.name,this.age,this.rollNo,this.standard,this.gender);
    }
}
var obj1=new student("anik",15,3,"10th","male") //calling constructor automatically
// obj1.setStudent("anik",15,3,"10th","male")
obj1.printStudent()

var obj2=new student("dathan",14,16,"9th","male")
// obj2.setStudent("dathan",14,16,"9th","male")
obj2.printStudent()

var obj3=new student("aswathy",15,6,"10th","female")
// obj3.setStudent("aswathy",15,6,"10th","female")
obj3.printStudent()
