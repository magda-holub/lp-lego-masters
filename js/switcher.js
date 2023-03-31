const layoutSwitchButtons = document.querySelectorAll("#layout_switch button");

layoutSwitchButtons[0].addEventListener("click", function () {
    const testLayout = document.querySelector("#testLayout");
    testLayout.classList.remove("layout-0");
    testLayout.classList.remove("layout-1");
    document.body.classList.add("mobile");
    console.log('mobile layout');
});

layoutSwitchButtons[1].addEventListener("click", function () {
    const testLayout = document.querySelector("#testLayout");
    testLayout.classList.add("layout-0");
    document.body.classList.remove("mobile");
    console.log('3 column layout');
});

layoutSwitchButtons[2].addEventListener("click", function () {
    const testLayout = document.querySelector("#testLayout");
    testLayout.classList.add("layout-1");
    document.body.classList.remove("mobile");
    console.log('4 column layout');
});