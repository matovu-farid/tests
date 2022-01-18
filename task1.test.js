import { expect, it } from "@jest/globals"
import {characterCount} from "./task1"


it('should return 4',()=>{
    expect(characterCount('word')).toBe(4)
})

it('should return 6',()=>{
    expect(characterCount('sickle')).toBe(6)
})

it('should not be greater than ten',()=>{
    expect(()=>  characterCount('experiments')
    ).toThrow(new Error('Word should not be greater than ten'))
})

it('should be atleast one character long',()=>{
    expect(()=>characterCount('')).toThrow(new Error('Word should be atleast one character long'))
})