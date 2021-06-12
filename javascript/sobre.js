function toggle() {
    const sec = document.getElementById('sec')
    const nav = document.getElementById('nav')
    sec.classList.toggle('active')
    nav.classList.toggle('active')
}

function openMore(id) {
    Array.from(document.querySelectorAll(`[id^='more']`))
        .map(e => e.style.display = e.id === id ? 'block' : 'none')
}
// function openMoreAntiga () {
//     const open = document.getElementById('more1')
//     const close = document.getElementById('more')
//     const close1 = document.getElementById('more2')
//     const close2 = document.getElementById('more3')

//     if (open.style.display === 'block') {
//         open.style.display = 'none'
//     } else {
//         open.style.display = 'block'
//         close.style.display = 'none'
//         close1.style.display = 'none'
//         close2.style.display = 'none'
//     }
//  }
