

label: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k == 1) continue label;

            console.log(`Third level ${k}`);
        }
    }
}

/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} 


let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    } */

function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {

        result.push(arr[i]);
    }

    return result;


}
console.log(firstTask())

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof data[i] === 'string') {
            data[i] = data[i] + ' - done'
        }
    }

    // Не трогаем
    return data;
}


console.log(secondTask())

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length - 1; i >= 0; i--) {
        result[data.length - 1 - i] = data[i];
    }


    // Не трогаем
    return result;
}
console.log(thirdTask());

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) { 
    
    for (let k = 0; k < lines-i; k++) {
        result += ' ';
    }

    for (let j = 0; j < 2*i+1; j++) {

        result += '*';
    }
    result += '\n';
}
console.log(result);

