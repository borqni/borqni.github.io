function solve(arr) {
    let result = {};
    let keyToFind = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        let splited = arr[i].split(' ');
        let key = splited[0];
        let value = splited[1];

        if (result[key] === undefined) {
            result[key] = [];
            result[key].push(value)
        } else {
            result[key].push(value);
        }
    }

    if (result[keyToFind] === undefined) {
        console.log('None');
    } else {
        let values = result[keyToFind];
        for (let value of values) {
            console.log(value);
        }
    }
}

solve([
    'key value',
    'key eulav',
    'test tset',
    'key',
])