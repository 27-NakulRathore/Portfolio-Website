// 🌙 Get Elements
const darkModeToggle = document.getElementById("darkModeToggle");
const themeIcon = document.getElementById("themeIcon");
const contactArrow = document.getElementById("contactArrow");
const contactBtn = document.getElementById("contactBtn");


function openMenu() {
    document.getElementById("sideMenu").style.right = "0";
}

function closeMenu() {
    document.getElementById("sideMenu").style.right = "-100%";
}

// 🌙 Check & Apply Theme on Page Load
if (localStorage.getItem("theme") === "light") {
    setLightTheme();
} else {
    setDarkTheme(); // Default is dark
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

    // 🌟 Apply Colors
    document.body.style.backgroundColor = "#fcf4ff"; // Light Mode BG
    document.body.style.color = "#000"; // Light Mode Text
    contactBtn.classList.add("border-black");
    contactBtn.classList.remove("border-gray-500");

    // 🌟 Update Icons
    themeIcon.src = "./images/half-moon.png"; // Show Sun Icon in Light Mode
    contactArrow.src = "./images/up-arrow.png"; // Use Black Arrow in Light Mode

    // 🌟 Store Preference
    localStorage.setItem("theme", "light");
}

// 🌙 Set Dark Theme
function setDarkTheme() {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");

    // 🌟 Apply Colors
    document.body.style.backgroundColor = "#11001F"; // Dark Mode BG
    document.body.style.color = "#fff"; // Dark Mode Text
    contactBtn.classList.add("border-gray-500");
    contactBtn.classList.remove("border-black");

    // 🌟 Update Icons
    themeIcon.src = "./images/weather.png"; // Show Moon Icon in Dark Mode
    contactArrow.src = "./images/purple_white_up_ar.png"; // Use White Arrow in Dark Mode

    // 🌟 Store Preference
    localStorage.setItem("theme", "dark");
}
