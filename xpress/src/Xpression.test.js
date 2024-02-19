import {Xpression} from "./Xpression.js";

// describe("Xpression", () => {
//     let xpression = Xpression.from("42");
//     let result = Xpression.evaluate(xpression);
//     expect(result).toBe({value: 42})
// });
//
//
// describe('sum module', () => {
//     test('adds 1 + 2 to equal 3', () => {
//         expect(sum(1, 2)).toBe(3);
//     });
// });


describe("Sum numbers", () => {
    test("it should sum two numbers correctly", () => {
        const sum = 1 + 2;
        const expectedResult = 3;
        expect(sum).toEqual(expectedResult);
    })
});
