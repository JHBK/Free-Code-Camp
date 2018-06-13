function bubbleSort(array) 

{
  const sortedArray = Array.from(array);
      let swap;
      do {
        swap = false;
        for (let i = 1; i < sortedArray.length; ++i) {
          if (sortedArray[i - 1] > sortedArray[i]) {
            [sortedArray[i], sortedArray[i - 1]] = [sortedArray[i - 1], sortedArray[i]];
            swap = true;
          }
        }
      } while (swap)
      return sortedArray;
  }

 

document.write(bubbleSort([1, 4, 2]));
