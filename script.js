// 🌙 Get Elements
const darkModeToggle = document.getElementById("darkModeToggle");
const themeIcon = document.getElementById("themeIcon");
const contactArrow = document.getElementById("contactArrow");
const contactBtn = document.getElementById("contactBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// Open Menu
function openMenu() {
    sideMenu.style.right = "0";
}

// Close Menu
function closeMenu() {
    sideMenu.style.right = "-100%";
}

// Close Menu on Outside Click
window.onclick = function (event) {
    if (event.target === sideMenu) {
        closeMenu();
    }
};

// 🌙 Check & Apply Theme on Page Load
if (localStorage.getItem("theme") === "light") {
    setLightTheme();
} else {
    setDarkTheme();
}

// 🌙 Toggle Theme on Click
darkModeToggle.addEventListener("click", () => {
    if (document.documentElement.classList.contains("light")) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});

// 🌙 Set Light Theme
function setLightTheme() {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");

    document.body.style.backgroundColor = "#fcf4ff"; // Light Mode BG
    document.body.style.color = "#000"; // Light Mode Text
    contactBtn.classList.add("border-black");
    contactBtn.classList.remove("border-gray-500");

    themeIcon.src = "./images/half-moon.png"; // Sun Icon
    contactArrow.src = "./images/up-arrow.png"; // Black Arrow

    localStorage.setItem("theme", "light");
}

// 🌙 Set Dark Theme
function setDarkTheme() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    document.body.style.backgroundColor = "#11001F"; // Dark Mode BG
    document.body.style.color = "#fff"; // Dark Mode Text
    contactBtn.classList.add("border-gray-500");
    contactBtn.classList.remove("border-black");

    themeIcon.src = "./images/weather.png"; // Moon Icon
    contactArrow.src = "./images/purple_white_up_ar.png"; // White Arrow

    localStorage.setItem("theme", "dark");
}

// Add Close Menu Event to Close Button
if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMenu);
}
