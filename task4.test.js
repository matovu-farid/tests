import { expect } from "@jest/globals"
import {capitalize} from "./task4"

it('should capitalize a string',()=>{
    expect( capitalize('string')).toBe('String')
})