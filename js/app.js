let cross = document.querySelectorAll(".accordian li label");
let accordianContent = document.querySelector(".accordian .content");
let allTabs = document.querySelectorAll(".accordian .content");

// let after = window.getComputedStyle(cross, "::after");

// console.log(ele.transform.rota);
// cross.addEventListener("click", () => {});
cross.forEach((element) => {
  element.addEventListener("click", (e) => {
    let label = e.currentTarget.nextElementSibling;
    let icon = label.previousElementSibling.lastChild;
    // // console.log(label);
    // console.log(icon);
    if (!label.classList.contains("show")) {
      allTabs.forEach((element) => {
        element.classList.remove("show");
        element.previousElementSibling.lastChild.classList.remove("rotate");
      });
      icon.classList.add("rotate");
      label.classList.add("show");
    } else {
      icon.classList.remove("rotate");
      label.classList.remove("show");
    }
    // icon.style.transform = "rotate(-135deg)";
    // if (label.classList.contains("show")) {
    //   label.classList.remove("show");
    //   //   icon.classList.add("rotate");
    // } else {
    //   allTabs.forEach((element) => {
    //     element.classList.remove("show");
    //     // icon.style.transform = "rotate(-135deg)";
    //     icon.classList.remove("rotate");
    //   });
    //   label.classList.add("show");
    //   icon.classList.add("rotate");
    //   //   icon.style.transform = "rotate(135deg)";
    // }
  });
});
