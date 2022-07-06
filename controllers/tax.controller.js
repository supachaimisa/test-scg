const { calTax } = require("../helpers/calculators.helper");
const Tax = {
  calTaxPersons: (req, res) => {
    const body = req.body;
    const personnels = body.personnels;
    const _res = personnels.map((item) => {
      return {
        ...item,
        isTax: calTax(item),
      };
    });
    res.send(_res);
  },
  // calTaxPerson: (req, res) => {
  //   const body = req.body;
  // },
};
module.exports = Tax;
