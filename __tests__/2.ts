import { describe } from "@jest/globals";
import {
  combineSubData,
  input,
  SubmarineCommand,
  SubmarineLocationData,
  travelInSub,
  travelInSub2,
} from "../2";

const testData: SubmarineCommand[] = [
  { direction: "forward", value: 5 },
  { direction: "down", value: 5 },
  { direction: "forward", value: 8 },
  { direction: "up", value: 3 },
  { direction: "down", value: 8 },
  { direction: "forward", value: 2 },
];

describe("Part 1", () => {
  test("Travel in Submarine", () => {
    const travelInSubResult: SubmarineLocationData = travelInSub(testData);
    expect(travelInSubResult).toEqual<SubmarineLocationData>({
      horizontal: 15,
      depth: 10,
    });
    expect(combineSubData(travelInSubResult)).toEqual(150);
  });
});

describe("Part 2", () => {
  test("Travel in Submarine 2", () => {
    const travelInSubResult: SubmarineLocationData = travelInSub2(testData);
    expect(travelInSubResult).toEqual<SubmarineLocationData>({
      horizontal: 15,
      depth: 60,
    });
    expect(combineSubData(travelInSubResult)).toEqual(900);
  });
});

describe("Final Answers", () => {
  test("Answer 1", () => {
    expect(combineSubData(travelInSub(input))).toEqual(1746616);
  });
  test("Answer 2", () => {
    expect(combineSubData(travelInSub2(input))).toEqual(1741971043);
  });
});
