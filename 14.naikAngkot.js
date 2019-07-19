function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    var tarif = 2000;
    for (var i = 0 ; i < arrPenumpang.length ; i ++) {
        var temp = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
        }
        result.push(temp);
    }
    for (var j = 0 ; j < result.length ; j++) {
        for (var k = 0 ; k < rute.length ; k++) {
            console.log(rute[k])
        }
    }
    // return result;
}
    
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]