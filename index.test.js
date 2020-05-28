const algos = require("./index.js");
// ["bubbleSort", "mergeSort", "quickSort"].forEach((algoName) =>  {
["bubbleSort", "mergeSort"].forEach((algoName) => {
  describe(`Algorithm ${algoName}`, () => {
    test("empty array", () => {
      // arrange
      const input = [];
      const target = [];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result).toEqual(target);
    });

    test("single item array", () => {
      // arrange
      const input = [42];
      const target = [42];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result).toEqual(target);
    });

    test("already sorted array", () => {
      // arrange
      const input = [1, 2, 3, 4, 5];
      const target = [1, 2, 3, 4, 5];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result).toEqual(target);
    });

    test("short unsorted array", () => {
      // arrange
      const input = [2, 1];
      const target = [1, 2];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result).toEqual(target);
    });

    test("long unsorted array", () => {
      // arrange
      const input = [5, 8, 3, 9, 1, 6, 2, 7, 4];
      const target = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result).toEqual(target);
    });

    test("unsorted array with dupplicate items", () => {
      // arrange
      const input = [4, 2, 5, 2, 3, 1];
      const target = [1, 2, 2, 3, 4, 5];
      // act
      const result = algos[algoName](input);
      // assert
      expect(result).toEqual(target);
    });
  });
});
