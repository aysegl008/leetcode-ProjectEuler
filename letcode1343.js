/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var arr = [2,2,2,2,5,5,5,8]
var k = 3
var  threshold = 4
var numOfSubarrays = function(arr, k, threshold) {
    var subArraySum= 0;
      for(var i= 0; i<k; i++){
          subArraySum += arr[i];
      }
      var res=0;
      while(i<arr.length){
          if(subArraySum/k >= threshold){
              res++
          }
          subArraySum += arr[i];
          subArraySum -= arr[i-k];
          i++;
      }if (subArraySum/k >= threshold){
          res++;
      }
      return res;
      
  };
  console.log(numOfSubarrays([2,2,2,2,5,5,5,8],3,4))