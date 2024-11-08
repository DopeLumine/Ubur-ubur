// Event ketika video selesai diputar
const videoElement = document.querySelector("video");

videoElement.addEventListener("ended", function() {
    alert("Semoga video ini membawa senyuman untukmu! Selamat ulang tahun!");
});
let slideIndex = 1;
showSlides(slideIndex);


