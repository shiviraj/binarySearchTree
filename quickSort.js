const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

let comparison = 0;

const partition = (array, lowIndex, highIndex) => {
  const pivotElement = array[highIndex];
  let i = lowIndex - 1;
  for (let j = lowIndex; j < highIndex; j++) {
    if (array[j] <= pivotElement) {
      comparison++;
      swap(array, ++i, j);
    }
  }
  swap(array, ++i, highIndex);
  return i;
};

const quickSort = (array, lowIndex, highIndex) => {
  if (lowIndex < highIndex) {
    const pivot = partition(array, lowIndex, highIndex);
    quickSort(array, lowIndex, pivot - 1);
    quickSort(array, pivot + 1, highIndex);
  }
};

const main = () => {
  quickSort(array, 0, array.length - 1);
  console.log(comparison);
};

main();
