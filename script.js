function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // catch tag img 
    const img = document.querySelector("#profile img")

    // switch img
    if (html.classList.contains("light")) {
        // if light mode, add light img
        img.setAttribute("src", "./assets/avatar-light.png"),
        img.setAttribute("alt", "Foto Mayk Brito com fundo do dark mode")
    }   else {
            // if dark mode, keep regular img
            img.setAttribute("src", "./assets/avatar.png")
            img.setAttribute("alt", "Foto de Mayk Brito sorrindo, com fundo laranja")
            }
    /* 
    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }

    toggle does the same thing as the function above
    */

}