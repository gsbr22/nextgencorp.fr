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
// Initialisation Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzMi3F5vLM0bYxTY1KuBJf7eD6Nx96wsQ",
    authDomain: "login-ec53a.firebaseapp.com",
    projectId: "login-ec53a",
    storageBucket: "login-ec53a.appspot.com",
    messagingSenderId: "123644267529",
    appId: "1:123644267529:web:5409efdf896971c655bcd8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

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

// Gestion de l'authentification
function handleAuthState() {
    auth.onAuthStateChanged(async (user) => {
        const authBtn = document.getElementById('auth-btn');
        const accountDropdown = document.getElementById('account-dropdown');
        
        if (user) {
            // Utilisateur connecté
            authBtn.textContent = 'Mon compte';
            authBtn.href = '#';
            
            // Récupération des données utilisateur
            const userDoc = await db.collection('users').doc(user.uid).get();
            if (userDoc.exists) {
                const userData = userDoc.data();
                document.getElementById('user-email').textContent = user.email;
                document.getElementById('last-login').textContent = 
                    new Date(userData.lastLogin.toDate()).toLocaleString();
                document.getElementById('user-purchases').textContent = 
                    userData.purchases ? userData.purchases.length : 0;
            }
            
            // Gestion du clic sur "Mon compte"
            authBtn.addEventListener('click', function(e) {
                e.preventDefault();
                accountDropdown.style.display = 
                    accountDropdown.style.display === 'block' ? 'none' : 'block';
            });
        } else {
            // Utilisateur non connecté
            authBtn.textContent = 'Connexion';
            authBtn.href = 'login.html';
        }
    });
}

// Déconnexion
document.getElementById('logout-btn')?.addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
});

// Vérification de la redirection après connexion
function checkRedirect() {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirect');
    
    if (redirectUrl && auth.currentUser) {
        window.location.href = redirectUrl;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    handleAuthState();
    checkRedirect();
});
