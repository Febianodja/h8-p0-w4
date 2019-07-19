function changeMe(arr) {
    var currentYear = 2019;
    for (var i = 0 ; i < arr.length ; i++) {
        var nama = i+1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':';
        var profile = {firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2] }
        
        var umur = currentYear - arr[i][3];
        if (arr[i][3] === undefined || arr[i][3] > currentYear) {
            profile.age = 'Invalid Birth Year';
        } else {
            profile.age = umur
        }
        console.log(nama);
        console.log(profile);
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""