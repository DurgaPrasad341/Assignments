function calculate() {
  // Get the input values
  var amount = document.getElementById("amount").value;
  var persons = document.getElementById("persons").value;

  // Reset alert messages and input box background colors
  document.getElementById("Error").innerHTML = "";
  document.getElementById("Error1").innerHTML = "";
  document.getElementById("amount").style.backgroundColor = "";
  document.getElementById("persons").style.backgroundColor = "";

  // Check if amount is valid
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("Error").innerHTML = "Enter a number greater than 0";
    document.getElementById("amount").style.backgroundColor = "red";
  } else {
    document.getElementById("amount").style.backgroundColor = "green";
  }

  // Check if persons is valid
  if (isNaN(persons) || persons <= 0) {
    document.getElementById("Error1").innerHTML = "Enter a number greater than 1";
    document.getElementById("persons").style.backgroundColor = "red";
  } else {
    document.getElementById("persons").style.backgroundColor = "green";
  }

  // Calculate the result if both input values are entered
  if (!isNaN(amount) && amount > 0 && !isNaN(persons) && persons > 0) {
    var result = amount / persons;
    document.getElementById("result").innerHTML = "Result: Rs. " + result.toFixed(2);
  } else {
    document.getElementById("result").innerHTML = "";
  }

  // Clear the input values
  document.getElementById("amount").value = "";
  document.getElementById("persons").value = "";
}
