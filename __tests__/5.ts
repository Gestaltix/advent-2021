import {
  filterNonCardinalVents,
  getOverlappingPoints,
  input,
  mapVents,
  VentCoords,
} from "../5";

const testData: VentCoords[] = [
  { beginning: { x: 0, y: 9 }, end: { x: 5, y: 9 } },
  { beginning: { x: 8, y: 0 }, end: { x: 0, y: 8 } },
  { beginning: { x: 9, y: 4 }, end: { x: 3, y: 4 } },
  { beginning: { x: 2, y: 2 }, end: { x: 2, y: 1 } },
  { beginning: { x: 7, y: 0 }, end: { x: 7, y: 4 } },
  { beginning: { x: 6, y: 4 }, end: { x: 2, y: 0 } },
  { beginning: { x: 0, y: 9 }, end: { x: 2, y: 9 } },
  { beginning: { x: 3, y: 4 }, end: { x: 1, y: 4 } },
  { beginning: { x: 0, y: 0 }, end: { x: 8, y: 8 } },
  { beginning: { x: 5, y: 5 }, end: { x: 8, y: 2 } },
];

describe("Part 1", () => {
  test("Filter Non Cardinal Vents", () => {
    expect(filterNonCardinalVents(testData).length).toEqual(6);
  });
  test("Map And Get Overlapping Points", () => {
    expect(
      getOverlappingPoints(mapVents(filterNonCardinalVents(testData)))
    ).toEqual(5);
  });
});

describe("Part 2", () => {
  test("Map And Get Overlapping Points", () => {
    expect(getOverlappingPoints(mapVents(testData))).toEqual(12);
  });
});

describe("Final Answers", () => {
  test("Answer 1", () => {
    expect(
      getOverlappingPoints(mapVents(filterNonCardinalVents(input)))
    ).toEqual(6267);
  });
  test("Answer 2", () => {
    expect(getOverlappingPoints(mapVents(input))).toEqual(20196);
  });
});
