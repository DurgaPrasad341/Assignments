                                             // KEYBOARD EVENTS

                                            //  1. keypress Event

// 1. Detecting a specific key press:

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  });

// 2. Capturing the value entered in an input field on key press:

var inputField = document.getElementById('myInput');
inputField.addEventListener('keypress', function(event) {
  var value = inputField.value;
  console.log('Input value: ' + value);
});

// 3. Restricting input to numbers only:

var numericField = document.getElementById('numericInput');
numericField.addEventListener('keypress', function(event) {
  var key = event.key;
  if (!/[0-9]/.test(key)) {
    event.preventDefault();
  }
});

// 4. Triggering an action when a specific combination of keys is pressed:

var ctrlKeyPressed = false;
var sKeyPressed = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'Control') {
    ctrlKeyPressed = true;
  }
  if (event.key === 's') {
    sKeyPressed = true;
  }
  
  if (ctrlKeyPressed && sKeyPressed) {
    console.log('Save command triggered');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Control') {
    ctrlKeyPressed = false;
  }
  if (event.key === 's') {
    sKeyPressed = false;
  }
});

// 5. Preventing the default action of a key press event:

document.addEventListener('keypress', function(event) {
    event.preventDefault();
  });

                                              // 2. keydown Event

// 1. Listening for the Enter key

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      console.log("Enter key was pressed");
    }
  });

// 2. Detecting the Escape key

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      console.log("Escape key was pressed");
    }
  });

// 3. Checking for arrow key presses

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
      console.log("Arrow up key was pressed");
    } else if (event.key === "ArrowDown") {
      console.log("Arrow down key was pressed");
    }
  });

// 4. Listening for specific letter key presses

document.addEventListener("keydown", function(event) {
    if (event.key === "A") {
      console.log("A key was pressed");
    } else if (event.key === "B") {
      console.log("B key was pressed");
    }
  });

// 5. Combining key presses (Ctrl + Shift + Key)

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "A") {
      console.log("Ctrl + Shift + A was pressed");
    }
  });

                                                   // 3. keyup Event

// 1. Displaying typed text in real-time:

document.addEventListener('keyup', function(event) {
    var input = document.getElementById('myInput');
    var typedText = input.value;
    console.log(typedText);
  });

// 2. Triggering a function after pressing Enter key:

document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      myFunction();
    }
  });

// 3. Validating input on keyup:

var input = document.getElementById('myInput');
input.addEventListener('keyup', function(event) {
  if (input.value.length < 5) {
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
  }
});

// 4. Filtering a list based on user input:

var input = document.getElementById('searchInput');
var listItems = document.querySelectorAll('.list-item');

input.addEventListener('keyup', function(event) {
  var searchText = input.value.toLowerCase();

  listItems.forEach(function(item) {
    var itemText = item.textContent.toLowerCase();
    if (itemText.includes(searchText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

// 5. Limiting the number of characters in a textarea:

var textarea = document.getElementById('myTextarea');
var maxLength = 100;

textarea.addEventListener('keyup', function(event) {
  var text = textarea.value;
  if (text.length > maxLength) {
    textarea.value = text.substring(0, maxLength);
  }
});



  
  


  
  


  
  
  