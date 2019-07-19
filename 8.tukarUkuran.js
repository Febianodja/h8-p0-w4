function tukarBesarKecil(kalimat) {
    var upperCase = '-!0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    var lowerCase = '-!0123456789abcdefghijklmnopqrstuvwxyz ';
    var result = '';
    for (var i = 0 ; i < kalimat.length ; i++) {
        for (var j = 0 ; j < upperCase.length; j++) {
            if (kalimat[i] === upperCase[j]) {
                result += lowerCase[j];
            } else if (kalimat[i] === lowerCase[j]) {
                result += upperCase[j];
            }
        }
    }
    return result;
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"