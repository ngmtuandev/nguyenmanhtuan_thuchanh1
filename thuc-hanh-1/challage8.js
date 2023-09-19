let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calculTip = (bill) => {
  return bill >= 50 && bill <= 300
    ? bill + bill * (15 / 100)
    : bill + bill * (20 / 100);
};

bills.map((item) => {
  let calTip = calculTip(item);
  tips.push(calTip);
  totals.push(calTip + item);
});

const calAverage = (arr) => {
  let total = 0;
  arr.forEach((item) => (total = total + item));
  return total / arr.length;
};

console.log(tips);
console.log(totals);
console.log(calAverage(totals));
// var to = 0;
// console.log(totals.length);
// for (let i; i < totals.length; i++) {
//   console.log(totals[i]);
//   to = to + totals[i];
//   console.log(to);
// }
// console.log(to);
