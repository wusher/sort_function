function bubbleSort(data) {
  let hasChanges = true;
  while (hasChanges) {
    hasChanges = false;
    for (let i = 0; i < data.length - 1; i++) {
      let j = i + 1;
      if (data[i] > data[j]) {
        hasChanges = true;
        let swap = data[i];
        data[i] = data[j];
        data[j] = swap;
      }
    }
  }

  return data;
}

function mergeSortCombine(left, right) {
  const merged = [];
  while (left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    } else if (left.length > 0) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged;
}
function mergeSort(data) {
  // MergeSort(arr[], l,  r)
  // If r > l
  //      1. Find the middle point to divide the array into two halves:
  //              middle m = (l+r)/2
  //      2. Call mergeSort for first half:
  //              Call mergeSort(arr, l, m)
  //      3. Call mergeSort for second half:
  //              Call mergeSort(arr, m+1, r)
  //      4. Merge the two halves sorted in step 2 and 3:
  //              Call merge(arr, l, m, r)
  if (data.length <= 1) {
    return data;
  }
  const middle = Math.floor(data.length / 2);
  const leftSplit = data.slice(0, middle);
  const rightSplit = data.slice(middle);
  const left = mergeSort(leftSplit);
  const right = mergeSort(rightSplit);
  return mergeSortCombine(left, right);
}

function quickSortPartition(data, low, high) {
  let pivot = data[high];
  let idxSmallest = low - 1;
  let swap;

  for (let idx = low; idx < high; idx++) {
    if (data[idx] < pivot) {
      idxSmallest++;
      swap = data[idxSmallest];
      data[idxSmallest] = data[idx];
      data[idx] = swap;
    }
  }

  idxSmallest++;
  swap = data[idxSmallest];
  data[idxSmallest] = data[high];
  data[high] = swap;
  return idxSmallest;
}

function quickSort(data, low, high) {
  if (low === undefined) {
    low = 0;
  }
  if (high === undefined) {
    high = data.length - 1;
  }
  if (low >= high) {
    return data;
  }

  const idxPivot = quickSortPartition(data, low, high);

  quickSort(data, low, idxPivot - 1);
  quickSort(data, idxPivot + 1, high);

  return data;
}

module.exports = {
  bubbleSort,
  mergeSort,
  quickSort,
};
