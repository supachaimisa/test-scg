const CalculatorsHelper = {
  calTax: (obj) => {
    const pIncome = obj.income;
    if (pIncome <= 150000) {
      return 0;
    } else if (pIncome > 150000 && pIncome <= 300000) {
      return (pIncome - 150000) * (5 / 100);
    } else if (pIncome > 300000 && pIncome <= 500000) {
      return (pIncome - 300000) * (10 / 100) + 7500;
    } else if (pIncome > 500000 && pIncome <= 750000) {
      return (pIncome - 500000) * (15 / 100) + 27500;
    } else if (pIncome > 750000 && pIncome <= 1000000) {
      return (pIncome - 750000) * (20 / 100) + 65000;
    } else if (pIncome > 1000000 && pIncome <= 2000000) {
      return (pIncome - 1000000) * (25 / 100) + 115000;
    } else if (pIncome > 2000000 && pIncome <= 5000000) {
      return (pIncome - 2000000) * (30 / 100) + 365000;
    } else if (pIncome > 5000000) {
      return (pIncome - 5000000) * (35 / 100) + 1265000;
    }
  },
};
module.exports = CalculatorsHelper
