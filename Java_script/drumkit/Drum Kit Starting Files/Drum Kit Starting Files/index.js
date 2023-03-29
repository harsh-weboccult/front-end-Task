const btn = document.querySelectorAll(".drum");
btn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    alert("me" + e.target.innerHTML + "clicked");
  });
});
