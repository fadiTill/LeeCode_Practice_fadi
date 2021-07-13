var addBinary = function(a, b) {
    //create an array sum and add carrie other
       // 11 
      // + 1
       //100
   // we add starting from the right side 
       // if there is a carry we return 0
       var lenA = a.length;
     var lenB = b.length;
     var max = Math.max(lenA, lenB);
     var result = '';
     var carry = 0;
     var val = 0;
   
     for (var i = 0; i < max; i++) {
       val = Number(a[lenA - 1 - i] || 0) + Number(b[lenB - 1 - i] || 0) + carry;
       carry = Math.floor(val / 2);
       result = (val % 2) + result;
     }
   
     if (carry) result = 1 + result;
   
     return result;
   
     
   };
   
   