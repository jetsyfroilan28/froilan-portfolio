
const sections = document.querySelectorAll('.animate');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show'); 
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById('read-more');
  const hideMsgBtn = document.getElementById('hide-about-message');
  const aboutMsg = document.getElementById('about-message');
  const aboutImg = document.getElementById('about-extra-img');

  readMoreBtn.onclick = () => {
    aboutMsg.style.display = 'block';
    aboutImg.style.display = 'block';
  };

  hideMsgBtn.onclick = () => {
    aboutMsg.style.display = 'none';
    aboutImg.style.display = 'none';
  };
});
