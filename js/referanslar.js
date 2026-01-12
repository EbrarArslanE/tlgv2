window.onload = referansListele;

async function referansListele() {
  const slideContainer = document.getElementById("referans-slide");
  if (!slideContainer) return;

  try {
    const response = await fetch("assets/referanslar.json");
    const dataText = await response.text();
    const referanslar = eval(dataText); // mevcut yapın

    slideContainer.innerHTML = "";

    referanslar.forEach((item, index) => {
      slideContainer.innerHTML += `
        <div class="item" style="--position:${index}">
          <div class="slide">
            <div style="display:flex; gap:10px;">
              <div style="width:40%;">
                <img src="${item.e_sirket_logo_url}" alt="">
              </div>
              <div style="width:60%;">
                <p><strong>${item.e_sirket_adi}</strong></p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error(err);
  }
}