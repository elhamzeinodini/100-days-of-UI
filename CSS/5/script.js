window.addEventListener("mouseup", (e) => {
  // 0xffffff  is equivalent to hexadecimal color #ffffff, or white
  const color = Math.round(Math.random() * 0xffffff);
  console.log("🚀 ~ window.addEventListener ~ color:", color);

  const fill = `#${color.toString(16).padStart(6, "0")}`;
  // color.toString(16) converts the color to its hexadecimal representation
  // padStart(6, "0") ensures that the string is at least 6 characters long by padding it with "0"
  console.log("🚀 ~ window.addEventListener ~ fill:", fill);

  e.target.style.fill = fill;
});


// mousedown: Occurs when the mouse button is pressed down (or clicked, when you click, you press down).
// mouseup: Occurs when the mouse button is released after being pressed down.