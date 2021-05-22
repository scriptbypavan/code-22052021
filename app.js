const BMI = require("./calculator");
let dataSet = require("./dataset");
let overWeightPeopleCount = 0;
for (let d of dataSet) {
  let riskLevel = BMI(d["WeightKg"], d["HeightCm"]);
  overWeightPeopleCount += riskLevel == "OverWeight" ? 1 : 0;
}
console.log(
  `count of people who are over weight is : ${overWeightPeopleCount}`
);
