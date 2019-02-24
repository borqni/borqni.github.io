function solve(arr) {
    let length = Number(arr[0]);
    let result = [];

    for (let i = 0; i < length; i++) {
        result[i] = 0;
    }

    for (let i = 1; i < arr.length; i++) {
        let splited = arr[i].split(' - ');
        let index = splited[0];
        let value = splited[1];
        result[index] = value;
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solve([
    '3',
    '0 - 5',
    '1 - 6',
    '2 - 7',
])