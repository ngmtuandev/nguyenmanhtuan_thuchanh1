let tip = null;
const billValue = [275, 40, 430];
const calculTip = (bill) => {
  return bill >= 50 && bill <= 300
    ? `${bill} + tip ${bill * (15 / 100)} = ${bill + bill * (15 / 100)}`
    : `${bill} + tip ${bill * (20 / 100)} = ${bill + bill * (20 / 100)}`;
};

billValue.map((item, index) => {
  console.log(item);
  console.log(`Bill ${index + 1} :`, calculTip(item));
});
