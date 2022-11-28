import './style.css'

const imageContainer = document.querySelectorAll('.img-content')

const checkIfHasClass = (element) => element.classList.contains('active') ? true : false

imageContainer.forEach( el => {
    el.addEventListener('click', () => {
        imageContainer.forEach(el => el.classList.remove('active'))
        const result = checkIfHasClass(el)
        if (!result)  el.classList.add('active');
    })
})
