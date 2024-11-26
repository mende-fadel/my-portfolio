
// Validation simple du formulaire de contact
document.querySelector('form').addEventListener('submit', function(e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name === '' || email === '' || message === '') {
        e.preventDefault(); // Empêche l'envoi du formulaire
        alert('Veuillez remplir tous les champs.');
    }
});
const socialLinks = document.querySelectorAll('.social-bar a');
const bigIconContainer = document.getElementById('big-icon-container');
const bigIcon = document.getElementById('big-icon');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const svgElement = link.querySelector('svg');
        const svgClone = svgElement.cloneNode(true); // Clone l'icône SVG
        bigIcon.innerHTML = ''; // Efface l'ancienne icône
        bigIcon.appendChild(svgClone); // Ajoute la nouvelle icône
        bigIconContainer.style.display = 'block'; // Affiche l'icône agrandie
    });

    link.addEventListener('mouseleave', () => {
        bigIconContainer.style.display = 'none'; // Masque l'icône agrandie
    });
});


// Sélectionne les éléments
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Vérifie le thème stocké dans le localStorage pour appliquer le bon mode au chargement
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeIcon.textContent = "☀️"; // Icône pour basculer en mode clair
} else {
    body.classList.remove("dark-theme");
    themeIcon.textContent = "🌙"; // Icône pour basculer en mode sombre
}

// Écouteur pour basculer entre le mode clair et sombre
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Change l'icône en fonction du thème
    if (body.classList.contains("dark-theme")) {
        themeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


//pour les compétences 

document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    function fillBars() {
        progressBars.forEach(bar => {
            const skillLevel = bar.getAttribute("data-skill");
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (barPosition < screenPosition) {
                bar.style.width = skillLevel + "%";
            }
        });
    }

    // On exécute la fonction fillBars lors du scroll et au chargement
    window.addEventListener("scroll", fillBars);
    fillBars(); // Appel initial pour vérifier si les barres sont déjà visibles au chargement
});

document.addEventListener("DOMContentLoaded", function() {
    const addProjectButton = document.getElementById("add-project-btn");
    const projectGrid = document.getElementsByClassName("project-grid");

    addProjectButton.addEventListener("click", function() {
        // Création du nouvel item de projet
        const newProject = document.createElement("div");
        newProject.classList.add("project-item");

        // Titre du nouveau projet
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = "Nouveau Projet";

        // Description du nouveau projet
        const projectDescription = document.createElement("p");
        projectDescription.textContent = "Description du nouveau projet...";

        // Bouton avec lien et icône SVG
        const projectLink = document.createElement("a");
        projectLink.href = "#";  // Remplacez "#" par l'URL de votre projet
        projectLink.target = "_blank"; // Ouvre le lien dans un nouvel onglet
        projectLink.classList.add("project-link");

        // Ajout de l'icône SVG
        projectLink.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Voir le projet
        `;

        // Ajout du titre, de la description et du bouton de lien dans le div du projet
        newProject.appendChild(projectTitle);
        newProject.appendChild(projectDescription);
        newProject.appendChild(projectLink);

        // Ajout du nouveau projet au conteneur de grille
        projectGrid.appendChild(newProject);
    });
});


