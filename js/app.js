const dropdown = document.querySelector('.dropdown')
const select =  dropdown.querySelector('.select')
const menu = dropdown.querySelector('.items')
const options = dropdown.querySelectorAll('.items > li')
const selected = dropdown.querySelector('.selected')


select.addEventListener('click', () => {
    select.classList.toggle('select-clicked')
    menu.classList.toggle('open')
})

options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText
        select.classList.remove('select-clicked')

        options.forEach(option => {
            option.classList.remove('active')
        })

        option.classList.add('active')
        menu.classList.remove('open')
    })
})