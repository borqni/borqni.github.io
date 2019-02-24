function solve(arg) {
    let a = Number(arg[0]);
    let b = Number(arg[1]);
    if (a <= b) {
        console.log(a * b);
    }
    else {
        console.log(a / b);
    }
}

solve([3, 2])