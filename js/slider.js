(function initSlider() {
  const track = document.querySelector('.slider-track');
  const items = document.querySelectorAll('.slider-item');
  const dotsContainer = document.querySelector('.slider-dots');
  if (!track || items.length === 0 || !dotsContainer) return;

  let index = 0;
  const maxIndex = items.length - 1;

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
    if (i > maxIndex) i = 0;
    if (i < 0) i = maxIndex;
    index = i;

    // Her seferinde güncel slide genişliğini alıyoruz (responsive için)
    const slideWidth = items[0].offsetWidth + 20; // 20 = gap değeri

    track.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  setInterval(() => {
    index++;
    if (index > maxIndex) index = 0;
    goToSlide(index);
  }, 3500);

  // İlk slaydı göster
  goToSlide(0);
})();
