function toggle() {
    const sec = document.getElementById('sec')
    const nav = document.getElementById('nav')
    sec.classList.toggle('active')
    nav.classList.toggle('active')
}

// function mouseOver() {
//     const over = document.getElementById('more')
//     over.style.display = ("block")
// }

// function mouseOut() {
//     const out = document.getElementById('more')
//     out.style.display = ('none')
// }

// function mouseOver1() {
//     const over = document.getElementById('more1')
//     over.style.display = ("block")
// }

// function mouseOut1() {
//     const out = document.getElementById('more1')
//     out.style.display = ('none')
// }

// function mouseOver2() {
//     const over = document.getElementById('more2')
//     over.style.display = ("block")
// }

// function mouseOut2() {
//     const out = document.getElementById('more2')
//     out.style.display = ('none')
// }

function openMore () {
   const open = document.getElementById('more')
   const close = document.getElementById('more1')
   const close1 = document.getElementById('more2')
   const close2 = document.getElementById('more3')

   if (open.style.display === 'block') {
    open.style.display = 'none'
    } else {
    open.style.display = 'block'
    close.style.display = 'none'
    close1.style.display = 'none'
    close2.style.display = 'none'
    }
}

function openMore1 () {
    const open = document.getElementById('more1')
    const close = document.getElementById('more')
    const close1 = document.getElementById('more2')
    const close2 = document.getElementById('more3')
    
    if (open.style.display === 'block') {
        open.style.display = 'none'
    } else {
        open.style.display = 'block'
        close.style.display = 'none'
        close1.style.display = 'none'
        close2.style.display = 'none'
    }
 }

function openMore2 () {
    const open = document.getElementById('more2')
    const close = document.getElementById('more')
    const close1 = document.getElementById('more1')
    const close2 = document.getElementById('more3')
    
    if (open.style.display === 'block') {
        open.style.display = 'none'
    } else {
        open.style.display = 'block'
        close.style.display = 'none'
        close1.style.display = 'none'
        close2.style.display = 'none'
    }
}

function openMore3 () {
    const open = document.getElementById('more3')
    const close = document.getElementById('more')
    const close1 = document.getElementById('more1')
    const close2 = document.getElementById('more2')
    
    if (open.style.display === 'block') {
        open.style.display = 'none'
    } else {
        open.style.display = 'block'
        close.style.display = 'none'
        close1.style.display = 'none'
        close2.style.display = 'none'
    }
}