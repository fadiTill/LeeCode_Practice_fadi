// let instructor = {
//     firstnName: "Kelly",
//     isInstructor: true,
//     favaoriteNumbers: [1,2,3,4]
//   }
  
  
//   Object.keys(instructor)
//   Object.entries(instructor)
//   instructor.hasOwnProperty('firstnName')



// let names = ["Michael", "Melissa", "Andrea"]
// names.push()
// names.pop()
// names.shift()
// name.unshift()
// names.concat()
// names.slice()
// names.splice()
// names.sort()

//Frequency counter



function same(array1, array2){
    if(array1.length !== array2.length){
        return false;
    } 
    for (let i = 0; i < array1.length; i++){
        let corectIndex = array2.indexOf((array1[i]**2))
          if(corectIndex === -1){ 
              return false;  
         }
         console.log(array2)
      array2.splice(corectIndex, 1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])