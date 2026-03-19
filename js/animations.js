document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Default anlık atlama engelle

    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}
