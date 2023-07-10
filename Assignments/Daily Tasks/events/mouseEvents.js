                                                   // MOUSE EVENTS

                                                   // 1. Click Event

// 1. Changing Text on Button Click:

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  button.textContent = 'Clicked!';
});

// 2. Displaying an Alert on Click:

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// 3. Toggling a Class on Click:

const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  button.classList.toggle('active');
});

// 4. Showing/Hiding Elements on Click:

const button = document.getElementById('toggleButton');
const content = document.getElementById('content');
button.addEventListener('click', function() {
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

// 5. Clicking Outside to Close a Modal:

const modal = document.getElementById('modal');
document.addEventListener('click', function(event) {
  if (!modal.contains(event.target)) {
    modal.style.display = 'none';
  }
});

                                                 // 2. Double Click

// 1. Double-Click to Change Background Color:

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('dblclick', function() {
  myDiv.style.backgroundColor = 'blue';
});

// 2. Double-Click to Toggle Class:

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('dblclick', function() {
  myDiv.classList.toggle('highlight');
});

// 3. Double-Click to Show/Hide Content:

const button = document.getElementById('toggleButton');
const content = document.getElementById('content');
button.addEventListener('dblclick', function() {
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
});

// 4. Double-Click to Zoom In/Out on Image:

const myImage = document.getElementById('myImage');
myImage.addEventListener('dblclick', function() {
  myImage.classList.toggle('zoomed');
});

// 5. Double-Click to Open Link in a New Tab:

const myLink = document.getElementById('myLink');
myLink.addEventListener('dblclick', function(event) {
  event.preventDefault();
  window.open(myLink.href, '_blank');
});

                                                      // 3. Mouse over Event

// 1. Change Background Color on Mouse Over:

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseover', function() {
  myDiv.style.backgroundColor = 'yellow';
});

// 2. Show Tooltip on Mouse Over:

const myButton = document.getElementById('myButton');
myButton.addEventListener('mouseover', function() {
  const tooltip = document.createElement('span');
  tooltip.textContent = 'Button tooltip';
  myButton.appendChild(tooltip);
});

// 3. Highlight Text on Mouse Over:

const myText = document.getElementById('myText');
myText.addEventListener('mouseover', function() {
  myText.style.backgroundColor = 'lightblue';
});

// 4. Expand/Collapse Content on Mouse Over:

const myDiv = document.getElementById('myDiv');
const content = document.getElementById('content');
myDiv.addEventListener('mouseover', function() {
  content.style.display = 'block';
});
myDiv.addEventListener('mouseout', function() {
  content.style.display = 'none';
});

// 5. Change Image Source on Mouse Over:

const myImage = document.getElementById('myImage');
myImage.addEventListener('mouseover', function() {
  myImage.src = 'image2.jpg';
});
myImage.addEventListener('mouseout', function() {
  myImage.src = 'image1.jpg';
});

                                                      // 4. Mouse Enter Event

// 1. Change Background Color on Mouse Enter:

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseenter', function() {
  myDiv.style.backgroundColor = 'yellow';
});

// 2. Show Tooltip on Mouse Enter:

const myButton = document.getElementById('myButton');
myButton.addEventListener('mouseenter', function() {
  const tooltip = document.createElement('span');
  tooltip.textContent = 'Button tooltip';
  myButton.appendChild(tooltip);
});

// 3. Highlight Text on Mouse Enter:

const myText = document.getElementById('myText');
myText.addEventListener('mouseenter', function() {
  myText.style.backgroundColor = 'lightblue';
});

// 4. Expand/Collapse Content on Mouse Enter:

const myDiv = document.getElementById('myDiv');
const content = document.getElementById('content');
myDiv.addEventListener('mouseenter', function() {
  content.style.display = 'block';
});
myDiv.addEventListener('mouseleave', function() {
  content.style.display = 'none';
});

// 5. Change Image Source on Mouse Enter:

const myImage = document.getElementById('myImage');
myImage.addEventListener('mouseenter', function() {
  myImage.src = 'image2.jpg';
});
myImage.addEventListener('mouseleave', function() {
  myImage.src = 'image1.jpg';
});

                                                  // 5. Mouse Leave Event

// 1. Change Background Color on Mouse Leave:

const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseleave', function() {
  myDiv.style.backgroundColor = 'white';
});

// 2. Hide Tooltip on Mouse Leave:

const myButton = document.getElementById('myButton');
const tooltip = document.createElement('span');
tooltip.textContent = 'Button tooltip';
myButton.appendChild(tooltip);
myButton.addEventListener('mouseleave', function() {
  myButton.removeChild(tooltip);
});

// 3. Remove Highlight on Mouse Leave:

const myText = document.getElementById('myText');
myText.addEventListener('mouseleave', function() {
  myText.style.backgroundColor = 'transparent';
});

// 4. Collapse Content on Mouse Leave:

const myDiv = document.getElementById('myDiv');
const content = document.getElementById('content');
content.style.display = 'block';
myDiv.addEventListener('mouseleave', function() {
  content.style.display = 'none';
});

// 5. Revert Image Source on Mouse Leave:

const myImage = document.getElementById('myImage');
myImage.addEventListener('mouseenter', function() {
  myImage.src = 'image2.jpg';
});
myImage.addEventListener('mouseleave', function() {
  myImage.src = 'image1.jpg';
});

                                                         // 6. Mouse Move Event

// 1. Changing CSS properties based on mouse position:

document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.body.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)';
  });

// 2. Tracking mouse coordinates:
  
document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log('Mouse coordinates: X=' + x + ', Y=' + y);
  });

// 3. Creating a draggable element:

var element = document.getElementById('myElement');
var isDragging = false;
var offsetX, offsetY;

element.addEventListener('mousedown', function(event) {
  isDragging = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    element.style.left = (event.clientX - offsetX) + 'px';
    element.style.top = (event.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

// 4. Drawing with the mouse:

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var isDrawing = false;

canvas.addEventListener('mousedown', function(event) {
  isDrawing = true;
  context.beginPath();
  context.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener('mousemove', function(event) {
  if (isDrawing) {
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
  }
});

canvas.addEventListener('mouseup', function() {
  isDrawing = false;
});

// 5. Creating a hover effect on an element:

var element = document.getElementById('myElement');

element.addEventListener('mousemove', function() {
  element.classList.add('hover');
});

element.addEventListener('mouseout', function() {
  element.classList.remove('hover');
});

                                                // 7. Hover Event

// 1. Changing CSS on hover:

const element = document.getElementById('myElement');

element.addEventListener('mouseover', function() {
  element.style.backgroundColor = 'blue';
});

element.addEventListener('mouseout', function() {
  element.style.backgroundColor = 'initial';
});

// 2. Showing and hiding an element on hover:

const element = document.getElementById('myElement');
const hiddenElement = document.getElementById('hiddenElement');

element.addEventListener('mouseover', function() {
  hiddenElement.style.display = 'block';
});

element.addEventListener('mouseout', function() {
  hiddenElement.style.display = 'none';
});

// 3. Creating a tooltip on hover:

const element = document.getElementById('myElement');
const tooltip = document.getElementById('tooltip');

element.addEventListener('mouseover', function() {
  tooltip.style.display = 'block';
});

element.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

// 4. Changing image source on hover:

const image = document.getElementById('myImage');

image.addEventListener('mouseover', function() {
  image.src = 'image2.jpg';
});

image.addEventListener('mouseout', function() {
  image.src = 'image1.jpg';
});

// 5. Changing text content on hover:

const element = document.getElementById('myElement');

element.addEventListener('mouseover', function() {
  element.textContent = 'Hovering!';
});

element.addEventListener('mouseout', function() {
  element.textContent = 'Hover over me!';
});

                                      // 8. Context Mouse Event

// 1. Preventing the default context menu:

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

// 2. Displaying a custom context menu:

const element = document.getElementById('myElement');
const contextMenu = document.getElementById('contextMenu');

element.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  contextMenu.style.display = 'block';
  contextMenu.style.left = event.pageX + 'px';
  contextMenu.style.top = event.pageY + 'px';
});

document.addEventListener('click', function() {
  contextMenu.style.display = 'none';
});

// 3. Performing an action based on the clicked element in the context menu:

const element = document.getElementById('myElement');

element.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  const clickedElement = event.target;
  console.log('You clicked on:', clickedElement);
});

// 4. Adding context menu items dynamically:

const element = document.getElementById('myElement');
const contextMenu = document.getElementById('contextMenu');

element.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  contextMenu.innerHTML = ''; // Clear previous items

  const items = ['Item 1', 'Item 2', 'Item 3'];

  items.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    contextMenu.appendChild(li);
  });

  contextMenu.style.display = 'block';
  contextMenu.style.left = event.pageX + 'px';
  contextMenu.style.top = event.pageY + 'px';
});

document.addEventListener('click', function() {
  contextMenu.style.display = 'none';
});

// 5. Opening a link in a new tab from the context menu:

const element = document.getElementById('myElement');

element.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  const link = 'https://example.com';
  window.open(link, '_blank');
});












  
























