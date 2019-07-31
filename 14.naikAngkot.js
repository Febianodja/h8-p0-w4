function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var array = []
    if (arrPenumpang.length === 0){
      return array;
    } 
    else {
      var biaya = 2000;
      var penumpang;
      for (var i=0; i<arrPenumpang.length; i++){
        var obj = {};
        penumpang = arrPenumpang[i];
        obj['penumpang'] = penumpang[0];
        obj['naikDari'] = penumpang[1];
        obj['tujuan'] = penumpang[2];
        obj["bayar"] = biaya*(rute.indexOf(obj.tujuan) - rute.indexOf(obj.naikDari))
        array.push(obj)
      }
      
    }
    return array
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]