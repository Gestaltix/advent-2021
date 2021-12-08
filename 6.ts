export const input: number[] = [
  1, 2, 4, 5, 5, 5, 2, 1, 3, 1, 4, 3, 2, 1, 5, 5, 1, 2, 3, 4, 4, 1, 2, 3, 2, 1,
  4, 4, 1, 5, 5, 1, 3, 4, 4, 4, 1, 2, 2, 5, 1, 5, 5, 3, 2, 3, 1, 1, 3, 5, 1, 1,
  2, 4, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 5, 4, 5, 2, 1,
  3, 2, 4, 1, 1, 3, 4, 1, 4, 1, 5, 1, 4, 1, 5, 3, 2, 3, 2, 2, 4, 4, 3, 3, 4, 3,
  4, 4, 3, 4, 5, 1, 2, 5, 2, 1, 5, 5, 1, 3, 4, 2, 2, 4, 2, 2, 1, 3, 2, 5, 5, 1,
  3, 3, 4, 3, 5, 3, 5, 5, 4, 5, 1, 1, 4, 1, 4, 5, 1, 1, 1, 4, 1, 1, 4, 2, 1, 4,
  1, 3, 4, 4, 3, 1, 2, 2, 4, 3, 3, 2, 2, 2, 3, 5, 5, 2, 3, 1, 5, 1, 1, 1, 1, 3,
  1, 4, 1, 4, 1, 2, 5, 3, 2, 4, 4, 1, 3, 1, 1, 1, 3, 4, 4, 1, 1, 2, 1, 4, 3, 4,
  2, 2, 3, 2, 4, 3, 1, 5, 1, 3, 1, 4, 5, 5, 3, 5, 1, 3, 5, 5, 4, 2, 3, 2, 4, 1,
  3, 2, 2, 2, 1, 3, 4, 2, 5, 2, 5, 3, 5, 5, 1, 1, 1, 2, 2, 3, 1, 4, 4, 4, 5, 4,
  5, 5, 1, 4, 5, 5, 4, 1, 1, 5, 3, 3, 1, 4, 1, 3, 1, 1, 4, 1, 5, 2, 3, 2, 3, 1,
  2, 2, 2, 1, 1, 5, 1, 4, 5, 2, 4, 2, 2, 3,
];

export type simplifiedSchool = number[];

export const simplifyLanternSchool = (school: number[]): simplifiedSchool => {
  let result: number[] = new Array(9).fill(0);
  school.forEach((fishCycle) => {
    result[fishCycle] += 1;
  });
  return result;
};

export const cycleSchool = (school: simplifiedSchool): simplifiedSchool => {
  let result = school.map((n) => 0);
  school.forEach((numberOfFish, i) => {
    if (i === 0) {
      result[6] += numberOfFish;
      result[8] += numberOfFish;
    } else result[i - 1] += numberOfFish;
  });
  return result;
};

export const simulateSchool = (
  school: simplifiedSchool,
  numCycles: number
): number => {
  let currentSchool = [...school];
  for (let i = 0; i < numCycles; i++) {
    currentSchool = cycleSchool(currentSchool);
  }
  return currentSchool.reduce<number>((pV, cV) => pV + cV, 0);
};
