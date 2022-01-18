import { expect } from "@jest/globals"
import {reverseString} from "./task2"

it('should return doof',()=>{
    reverseString
    expect(reverseString('food')).toBe("doof")
})

it('should return ""',()=>{
    reverseString
    expect(reverseString('')).toBe("")
})