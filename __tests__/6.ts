import { input, simplifyLanternSchool, simulateSchool } from "../6";

const testData: number[] = [3, 4, 3, 1, 2];

describe("Part 1", () => {
  test("Simplify Lantern School", () => {
    expect(simplifyLanternSchool(testData)).toEqual([
      0, 1, 1, 2, 1, 0, 0, 0, 0,
    ]);
  });
  test("Simulate School", () => {
    expect(simulateSchool(simplifyLanternSchool(testData), 18)).toEqual(26);
    expect(simulateSchool(simplifyLanternSchool(testData), 80)).toEqual(5934);
  });
});

describe("Final Answers", () => {
  test("Answer 1", () => {
    expect(simulateSchool(simplifyLanternSchool(input), 80)).toEqual(352872);
  });
  test("Answer 2", () => {
    expect(simulateSchool(simplifyLanternSchool(input), 256)).toEqual(
      1604361182149
    );
  });
});
