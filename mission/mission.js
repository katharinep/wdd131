const themeSelector = document.querySelector("select");
const logoImage = document.querySelector("img");

function changeTheme() {
    const selectValue = themeSelector.value;
    if (selectValue === "dark") {
        console.log("dark selected");
        document.body.classList.add("dark");
        logoImage.src = "byui-logo_white.png";
    }
    else {
        console.log("light selected");
        document.body.classList.remove("dark");
        logoImage.src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);