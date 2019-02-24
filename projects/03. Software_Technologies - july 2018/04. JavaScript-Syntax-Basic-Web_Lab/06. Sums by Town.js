function calcSumsByTown(args) {
    let objects = args.map(JSON.parse);
    let sums = {};
    for (let item of objects) {
        if (item.town in sums) {
            sums[item.town] += item.income;
        }
        else {
            sums[item.town] = item.income;
        }
    }

    let towns = Object.keys(sums).sort();

    for (let town of towns) {
        console.log(`${town} -> ${sums[town]}`);
    }
}
