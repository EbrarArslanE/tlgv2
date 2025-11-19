window.onload = referansListele;

async function referansListele() {
  const slideContainer = document.getElementById("referans-slide");
  if (!slideContainer) {
    console.error("referans-slide id'li element bulunamadı!");
    return;
  }

  try {
    const response = await fetch("/js/referanslar.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const referanslar = await response.json();

    if (!Array.isArray(referanslar)) {
      throw new TypeError("Referanslar JSON'u array değil!");
    }

    slideContainer.innerHTML = "";

    referanslar.forEach((item, index) => {
      const pos = index + 1;
      slideContainer.innerHTML += `
        <div class="item" style="--position: ${pos}">
          <div class="slide">
            <img src="${item.e_sirket_logo_url}" alt="${item.e_sirket_adi} logosu" style="max-height:50px; margin-bottom:8px;" />
            <p><strong>${item.e_sirket_adi}</strong></p>
            <p>${item.e_sirket_sahibi}</p>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error("Referanslar yüklenirken hata:", error);
  }
}
