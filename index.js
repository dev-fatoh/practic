function reverseStr(str) {
    //reverse string order
    //return str.split('')
    //.reverse()
    //.join('');
    let reves = '';

    //for (let char of str){
        //reves=char+reves
    //}
    //return reves;
    str.split('').forEach(char=>{
        reves=char+reves
        
    })
    return reves
        
}


console.log(reverseStr('hello'));
