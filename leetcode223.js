/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

var computeArea = function (x1, y1, x2, y2, x3, y3, x4, y4){
    let area1 =(x2 - x1) * (y2 - y1);
      let area2 =(x4 - x3) * (y4 - y3);
      let xLen = getDirectionLen(x1,x2,x3,x4)
      let yLen = getDirectionLen(y1,y2,y3,y4)
      return area1 + area2 - xLen * yLen
  };
  
  function getDirectionLen(p1, p2, p3, p4)
  {
      let len1 = p2 - p1;
      let len2 = p4 - p3;
      let max = Math.max(p1, p2, p3, p4)
      let min = Math.min(p1, p2, p3, p4)
  
  if (max - min >= len1 + len2){
     return 0 
  } else if (max - min === len1){
      return len2
  }else if (max - min === len1){
      return len1
  }else {
      return (len1 + len2) - (max - min)
  }
  
  
  };
 console.log(computeArea(-3,0,3,4,0,-1,9,2));
