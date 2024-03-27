const body = document.querySelector("body");

document.addEventListener("mousemove", (e) => {
  let shape = document.createElement("span");

  let size = Math.random() * 40;
  let transformValue = Math.random() * 360;

  shape.style.left = e.offsetX + "px";
  shape.style.top = e.offsetY + "px";

  // in case you're using a font-awesome icon: shape.style.fontSize = 10 + size + "px";
  shape.style.width = 10 + size + "px";
  shape.style.height = 10 + size + "px";

  shape.style.transform = `rotate(${transformValue}deg)`;

  body.appendChild(shape);

  setTimeout(() => {
    shape.remove();
  }, 1000);
});
