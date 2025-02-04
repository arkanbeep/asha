// Mengambil elemen dari HTML
const gif = document.querySelector('.giffy');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');
const body = document.querySelector('body');

// Fungsi ketika tombol "Yes" diklik
function yes() {
    text.style.display = 'block';
    buttons.style.display = 'none';
    question.textContent = "(its us preparing for a date)";
    gif.src = 'assets/giphy.gif';
    createHearts(100);
}

// Daftar frasa dan GIF untuk tombol "No"
const phrases = ['KOK MENCET GA 🥺', 'IH JAHAT DIPENCET LAGI (its me crying)', 'asha pleaseeee :((', 'HBVDVDSAVXSADJSDWBX', 'WOI PENCET YANG IJO GA'];
const gifs = [
    'assets/hug-me-im-sad.gif',
    'assets/goma-peach.gif',
    'assets/cash-app-empty.gif',
    'assets/sad.gif',
    'assets/cry-cute.webp',
    'assets/reaction-sad.gif'
];

let noCount = 0;

// Fungsi ketika tombol "No" diklik
function no() {
    if (noCount < phrases.length) {
        noBtn.style.position = 'absolute';
        noBtn.style.transition = 'all 0.3s ease'; // Animasi pergerakan tombol

        // Mengatur posisi acak di dalam batas layar
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;

        // Mengganti teks tombol dan GIF sesuai jumlah klik
        noBtn.textContent = phrases[noCount];
        gif.src = gifs[noCount];

        noCount++;
    } else {
        resetQuestion(); // Setelah 5 klik "No", kembali ke kondisi awal
    }
}

// Fungsi untuk mengatur ulang pertanyaan ke kondisi awal
function resetQuestion() {
    noCount = 0; // Reset hitungan klik "No"
    question.textContent = "ih beneran gamauu dong :(("; // Teks awal
    gif.src = 'assets/kucing ngamuk.webp'; // GIF awal
    text.style.display = 'none'; // Sembunyikan teks cinta
    buttons.style.display = 'flex'; // Tampilkan tombol kembali
    yesBtn.innerHTML = "now you dont have another choice except this <br> (kalo ga mecet juga aku gajadi beliin chiikawa)"; // Reset teks tombol "Yes"

    noBtn.style.display = 'none';
    yesBtn.style.display = 'inline-block';
    yesBtn.onclick = () => yes();
   
}

// Fungsi untuk membuat animasi hati
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("img");
        heart.src = 'assets/Heart_corazón.svg.png';
        heart.alt = "Heart";
        heart.classList.add("heart", heart`${(i % 3) + 1}`); // Variasi animasi

        const size = Math.floor(Math.random() * 51) + 50; // Ukuran acak (50-100px)
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * (window.innerWidth - size)}px`;
        heart.style.top = `${Math.random() * (window.innerHeight - size)}px`;

        document.body.appendChild(heart);

        // Menghapus hati setelah 1.5 detik
        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}