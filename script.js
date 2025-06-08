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
