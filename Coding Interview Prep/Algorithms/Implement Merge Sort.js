

function mergeSort(array) {
  // change code below this line
if (array.length === 1) {
    // return once we hit an array with a single item
    return array
  }

  const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
  const left = array.slice(0, middle) // items on the left side
  const right = array.slice(middle) // items on the right side
 // change code above this line
  return merge(
    mergeSort(left),
    mergeSort(right)
)
 

}
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

document.write(mergeSort([1, 4, 2]));