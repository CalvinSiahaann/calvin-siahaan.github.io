// Tanggal target (100 hari dari sekarang)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 100);

// Fungsi untuk menghitung dan menampilkan countdown
function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = `${days} hari`;
    document.getElementById("hours").textContent = `${hours} jam`;
    document.getElementById("minutes").textContent = `${minutes} menit`;
    document.getElementById("seconds").textContent = `${seconds} detik`;
}

// Update countdown setiap 1 detik
setInterval(updateCountdown, 1000);
