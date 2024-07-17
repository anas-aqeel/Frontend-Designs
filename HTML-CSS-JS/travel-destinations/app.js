// Cache DOM elements
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const carousel = document.querySelector('.carousel')
const slider = document.querySelector('.carousel .list')
const thumbnailContainer = document.querySelector('.carousel .thumbnail')
const thumbnails = Array.from(thumbnailContainer.querySelectorAll('.item'))
const timeIndicator = document.querySelector('.carousel .time')

let timeRunning = 3000
let timeAutoNext = 7000
let runTimeOut
let runNextAuto = setTimeout(autoNextSlide, timeAutoNext)

// Event listeners
nextButton.addEventListener('click', () => changeSlide('next'))
prevButton.addEventListener('click', () => changeSlide('prev'))

// Function to automatically go to the next slide
function autoNextSlide() {
  changeSlide('next')
}

// Function to change slide
function changeSlide(direction) {
  const sliderItems = Array.from(slider.querySelectorAll('.item'))
  const thumbnailItems = Array.from(
    thumbnailContainer.querySelectorAll('.item'),
  )

  if (direction === 'next') {
    slider.appendChild(sliderItems[0])
    thumbnailContainer.appendChild(thumbnailItems[0])
    carousel.classList.add('next')
  } else {
    slider.prepend(sliderItems[sliderItems.length - 1])
    thumbnailContainer.prepend(thumbnailItems[thumbnailItems.length - 1])
    carousel.classList.add('prev')
  }

  resetCarouselState()
}

// Function to reset carousel state and timing
function resetCarouselState() {
  clearTimeout(runTimeOut)
  runTimeOut = setTimeout(() => {
    carousel.classList.remove('next', 'prev')
  }, timeRunning)

  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(autoNextSlide, timeAutoNext)
}
