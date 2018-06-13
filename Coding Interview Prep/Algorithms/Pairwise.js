function pairwise(arr, arg) {

	var result = 0;
 
 var newArr = arr;
 
 for(var i = 0; i < newArr.length; i++) {
   
   for(var j = i + 1; j < newArr.length; j++) {
    
     if(newArr[i] + newArr[j] == arg) {
       
       result += i + j;
      
       newArr[i] = newArr[j] = NaN;
     }
   }
 }
 return result;
 
}
//document.write(pairwise([1,4,2,3,0,5], 7));
pairwise([1,4,2,3,0,5], 7);