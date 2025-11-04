(function initSlider() {
  const track = document.querySelector('.slider-track');
  const items = document.querySelectorAll('.slider-item');
  const dotsContainer = document.querySelector('.slider-dots');
  let index = 0;

  if (!track || items.length === 0 || !dotsContainer) return; // Güvenlik

  // Noktaları oluştur
  items.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('slider-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.slider-dot');

  function goToSlide(i) {
    index = i;
    track.style.transform = `translateX(-${index * 370}px)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  setInterval(() => {
    index++;
    if (index >= items.length) index = 0;
    goToSlide(index);
  }, 3500);
})();