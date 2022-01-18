import { expect } from "@jest/globals";
import { Calculator } from "./task3";

const calculator  = new Calculator();

describe('multiplying',()=>{
    test('3 and 4 returns 12',()=>{
        expect(calculator.multiply(3,4)).toBe(12)
    })
    test('5 and 0 returns 0',()=>{
        expect(calculator.multiply(5,0)).toBe(0)
    })
    test('3 and "4" throws an error',()=>{
        expect(()=>calculator.multiply(3,"4")).toThrow(new Error('Input should be a number'))
    })
})

describe('suming',()=>{
    test('3 and 4 returns 7',()=>{
        expect(calculator.sum(3,4)).toBe(7)
    })
    test('5 and -1 returns 0',()=>{
        expect(calculator.sum(5,-1)).toBe(4)
    })
    test('3 and "4" throws an error',()=>{
        expect(()=>calculator.sum(3,"4")).toThrow(new Error('Input should be a number'))
    })
})

describe('subtract',()=>{
    test('3 and 4 returns -1',()=>{
        expect(calculator.subtract(3,4)).toBe(-1)
    })
    test('5 and -1 returns 6',()=>{
        expect(calculator.subtract(5,-1)).toBe(6)
    })
    test('3 and "4" throws an error',()=>{
        expect(()=>calculator.subtract(3,"4")).toThrow(new Error('Input should be a number'))
    })
})

describe('divide',()=>{
    test('10 and -5 returns 2',()=>{
        expect(calculator.divide(10,-5)).toBe(-2)
    })
    test('5 and 0 throws a',()=>{
        expect(()=>calculator.divide(5,0)).toThrow(new Error('Can not divide by zero'))
    })
    test('3 and "4" throws an error',()=>{
        expect(()=>calculator.divide(3,"4")).toThrow(new Error('Input should be a number'))
    })
})

