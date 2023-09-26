document.addEventListener("DOMContentLoaded", function () {
  let up = document.querySelector(".up");
  let heroitem = document.getElementById('herohome');
  const heroSection = document.getElementById("hero");
  const heroHeight = heroSection.offsetHeight

  let us = document.getElementById("aboutUs");
  const aboutUsSection = document.getElementById("AboutCirclez");
  const aboutUsHeight = aboutUsSection.offsetTop;

  let client = document.getElementById("ourClient");

  const clientSection = document.getElementById("Testimonials");
  const clientHeight = clientSection.offsetTop;

  let service = document.getElementById("service");

  const ServicesSection = document.getElementById("Services");
  const ServicesHeight = ServicesSection.offsetTop;


   const buttons = document.querySelectorAll('.nav-link'); //all nav-link
  // const sections = document.querySelectorAll("section");
    

  const sections = [heroSection , aboutUsSection,clientSection,ServicesSection]
  const navList  = [heroitem , us,client ,service]


  
 


   
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        buttons.forEach(btn => {
          btn.classList.remove('active');
          this.classList.add('active');
        });
    
        
        
      });
    });

 

  up.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };


  us.onclick = function (event) {
    event.preventDefault();
    window.scrollTo({
      top: aboutUsHeight-70,
      behavior: "smooth",
     
    });
  };


  client.onclick = function (event) {
    event.preventDefault();
    window.scrollTo({
      top: clientHeight -80,
      behavior: "smooth",
    });
    
  };

  service.onclick = function (event) {
    event.preventDefault();
    window.scrollTo({
      top: ServicesHeight-80,
      behavior: "smooth",
    });
  };
  
  

  window.onscroll= () =>{
 
    for(let i=0 ; i<sections.length; i++) {
      const sectionTop =sections[i].offsetTop;
      
     
     if ( window.scrollY >= sectionTop-100 ) {
        
        navList.forEach((li) => {
          li.classList.remove("active");
          navList[i].classList.add("active")
          
        });

        
        
      
      }
     
    }; }
  
    window.onscroll = function () {
      if (this.scrollY >= heroHeight -500) {
        up.classList.add("show");
      } else {
        up.classList.remove("show");
      }
    };
  
  


});