const sliderBar = document.querySelector('.slider-bar')

let width = 0
const interval = setInterval(() => {
  width += 3.2
  sliderBar.style.width = width + 'px'

  if (width >= 300) {
    clearInterval(interval)
  }
}, 30) 
