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


test('expect add(1, 2) should return 3', () => {
    let num = fns.add(1,2);
    expect(num).toBe(3);
})



test('expect add(5, 9) should return 14', () => {
    let num = fns.add(5,9);
    expect(num).toBe(14);
})

//can chain a '.only' to run only one test
// test.only('expect add(5, 9) should return 14', () => {
//     let num = fns.add(5,9);
//     expect(num).toBe(14);
// })

//can chain a '.skip' to run all but one test
// test.skip('expect add(5, 9) should return 14', () => {
//     let num = fns.add(5,9);
//     expect(num).toBe(14);
// })


describe("Math tests", () => {
    test("expect subtract(5, 3) should return 2", () => {
        let num = fns.subrtact(5,3);
        expect(num).toBe(2);
    });

    test("expect multiply(2, 3) should return 6", () => {
        let num = fns.multiply(2,3);
        expect(num).toBe(6);
    });
});