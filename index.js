function bubbleSort(data) {
  let temp;
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

module.exports = {
  bubbleSort,
};
