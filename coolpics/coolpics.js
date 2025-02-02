//coolpics.js//
let menuButton = document.querySelector(".menuButton");
let gallery = document.querySelector(".gallery");

function toggleMenu() {
    const menuItems = document.querySelectorAll("nav a");
    console.log("menu toggled");
    //console.log(menuItems);//
    
    menuItems.forEach(element => {
        element.classList.toggle("hide");
    });
}

function handleResize() {
    //check innerWidth//
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    
    //conditional statement if greater than breakpoint (1024px)//
    const menu = document.querySelectorAll("nav a");
    
    //console.log(menu);//
    menu.forEach(item => {
        if (windowWidth > 1024) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
    }});
}

function viewerTemplate(newName, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${newName}" alt="${alt}">
    </div>`
}

function viewHandler(event) {
    const image = event.target;

    console.log("image clicked", event.target);
	
    const src = image.getAttribute("src");
    const splitSrc = src.split("-");

    console.log("Split image source", splitSrc);
	
    const newName = splitSrc[0] + "-full.jpeg";
    const alt = "Enlarged image";

    console.log("New image", newName);
	
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newName, alt));
	
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    
    if (viewer) {
        viewer.remove();
    }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", viewHandler);

handleResize();