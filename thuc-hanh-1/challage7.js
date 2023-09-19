const Mark = {
  name: "Mark",
  weight: 78,
  tall: 169,
  calcAve: (calc = () => {
    return weight / (tall * tall);
  }),
};
const John = {
  name: "John",
  weight: 92,
  tall: 195,
  calcAve: (calc = () => {
    return weight / (tall * tall);
  }),
};

console.log(
  `${Mark.calcAve} > ${John.calcAve}`
    ? `Mark ${Mark.calcAve} taller John ${John.calcAve}. Infor : ${Mark.name}`
    : `John ${John.calcAve} taller Mark ${Mark.calcAve}. Infor : ${John.name}`
);
