

const btn = [
    document.querySelector('#elves100'),
    document.querySelector('#dwarves100'),
    document.querySelector('#hobbits100'),
    document.querySelector('#books100'),
    document.querySelector('#locations100'),
    document.querySelector('#potpourri100'),
    document.querySelector('#elves200'),
    document.querySelector('#dwarves200'),
    document.querySelector('#hobbits200'),
    document.querySelector('#books200'),
    document.querySelector('#locations200'),
    document.querySelector('#potpourri200'),
    document.querySelector('#elves300'),
    document.querySelector('#dwarves300'),
    document.querySelector('#hobbits300'),
    document.querySelector('#books300'),
    document.querySelector('#locations300'),
    document.querySelector('#potpourri300'),
    document.querySelector('#elves400'),
    document.querySelector('#dwarves400'),
    document.querySelector('#hobbits400'),
    document.querySelector('#books400'),
    document.querySelector('#locations400'),
    document.querySelector('#potpourri400'),
    document.querySelector('#elves500'),
    document.querySelector('#dwarves500'),
    document.querySelector('#hobbits500'),
    document.querySelector('#books500'),
    document.querySelector('#locations500'),
    document.querySelector('#potpourri500')
]

let questions = [
    {
        title: 'elves for 100',
        question: 'This elf was the daughter of Elrond \n a. Eowyn \n b. Galadriel \n c. Arwen \n d. Morwen',
        answer: 'c'
    }
]
function showClue(evt) {
    let userAnswer = prompt(questions[0].question)
    console.log(questions)
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', showClue);

}
