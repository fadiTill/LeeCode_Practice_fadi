// function hash(key, arrayLen){
//     let total = 0;
//     for(let char of key){
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }
function hash(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

//hash table
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    //Set
    //accept a a key and value
    set(key,value){
     //hash the key
     let index = this._hash(key);
     if(!this.keyMap[index]){
         //array via separate chaining

         this.keyMap[index] = []
     }
    //stores the key-value pair in the hash table 
    this.keyMap[index].push([key,value]);
    
    }
    
    //get
      //Accept a key 
    get(key){
       //hashes the key
       let index = this._hash(key) 
       //retrieves the key-value pair in the hash table
       if(this.keymap[index]){
           for(let i = 0; i < this.keyMap[index].length; i++){
               if(this.keyMap[index][i][0]=== key){
                   return this.keyMap[index][i][1]
               }
           }
            //if the key isn't found, returns undefined
           return undefined;
       }
      
    }
    //values
    values(){
//Loop trough the hash table array and returns an array of values in the table
     let valuesArr = [];
     for(let i = 0; i < this.keyMap.length; i++){
     if(this.keyMap[i]){
     for(let j = 0; j < this.keyMap[i].length; j++){
        if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1])

        }
    }
    }
}
   return valuesArr;
   
}
//Keys
//loop through the has table array and returns an array of keys in the table
keys(){
    var keysVal = [];
    for(let i = 0; i< this.keyMap.length; i++){
        if(this.keymap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                if(!keysVal.includes(this.keyMap[i][j][0])){
                    keysVal.push(this.keyMap[i][j][0])
                }
            }
        }
    }
    return keysVal;   
}

    

   
}



let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")


//BIG O

//insert 0(1)
//Deletion O(1)
//Access O(1)