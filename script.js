document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        'contacts-img': '.AbtMe',
        'contact-card-img': '.Contact',
        'skills-img': '.Skills',
        'education-img': '.Edu',
        'projects-img': '.Projects',
        'work-exp-img': '.WorkExp',
        'AbtMeBtn': '.AbtMe',
        'AbtMeMob':'.AbtMe',
        'ContactMob':'.Contact',
        'SkillMob':'.Skills',
        'EduMob':'.Edu',
        'ProjMob':'.Projects',
        'WorkExpMob':'.WorkExp'
    };

    document.addEventListener('click', function(event) {
        const targetId = event.target.id;

        var menuItems = document.getElementById('menu-items-mob');
        menuItems.style.display = 'none';

        if(targetId == "Close"){
            hideAllSections();
            removeActiveClass();
        }

        if (sections[targetId]) {
            activateSection(targetId, sections[targetId]);
            event.stopPropagation();
        } else {
            const isClickInsideMenu = document.getElementById('menu').contains(event.target);
            const isClickInsideCard = Array.from(document.querySelectorAll('#card')).some(card => card.contains(event.target));

            if (!isClickInsideMenu && !isClickInsideCard) {
                hideAllSections();
                removeActiveClass();
            }
        }
    });

    function activateSection(buttonId, sectionClass) {
        removeActiveClass();
        document.getElementById(buttonId).classList.add('active');
        showSection(sectionClass);
    }

    function showSection(sectionClass) {
        hideAllSections();
        document.querySelector(sectionClass).style.display = 'block';
    }

    function hideAllSections() {
        document.querySelectorAll('#card').forEach(function(card) {
            card.style.display = 'none';
        });
    }

    function removeActiveClass() {
        document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    }
});

// Resume
function openPDF() {
    var pdfUrl = "https://github.com/kprajval/kprajval.github.io/blob/main/KurumetiPrajval_Resume.pdf";
    window.open(pdfUrl, '_blank');
}

document.getElementById("contacts-img").addEventListener('mouseover', () => {
    document.getElementById("AbtHoverMsg").style.display = "block";
});
document.getElementById("contacts-img").addEventListener('mouseout', () => {
    document.getElementById("AbtHoverMsg").style.display = "none";
});

document.getElementById("contact-card-img").addEventListener('mouseover', () => {
    document.getElementById("ContactHoverMsg").style.display = "block";
});
document.getElementById("contact-card-img").addEventListener('mouseout', () => {
    document.getElementById("ContactHoverMsg").style.display = "none";
});

document.getElementById("skills-img").addEventListener('mouseover', () => {
    document.getElementById("SkillHoverMsg").style.display = "block";
});
document.getElementById("skills-img").addEventListener('mouseout', () => {
    document.getElementById("SkillHoverMsg").style.display = "none";
});

document.getElementById("education-img").addEventListener('mouseover', () => {
    document.getElementById("EduHoverMsg").style.display = "block";
});
document.getElementById("education-img").addEventListener('mouseout', () => {
    document.getElementById("EduHoverMsg").style.display = "none";
});

document.getElementById("projects-img").addEventListener('mouseover', () => {
    document.getElementById("ProjHoverMsg").style.display = "block";
});
document.getElementById("projects-img").addEventListener('mouseout', () => {
    document.getElementById("ProjHoverMsg").style.display = "none";
});

document.getElementById("work-exp-img").addEventListener('mouseover', () => {
    document.getElementById("WorkHoverMsg").style.display = "block";
});
document.getElementById("work-exp-img").addEventListener('mouseout', () => {
    document.getElementById("WorkHoverMsg").style.display = "none";
});

document.getElementById('menu-mob').addEventListener('click', function(event) {
    var menuItems = document.getElementById('menu-items-mob');
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'flex';
    } else {
        menuItems.style.display = 'none';
    }
    event.stopPropagation();
});

document.body.addEventListener('click', function(event) {
    var menuItems = document.getElementById('menu-items-mob');
    if (!menuItems.contains(event.target)) {
        menuItems.style.display = 'none';
    }
});
