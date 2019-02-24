function solve(args) {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        let splited = args[i].split(' ');
        let command = splited[0];
        let value = Number(splited[1]);

        switch (command) {
            case 'add':
                result.push(value);
                break;
            case 'remove':
                result.splice(value, 1);
                break;
        }
    }

    for (let num of result){
        console.log(num);
    }
}

solve([
    'add 3',
    'add 5',
    'remove 1',
    'add 2',
])