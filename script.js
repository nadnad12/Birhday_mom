let currentPhoto = 0;
let slideshowInterval = null;
let photoLoadToken = 0;
let isLoadingPhoto = false;


// ================= DAFTAR FOTO =================

// Total 44 foto:
// 22 file JPG + 22 file JPEG
const photos = [
    ...Array.from({ length: 22 }, (_, i) =>
        `images/imagesfoto2 (${i + 1}).jpg`
    ),
    ...Array.from({ length: 22 }, (_, i) =>
        `images/imagesfoto2 (${i + 1}).jpeg`
    )
];


// ================= PENGATURAN SLIDESHOW =================

// 5 detik per foto
// 44 foto × 5 detik = sekitar 3 menit 40 detik
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

        music.currentTime = 0;

        music.play().catch(function (error) {
            console.log("Musik tidak dapat diputar:", error);
        });

    }


    // ================= MEMULAI SLIDESHOW =================

    startSlideshow();


    // KEMBALI KE ATAS HALAMAN
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

    };


    // EFEK MENGHILANG SEBELUM FOTO BERGANTI
    photo.style.opacity = "0";


    // MEMUAT FOTO BARU
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


    slideshowInterval = setInterval(function () {

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
