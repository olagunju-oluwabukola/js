function calByRow(item){
    return item*10
}


function store (shoes, bags){
const shoesByRow = calByRow(shoes)
const bagsByRow = calByRow(bags)
return `we have ${shoesByRow} shoes  and ${bagsByRow} bags in the store`
}

console.log(store(2, 4))

function total(size){
return size*10
}
function pupils(male, female){
const totalMale = total(male)
const totalFemale = total(female)

return `There are ${totalMale} male and ${totalFemale} in their class`
}

console.log(pupils(10,18))


function totalHouse(building){
    return building*10
} 


function typesOfHouse(flat,duplex){
    const totalFlat = totalHouse(flat)
    const totalduplex = totalHouse(duplex)
    return `there are ${totalFlat} flats and ${totalduplex} duplex on that street`
}

console.log(typesOfHouse(10,30))

const avg = (a,b,c) =>( a+b+c)/3




const teamA = avg(90,67,10)
const teamB = avg(70,100,60)

function winnner (teamAScore, teamBScore){
    if (teamAScore >= 2* teamAScore){
        console.log(`team A won with ${teamAScore} points`)
    } else if (teamBScore >= 2* teamAScore){
        console.log(`Team B won with ${teamBScore} points`)
    } else{
        console.log(`No winner. Team A has ${teamAScore} points and Team B has ${teamBScore} points`)
    }
}

const Result = winnner(teamA, teamB)
console.log(Result)

const persons = ['Ade', 'bimi']
persons[1] = 'lola'
console.log(persons)

const John = {

    fullName: 'John Lock',
    mass: 78,
    height: 1.69,
    calBmi : function(){
        this.bmi = this.mass/this.height **2
    }
}

John.calBmi()

const mark = {
    fullName : 'Mark Stone',
    mass : 92,
    height: 1.95,
    calBmi : function(){
        this.bmi = this. mass/this.height **2
    }
}

mark.calBmi()


if(John.bmi >= mark.bmi){
    console.log(`${John.fullName}'s bmi is greater than ${mark.fullName}'s BMI by ${John.bmi - mark.bmi} KG`)
} else if (mark.bmi >= john.bmi){
    console.log(`${mark.fullName}'s bmi is greater than ${John.fullName}'s BMI by ${John.bmi - mark.bmi} KG`) }
    else{
        console.log('Bmi unknown')
    }
    

    for(let i =1; i<=10; i++) {
        console.log(`john ${i}`)
    }

    const birthYear = [2002,2005,2015,2013]

    const age = []

    for (let i = 0; i < birthYear.length; i++ ){
      age.push(2025- birthYear[i])
      
    }
    console.log(age)

  
const hint = document.querySelector('.hint')
const answer  = document.querySelector('.answer')
const  numbers = Math.trunc(Math.random() *20)+1
let score = 20
document.querySelector('.check').addEventListener('click', function(){
  
    const  guess = Number(document.querySelector('.guess').value)
    
    if(guess === ''){
        hint.textContent = 'Enter a valid number'
        answer.textContent = `The correct number is ${numbers}`
      } else if(guess < numbers){
         hint.textContent = 'Too low'
         answer.textContent = `The correct number is ${numbers}`
         score--
         document.querySelector('.score').textContent =score;
         
      } else if (guess > numbers){
          hint.textContent = 'Too high'
          answer.textContent = `The correct number is ${numbers}`
          score--
          document.querySelector('.score').textContent =score;
      }
      else if(guess === numbers){
        hint.textContent = 'correct'
        answer.textContent = `Yes! You got that.`
        score++
        document.querySelector('.score').textContent =score;
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('body').style.color='white'
      }

      else{
        hint.textContent='something went wrong'
      }

      
      
// check if quess is correct


 

})



    console.log(numbers)
    
    const showModal = document.querySelector('.showModal')
    const modal = document.querySelector('.modal')
    const closeModal = document.querySelector('.closeModal')
function toogleModal(){
    modal.classList.remove('hidden')
}

function toogleClose(){
    modal.classList.add('hidden')
}

    showModal.addEventListener('click',toogleModal )
    closeModal.addEventListener('click',toogleClose )

    const Titles = ['Tola', 'Shade', 'Lekan', 'Shaeeed', 'Soji']

    const [e, , ,f] = Titles

    console.log(e,f)

    let a = 90
    let b = 20
    const obj = {a:10, b:9, c:5};
    ({a, b} = obj);
console.log(a,b)

const books = ['novel', 'notes','Text']
const newBooks = ['Journals', 'Papers', ...books]

console.log(newBooks)

const newText = document.querySelector('.text')

setTimeout(function(){
    newText.textContent = 'Asynchronous'
}, 1000)
newText.style.color ='red'