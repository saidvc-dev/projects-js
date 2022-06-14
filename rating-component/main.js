const ratingContainer = document.querySelector('.rating')
let currentValue = 0
const limit = 10

const html = Array.from(Array(limit)).map((_, index) => {
  return `<div class="item item-${index}" data-pos="${index}"></div>`
})

ratingContainer.innerHTML = html.join('')

document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    const pos = item.getAttribute('data-pos')

    //if the current value is the  current pos return
    if (currentValue === parseInt(pos) + 1) {
      return
    }

    //Removing intem-full style
    document.querySelectorAll('.item').forEach((it) => {
      if (it.classList.contains('item-full')) {
        it.classList.remove('item-full')
      }
    })

    //Adding item-full style
    for (let i = 0; i <= pos; i++) {
      const square = document.querySelector(`.item-${i}`)
      if (!square.classList.contains('item-full')) {
        square.classList.add('item-full')
      }
    }

    currentValue = parseInt(pos) + 1
  })

  //Print the current value
  item.addEventListener('click', (e) => {
    const pos = item.getAttribute('data-pos')
    currentValue = parseInt(pos) + 1
    console.log(currentValue)
  })
})
