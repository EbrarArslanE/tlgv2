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
          <div class="loader">
            <div class="wrapper">
              <div style="width:100%; height:50%; display:flex; align-items:center; justify-content:center;">
                <img src="${item.e_sirket_logo_url}" alt="">
              </div>
              <div style="width:100%; height:50%; display:flex; align-items:center; justify-content:center; font-size:18px;">
                <p class="kart-baslik"><strong>${item.e_sirket_adi}</strong></p>
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