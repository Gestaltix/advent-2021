import { describe, expect, test } from "@jest/globals";
import {
  input,
  tallyIncreasingDepths,
  tallyIncreasingDepthsWithNoise,
} from "../1";

const testData: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("Part 1", () => {
  test("Tally Increasing Depths", () => {
    expect(tallyIncreasingDepths(testData)).toEqual(7);
  });
});

describe("Part 2", () => {
  test("Tally Increasing Depths With Noise", () => {
    expect(tallyIncreasingDepthsWithNoise(testData)).toEqual(5);
  });
});

describe("Final Answers", () => {
  test("Answer 1", () => {
    expect(tallyIncreasingDepths(input)).toEqual(1121);
  });
  test("Answer 2", () => {
    expect(tallyIncreasingDepthsWithNoise(input)).toEqual(1065);
  });
});
