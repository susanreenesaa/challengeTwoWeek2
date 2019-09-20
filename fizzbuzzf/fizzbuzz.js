function fizzBuzz(list1, list2) {
   var arrayLength= list1.length +list2.length;
    if((arrayLength % 5 === 0) && (arrayLength % 3===0)){
        return "Fizzbuzz";
     }
    else if (arrayLength % 5 === 0){
        return "Buzz";
    }
    else if(arrayLength % 3 === 0){
        return "Fizz";
    } 
    else if((arrayLength % 5 !== 0) && (arrayLength % 3 !== 0)){
        return arrayLength;
    } 
    
    
}


console.log( fizzBuzz([1, 2, 3], [1, 2]));
console.log(fizzBuzz([1, 2, 3,7,7,8,9,5,2,1,4,15,], [1,6,4]));
console.log(fizzBuzz([1, 2, 3], [ ]));
console.log(fizzBuzz([1, 2, 3], [ 1]));
module.exports = fizzBuzz;
