/**Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10,  */
function countPositivesSumNegatives(input) {
    // your code here
    let first = 0;
    let second = 0;
    input == null ? input = [ 0, 0 ] : 0
    
    for (let i = 0; i < input.length; i++) {
      input[i] > 0 ? first++ :
      input[i] < 0 ? second += input[i] :
      0
    }
    let result = [first, second];
    
    return result[0] == 0 ? result = [] : result
  }