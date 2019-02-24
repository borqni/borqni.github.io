function solve(arg) {
    let nums = arg[0].split(' ').map(Number);
    num1 = nums[0];
    num2 = nums[1];
    num3 = nums[2];

    if (num1 + num2 === num3) {
        if (num1 > num2) {
            [num1, num2] = [num2, num1];
        }
        console.log(`${num1} + ${num2} = ${num3}`)
    } else if (num1 + num3 === num2) {
        if (num1 > num3) {
            [num1, num3] = [num3, num1];
        }
        console.log(`${num1} + ${num3} = ${num2}`)
    } else if (num2 + num3 === num1) {
        if (num2 > num3) {
            [num2, num3] = [num3, num2];
        }
        console.log(`${num2} + ${num3} = ${num1}`)
    } else {
        console.log('No');
    }
}