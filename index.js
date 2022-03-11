function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i <= array.length -1; i++){
        debugger;
        for (let i2 = 0; i2 <= array.length - 1; i2++){
            debugger;
            if(i !== i2){
                if (array[i] + array[i2] === target){
                    return true
                }
            }    
            else if (i === i2){
                    i2++
                    if (array[i] + array[i2] === target){
                        return true
                    }
            }
        
        }
    }
    return false
}


/* 
  Write the Big O time complexity of your function here
  the time complexity of this function is O(2n) => O(n)
*/

/* 
  Add your pseudocode here
  iterate over indeces of array
     for each index
         iterate over the array and 
           if first index is not the same as second index add first index value to second index value
            if the sum equals target
                return true
  else return false

*/

/*
  Add written explanation of your solution here
  using two iterations of the same array i am able to check all possible sums for elments one element at a time
  as long as i am not adding values of the same index. returning true if a match is found.
  the default return value of this function is false if no match is found
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
