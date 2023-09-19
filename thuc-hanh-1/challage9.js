const printForcast = (arr) => {
  arr.map((item, index) => {
    console.log(`${item} C in ${index + 1} day`);
  });
};

printForcast([12, 5, 0, 4]);
