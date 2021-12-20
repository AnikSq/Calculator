
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
let val = [false]
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

function backFunc(main){
    main.addEventListener('click',le=>{
        if (numOne.length > 1){
            let lastArr = numOne.at(-1)
            splice(lastArr,1)
        }else{
            let lastArr = numTwo.at(-1)
            splice(lastArr,1)
        }
    })
}



function clearFunc(main){
    main.addEventListener('click',let=>{ // clearing all the registered values expect for val
    numOne = []
    numTwo = []
    numTotal = []
    allOperators = []
    checker = []
    val.push(false)
    })
}

function join(main){
    let giveBack = ""
    for(let i=0;i<main.length;i++){ // joins 2 strings
        giveBack += main[i]
    }
    return giveBack
}
       

function operatorPlus(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
       if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
        return;
       }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
       }
       checker.push(main.textContent); // pushes everything for reference
       if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
          let temp = parseInt(join(numOne)) + parseInt(join(numTwo)); // a temp number to store the sum
          numOne = [] // since the work of this array is done it is set to empty
          numTwo = [] // same set as empty
          numOne.push(temp) // pushes the newly made number to numOne
       }
    })
}


function operatorMinus(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
        if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
         return;
        }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
        }
        checker.push(main.textContent); // pushes everything for reference
        if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
           let temp = parseInt(join(numOne)) - parseInt(join(numTwo)); // a temp number to store the sum
           numOne = [] // since the work of this array is done it is set to empty
           numTwo = [] // same set as empty
           numOne.push(temp) // pushes the newly made number to numOne
        }
     })

}

function operatorMulti(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
        if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
         return;
        }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
        }
        checker.push(main.textContent); // pushes everything for reference
        if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
           let temp = (parseInt(join(numOne)) * parseInt(join(numTwo))); // a temp number to store the sum
           numOne = [] // since the work of this array is done it is set to empty
           numTwo = [] // same set as empty
           numOne.push(temp) // pushes the newly made number to numOne
        }
     })
}

function operatorDivision(main,val){
    main.addEventListener('click',let=>{ // works when + is clicked
        if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
        return;
        }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
        }
        checker.push(main.textContent); // pushes everything for reference
        if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
           let temp = parseInt(join(numOne)) / parseInt(join(numTwo)); // a temp number to store the sum
           numOne = [] // since the work of this array is done it is set to empty
           numTwo = [] // same set as empty
           numOne.push(temp) // pushes the newly made number to numOne
        }
     })
}

numbers(seven , val)
numbers(nine,val)
numbers(eight,val)
numbers(six,val)
numbers(five,val)
numbers(four,val)
numbers(three,val)
numbers(two,val)
numbers(one,val)
numbers(zero,val)
operatorPlus(plus , val);
operatorMinus(minus , val);
operatorMulti(multi,val)
operatorDivision(division,val)
clearFunc(clear);
backFunc(back);