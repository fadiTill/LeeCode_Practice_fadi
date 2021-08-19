// Object are fast
//insertion O(1)
//Removal O(1)
//searching O(n)
//Acces O(1)


//methods of objects
//Objects.keys O(n)
//Objects.values O(n)
//Objects.entries O(n)
//hasOwnproperty O(1)


let softwareEngineer = {
    firstName:"fadi",
    isEngineer:true,
    dateOfbirth:[0,2,0,4]
  }
  // console.log(Object.keys(softwareEngineer))
  // console.log(softwareEngineer.hasOwnProperty("firstName"))
  // console.log(Object.values(softwareEngineer))
  console.log(Object.entries(softwareEngineer))

  //Arrays
  // When you need order
  //when you need accse fast
  //searching 0(n)
  // Acces O(1)
  //insertion depends  ex at the end push and pop O(1) if beginning reindex O(n) shift,unshift
  //removal depends


  //Methods 

  //push O(1)
  //pop O(1)
  //shift O(n)
  //unshift O(n)
  //concat O(n)
  //slice O(n)
  //splice O(n)
  //sort O(n * log n)
  // forEach/map/filter/reduce... O(n)