function picolo(input) {
    let parking = new Map();
    for (const carsNum of input) {
        let [entrie, number] = carsNum.split(",");
        if (entrie === "IN") {
            parking.set(number)
        } else {
            parking.delete(number);
        }
    }
    let parkingToArr = Array.from(parking);
    let sortedParking = parkingToArr.sort((a, b) => a[0].localeCompare(b[0]))
    if (parking.size === 0) {
        console.log('Parking Lot is Empty')
    } else {
        for (const car of sortedParking) {
            console.log(car[0]);
        }
    }

} picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
