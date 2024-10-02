let themeSelector = document.getElementById('dark');

let currentTheme = document.body;

function changeTheme() {
    let currentTheme = themeSelector.value;

    if (currentTheme === 'dark'){
        body.setAttribute('class','.dark');
        document.getElementById('image').setAttribute(src="byui-logo_white.png");
    }
    else {
        themeSelector.setAttribute()
        document.getElementById('image').setAttribute(src="byui-logo_blue.webp");
    }

}
themeSelector.addEventListener('change', changeTheme);
