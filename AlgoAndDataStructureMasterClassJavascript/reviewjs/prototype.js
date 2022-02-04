
String.prototype.yell = function() {
	return `Yay ${this.toUpperCase()}!!!!! got the job!`;
};

'Fadi'.yell(); 

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function() {
	return 'need to  celebrate ';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); // "need to  celebrate at JING"