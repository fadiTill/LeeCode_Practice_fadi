class Student{
    constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName =lastName;
    this.year = year;
    this.tardies = 0;
    this.numbs =[]
  }
   fullName(){
     return `your full name is ${this.firstName} ${this.lastName}`;
   }
   markLate(){
     this.tardies +=1;
     if(this.tardies >=2){
       return "you are expelled"
     }
     return `${this.firstname} has been ${this.tardies} times`;
   }
   addNum(numb){
     this.numbs.push(numb)
       return this.numbs
    }

    addAverage(){
     let add = this.numbs.reduce(function(a,b) {return a+b;})
     return add/this.numbs.length;
    }
 
    static allStudents(){
      return "all of the student"
    }
 
 }
 
 let test = new Student("H","V","11","3");
 // console.log(test)
 //console.log(test.firstName)
 console.log(test.markLate())
 console.log(test.markLate())
 console.log(test.markLate())
 console.log(test.addNum(78))
 console.log(test.addNum(100))
 console.log(test.addAverage())
 console.log(Student.allStudents())
 