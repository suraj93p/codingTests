var arr = [1, 3, 5, 7, 8, 9, 6, 10];

function sort() {
  for (var i = 0; i < arr.length - 1; ++i) {
    if (arr[i + 1] < arr[i]) {
      sortSubArray(arr, i);
    }
  }
}

function sortSubArray(arr, index) {
  while (arr[index + 1] < arr[index]) {
    swap(arr[index + 1], arr[index]);
    index--;
  }
}

function swap(a, b) {
  var temp = b;
  b = a;
  a = temp;
}
