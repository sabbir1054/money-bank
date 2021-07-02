const loginBtn = document.querySelector('.enterBtn');
loginBtn.addEventListener("click", function (event) {
     const loginPage = document.querySelector ('.loginArea');
     loginPage.style.display = "none";

     const frontPage = document.querySelector(".frontPage");
     frontPage.style.display = "block";
})