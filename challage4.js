let tip = null;

const calculTip = (bill) => {
  console.log(
    bill >= 50 && bill <= 300
      ? `Bill ${bill} + tip ${bill * (15 / 100)} = ${bill + bill * (15 / 100)}`
      : `Bill ${bill} + tip ${bill * (20 / 100)} = ${bill + bill * (20 / 100)}`
  );
};

console.log(calculTip(275));
