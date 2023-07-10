                                              // BROWSER EVENTS
                                              
                                             // 1. LOAD EVENT :


// 1. Loading an Image :

const image = new Image();
image.src = "path/to/image.jpg";
image.addEventListener("load", () => {
  console.log("Image loaded!");
});

// 2. Loading a webpage :

window.addEventListener("load", () => {
    console.log("Page loaded!");
  });

// 3. Loading an external script:

const script = document.createElement("script");
script.src = "path/to/script.js";
script.addEventListener("load", () => {
  console.log("Script loaded!");
});
document.head.appendChild(script);

// 4. Loading a stylesheet:

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "path/to/styles.css";
link.addEventListener("load", () => {
  console.log("Stylesheet loaded!");
});
document.head.appendChild(link);

// 5. Loading an audio file:

const audio = new Audio();
audio.src = "path/to/audio.mp3";
audio.addEventListener("canplaythrough", () => {
  console.log("Audio loaded!");
});


                                        //   2. Resize Event


// 1. Resizing the window:   

window.addEventListener("resize", () => {
    console.log("Window resized!");
  });

// 2. Resizing a specific element:

const element = document.getElementById("myElement");
element.addEventListener("resize", () => {
  console.log("Element resized!");
});

// 3. Responsive layout adjustments:

window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      console.log("Adjusting layout for small screens");
    } else {
      console.log("Adjusting layout for larger screens");
    }
  });

// 4. Handling orientation changes on mobile devices:

window.addEventListener("resize", () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      console.log("Portrait orientation");
    } else {
      console.log("Landscape orientation");
    }
  });

// 5. Updating the size-dependent calculations:

window.addEventListener("resize", () => {
    console.log("Recalculating size-dependent values");
  });


                                                // 3. Scroll Event


// 1. Scrolling the window:

window.addEventListener("scroll", () => {
    console.log("Window scrolled!");
  });

// 2. Scrolling a specific element:

const element = document.getElementById("myElement");
element.addEventListener("scroll", () => {
  console.log("Element scrolled!");
});

// 3. Implementing a "scroll-to-top" button:

const scrollButton = document.getElementById("scrollButton");
scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

// 4. Implementing infinite scrolling:

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("Loading more content...");
    }
  });

//   5. Creating a sticky navigation menu:

const navbar = document.getElementById("navbar");
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

  

  
  


  
  

  




  
