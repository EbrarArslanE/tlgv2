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
            <p>${item.e_sirket_adi}</p>
            <p>${item.e_sirket_sahibi}</p>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error("Referanslar yüklenirken hata:", err);
  }
}
