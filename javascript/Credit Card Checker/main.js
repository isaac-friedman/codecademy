


const validateCC = (card) => {
    let luhnyToons = [];
    let i = card.length-1;
    let manipulate = 0;
    /***
    * We eventually want to use apply the algorithm to all Luhn-valid numbers
    * so we need a way to keep track of even and odd iterations separate from
    * the length of a CC number.
    ***/
    let iterCount = 1;
    while(i >= 0) {
        console.log(iterCount);
        if (iterCount % 2 == 0) { //even iteration
            2*card[i] >= 10 ? luhnyToons.push((2*card[i]-9)) : luhnyToons.push(2*card[i]);
        } else { //odd iteration
            luhnyToons.push(card[i]);
        }
        i --;
        iterCount ++;
    }
    console.log(luhnyToons);
    let checksum = 0;
    luhnyToons.forEach(digit => checksum += digit);
    console.log(checksum);
    if (checksum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}
