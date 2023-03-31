const layoutSwitch = document.querySelector("#layout_switch");
const testLayout = document.querySelector("#testLayout");
const body = document.body;

layoutSwitch.addEventListener("click", function(event) {
  const button = event.target;
  
  if (button.matches("button:first-child")) {
    testLayout.classList.remove("layout-0", "layout-1");
    body.classList.add("mobile");
    console.log("mobile layout");
  } else if (button.matches("button:nth-child(2)")) {
    testLayout.classList.add("layout-0");
    body.classList.remove("mobile");
    console.log("3 column layout");
  } else if (button.matches("button:nth-child(3)")) {
    testLayout.classList.add("layout-1");
    body.classList.remove("mobile");
    console.log("4 column layout");
  }
});