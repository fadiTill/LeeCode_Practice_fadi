// Given a file and assume that you can only read the file using a given method read4, implement a method to read n characters.

// Method read4:

// The API read4 reads four consecutive characters from file, then writes those characters into the buffer array buf4.

// The return value is the number of actual characters read.

// Note that read4() has its own file pointer, much like FILE *fp in C.

// Definition of read4:

//     Parameter:  char[] buf4
//     Returns:    int

// buf4[] is a destination, not a source. The results from read4 will be copied to buf4[].



// ex1
// Input: file = "abc", n = 4
// Output: 3

var solution = function(read4) {
    
    return function(buf, n) {
        let data = [];
        let count = 0;
        let stop = false;
        while(!stop && count < n){
            var countData = read4(data);
            stop = countData < 4;
            countData = Math.min(countData, n-count);
            for(let i = 0; i < countData; i++){
                buf[count++] = data[i];
            }
        }
        return count
    };
};
