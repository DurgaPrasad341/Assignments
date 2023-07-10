

function greetUser() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var currentMinute = currentTime.getMinutes();
    var greetingElement = document.getElementById("greeting");
  
    if (currentHour >= 0 && currentHour <= 11) {
      greetingElement.textContent = "Good Morning";
      greetingElement.className = "morning";
    } else if (currentHour >= 12 && currentHour <= 17) {
      greetingElement.textContent = "Good Afternoon";
      greetingElement.className = "afternoon";
    } else if (
      (currentHour === 17 && currentMinute >= 31) ||
      (currentHour >= 18 && currentHour <= 21) ||
      (currentHour === 22 && currentMinute <= 30)
    ) {
      greetingElement.textContent = "Good Evening";
      greetingElement.className = "evening";
    } else {
      greetingElement.textContent = "Good Night";
      greetingElement.className = "night";
    }
  }
  
  window.onload = greetUser;