import { getIdealPosition, getIdealPositionAverage, input } from "../7";

const testData: number[] = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

describe("Part 1", () => {
  test("Get Ideal Crab Position", () => {
    expect(getIdealPosition(testData)).toEqual(37);
  });
});

describe("Part 2", () => {
  test("Get Ideal Crab Position Average", () => {
    expect(getIdealPositionAverage(testData)).toEqual(168);
  });
});

describe("Final Answers", () => {
  test("Answer 1", () => {
    expect(getIdealPosition(input)).toEqual(344605);
  });
  test("Answer 2", () => {
    expect(getIdealPositionAverage(input)).toEqual(93699985);
  });
});
