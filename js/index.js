/* slider  */
const slider = document.querySelector('.ss__container'),
      slides = Array.from(document.querySelectorAll('.slide'));


let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID = 0,
    currentIndex = 0;
slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img');
    slideImage.addEventListener('dragstart', (e) => {
        e.preventDefault()
    })

    //touch events
    slide.addEventListener('touchstart', touchStart(index))
    slide.addEventListener('touchend', touchEnd)
    slide.addEventListener('touchmove', touchMove)




    //mouse events
    slide.addEventListener('mousedown', touchStart(index))
    slide.addEventListener('mouseup', touchEnd)
    slide.addEventListener('mouseleave', touchEnd)
    slide.addEventListener('mousemove', touchMove)

})

// Disable context menu
window.oncontextmenu = function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
}



function touchStart(index) {
    return function(e) {
        currentIndex = index;
        startPos = getPositionX(e);
        isDragging = true;

        animationID = requestAnimationFrame(animation);
        slider.classList.add('grabbing');
    }
}

function touchEnd(){
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;
    if(movedBy < -100 && currentIndex < slides.length -1) currentIndex +=1
    if(movedBy > 100 && currentIndex > 0) currentIndex -=1

    setPositionByIndex()

    slider.classList.remove('grabbing')
}

function touchMove(e) {
    if (isDragging){
        const currentPosition = getPositionX(e);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }

}


function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}
function animation() {
    setSliderPosition();
    if(isDragging) requestAnimationFrame(animation)
}
function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
}
function setPositionByIndex(){
    currentTranslate = currentIndex * -window.innerWidth;
    prevTranslate = currentTranslate;
    setSliderPosition()
}
