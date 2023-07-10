
function taxCalculator() {
  var name = document.getElementById('EmpName').value;
  var EmpName = name.toUpperCase();
  var salary = parseInt(document.getElementById('Salary').value);

  document.getElementById('details').innerHTML = `Here is the tax deduction details of "${EmpName}" `;
 
 if (salary <= 300000) {

    document.getElementById('deduction1').value = `No Tax Deduction`;
  }else if(salary <= 600000) {

    let taxDeduction = (salary - 300000)*0.1;
    let totalDeductionBelow6lpa = taxDeduction;
      document.getElementById('deduction2').value = taxDeduction;
      document.getElementById('deduction3').value = totalDeductionBelow6lpa;

  }else if(salary > 600000){

    let taxDeduction1 = 30000;
    let taxDeduction2 = (salary - 600000)*0.2;
    let totalDeduction = taxDeduction1 + taxDeduction2;
        document.getElementById('deduction2').value = taxDeduction1;
        document.getElementById('deduction3').value = totalDeduction.toFixed(2);
  }
}

const taxDate = (() =>{
  let date = new Date();
  document.getElementById('date').innerHTML = `Date ${date.toDateString()}`;
}) ();
