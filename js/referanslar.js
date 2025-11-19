window.onload = referansListele;

async function referansListele() {
  const slideContainer = document.getElementById("referans-slide");
  if (!slideContainer) {
    console.error("referans-slide id'li element bulunamadı!");
    return;
  }

  try {
    const response = await fetch("assets/referanslar.json");
    const dataText = await response.text();
    const referanslar = eval(dataText);  // JSON.parse() kullanabileceksen onu tercih et.

    slideContainer.innerHTML = "";  // Önce içeriği sıfırla

    referanslar.forEach((item, index) => {
      const pos = index + 1; // --position 1’den başlasın
      slideContainer.innerHTML += `
        <div class="item" style="--position: ${pos}">
          <div class="slide">
            <div class="d-flex flex-row w-100 h-100">
              <div class="w-50 h-100">
                <img src="${item.e_sirket_logo_url}" alt="${item.e_sirket_adi} logosu" style="margin-bottom:8px;" />
              </div>
              <div class="w-50 d-flex flex-col justify-start items-start">
                <p><strong>${item.e_sirket_adi}</strong></p>
                <p>${item.e_referans_aciklamasi}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error("Referanslar yüklenirken hata:", err);
  }
}
