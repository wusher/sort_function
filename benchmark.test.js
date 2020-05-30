const algos = require("./index.js");

const BIG_ARRAY_SIZE = 200000;

// arrange
const BIG_ARRAY = [];
for (let i = 0; i < BIG_ARRAY_SIZE; i++) {
  BIG_ARRAY.push(Math.ceil(Math.random() * BIG_ARRAY_SIZE));
}

["bubbleSort", "mergeSort", "quickSort"].forEach((algoName) => {
  describe(`Benchmark Algorithm ${algoName}`, () => {
    test("sorts a very large random array ", () => {
      //arrange
      const input = [...BIG_ARRAY];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result.length).toEqual(BIG_ARRAY_SIZE);
      let previous = -1;
      result.forEach((x) => {
        expect(x).toBeGreaterThanOrEqual(previous);
        previous = x;
      });
    });
  });
});
