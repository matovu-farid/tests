export class Calculator {
    #checkInput=(a,b)=>{
        if(typeof a!=="number" || typeof b!=="number"){
            throw new Error('Input should be a number')
        }
    }
    multiply=(a,b)=>{
        this.#checkInput(a,b)
        return a * b;
    }
    sum = (a,b)=>{
        this.#checkInput(a,b)
        return a+b;
    }
    subtract = (a,b)=>{
        this.#checkInput(a,b)
        return a-b;
    }

    divide = (a,b)=>{
        this.#checkInput(a,b)
        if(b===0) throw new Error('Can not divide by zero')
        return a/b
    }
    
}