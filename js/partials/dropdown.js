function dropDown() {
    let boxes = document.querySelectorAll(".lp-faq__box");

    let openbox = (box) => {
        let content = box.querySelector(".lp-faq__box--content");
        box.classList.add("lp-faq__box--active");
        content.style.maxHeight = content.scrollHeight + 10 + "px";
    };

    let closebox = (box) => {
        let content = box.querySelector(".lp-faq__box--content");
        box.classList.remove("lp-faq__box--active");
        content.style.maxHeight = null;
    };

    boxes.forEach((box) => {
        let handle = box.querySelector(".lp-faq__box--handle");
        let content = box.querySelector(".lp-faq__box--content");

        handle.onclick = () => {
            if (content.style.maxHeight) {
                closebox(box);
            } else {
                boxes.forEach((box) => closebox(box));
                openbox(box);
            }
        };
    });

}; dropDown()






