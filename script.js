function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    alert("Link berhasil disalin!");
  }).catch(err => {
    alert("Gagal menyalin link.");
  });
}

function printQR(imgSrc) {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<img src="${imgSrc}" style="width:300px;">`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}

// Dapatkan tombol "Kembali ke Atas"
let btnBackToTop = document.getElementById("btnBackToTop");

// Ketika pengguna menggulir ke bawah 20px dari bagian atas dokumen, tampilkan tombol
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block"; // Tampilkan tombol
    } else {
        btnBackToTop.style.display = "none"; // Sembunyikan tombol
    }
}

// Ketika pengguna mengklik tombol, gulirkan dokumen ke atas
function scrollToTop() {
    // Untuk browser lama
    document.body.scrollTop = 0;
    // Untuk browser modern
    document.documentElement.scrollTop = 0;
}