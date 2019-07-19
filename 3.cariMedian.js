function cariMedian(arr) {
  var result = '';
  for (var i = 0 ; i < arr.length ; i++) {
    // console.log(arr[i])
    if (arr.length % 2 !== 0) {
      result += arr[i].length / 2;
    }
  }
  return Number(result);
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5