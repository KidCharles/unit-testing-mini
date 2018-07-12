let fns = require("./functions.js");

//first pass in descriptor of what should happen
//second argument is a callback function
test("returnTwo should return 2", () => {
  let result = fns.returnTwo();
  expect(result).toBe(2);
});

test('greeting("James") should return correct string', () => {
  let str = fns.greeting("James");
  expect(str).toEqual("Hello, James.");
});
