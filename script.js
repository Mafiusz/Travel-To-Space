"use strict";

const mainNavigation = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-link a");
const exploreButton = document.querySelector(".explore-box");
const homeBorder = document.querySelectorAll(".border-bottom");
const allSection = document.querySelectorAll("section[id]");
const planetList = document.querySelector(".planet-items");
const planetItem = document.querySelectorAll(".planet-item");
const planetImage = document.querySelector(".planet-image");
const planetTitle = document.querySelector(".planet-title");
const planetDescription = document.querySelector(".planet-description-text");
const distanceValue = document.querySelector(".distance-value");
const timeValue = document.querySelector(".time-value");
const selectCrew = document.querySelector(".crew-select");
const crewDots = document.querySelectorAll(".crew-dot");
const crewJob = document.querySelector(".crew-job");
const crewName = document.querySelector(".crew-name");
const crewDescription = document.querySelector(".crew-description");
const crewImage = document.querySelector(".crew-image");
const technologySelect = document.querySelector(".technology-number");
const technologyNumber = document.querySelectorAll(
    ".technology-number-container"
);
const technologyImage = document.querySelector(".technology-image");
const technologyName = document.querySelector(".technology-name");
const technologyDesctiption = document.querySelector(".technology-text");
const openNavbarIcon = document.querySelector(".open-navbar");
const closeNavbarIcon = document.querySelector(".close-navbar");
const navbar = document.querySelector(".navbar");

const destinationData = [
    {
        name: "moon",
        description: `See our planet as you’ve never seen it before. A
            perfect relaxing trip away to help regain
            perspective and come back refreshed. While you’re
            there, take in some history by visiting the Luna 2
            and Apollo 11 landing sites.`,
        distance: "384,400 km",
        time: "3 days",
        src: "assets/destination/image-moon.webp",
        alt: "moon image",
    },
    {
        name: "mars",
        description: `Don’t forget to pack your hiking boots. You’ll need them
            to tackle Olympus Mons, the tallest planetary mountain
            in our solar system. It’s two and a half times the size
            of Everest!`,
        distance: "225 mil.km",
        time: "9 months",
        src: "assets/destination/image-mars.webp",
        alt: "mars image",
    },
    {
        name: "europa",
        description: `The smallest of the four Galilean moons orbiting
            Jupiter, Europa is a winter lover’s dream. With an icy
            surface, it’s perfect for a bit of ice skating, curling,
            hockey, or simple relaxation in your snug wintery cabin.`,
        distance: "628 mil.km",
        time: "3 years",
        src: "assets/destination/image-europa.webp",
        alt: "europa image",
    },
    {
        name: "titan",
        description: `The only moon known to have a dense atmosphere other
            than Earth, Titan is a home away from home (just a few
            hundred degrees colder!). As a bonus, you get striking
            views of the Rings of Saturn.`,
        distance: "1.6 bil. km",
        time: "7 years",
        src: "assets/destination/image-titan.webp",
        alt: "titan image",
    },
];

const crewData = [
    {
        id: "commander",
        job: "Commander",
        name: "Douglas Hurley",
        description:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        src: "assets/crew/image-douglas-hurley.webp",
        alt: "douglas hurley",
    },
    {
        id: "specialist",
        job: "Mission Specialist",
        name: "MARK SHUTTLEWORTH",
        description:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        src: "assets/crew/image-mark-shuttleworth.webp",
        alt: "MARK SHUTTLEWORTH",
    },
    {
        id: "pilot",
        job: "pilot",
        name: "Victor Glover",
        description:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        src: "assets/crew/image-victor-glover.webp",
        alt: "victor glover",
    },
    {
        id: "engineer",
        job: "Flight Engineer ",
        name: "Anousheh Ansari",
        description:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        src: "assets/crew/image-anousheh-ansari.webp",
        alt: "Anousheh Ansari",
    },
];

const technologyData = [
    {
        id: "launch",
        name: "LAUNCH VEHICLE",
        description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
        src: "assets/technology/image-launch-vehicle-portrait.jpg",
        srcTablet: "assets/technology/image-launch-vehicle-landscape.jpg",
        alt: "launch vehicle",
        isActive: true,
    },
    {
        id: "spaceport",
        name: "SPACEPORT",
        description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
        src: "assets/technology/image-spaceport-portrait.jpg",
        srcTablet: "assets/technology/image-spaceport-landscape.jpg",
        alt: "spaceport",
        isActive: false,
    },
    {
        id: "capsule",
        name: "SPACE CAPSULE",
        description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
        src: "assets/technology/image-space-capsule-portrait.jpg",
        srcTablet: "assets/technology/image-space-capsule-landscape.jpg",
        alt: "space capsule",
        isActive: false,
    },
];

const activeSection = () => {
    allSection.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const offsetTop = section.offsetTop;
        const currentId = section.getAttribute("id");
        const currentAnchor = document.querySelector(
            "a[href*=" + currentId + "]"
        );
        const nextBorder = currentAnchor.nextElementSibling;
        if (scrollY + 1 > offsetTop && scrollY < sectionHeight + offsetTop) {
            nextBorder.classList.remove("hidden");
        } else {
            nextBorder.classList.add("hidden");
        }
    });
};

window.addEventListener("scroll", activeSection);

mainNavigation.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("nav-link-anchor")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
        });
    }
});

exploreButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
        behavior: "smooth",
    });
});

const updateDestination = (data) => {
    planetTitle.textContent = data.name;
    planetDescription.textContent = data.description;
    distanceValue.textContent = data.distance;
    timeValue.textContent = data.time;
    planetImage.src = data.src;
    planetImage.alt = data.alt;
};

planetList.addEventListener("click", (e) => {
    planetItem.forEach((planet) => {
        planet.classList.remove("active");
    });
    const selectedPlanet = e.target.closest(".planet-item");
    selectedPlanet.classList.add("active");
    if (selectedPlanet === null) return;
    const selectedData = destinationData.find(
        (data) => data.name === selectedPlanet.textContent
    );
    updateDestination(selectedData);
});

const updateCrew = (data) => {
    crewJob.textContent = data.job;
    crewName.textContent = data.name;
    crewDescription.textContent = data.description;
    crewImage.src = data.src;
    crewImage.alt = data.alt;
};

selectCrew.addEventListener("click", (e) => {
    const selectedDot = e.target.closest(".crew-dot");
    if (selectedDot === null) return;
    crewDots.forEach((crewDot) => crewDot.classList.remove("crew-active"));
    selectedDot.classList.add("crew-active");
    const selectedData = crewData.find((data) => data.id === selectedDot.id);
    updateCrew(selectedData);
});

const updateTechnology = (data) => {
    technologyName.textContent = data.name;
    technologyDesctiption.textContent = data.description;
    if (window.screen.width < 770) {
        technologyImage.src = data.srcTablet;
    } else {
        technologyImage.src = data.src;
    }
    technologyImage.alt = data.alt;
};

technologySelect.addEventListener("click", (e) => {
    const selectedTechnologyBox = e.target.closest(
        ".technology-number-container"
    );
    if (selectedTechnologyBox === null) return;
    technologyNumber.forEach((techNumber) =>
        techNumber.classList.remove("active-number-container")
    );
    selectedTechnologyBox.classList.add("active-number-container");
    const selectedData = technologyData.find(
        (data) => data.id === selectedTechnologyBox.id
    );
    technologyData.map((data) => (data.isActive = false));
    selectedData.isActive = !selectedData.isActive;
    // const changeData = technologyData.map(
    //     (data) => (data.isActive = !data.isActive)
    // );
    // console.log(selectedData);
    // console.table(technologyData);
    updateTechnology(selectedData);
});

window.addEventListener("load", () => {
    if (window.screen.width < 770) {
        technologyImage.src = technologyData[0].srcTablet;
    } else {
        technologyImage.src = technologyData[0].src;
    }
    openNavbarIcon.style.display = "none";
});

window.addEventListener("resize", () => {
    const data = technologyData.find((data) => data.isActive === true);
    if (window.screen.width < 770) {
        technologyImage.src = data.srcTablet;
    } else {
        technologyImage.src = data.src;
    }

    if (window.screen.width <= 600) {
        openNavbarIcon.style.display = "block";
        navLinks.forEach((navlink) => {
            navlink.addEventListener("click", () => {
                closeNavbarIcon.style.display = "none";
                openNavbarIcon.style.display = "block";
                navbar.classList.remove("show-navbar");
            });
        });
    } else {
        openNavbarIcon.style.display = "none";
    }
});

openNavbarIcon.addEventListener("click", () => {
    openNavbarIcon.style.display = "none";
    closeNavbarIcon.style.display = "block";
    navbar.classList.add("show-navbar");
});

closeNavbarIcon.addEventListener("click", () => {
    closeNavbarIcon.style.display = "none";
    openNavbarIcon.style.display = "block";
    navbar.classList.remove("show-navbar");
});


