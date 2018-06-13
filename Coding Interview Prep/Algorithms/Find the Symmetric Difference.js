
function sym() {
  var arrays = [].slice.call(arguments);

  function diff(arr1, arr2) {
    var arr = [];

    arr1.forEach(function(v) {
      if ( !~arr2.indexOf(v) && !~arr.indexOf(v) ) {
        arr.push( v );
      }
    });

    arr2.forEach(function(v) {
      if ( !~arr1.indexOf(v) && !~arr.indexOf(v) ) {
        arr.push( v );
      }
    });
    return arr;
  }

  var result = diff(arrays.shift(), arrays.shift());

  while (arrays.length > 0) {
    result = diff(result, arrays.shift());
  }

  return result;
 
}
sym([1, 2, 3], [5, 2, 1, 4]);
//document.write(sym([1, 2, 3], [5, 2, 1, 4]));

