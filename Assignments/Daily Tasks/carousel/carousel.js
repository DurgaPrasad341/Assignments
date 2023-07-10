
var images = [
    "https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3934023/pexels-photo-3934023.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3762284/pexels-photo-3762284.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3892172/pexels-photo-3892172.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  
  var count = 0;
  
  function increaseCount() {
    if (count <= images.length - 1) {
      document.getElementById('slide1').src = images[count];
      console.log(count);
      if (count == images.length - 1) {
        count = 0;
        return;
      }
    }
    count++;
  }
  
  var newCount = images.length - 1;
  function decreaseCount() {
    if (newCount >= 0) {
      document.getElementById('slide1').src = images[newCount];
      console.log(newCount);
      if (newCount == 0) {
        newCount = images.length - 1;
        return;
      }
    }
    newCount--;
  }
  
  // Call increaseCount or decreaseCount initially to display the first image
  increaseCount();
  