// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Initialisation Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzMi3F5vLM0bYxTY1KuBJf7eD6Nx96wsQ",
    authDomain: "login-ec53a.firebaseapp.com",
    projectId: "login-ec53a",
    storageBucket: "login-ec53a.appspot.com",
    messagingSenderId: "123644267529",
    appId: "1:123644267529:web:5409efdf896971c655bcd8"
};

// Vérifie si Firebase est déjà initialisé
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Vérifie l'état de connexion
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // Utilisateur connecté
        console.log("Utilisateur connecté:", user.email);
    } else {
        // Utilisateur non connecté
        console.log("Utilisateur non connecté");
    }
});

// Gestion des achats
document.addEventListener('DOMContentLoaded', function() {
    const purchaseBtn = document.getElementById('purchase-btn');
    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', function(e) {
            const user = firebase.auth().currentUser;
            if (!user) {
                e.preventDefault();
                alert('Veuillez vous connecter pour effectuer un achat');
                window.location.href = "login.html";
            }
        });
    }
});

// Fonction pour vérifier la connexion avant achat
function checkLoginBeforePurchase() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert('Veuillez vous connecter pour effectuer un achat');
        window.location.href = "login.html";
        return false;
    }
    return true;
}
