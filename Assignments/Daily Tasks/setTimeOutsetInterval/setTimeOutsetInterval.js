
var imageIndex = 0;
var images = [
  "https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3934023/pexels-photo-3934023.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3892172/pexels-photo-3892172.jpeg?auto=compress&cs=tinysrgb&w=600"
];

function loadImage() {
  var image = document.getElementById("image");
  var slideshow = document.getElementById("slideshow");

  // Create a new image element
  var newImage = new Image();

  newImage.onload = function() {
    // Replace the old image with the new one
    image.src = newImage.src;
  };

  newImage.onerror = function() {
    // Handle broken image source
    slideshow.removeChild(newImage);
    console.log("Failed to load image");
  };

  // Set the source of the new image based on the current index
  newImage.src = images[imageIndex];

  // Increment the index and reset to 0 if it exceeds the number of images
  imageIndex = (imageIndex + 1) % images.length;
}

// Load initial image on page load
window.addEventListener("load", loadImage);

// Set interval to load the next image every 5 seconds
setInterval(loadImage, 2000);