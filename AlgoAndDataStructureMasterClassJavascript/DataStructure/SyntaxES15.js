//classes  synctactical sugar blueprint for creating objects, prototype-based inheritance

//this inside a constructor refer to the individual instance of the class ex fistStudent
class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.LastName = LastName;
    }
}

let firstStudent = new Student("fadi", "Till");
console.log(firstSudent)
let seconStudent = new Student("fadimata", "Till");


// Instance Methods

class StudentB{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores =[]
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "expelled"
        }
        return `Your full name is ${this.firstName} ${this.lastName} has been late ${this.tadies} times`;
    }
     addScore(score){
         this.scores.push(score);
         return this.scores
     }
     calculateAverage(){
      let sum = this.scores.reduce(function(a,b){return a+b;})
      return sum/this.scores.length;
     }

     enrollStudents(){
         return "Enrolling Students"
     }
}

let firstStudent = new StudentB("Will", "Till", 0);

// firstStudent.addScore(100)
// firstStudent.addScore(50)
// firstStudent.calculateAverage()

Student.enrollStudents()

//Class Methods
// class StudentC{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName() {
//          return `Your full name is ${this.firstName} ${this.lastName}`;
//     }
// //utility function, part of the class
//     static enrollStudents(...students){

//     }
    
// }

// let firstName = new Student("Alex","Till");
// let secondStudent = new  Student("Eva","Till");

// Student.enrollStudents([firstStudent, seconStudent])


class Point{
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    // Neither static methods nor static properties can be called on instances of the class. 
    //instead, they 're called on the class
    //itself
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(5,5);
const p2 = new Point(10,10);

Point.distance(p1,p2)