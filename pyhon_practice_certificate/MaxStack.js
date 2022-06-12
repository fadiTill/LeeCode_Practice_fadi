var MaxStack = function() {
    this.count = 0;
    this.storage = {};
    
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.storage[this.count] = x
    this.count++
    
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if (this.count === 0){
        return undefined 
    }
    this.count--
    result = this.storage[this.count]
    delete this.storage[this.count]
    return result
    
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.storage[this.count-1]
    
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    if(this.count === 1){
        return this.storage[this.count]
    }
    return Math.max(this.storage[this.count])
    
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
     if (this.count === 0){
        return undefined 
    }
    this.count--
    result = Math.max(this.storage[this.count])
    delete Math.max(this.storage[this.count])
    return result
    
    
};
//pass case
//["MaxStack","push","push","push","top","popMax","top","peekMax","pop","top"]
//[[],[5],[1],[5],[],[],[],[],[],[]]

//fail
//["MaxStack","push","peekMax","top"]
//[[],[5],[],[]]


