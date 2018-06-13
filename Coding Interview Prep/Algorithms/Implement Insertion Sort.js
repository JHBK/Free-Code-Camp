function insertionSort(array) {
  // change code below this line
for (var i = 0; i < array.length; i++) {
    let value = array[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      array[j + 1] = array[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    array[j + 1] = value
}
  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

document.write(insertionSort([1, 4, 2]));