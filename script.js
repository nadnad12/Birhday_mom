let currentPhoto = 0;
let slideshowInterval;

const photos = [
    "images/imagesfoto2 (1).jpg",
    "images/imagesfoto2 (2).jpg",
    "images/imagesfoto2 (3).jpg",
    "images/imagesfoto2 (4).jpg",
    "images/imagesfoto2 (5).jpg",
    "images/imagesfoto2 (6).jpg",
    "images/imagesfoto2 (7).jpg",
    "images/imagesfoto2 (8).jpg",
    "images/imagesfoto2 (9).jpg",
    "images/imagesfoto2 (10).jpg",
    "images/imagesfoto2 (11).jpg",
    "images/imagesfoto2 (12).jpg",
    "images/imagesfoto2 (13).jpg",
    "images/imagesfoto2 (14).jpg",
    "images/imagesfoto2 (15).jpg",
    "images/imagesfoto2 (16).jpg",
    "images/imagesfoto2 (17).jpg",
    "images/imagesfoto2 (18).jpg",
    "images/imagesfoto2 (19).jpg",
    "images/imagesfoto2 (20).jpg",
    "images/imagesfoto2 (21).jpg",
    "images/imagesfoto2 (22).jpg",
    "images/imagesfoto2 (1).jpeg",
    "images/imagesfoto2 (2).jpeg",
    "images/imagesfoto2 (3).jpeg",
    "images/imagesfoto2 (4).jpeg",
    "images/imagesfoto2 (5).jpeg",
    "images/imagesfoto2 (6).jpeg",
    "images/imagesfoto2 (7).jpeg",
    "images/imagesfoto2 (8).jpeg",
    "images/imagesfoto2 (9).jpeg",
    "images/imagesfoto2 (10).jpeg",
    "images/imagesfoto2 (11).jpeg",
    "images/imagesfoto2 (12).jpeg",
    "images/imagesfoto2 (13).jpeg",
    "images/imagesfoto2 (14).jpeg",
    "images/imagesfoto2 (15).jpeg",
    "images/imagesfoto2 (16).jpeg",
    "images/imagesfoto2 (17).jpeg",
    "images/imagesfoto2 (18).jpeg",
    "images/imagesfoto2 (19).jpeg",
    "images/imagesfoto2 (20).jpeg",
    "images/imagesfoto2 (21).jpeg",
    "images/imagesfoto2 (22).jpeg"
];


// MENYEMBUNYIKAN SEMUA HALAMAN
function hideAllPages() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("memoryPage").style.display = "none";
    document.getElementById("finalPage").style.display = "none";
}


// MEMBUKA KEJUTAN
function startSurprise() {

    hideAllPages();

    document.getElementById("memoryPage").style.display = "flex";

    showPhoto();
    startSlideshow();

    // Memulai musik YouTube
    const youtubeMusic = document.getElementById("youtubeMusic");

    if (youtubeMusic) {
        youtubeMusic.src =
            "https://www.youtube.com/embed/0Sgbj5kTg4Q?autoplay=1&loop=1&playlist=0Sgbj5kTg4Q";
    }

    window.scrollTo(0, 0);
}


// MENAMPILKAN FOTO
function showPhoto() {

    const photo = document.getElementById("memoryPhoto");
    const counter = document.getElementById("photoCounter");

    if (!photo || !counter) return;

    photo.style.opacity = "0";

    setTimeout(() => {

        photo.src = photos[currentPhoto];

        counter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;

        photo.style.opacity = "1";

    }, 300);
}


// FOTO SELANJUTNYA
function nextPhoto() {

    currentPhoto = (currentPhoto + 1) % photos.length;

    showPhoto();
}


// FOTO SEBELUMNYA
function previousPhoto() {

    currentPhoto =
        (currentPhoto - 1 + photos.length) % photos.length;

    showPhoto();
}


// SLIDESHOW OTOMATIS
function startSlideshow() {

    clearInterval(slideshowInterval);

    slideshowInterval = setInterval(() => {
        nextPhoto();
    }, 4000);
}


// MEMBUKA PESAN UNTUK MAMA
function showFinalPage() {

    clearInterval(slideshowInterval);

    hideAllPages();

    document.getElementById("finalPage").style.display = "flex";

    window.scrollTo(0, 0);
}


// TOMBOL AKHIR
function celebrateAgain() {

    alert("🎉 Happy Birthday, Mom! 💙🎂\n\nI Love You So Much, Mama! 💙");
}