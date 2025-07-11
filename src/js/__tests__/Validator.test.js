import Validator from "../Validator";

test("testing the name's validity when the value is valid", () => {
  const user = new Validator();
  expect(user.validateUsername("Marina123_SS")).toBe(true);
});

const check = [
  [""],
  ["Marina1234_SS"], //больше 3 чисел подряд
  ["1Marina123_SS"], //цифра в начале
  ["-Marina123_SS"], //"-" в начале
  ["_Marina123_SS"], //"_" в начале
  ["Marina123_SS-1"], //цифра в конце
  ["Marina123_SS-$"], //есть иные символы "$"
];

test.each(check)("testing the validity of a name if the value is not valid", (name) => {
  const user = new Validator();
  const result = user.validateUsername(name);
  expect(result).toBe(false);
});