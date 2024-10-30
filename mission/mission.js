document.addEventListener("DOMContentLoaded", function() {
    let themeSelector = document.getElementById("select");

    let body = document.body;

    function changeTheme() {
        let currentTheme = themeSelector.value;

        if (currentTheme === "dark") {
            body.classList.add("dark");
            body.classList.remove("light");
            document.getElementById('image').setAttribute("src", "byui-logo_white.png");
        }
        else {
            body.classList.add("light");
            body.classList.remove("dark");
            document.getElementById("image").setAttribute("src", "byui-logo_blue.webp");
        }

    }
    themeSelector.addEventListener("change", changeTheme);
});
