const Dolphin1 = [44, 23, 71];
const Dolphin2 = [85, 54, 41];
const Koalas1 = [65, 54, 49];
const Koalas2 = [23, 34, 27];

const calcAverage = (data) => {
  let sum;
  data.map((item) => {
    return (sum += item);
  });
  return sum / data.length;
};

const checkWinner = (avgDolpin, avgKoalas) => {
  return avgDolpin > 2 * avgKoalas
    ? `Dolphin win (${avgDolpin} vs. ${avgKoalas})`
    : avgKoalas > 2 * avgDolpin
    ? `Dolphin win (${avgKoalas} vs. ${avgDolpin})`
    : "No Win";
};

console.log(checkWinner(calcAverage(Dolphin1), calcAverage(Koalas1)));
console.log(checkWinner(calcAverage(Dolphin2), calcAverage(Koalas2)));
