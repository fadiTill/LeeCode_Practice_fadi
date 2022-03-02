// 168. Excel Sheet Column Title

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

var convertToTitle = function(columnNumber) {
    let string = '';
    let key = ["Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];
    if(columnNumber <= 0){
        return  string;
    }  
        while( columnNumber > 0){
            let place = columnNumber % 26;
            string = key[place] + string;
         columnNumber = place === 0 ? Math.floor(columnNumber/26)-1 :       Math.floor(columnNumber/26);
        }
        return string
    
};
