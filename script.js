function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

var typed = new Typed("#typed-output", {
    strings: ["Web and Mobile App Developer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
    showCursor: false 
    });

function openTeamModal(members) {
    const modal = document.getElementById("team-modal");
    const memberList = document.getElementById("member-list");
    memberList.innerHTML = ""; // Clear previous members

    members.forEach(member => {
        const row = document.createElement("div");
        row.className = "member-row";
        row.innerHTML = `
        <img src="${member.img}" class="modal-img" alt="${member.name}">
        <span class="member-name">${member.name}</span>
        <a href="${member.github}" target="_blank">
            <img src="./assets/github.svg" class="icon" alt="GitHub">
        </a>
        <a href="${member.linkedin}" target="_blank">
            <img src="./assets/linkedin.svg" class="icon" alt="LinkedIn">
        </a>`;
            memberList.appendChild(row);
        });

    modal.style.display = "block";
    }

    function closeTeamModal() {
    document.getElementById("team-modal").style.display = "none";
    }

    window.onclick = function(event) {
    const modal = document.getElementById("team-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
    }

const jimuel = {
    name: 'Jimuel Querel',
    img: './assets/jimuel.png',
    github: 'https://github.com/QJimuel',
    linkedin: 'https://linkedin.com/in/member1'
};
const janRaven = {
    name: 'Jan Raven Mendenueta',
    img: './assets/member2.png',
    github: 'https://github.com/member2',
    linkedin: 'https://linkedin.com/in/member2'
};
const kacelyn = {
    name: 'Kacelyn Manalo',
    img: './assets/kacelyn.jpg',
    github: 'https://github.com/KACELYNMANALO',
    linkedin: 'https://www.linkedin.com/in/kacelyn-manalo-b687b92b7/'
};
const janna = {
    name: 'Janna Soliza',
    img: './assets/janna.jpg',
    github: 'https://github.com/member3',
    linkedin: 'https://www.linkedin.com/in/member3'
};
const gail = {
    name: 'Gail Buenaventura',
    img: './assets/gail.jpg',
    github: 'https://github.com/Mei-meichan',
    linkedin: 'https://www.linkedin.com/in/member4'
};

const projectData = {
    'rescue-ready': {
        title: 'Rescue Ready',
        subtitle: 'A mobile app for emergency preparedness.',
        images: [
            './assets/projects/rescue-ready/App.jpg',
            './assets/projects/rescue-ready/homePage.jpg',
            './assets/projects/rescue-ready/medKitPage.jpg',
            './assets/projects/rescue-ready/kitResult.jpg',
            './assets/projects/rescue-ready/menuNav.jpg',
            './assets/projects/rescue-ready/disaster1.jpg',
        ]
    },
    'eurbin-mobile': {
        title: 'Eurbin Mobile',
        subtitle: 'A mobile app for waste management.',
        images: [
            './assets/projects/eurbin-mobile/ProfilePage.jpg',
            './assets/projects/eurbin-mobile/InstructionPage.jpg',
            './assets/projects/eurbin-mobile/LocationPage.jpg',
            './assets/projects/eurbin-mobile/SignUpPage.jpg',
        ]
    },
    'eload-mobile': {
        title: 'E-loading Mobile App',
        subtitle: 'A mobile app for prepaid electricity management.',
        images: [
            './assets/projects/eload/eloadApp.jpg',
            './assets/projects/eload/landingPage.jpg',
            './assets/projects/eload/homePage.jpg',
            './assets/projects/eload/fillUp.jpg',
            './assets/projects/eload/successfull.jpg',
        ]
    },
    'momatters-mobile': {
        title: 'MOMatters Mobile App',
        subtitle: 'A mobile app for pregnant women.',
        images: [
            './assets/projects/momatters/landingPage.png',
            './assets/projects/momatters/postPage.png',
            './assets/projects/momatters/kickCounter.png',
            './assets/projects/momatters/notif.png',
            './assets/projects/momatters/profilePage.png',
            './assets/projects/momatters/shopPage.png',
            './assets/projects/momatters/infoPage.png',
        ]
    },
};    

let currentProject = '';
let currentIndex = 0;

function viewProject(projectName) {
    currentProject = projectName;
    currentIndex = 0;
    // Set title and subtitle once
    const data = projectData[currentProject];
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalSubtitle").textContent = data.subtitle;
    openModal();
    showImage();
}

function openModal() {
    document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
}

function showImage() {
    const data = projectData[currentProject];
    document.getElementById("modalImage").src = data.images[currentIndex];

    // Hide or show arrows based on position
    const prevBtn = document.querySelector('.nav.prev');
    const nextBtn = document.querySelector('.nav.next');
    if (currentIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = '';
    }
    if (currentIndex === data.images.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = '';
    }
}

function nextImage() {
    const projectImages = projectData[currentProject];
    if (currentIndex < projectImages.images.length - 1) {
        currentIndex++;
        showImage();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
}