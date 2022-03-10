

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
        title: 'Elves for 100',
        question: 'This elf was the daughter of Elrond \n a. Eowyn \n b. Galadriel \n c. Arwen \n d. Morwen',
        answer: 'arwen',
        points: 100,
    },
    {
        title: 'Dwarves for 100',
        question: 'Gimli was the son of this Dwarf',
        answer: 'gloin',
        points: 100,
    },
    {
        title: 'Hobbits for 100',
        question: 'This hobbit carried the One Ring to Mount Doom in order to destroy it',
        answer: 'frodo',
        points: 100,
    },
    {
        title: 'Books for 100',
        question: '',
        answer: '',
        points: 100,
    },
    {
        title: 'Locations for 100',
        question: '',
        answer: '',
        points: 100,
    },
    {
        title: 'Potpourri for 100',
        question: '',
        answer: '',
        points: 100,
    },
    {
        title: 'Elves for 200',
        question: 'Elves sailed this direction to reach the Undying Lands',
        answer: 'west',
        points: 200,
    },
    {
        title: 'Dwarves for 200',
        question: 'This precious metal was highly coveted by the Dwarves of Moria',
        answer: 'mithril',
        points: 200,
    },
    {
        title: 'Hobbits for 200',
        question: 'This was the name of Bilbo Baggins literary work',
        answer: 'there and back again',
        points: 200,
    },
    {
        title: 'Books for 200',
        question: '',
        answer: '',
        points: 200,
    },
    {
        title: 'Locations for 200',
        question: '',
        answer: '',
        points: 200,
    },
    {
        title: 'Locations for 200',
        question: '',
        answer: '',
        points: 200,
    },
    {
        title: 'Potpourri for 200',
        question: '',
        answer: '',
        points: 200,
    },
    {
        title: 'Elves for 300',
        question: 'Legolas hailed from this elven realm',
        answer: 'mirkwood',
        points: 300,
    },
    {
        title: 'Dwarves for 300',
        question: 'This is how many Rings of Power that were given to the Dwarves',
        answer: '7',
        points: 300,
    },
    {
        title: 'Hobbits for 300',
        question: 'The longest living Hobbit was Bilbo Baggins who lived to this age',
        answer: '131',
        points: 300,
    },
    {
        title: 'Books for 300',
        question: '',
        answer: '',
        points: 300,
    },
    {
        title: 'Locations for 300',
        question: '',
        answer: '',
        points: 300,
    },
    {
        title: 'Potpourri for 300',
        question: '',
        answer: '',
        points: 300,
    },
    {
        title: 'Elves for 400',
        question: 'This elf was the only elf not to be given one of the Three Rings of power',
        answer: 'elrond',
        points: 400,
    },
    {
        title: 'Dwarves for 400',
        question: 'This sword was  weilded by Thorin II `Oakensheild` in the novel The Hobbit, also known as the Goblin-cleaver',
        answer: 'orcrist',
        points: 400,
    },
    {
        title: 'Hobbits for 400',
        question: 'Frodo Baggins was the son of this Hobbit',
        answer: 'drogo',
        points: 400,
    },
    {
        title: 'Books for 400',
        question: '',
        answer: '',
        points: 400,
    },
    {
        title: 'Locations for 400',
        question: '',
        answer: '',
        points: 400,
    },
    {
        title: 'Potpourri for 400',
        question: '',
        answer: '',
        points: 400,
    },
    {
        title: 'Elves for 500',
        question: 'Galadriel was of the Wood-elves who were lesser known as these type of elves',
        answer: 'silvan',
        points: 500,
    },
    {
        title: 'Dwarves for 500',
        question: 'Thorin II was son of this Dwarf',
        answer: 'thrain ii' || 'thrain 2',
        points: 500,
    },
    {
        title: 'Hobbits for 500',
        question: 'Hobbit holes were known as these',
        answer: 'smials',
        points: 500,
    },
    {
        title: 'Books for 500',
        question: '',
        answer: '',
        points: 500,
    },
    {
        title: 'Locations for 500',
        question: '',
        answer: '',
        points: 500,
    },
    {
        title: 'Potpourri for 500',
        question: '',
        answer: '',
        points: 500,
    },

]

let userStart = alert('Select a clue by clicking on any point value')
let userScore1 = document.querySelector('#p1Score')
let userScore2 = document.querySelector('#p2Score')

let player1Score = 0
let player2Score = 0

let player1Turn = true
let player2Turn = false




// function showClue(evt) {

//     let userAnswer = prompt(questions[1].question)


// }


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (evt) => {
        let userAnswer = prompt(questions[i].question)
        if (userAnswer.toLowerCase() === questions[i].answer) {
            if (player1Turn === true) {
                player1Score += questions[i].points
                userScore1.innerHTML = player1Score
                console.log(player1Turn)
                console.log(player1Score)
            }
            if (player2Turn === true) {
                player2Score += questions[i].points
                userScore2.innerHTML = player2Score
                console.log(player2Turn)
                console.log(player2Score)
            }
        }
        player1Turn = !player1Turn
        player2Turn = !player2Turn

    }
    );

}
