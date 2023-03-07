const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const total = sp + rj + mg + es + outros;
console.log(total);

console.log(`O percentual do estado de SP foi de ${sp * sp / total}%`);
console.log(`O percentual do estado do RJ foi de ${rj * rj / total}%`);
console.log(`O percentual do estado de MG foi de ${mg * mg / total}%`);
console.log(`O percentual do estado do ES foi de ${es * es / total}%`);
console.log(`O percentual dos demias estados foi de ${outros * outros / total}`);