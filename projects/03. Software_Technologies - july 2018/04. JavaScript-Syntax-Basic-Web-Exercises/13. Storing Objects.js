function solve(arr) {
    for (let line of arr) {
        let splited = line.split(' -> ');
        let name = splited[0];
        let age = splited[1];
        let grade = splited[2];

        let obj = {
            'Name': name,
            'Age': age,
            'Grade': grade,
        };

        for (let key in obj) {
            console.log(key + ': ' + obj[key]);
        }
    }
}

solve([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90',
])