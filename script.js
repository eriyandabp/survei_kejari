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

// button "Kembali ke Atas"
let btnBackToTop = document.getElementById("btnBackToTop");

// tampilkan tombol
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block"; 
    } else {
        btnBackToTop.style.display = "none"; 
    }
}

// halaman atas
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Fungsi untuk menampilkan modal dengan gambar QR Code
function previewQR(src) {
  const modal = document.getElementById('qrModal');
  const modalImg = document.getElementById('qrModalImg');
  modal.style.display = "block";
  modalImg.src = src;
}
