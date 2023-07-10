
let employees = [
   {
      fname: "Srishtti",
      lname: "Nag",
      age: 28,
      salary: 950000,
      designation: "Manager",
      company: "Flipkart"
   },
   {
      fname: "Durga",
      lname: "Prasad",
      age: 29,
      salary: 1500000,
      designation: "Senior Manager",
      company: "Google"
    },
    {
      fname: "Kolachina",
      lname: "Divya",
      age: 27,
      salary: 980000,
      designation: "Developer",
      company: "Amazon"
    },
    {
      fname: "Satabdi",
      lname: "Das",
      age: 26,
      salary: 850000,
      designation: "Developer",
      company: "Myntra"
    },
    {
      fname: "Sai",
      lname: "Deepak",
      age: 25,
      salary: 800000,
      designation: "Manager",
      company: "Walmart"
    }
  ];

  // Using the map method to display fullname,designation,salary of employees:

  var result = employees.map(employee => {
  return {
    name: `${employee.fname} ${employee.lname}`,
    designation: employee.designation,
    salary: employee.salary
  };
});

console.log(result);

// Employees Details in Tabular form :

console.table(employees);
 
  
//  1. map vs reduce :

const salaries = employees.map(employee => employee.salary);
console.log(salaries);
// Output: [800000, 980000, 1500000, 950000, 850000]

const totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
console.log(totalSalary);
// Output: 5080000


//  2. map vs filter : 

const fullNames = employees.map(employee => `${employee.fname} ${employee.lname}`);
console.log(fullNames);


const managers = employees.filter(employee => employee.designation === "Manager");
console.log(managers);

// 3. map vs foreach :

employees.map(employee => console.log(`${employee.fname} ${employee.lname}`));

employees.forEach(employee => console.log(`${employee.fname} ${employee.lname}`));

//  4. reduce vs filter :

const totalAge = employees.reduce((accumulator, employee) => accumulator + employee.age, 0);
console.log(totalAge);
//  Output: 135

const highPaidEmployees = employees.filter(employee => employee.salary > 1000000);
console.log(highPaidEmployees);

//  5. reduce vs foreach :

const totalEmpSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
console.log(totalEmpSalary);
//  Output: 5080000

let totalSalaryAmount = 0;
employees.forEach(employee => totalSalaryAmount += employee.salary);
console.log(totalSalaryAmount);
//  Output: 5080000
