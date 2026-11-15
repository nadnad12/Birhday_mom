let currentPhoto = 0;
let slideshowInterval = null;
let photoLoadToken = 0;
let isLoadingPhoto = false;


// ================= DAFTAR FOTO =================
// Sesuai dengan file yang tersedia di folder images

const photos = [
    "images/imagesfoto2 (1).jpeg",
    "images/imagesfoto2 (1).jpg",

    "images/imagesfoto2 (2).jpeg",
    "images/imagesfoto2 (2).jpg",

    "images/imagesfoto2 (3).jpeg",
    "images/imagesfoto2 (3).jpg",

    "images/imagesfoto2 (4).jpeg",
    "images/imagesfoto2 (5).jpeg",
    "images/imagesfoto2 (6).jpeg",
    "images/imagesfoto2 (7).jpeg",
    "images/imagesfoto2 (8).jpeg",
    "images/imagesfoto2 (9).jpeg",

    "images/imagesfoto2 (10).jpeg",
    "images/imagesfoto2 (10).jpg",

    "images/imagesfoto2 (11).jpeg",
    "images/imagesfoto2 (11).jpg",

    "images/imagesfoto2 (12).jpeg",
    "images/imagesfoto2 (12).jpg",

    "images/imagesfoto2 (13).jpeg",
    "images/imagesfoto2 (13).jpg",

    "images/imagesfoto2 (14).jpeg",
    "images/imagesfoto2 (14).jpg",

    "images/imagesfoto2 (15).jpeg",
    "images/imagesfoto2 (15).jpg",

    "images/imagesfoto2 (16).jpeg",
    "images/imagesfoto2 (16).jpg",

    "images/imagesfoto2 (17).jpeg",
    "images/imagesfoto2 (17).jpg",

    "images/imagesfoto2 (18).jpeg",
    "images/imagesfoto2 (18).jpg",

    "images/imagesfoto2 (19).jpeg",
    "images/imagesfoto2 (20).jpeg",

    "images/imagesfoto2 (21).jpeg",
    "images/imagesfoto2 (21).jpg",

    "images/imagesfoto2 (22).jpeg",
    "images/imagesfoto2 (22).jpg"
];


// ================= PENGATURAN SLIDESHOW =================
// 5 detik per foto agar nyaman dilihat

const SLIDESHOW_DELAY = 5000;


// ================= MENYEMBUNYIKAN SEMUA HALAMAN =================

function hideAllPages() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("memoryPage").style.display = "none";
    document.getElementById("finalPage").style.display = "none";
}


// ================= MEMBUKA KEJUTAN =================

function startSurprise() {

    stopSlideshow();

    hideAllPages();

    document.getElementById("memoryPage").style.display = "flex";


    // MULAI DARI FOTO PERTAMA
    currentPhoto = 0;
    showPhoto();


    // ================= MEMULAI MUSIK =================

    const music = document.getElementById("birthdayMusic");

    if (music) {

        music.volume = 1.0;
        music.muted = false;
        music.currentTime = 0;

        music.play()
            .then(() => {
                console.log("🎵 Musik berhasil diputar");
            })
            .catch((error) => {
                console.error("❌ Musik tidak dapat diputar:", error);
            });

    }


    // ================= MEMULAI SLIDESHOW =================

    startSlideshow();


    window.scrollTo(0, 0);
}


// ================= MENAMPILKAN FOTO =================

function showPhoto() {

    const photo = document.getElementById("memoryPhoto");
    const counter = document.getElementById("photoCounter");

    if (!photo || !counter) return;


    const token = ++photoLoadToken;
    const selectedIndex = currentPhoto;
    const image = new Image();

    isLoadingPhoto = true;


    image.onload = function () {

        if (token !== photoLoadToken) return;

        photo.src = image.src;

        counter.textContent =
            `${selectedIndex + 1} / ${photos.length}`;

        photo.style.opacity = "1";

        isLoadingPhoto = false;

    };


    image.onerror = function () {

        if (token !== photoLoadToken) return;

        console.error(
            "Foto gagal dimuat:",
            photos[selectedIndex]
        );

        isLoadingPhoto = false;

        // Jika ada foto yang gagal dimuat,
        // otomatis lanjut ke foto berikutnya
        setTimeout(() => {
            nextPhoto();
        }, 500);

    };


    // Efek fade sebelum foto berubah
    photo.style.opacity = "0";

    image.src = photos[selectedIndex];
}


// ================= FOTO SELANJUTNYA =================

function nextPhoto() {

    if (isLoadingPhoto) return;

    currentPhoto =
        (currentPhoto + 1) % photos.length;

    showPhoto();
}


// ================= FOTO SEBELUMNYA =================

function previousPhoto() {

    if (isLoadingPhoto) return;

    currentPhoto =
        (currentPhoto - 1 + photos.length)
        % photos.length;

    showPhoto();
}


// ================= MENGHENTIKAN SLIDESHOW =================

function stopSlideshow() {

    if (slideshowInterval !== null) {

        clearInterval(slideshowInterval);

        slideshowInterval = null;

    }

}


// ================= SLIDESHOW OTOMATIS =================

function startSlideshow() {

    stopSlideshow();

    slideshowInterval =
        setInterval(() => {

            nextPhoto();

        }, SLIDESHOW_DELAY);

}


// ================= MEMBUKA PESAN UNTUK MAMA =================

function showFinalPage() {

    stopSlideshow();

    hideAllPages();

    document.getElementById("finalPage")
        .style.display = "flex";

    window.scrollTo(0, 0);
}


// ================= TOMBOL AKHIR =================

function celebrateAgain() {

    alert(
        "🎉 Happy Birthday, Mom! 💙🎂\n\n" +
        "I Love You So Much, Mama! 💙"
    );

}
