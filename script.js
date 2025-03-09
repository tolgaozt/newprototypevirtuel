// Définir un objet contenant les descriptions des images avec HTML
const imageDescriptions = {
    'pic-viewer.jpg': {
        title: 'Visualisateur de Photos Réelles',
        description: `
            <p>Cette fonctionnalité permet de presser sur une icone d'un appareil photo pour voir une vraie photo du bien immobilier officiel.</p>
            
            <p>Ceci permet au visiteur de voir le vrai bien immobilier en plus de pouvoir le visiter en 3D.</p>
            
            <h4>Défis techniques:</h4>
            <ul>
                <li>Synchronisation des positions de caméra avec les photos</li>
                <li>Optimisation des temps de chargement</li>
                <li>Compatibilité avec différents navigateurs</li>
            </ul>
            
            <p><strong>Temps de développement:</strong> 2 mois pour contourner tous les bugs.</p>
        `
    },
    'ruler.jpg': {
        title: 'Outil de Mesure Intégré',
        description: `
            <p>Visualisez les dimensions exactes de chaque pièce grâce à notre outil de mesure intégré.</p>
            <p>Les utilisateurs peuvent voir les mesures précises pendant leur visite, facilitant ainsi leur projection dans l'espace.</p>
            <h4>Caractéristiques:</h4>
            <ul>
                <li>Mesures précises</li>
                <li>Affichage des surfaces</li>
                <li>Conversion métrique/impérial possible</li>
            </ul>

            <p><strong>Temps de développement:</strong> 6 semaines pour contourner tous les bugs.</p>
        `
    },
    'television.jpg': {
        title: 'Vos Vidéos sur les Télévisions du Bien',
        description: `
            <p>Notre technologie permet d'intégrer vos vidéos directement dans le bien immobilier. Vous pouvez donc y ajouter votre animation logo, ou autre. Le son sera aussi diffusé dans l'ensemble du bien virtuel.</p>
            <p>Ces vidéos peuvent être changées à souhait de votre côté, sans nécessairement avoir besoin de faire appel à notre équipe.</p>
            <h4>Fonctionnalités:</h4>
            <ul>
                <li>Télévisions interactives</li>
                <li>Son de qualité</li>
                <li>Personalisable sans intervention des programmeurs</li>
            </ul>

            <p><strong>Temps de développement:</strong> 2 semaines pour contourner tous les bugs.</p>
        `
    },
    'house.jpg': {
        title: 'Rendu 3D Haute Fidélité',
        description: `
            <p>Nos modèles 3D offrent un rendu photoréaliste de l'intérieur des propriétés.</p>
            <p>Les textures, l'éclairage et les proportions sont manuellement reproduits avec une grande précision pour une expérience immersive.</p>
            <h4>Technologies utilisées:</h4>
            <ul>
                <li>Unity Engine</li>
                <li>PBR Materials (Physically Based Rendering)</li>
                <li>WebGL pour une compatibilité sur tous navigateurs</li>
                <li>Sans téléchargement pour l'utilisateur, ni besoin de casque VR </li>
            </ul>

            <p><strong>Temps de développement:</strong> 6 mois pour avoir un résultat satisfaisant.</p>
        `
    },
    'hdri.jpg': {
        title: 'Éclairage Dynamique HDRI',
        description: `
            <p>Notre technologie d'éclairage HDRI (High Dynamic Range Imaging) permet une immersion plus fidèle dans la géolocation du bien.</p>
            <p>Cette fonctionnalité offre ainsi une perception réaliste des espaces alentours, et de l'ambiance du quartier.</p>
            <h4>Avantages:</h4>
            <ul>
                <li>Visualisation du quartier fidèle au terrain</li>
                <li>Possibilité d'ajouter un cycle jour et nuit</li>
                <li>Rendu plus réaliste et immersif</li>
            </ul>

            <p><strong>Temps de développement:</strong> 2 semaines pour contourner tous les bugs.</p>
        `
    },
    'interior-design.jpg': {
        title: 'Options de Design Intérieur',
        description: `
            <p>Permettez aux utilisateurs de visualiser différentes options de décoration et d'aménagement.</p>
            <p>Cette fonctionnalité facilite la projection et aide à imaginer le potentiel d'un bien avant même de l'acheter.</p>
            <h4>Personnalisation possible:</h4>
            <ul>
                <li>Changement de revêtements muraux</li>
                <li>Modification des sols</li>
                <li>Ajustement des couleurs et matériaux</li>
                <li>Essai de différents styles d'ameublement</li>
            </ul>

            <p><strong>Temps de développement:</strong> 4 mois pour contourner tous les bugs.</p>
        `
    }
};

// Function to extract filename from path
function getFilenameFromPath(path) {
    // Split by '/' and get the last segment
    const segments = path.split('/');
    return segments[segments.length - 1];
}

// Modified function to open modal with image and HTML description
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const img = element.querySelector('img');
    
    // Set image source and alt
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    
    // Get filename from path
    const filename = getFilenameFromPath(img.src);
    
    // Set description based on image
    if (imageDescriptions[filename]) {
        modalTitle.textContent = imageDescriptions[filename].title;
        // Utiliser innerHTML pour supporter le HTML
        modalDesc.innerHTML = imageDescriptions[filename].description;
    } else {
        // Default text if description not found
        modalTitle.textContent = img.alt || 'Détails de l\'image';
        modalDesc.innerHTML = '<p>Aucune description disponible pour cette image.</p>';
    }
    
    // Display modal
    modal.style.display = 'flex';
}

// Function to open prototype modal
function openPrototypeModal() {
    const modal = document.getElementById('prototypeModal');
    
    if (modal) {
        modal.style.display = 'flex';
        
        // Add animation classes if not already added
        const cards = modal.querySelectorAll('.prototype-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-fadeIn');
            }, 100 * index);
        });
    }
}

// Function to close prototype modal
function closePrototypeModal() {
    const modal = document.getElementById('prototypeModal');
    
    if (modal) {
        modal.style.display = 'none';
        
        // Remove animation classes
        const cards = modal.querySelectorAll('.prototype-card');
        cards.forEach(card => {
            card.classList.remove('animate-fadeIn');
        });
    }
}

// Fichier script.js complet réécrit
document.addEventListener('DOMContentLoaded', function() {
    // ====== TOGGLE MODE CLAIR/SOMBRE ======
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    
    // Force dark mode by default
    if (!localStorage.getItem('darkMode')) {
        localStorage.setItem('darkMode', 'dark');
    }
    
    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'light') {
        body.classList.add('light-mode');
        modeToggle.checked = true;
    }
    
    // Toggle dark/light mode
    modeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('darkMode', 'light');
            console.log('Light mode activated');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'dark');
            console.log('Dark mode activated');
        }
    });
    
    // ====== ANIMATIONS AU DÉFILEMENT ======
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    // Observez tous les éléments qui devraient s'animer, sauf le role-card
    document.querySelectorAll('.feature-card, .gallery-item, .glass:not(#role-card)').forEach(el => {
        observer.observe(el);
    });
    
    // ====== MODAL POUR LES IMAGES ======
    const imageModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeImgBtn = imageModal ? imageModal.querySelector('.close-modal') : null;
    
    // Close modal when clicking the close button
    if (closeImgBtn) {
        closeImgBtn.addEventListener('click', function() {
            imageModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the image
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                imageModal.style.display = 'none';
            }
        });
    }
    
    // Prevent closing when clicking on image
    if (modalImg) {
        modalImg.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // ====== MODAL POUR LES PROTOTYPES ======
    const protoModal = document.getElementById('prototypeModal');
    const closeProtoBtn = protoModal ? protoModal.querySelector('.close-modal') : null;
    
    // Ajouter un écouteur d'événement pour fermer le modal lors d'un clic en dehors
    if (protoModal) {
        protoModal.addEventListener('click', function(e) {
            if (e.target === protoModal) {
                closePrototypeModal();
            }
        });
        
        // S'assurer que les clics sur le contenu du modal ne ferment pas le modal
        const protoModalContent = protoModal.querySelector('.modal-content');
        if (protoModalContent) {
            protoModalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }
    
    // Close on escape key press for all modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close image modal
            if (imageModal && imageModal.style.display === 'flex') {
                imageModal.style.display = 'none';
            }
            
            // Close prototype modal
            if (protoModal && protoModal.style.display === 'flex') {
                closePrototypeModal();
            }
        }
    });
    
    // ====== EFFET DE ROTATION 3D POUR ROLE CARD ======
    const setupRoleCardEffect = function() {
        const roleCard = document.getElementById('role-card');
        
        if (!roleCard) {
            console.error("La carte de rôle n'a pas été trouvée. Vérifiez l'ID 'role-card' dans votre HTML.");
            return;
        }
        
        // Récupérer la section parente qui contiendra l'événement mousemove
        const roleSection = roleCard.closest('section');
        
        if (!roleSection) {
            console.error("La section parente n'a pas été trouvée");
            return;
        }
        
        console.log("Effet de rotation 3D initialisé");
        
        // Configurer la perspective et le style 3D
        roleCard.style.transformStyle = 'preserve-3d';
        roleCard.style.perspective = '1000px';
        roleCard.style.transition = 'transform 0.2s ease-out';
        
        // Ajouter de la profondeur à certains éléments à l'intérieur de la carte
        const h2 = roleCard.querySelector('h2');
        const paragraphs = roleCard.querySelectorAll('p');
        const list = roleCard.querySelector('ul');
        const teamCard = roleCard.querySelector('.team-card');
        
        if (h2) h2.style.transform = 'translateZ(20px)';
        paragraphs.forEach(p => p.style.transform = 'translateZ(15px)');
        if (list) list.style.transform = 'translateZ(15px)';
        if (teamCard) teamCard.style.transform = 'translateZ(25px)';
        
        // Ajouter l'événement mousemove à la section
        roleSection.addEventListener('mousemove', function(e) {
            // Obtenir les dimensions et la position de la section
            const rect = roleSection.getBoundingClientRect();
            
            // Calculer la position relative de la souris dans la section (0 à 1)
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            // Intensité de l'effet pour chaque axe (valeurs négatives inversent la direction)
            const intensityX = -2.5; // Contrôle l'ampleur de la rotation horizontale (axe Y)
            const intensityY = -2.0; // Contrôle l'ampleur de la rotation verticale (axe X)
            
            // Calculer les angles de rotation avec les paramètres ajustés
            // Note: Plus la valeur est grande (ou petite si négative), plus la rotation est prononcée
            const rotateY = (x - 0.5) * 20 * intensityX; // Rotation horizontale inversée
            const rotateX = (y - 0.5) * 10 * intensityY; // Rotation verticale inversée
            
            // Appliquer la transformation avec requestAnimationFrame pour fluidité
            requestAnimationFrame(() => {
                roleCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });
        
        // Réinitialiser la rotation quand la souris quitte la section
        roleSection.addEventListener('mouseleave', function() {
            requestAnimationFrame(() => {
                roleCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
            });
        });
    };
    
    // ====== EFFET DE ROTATION 3D POUR EVOLUTION CARD ======
    const setupEvolutionCardEffect = function() {
        const evolutionCard = document.querySelector('.evolution-card');
        
        if (!evolutionCard) {
            console.error("La carte d'évolution n'a pas été trouvée.");
            return;
        }
        
        // Récupérer la section parente qui contiendra l'événement mousemove
        const evolutionSection = evolutionCard.closest('section');
        
        if (!evolutionSection) {
            console.error("La section parente pour evolution-card n'a pas été trouvée");
            return;
        }
        
        console.log("Effet de rotation 3D pour evolution-card initialisé");
        
        // Configurer la perspective et le style 3D
        evolutionCard.style.transformStyle = 'preserve-3d';
        evolutionCard.style.perspective = '1000px';
        evolutionCard.style.transition = 'transform 0.2s ease-out';
        
        // Ajouter de la profondeur à certains éléments à l'intérieur de la carte
        const h2 = evolutionCard.querySelector('h2');
        const paragraphs = evolutionCard.querySelectorAll('p');
        const link = evolutionCard.querySelector('a'); // Utiliser le lien au lieu du bouton
        const summaryCard = evolutionCard.querySelector('.prototype-summary-card');
        
        if (h2) h2.style.transform = 'translateZ(20px)';
        paragraphs.forEach(p => p.style.transform = 'translateZ(15px)');
        if (link) link.style.transform = 'translateZ(25px)';
        if (summaryCard) summaryCard.style.transform = 'translateZ(25px)';
        
        // Ajouter l'événement mousemove à la section
        evolutionSection.addEventListener('mousemove', function(e) {
            // Obtenir les dimensions et la position de la section
            const rect = evolutionSection.getBoundingClientRect();
            
            // Calculer la position relative de la souris dans la section (0 à 1)
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            // Intensité de l'effet pour chaque axe (valeurs négatives inversent la direction)
            const intensityX = -2.0; // Contrôle l'ampleur de la rotation horizontale (axe Y)
            const intensityY = -1.5; // Contrôle l'ampleur de la rotation verticale (axe X)
            
            // Calculer les angles de rotation avec les paramètres ajustés
            const rotateY = (x - 0.5) * 15 * intensityX; // Rotation horizontale inversée
            const rotateX = (y - 0.5) * 8 * intensityY; // Rotation verticale inversée
            
            // Appliquer la transformation avec requestAnimationFrame pour fluidité
            requestAnimationFrame(() => {
                evolutionCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });
        
        // Réinitialiser la rotation quand la souris quitte la section
        evolutionSection.addEventListener('mouseleave', function() {
            requestAnimationFrame(() => {
                evolutionCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
            });
        });
    };
    
    // ====== EFFET DE SUIVI DU CURSEUR POUR UNE BULLE AVEC DÉLAI ======
    const setupOrbFollowEffect = function() {
        // Sélectionner la bulle avec l'ID spécifique
        const followOrb = document.getElementById('follow-orb');
        
        if (!followOrb) {
            console.error("La bulle avec l'id 'follow-orb' n'a pas été trouvée");
            return;
        }
        
        console.log("Effet de suivi de bulle initialisé");
        
        // Retirer l'animation d'origine et les positions statiques
        followOrb.style.animation = 'none';
        followOrb.style.bottom = 'auto';
        followOrb.style.right = 'auto';
        followOrb.style.top = 'auto';
        followOrb.style.left = 'auto';
        
        // Améliorer la visibilité
        followOrb.style.opacity = '0.7';
        followOrb.style.filter = 'blur(60px)';
        
        // Ajuster le z-index pour être au-dessus des autres éléments mais sous le contenu
        followOrb.style.zIndex = '0';
        
        // Assurer que la bulle est en position fixe
        followOrb.style.position = 'fixed';
        
        // Variables pour le suivi en douceur
        const width = parseInt(followOrb.style.width) || 250;
        const height = parseInt(followOrb.style.height) || 250;
        
        // Position initiale (centrée sur l'écran)
        let currentX = window.innerWidth / 2 - width / 2;
        let currentY = window.innerHeight / 2 - height / 2;
        
        // Position cible (initialement la même que la position actuelle)
        let targetX = currentX;
        let targetY = currentY;
        
        // Appliquer la position initiale
        followOrb.style.left = currentX + 'px';
        followOrb.style.top = currentY + 'px';
        
        // Facteur de lissage - ajustez cette valeur pour contrôler la vitesse du suivi
        // Plus la valeur est petite, plus le suivi est lent (entre 0.01 et 0.1 pour un effet doux)
        const smoothFactor = 0.05; // Essayez des valeurs comme 0.02, 0.05, 0.08 pour différents niveaux de lissage
        
        // Fonction d'animation pour un suivi en douceur
        function animateOrb() {
            // Calculer la nouvelle position actuelle en se rapprochant progressivement de la cible
            currentX += (targetX - currentX) * smoothFactor;
            currentY += (targetY - currentY) * smoothFactor;
            
            // Appliquer la position
            followOrb.style.left = currentX + 'px';
            followOrb.style.top = currentY + 'px';
            
            // Continuer l'animation
            requestAnimationFrame(animateOrb);
        }
        
        // Démarrer l'animation
        animateOrb();
        
        // Suivre le curseur en mettant à jour la position cible
        document.addEventListener('mousemove', function(e) {
            // Mettre à jour la position cible (centrée sur le curseur)
            targetX = e.clientX - width / 2;
            targetY = e.clientY - height / 2;
        });
    };
    
    // ====== FONCTION POUR COPIER L'EMAIL AU CLIC ======
    function setupEmailCopy() {
        const emailLink = document.getElementById('emailLink');
        if (!emailLink) return;
        
        emailLink.addEventListener('click', function(e) {
            // Ne pas empêcher le comportement par défaut pour que le client mail s'ouvre toujours
            const email = 'kilian.oz@live.fr';
            
            // Essayer de copier avec l'API Clipboard moderne
            navigator.clipboard.writeText(email).then(() => {
                showCopyNotification();
            }).catch(err => {
                // Méthode de secours
                const textarea = document.createElement('textarea');
                textarea.value = email;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                
                showCopyNotification();
            });
        });
    }

    function showCopyNotification() {
        // Créer et afficher la notification
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = 'Adresse e-mail copiée !';
        document.body.appendChild(notification);
        
        // Supprimer après 2 secondes
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                if (notification.parentNode) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 1700);
    }
    
    // Permettre au DOM de se stabiliser, puis appliquer les effets
    setTimeout(setupRoleCardEffect, 300);
    setTimeout(setupEvolutionCardEffect, 300);
    setTimeout(setupOrbFollowEffect, 300);
    setTimeout(setupEmailCopy, 300);
});