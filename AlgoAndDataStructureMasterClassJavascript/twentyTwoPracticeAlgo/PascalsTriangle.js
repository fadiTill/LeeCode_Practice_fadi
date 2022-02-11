// 118. Pascal's Triangle


// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:




var generate = function(numRows) {
    //numb of row equal numRows
    // nextrow = prev row sum num 
    // first and last always 1 
    
    
  //   [[1],
  //   [1,1],
  //   [1,2,1],
  //  [1,3,3,1],
  // [1,4,6,4,1]]
    let triangle = new Array(numRows);
    for(let i= 0; i< numRows; i++){
        let row = new Array(i+1);
        row[0] = 1;
        row[row.length -1] = 1;
        for (let j = 1; j< row.length -1; j++){
            let prevRow = triangle[i-1];
            row[j] = prevRow[j]+ prevRow[j-1];
        }
       triangle[i] = row
    }
    return triangle
    
};