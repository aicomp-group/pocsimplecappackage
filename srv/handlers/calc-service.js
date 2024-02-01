const cds = require("@sap/cds")

module.exports = class CalcService extends cds.ApplicationService {
  async init() {
    const {  calc } = this.entities
/*UNBOUND FUNCTION*/     
    this.on("calculateValue", (req) => {
      const { number1, number2, operation } = req.data
      switch (operation) {
        case "+":
          return number1 + number2
          break
        case "-":
          return number1 - number2
          break
        case "*":
          return number1 * number2
          break
        case "/":
          return number1 / number2
          break
      }
    })
    return super.init()
  }
}