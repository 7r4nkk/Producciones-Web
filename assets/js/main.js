addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    const iniciobtn = document.querySelector('.iniciobtn')
    const galeriabtn = document.querySelector('.galeriabtn')
    const sobrenosotrosbtn = document.querySelector('.sobrenosotrosbtn')
    const contactanosbtn = document.querySelector('.contactanosbtn')
    if(btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(iniciobtn) {
        iniciobtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(sobrenosotrosbtn) {
        sobrenosotrosbtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(galeriabtn) {
        galeriabtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
    if(contactanosbtn) {
        contactanosbtn.addEventListener('click', () => {
            const menu = document.querySelector('.menu')
            menu.classList.toggle('mostrar')
        })
    }
})