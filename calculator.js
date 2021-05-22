function bmi(weight, height) {
  try {
    let wt = Number(weight);
    let ht = Number(height) / 100;
    let bmi = wt / Math.pow(ht, 2);
    if (bmi >= 25 && bmi <= 29.9) return "OverWeight";
    else return "NotOverWeight";
  } catch (err) {
    return { status: false, error: { message: error.message } };
  }
}

module.exports = bmi;
