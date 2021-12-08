import {
  getCO2ScrubRating,
  getGammaEpsilonRate,
  getOxygenGenRating,
  input,
} from "../3";

const testData: string[] = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

describe("Part 1", () => {
  test("Get Gamma and Epsilon Rate", () => {
    expect(getGammaEpsilonRate(testData)).toEqual([22, 9]);
  });
});

describe("Part 2", () => {
  test("Get Oxygen Generator Rating", () => {
    expect(getOxygenGenRating(testData)).toEqual(23);
  });
  test("Get CO2 Scrubber Rating", () => {
    expect(getCO2ScrubRating(testData)).toEqual(10);
  });
});

describe("Final Answers", () => {
  test("Answer 1", () => {
    const [gammaRate, epsilonRate] = getGammaEpsilonRate(input);
    expect(gammaRate * epsilonRate).toEqual(2972336);
  });
  test("Answer 2", () => {
    expect(getCO2ScrubRating(input) * getOxygenGenRating(input)).toEqual(
      3368358
    );
  });
});
