let Dolphin1 = [96, 108, 89];
let Dolphin2 = [97, 112, 101];
let Dolphin3 = [97, 112, 101];
let Koalas1 = [88, 91, 110];
let Koalas2 = [109, 95, 123];
let Koalas3 = [109, 95, 106];

const average = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
};

const comPare = (data1, data2) => {
  if (data1 > data2) {
    console.log("Dolphin win");
  } else if (data1 < data2) {
    console.log("Koalas win");
  } else {
    console.log("Koalas = Dolphin");
  }
};

const answer1 = (data1, data2) => {
  console.log(
    average(data1) >= 100 && average(data1) > average(data2)
      ? "Dolphin win and aswer"
      : "Koalas win and aswer"
  );
};

const anser2 = (data1, data2) => {
  console.log(
    average(data1) === average(data2) &&
      average(data1) >= 100 &&
      average(Koalas3) >= 100
      ? "2 Win"
      : "Fail"
  );
};

console.log(average(Dolphin1));
comPare(average(Dolphin1), average(Koalas2));
answer1(average(Dolphin2), average(Koalas2));
anser2(average(Dolphin3), average(Koalas3));
