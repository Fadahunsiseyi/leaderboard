
import './style.css';



const ul = document.querySelector('.names-container')
const name = document.querySelector('.input-name')
const score = document.querySelector('.input-score')
const submitBtn = document.querySelector('.submit-btn')


const addScore = () => {
    if(name.value === '' && score.value === '') return;
    const li = `<li>${name.value}:${score.value}</li>`
    ul.insertAdjacentHTML('beforeend', li)
    name.value = ''
    score.value = ''
    console.log(li)
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(isNaN(name.value)) {
        addScore()
    } else {
        alert('The name field should contain letters')
    }
    console.log('i have been clicked')
})