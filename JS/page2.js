document.addEventListener("DOMContentLoaded", function () {
    let upbtn = document.querySelector(".up");
  
    const loginsec = document.getElementById('login-sec');
 
   
    const loginsecHeight = loginsec.offsetHeight;

    upbtn.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
  
      });
    };
    window.onscroll = function () {
        if (this.scrollY >= loginsecHeight ) {
          upbtn.classList.add("show");
        } else {
          upbtn.classList.remove("show");
        }
      };
    });