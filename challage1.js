const BMI = (weight, tall) => {
  return weight / (tall * tall);
};

const BMI_Mark = BMI(3, 5);
const BMI_John = BMI(5, 5);
const markHigherBMI = () => {
  if (BMI_Mark > BMI_John) return true;
  else return false;
};
console.log(BMI_John);
console.log(BMI_Mark);
console.log(markHigherBMI());
// Challage 2
console.log(
  BMI_John > BMI_Mark
    ? `John ${BMI_John} taller Mark ${BMI_Mark}`
    : `Mark ${BMI_Mark} taller John ${BMI_John}`
);
