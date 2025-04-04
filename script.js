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
// Vérification de connexion pour la page ebook
if (window.location.pathname.includes('ebook-football')) {
    const purchaseBtn = document.getElementById('purchase-btn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', function(e) {
            // Ici vous devriez vérifier si l'utilisateur est connecté
            // Pour l'exemple, nous redirigeons vers la page de connexion
            const isLoggedIn = false; // À remplacer par votre vérification
            
            if (!isLoggedIn) {
                e.preventDefault();
                alert('Veuillez vous connecter pour procéder à l\'achat.');
                window.location.href = "https://gsbr22.github.io/loginnextgen/";
            }
        });
    }
}
// Dans le code de votre site (nextgencorp.fr)
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les informations de connexion
    const userEmail = localStorage.getItem('userEmail');
    const lastLogin = localStorage.getItem('lastLogin');
    const userName = localStorage.getItem('userName');
    
    if (userEmail) {
        console.log('Utilisateur connecté:', userEmail);
        // Vous pouvez utiliser ces informations pour personnaliser votre site
        // Par exemple afficher un message de bienvenue
    }
    
    // Optionnel: Effacer les données après utilisation si nécessaire
    // localStorage.removeItem('userEmail');
    // localStorage.removeItem('lastLogin');
    // localStorage.removeItem('userName');
});
// À placer dans le <head> de votre site nextgencorp.fr
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const loggedIn = urlParams.get('loggedIn');
  const userEmail = urlParams.get('email');

  if (loggedIn && userEmail) {
    // Stocker en sessionStorage pour la navigation sur le site
    sessionStorage.setItem('userEmail', userEmail);
    
    // Afficher un message de bienvenue (exemple)
    alert('Bienvenue ' + userEmail);
    
    // Optionnel: Nettoyer l'URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  
  // Vérifier si l'utilisateur est connecté
  const storedEmail = sessionStorage.getItem('userEmail');
  if (storedEmail) {
    console.log('Utilisateur connecté:', storedEmail);
    // Personnaliser l'interface utilisateur
  }
});
