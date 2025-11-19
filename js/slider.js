// window.onload = referansListele;

// async function referansListele() {
//   const slideContainer = document.getElementById("referans-slide");
//   if (!slideContainer) {
//     console.error("referans-slide id'li element bulunamadı!");
//     return;
//   }

//   try {
//     const response = await fetch("/assets/referanslar.json");
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//     const referanslar = await response.json();

//     if (!Array.isArray(referanslar)) {
//       throw new TypeError("Referanslar JSON'u array değil!");
//     }

//     slideContainer.innerHTML = "";

//     referanslar.forEach((item, index) => {
//       const pos = index + 1;
//       slideContainer.innerHTML += `
//         <div class="item" style="--position: ${pos}">
//           <div class="slide">
//             <div class="d-flex flex-row w-100">
//               <div class="w-50">
//                 <img src="${item.e_sirket_logo_url}" alt="${item.e_sirket_adi} logosu" style="max-height:50px; margin-bottom:8px;" />
//               </div>
//               <div class="w-50 d-flex flex-col justify-center items-start">
//                 <p><strong>${item.e_sirket_adi}</strong></p>
//                 <p>${item.e_referans_aciklamasi}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//     });
//   } catch (error) {
//     console.error("Referanslar yüklenirken hata:", error);
//   }
// }
