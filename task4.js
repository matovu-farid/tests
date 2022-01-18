export const capitalize = (string='')=>{
   let [first,...rest] =  string.split('');
   return [first.toLocaleUpperCase(),...rest].join('')
  

}