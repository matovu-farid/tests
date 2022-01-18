export const characterCount = (word='')=>{
    if(word.length<1)   throw new Error('Word should be atleast one character long');
    else if(word.length>10) throw new Error('Word should not be greater than ten');
    else return word.length;
}