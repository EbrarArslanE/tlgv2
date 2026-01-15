  const slidesWrapper = document.getElementById('slidesWrapper');

  async function fetchReferanslar() {
    try {
      const res = await fetch("assets/referanslar.json");
      const data = await res.json();
      return data;
    } catch(e) {
      console.error("Referanslar yüklenirken hata:", e);
      return [];
    }
  }

  function createSlide({ e_sirket_logo_url, e_sirket_adi }) {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = e_sirket_logo_url;
    img.alt = e_sirket_adi;

    const name = document.createElement('div');
    name.classList.add('company-name');
    name.textContent = e_sirket_adi;

    slide.appendChild(img);
    slide.appendChild(name);

    return slide;
  }

  (async () => {
    const referanslar = await fetchReferanslar();
    if(!referanslar.length) {
      slidesWrapper.textContent = "Referans bulunamadı";
      return;
    }

    // Referansları 2 kere ekleyerek sonsuzluk oluşturuyoruz
    [...referanslar, ...referanslar].forEach(item => {
      const slide = createSlide(item);
      slidesWrapper.appendChild(slide);
    });

    let pos = 0;
    const slideWidth = 320;
    const totalWidth = slideWidth * referanslar.length;
    const speed = 0.5; // hız (px/frame), ihtiyaca göre arttırabilirsin

    function animate() {
      pos += speed;
      if (pos >= totalWidth) {
        pos = 0;
      }
      slidesWrapper.style.transform = `translateX(${-pos}px)`;
      requestAnimationFrame(animate);
    }
    animate();

  })();