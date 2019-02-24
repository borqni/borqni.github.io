function solve(args) {
    let x = Number(args[0]);
    let y = Number(args[1]);
    let z = Number(args[2]);

    let count = 0;
    if (x < 0) {
        count++;
    }
    if (y < 0) {
        count++;
    }
    if (z < 0) {
        count++;
    }

    if (count % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

solve([2, 3, -1])