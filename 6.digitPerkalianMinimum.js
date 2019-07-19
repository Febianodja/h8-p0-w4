function digitPerkalianMinimum(angka) {
    var temp = [];
    var result = ''
    for (var i = 0 ; i <= angka ; i++) {
        if (angka % i === 0) {
            temp.push(i)
        }
    }
    var center = (temp.length-1) / 2;
    var arr = [];
    for (var j = 0 ; j < temp.length ; j++) {
        if (temp.length % 2 == 0) {
            if (j === center - 0.5 || j === center + 0.5) {
                arr.push(temp[j])
            }
        } else if (temp.length % 2 !== 0) {
            if (j === center) {
                arr.push(temp[j])
            }
        }
    }
    for (var k = 0 ; k < arr.length ; k++) {
        result += arr[k];
    }
    if (result.length === 1) {
        return result.length + 1;
    } else {
        return result.length;
    }
}

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2