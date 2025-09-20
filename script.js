// -----------------------------
// 1. Typing Effect di Header
// -----------------------------
const text = "Halo, saya Rahmah 👋";
let i = 0;
const speed = 100; // kecepatan ketik (ms)
const typingTarget = document.getElementById("typing");

function typeWriter() {
    if (i < text.length) {
        typingTarget.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

// -----------------------------
// 2. Fade-in saat Scroll
// -----------------------------
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-message");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const formData = new FormData(form);

        fetch("submit_contact.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if(data.trim() === "success"){
                successMsg.innerText = "Terima kasih! Pesan Anda telah terkirim ✨";
                successMsg.style.display = "block";
                form.reset();
            } else {
                alert(data); // tampilkan error dari server
            }
        })
        .catch(error => {
            alert("Terjadi kesalahan: " + error);
        });
    });
}



