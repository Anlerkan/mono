import {numberToString} from "@mono/utils/src";

describe("test", () => {
  test("should success", () => {
    expect(true).toBe(true);
  });
});

describe("Valid numbers should return it's string value", () => {
  test('numberToString: 1 => "1"', () => {
    expect(numberToString(1)).toBe("1");
  });

  test('numberToString: 0 => "0"', () => {
    expect(numberToString(0)).toBe("0");
  });

  test('numberToString: 1.23 => "1.23"', () => {
    // eslint-disable-next-line no-magic-numbers
    expect(numberToString(1.23)).toBe("1.23");
  });
});
