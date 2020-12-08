function toggle() {
    const sec = document.getElementById('sec')
    const nav = document.getElementById('nav')
    sec.classList.toggle('active')
    nav.classList.toggle('active')
}

function learnMore () {
    const points = document.getElementById('points')
    const moreText = document.getElementById('more')
    const btnLearnMore = document.getElementById('btnLearnMore')

    if(points.style.display === 'none') {
        points.style.display = 'inline' 
        moreText.style.display = 'none'
        btnLearnMore.innerHTML = 'Leia Mais'
    } else {
        points.style.display = 'none'
        moreText.style.display = 'inline'
        btnLearnMore.innerHTML = 'Leia Menos'
    }
}