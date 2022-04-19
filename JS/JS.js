// Highlight Nav Bar & Scrolling
let sections = document.querySelectorAll('#about, #projects,#skills,#workExperience,#education')
// Add an event listner listening for scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter(){
    let scrollY = window.pageYOffset;
    // Loop sections to get height, top and ID values
    sections.forEach(sec => {
        const sectionHeight = sec.offsetHeight;
        const sectionTop = sec.offsetTop - 50;
        const sectionId = sec.getAttribute("id");
    // Add active class & remove active class depending on Scroll Y
    if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
    ){
        document.querySelector(".navBar a[href*=" + sectionId + "]").classList.add("active");
      } 
       else {
        document.querySelector(".navBar a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

// Skills Scrolling
function reveal() {
    var reveal = document.querySelectorAll(".listColumns")

    console.log('reveal:', reveal,'typeof::', typeof(reveal))
   

    for (var i = 0; i < reveal.length; i++) {
        console.log(reveal[[i]])
        let  windowHeight = window.innerHeight;
        let  elementTop = reveal[i].getBoundingClientRect().top;

        let  elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            // console.log('active')
            reveal[i].classList.add("active");
            console.log('here',reveal[i])
          } else {
            console.log(' remove active')
            reveal[i].classList.remove("active");
          }
      }

}

window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();







