function sayHello(name) {
    return 'Привет, ' + name;
}

console.log(sayHello('Вася')) // 'Привет, Вася'

function returnNeighboringNumbers(arg) {
    let arr = [];

    arr.push(arg - 1);
    arr.push(arg);
    arr.push(arg + 1);
    return arr;

}

console.log(returnNeighboringNumbers(10)) // [9, 10, 11]);

function getMathResult(num, times) {
    if (typeof times !== 'number' ||times === 0 || times < 0) {
        return num;
    } 

         let str= num;

        for (let i = 2; i <= times; i++) {
            
       
            str += `---${num*i}`;
        
       
    }
    return str;
}
console.log(getMathResult(2, 5)) // 10);