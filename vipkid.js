let arr = [-1,2,4,5,-2];
function reverse(arr){
    let count = 0;
    for(let i =0;i<arr.length; i++){
        for(let j =0;j<arr.length;j++){
            if(arr[i]+arr[j] === 0){
                count+=1;
                arr.splice(i,1);
            }
        }
    }
    return count;
}
console.log(reverse(arr))
// 归并排序
var arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(mergeSort(arr))

function merge(left, right) {
  var tmp = [];
 
  while (left.length && right.length) {
    if (left[0] < right[0])
      tmp.push(left.shift());
    else
      tmp.push(right.shift());
  }
 
  return tmp.concat(left, right);
}
 
function mergeSort(a) {
  if (a.length === 1) 
    return a;
 
  var mid = Math.floor(a.length / 2);
  var left = a.slice(0, mid);
  var right = a.slice(mid);
 
  return merge(mergeSort(left), mergeSort(right));
}