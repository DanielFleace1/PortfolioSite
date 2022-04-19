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








