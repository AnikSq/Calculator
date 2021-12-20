
// selects the buttons 
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multi = document.querySelector('.x')
let division = document.querySelector('.division')
let nine = document.querySelector('.nine')
let eight = document.querySelector('.eight')
let seven = document.querySelector('.seven')
let six = document.querySelector('.six')
let five = document.querySelector('.five')
let four = document.querySelector('.four')
let three = document.querySelector('.three')
let two = document.querySelector('.two')
let one = document.querySelector('.one')
let zero = document.querySelector('.zero')
let dot = document.querySelector('.dot')
let assignment = document.querySelector('.assignment')
let clear = document.querySelector('.clear')
let back = document.querySelector('.back')


// function for only the numbers 
let numOne = []
let numTwo = []
let numTotal = []
let allOperators = []
val = [false]
let checker = []


function numbers(main , val){
    main.addEventListener('click' , let=>{
        checker.push(main.textContent); // pushes everything for reference
        if (val.at(-1) === false){
            numOne.push(main.textContent);
        }else if (val.at(-1) === true) {
            numTwo.push(main.textContent)
        }
    })
}
       

function operator(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
       val.push(true) // makes the val true , to make the numbers go to numTwo
       if (checker.at(-1) == main.textContent){
        return;
       }else{
        allOperators.push(main.textContent) // saves what operator is being used
       }
       checker.push(main.textContent); // pushes everything for reference
       if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
          let temp = parseInt(numOne) + parseInt(numTwo); // a temp number to store the sum
          numOne = [] // since the work of this array is done it is set to empty
          numTwo = [] // same set as empty
          numOne.push(temp) // pushes the newly made number to numOne
       }
    })
}

numbers(seven , val)
operator(plus , val);