

function calculateGrade() {
    var mathsMarks = parseInt(document.getElementById("maths").value);
    var englishMarks = parseInt(document.getElementById("english").value);
    var scienceMarks = parseInt(document.getElementById("science").value);

    var averageMarks = (mathsMarks + englishMarks + scienceMarks) / 3;

    var grade;
    if (averageMarks >= 90) {
      grade = "A";
    } else if (averageMarks >= 80 && averageMarks <= 89) {
      grade = "B";
    } else if (averageMarks >= 70 && averageMarks <= 79) {
      grade = "C";
    } else if (averageMarks >= 60 && averageMarks <= 69) {
      grade = "D";
    } else {
      grade = "F";
    }

    document.getElementById("average-marks").textContent = "Average Marks: " + averageMarks;
    document.getElementById("grade").textContent = "Grade: " + grade;
    document.getElementById("result").style.display = "block";
  }