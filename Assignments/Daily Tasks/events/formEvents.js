                                                   // FORM EVENTS

                                                   // 1. Submit Event 

// 1. Submitting a form:

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  console.log("Form submitted!");
});

// 2. Performing AJAX form submission:

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      console.log("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Form submission failed:", error);
    });
});

// 3. Validating form input before submission:

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();

    console.log("Form validation failed!");
  } else {
    console.log("Form submitted!");
  }
});

// 4. Confirmation before form submission:

const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  const confirmation = confirm("Are you sure you want to submit the form?");

  if (!confirmation) {
    event.preventDefault(); 
    console.log("Form submission canceled.");
  } else {
    console.log("Form submitted!");
  }
});

// 5. Adding a loading state to the form during submission:

const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";

    console.log("Form submitted!");
  }, 2000); 
});

                                                        // 2. Change Event

// 1. Input Field Change Event: 

document.getElementById('myInput').addEventListener('change', function(event) {
  });

// 2. Checkbox Change Event: 

document.getElementById('myCheckbox').addEventListener('change', function(event) {
  });

// 3. Select Change Event:

document.getElementById('mySelect').addEventListener('change', function(event) {
  });

// 4. Radio Button Change Event: 

var radioButtons = document.getElementsByName('myRadio');
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function(event) {
  });
}

// 5. DOM Mutation Observers:

var targetNode = document.getElementById('myElement');

var observer = new MutationObserver(function(mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
    }
  }
});

observer.observe(targetNode, { childList: true });

                                                    // 3. Focus Event

// 1. Input Field Focus Event: 

document.getElementById('myInput').addEventListener('focus', function(event) {
  });

// 2. Textarea Focus Event: 

document.getElementById('myTextarea').addEventListener('focus', function(event) {
  });

// 3. Button Focus Event:

document.getElementById('myButton').addEventListener('focus', function(event) {
  });

// 4. Select Focus Event:

document.getElementById('mySelect').addEventListener('focus', function(event) {
  });

// 5. Link Focus Event: 

document.getElementById('myLink').addEventListener('focus', function(event) {
  });
  
  
  


  
  




  
  
  









