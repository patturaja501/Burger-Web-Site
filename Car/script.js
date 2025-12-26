const navmenu= document.getElementById('nav_menu')
const navToggle=document.getElementById('nav-toggle')
const navclose=document.getElementById('nav_close')
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navmenu.classList.add('show-menu')
    })
}
if(navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('show-menu')
    })
}
const navlink=document.querySelectorAll('.nav_link');
const linkaction=()=>{
    const navmenu=document.getElementById('nav_menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n=>n.addEventListener('click',linkaction))

// add shadow Headers
const shadowHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50? header.classList.add('shadow-header')
     :header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)