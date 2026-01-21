const images = [
  "https://via.placeholder.com/400x500?text=Item+1",
  "https://via.placeholder.com/400x500?text=Item+2",
  "https://via.placeholder.com/400x500?text=Item+3"
];

let index = 0;
const img = document.getElementById("slideImage");

setInterval(() => {
  index = (index + 1) % images.length;
  img.src = images[index];
}, 3000);