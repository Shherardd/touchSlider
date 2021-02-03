const slider = document.querySelector('.slider-container'),
    slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationId = 0,
    currentIndex = 0

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img')
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())

    // touch eventos
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)

    // Mouse Event
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)
})

// Disble context menu
window.oncontextmenu = function(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

function touchStart(index){
    return function(event){
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true
    }
}

function touchEnd(){
    console.log('end')
    isDragging = false
}

function touchMove(){
    console.log('move')
    if(isDragging){
        console.log('move')
    }
}

function getPositionX(event){
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}