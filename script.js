// Navigation fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Vérification de connexion pour l'achat
document.querySelectorAll('.btn[href="#ebooks"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Ici vous devriez vérifier si l'utilisateur est connecté
        // Pour cet exemple, nous redirigeons toujours vers la page de connexion
        if (!this.classList.contains('disabled')) {
            e.preventDefault();
            window.location.href = "https://gsbr22.github.io/loginnextgen/";
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons dès que possible.');
        this.reset();
    });
}
