
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
const edit = document.querySelector('.num-display')


// function for only the numbers 
let numOne = []
let numTwo = []
let numTotal = []
let allOperators = []
let val = [false]
let checker = []
let all = '' // stores all the values in a string for reference 
let assignval = [false]
function dotOperator(main){
    main.addEventListener('click',let=>{
        alert("WIP, May complete it ")
    })
}
function numbers(main , val){

    main.addEventListener('click' , let=>{
        all += main.textContent
        edit.innerHTML = all;
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
        alert("This is WIP, May Complete it later for now, for now it works as clear")
            numOne = []
            numTwo = []
            numTotal = []
            allOperators = []
            checker = []
            val.push(false)
            all = ''
            edit.innerHTML = all;
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
    all = ''
    edit.innerHTML = all;
    })
}

function join(main){
    let giveBack = ""
    for(let i=0;i<main.length;i++){ // joins 2 strings
        giveBack += main[i]
    }
    return giveBack
}
       


function inting(main){
    if (main == []){
        return 0;
    }else{
        parseInt(join(main));
    }
}
function operatorPlus(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
       all += main.textContent
       edit.innerHTML = all;
       if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
        return;
       }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
       }
       checker.push(main.textContent); // pushes everything for reference
       if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
        let one =(parseInt(join(numOne)))
        let two = (parseInt(join(numTwo)))
        if (isNaN(one)==true || isNaN(two)==true){
            return 0;
        }
          let temp =  one+two; // a temp number to store the sum
          numOne = [] // since the work of this array is done it is set to empty
          numTwo = [] // same set as empty
          numOne.push(temp) // pushes the newly made number to numOne
       }
    })
}


function operatorMinus(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
        all += main.textContent
        edit.innerHTML = all;
        if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
         return;
        }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
        }
        checker.push(main.textContent); // pushes everything for reference
        if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
                let one =(parseInt(join(numOne)))
                let two = (parseInt(join(numTwo)))
                if (isNaN(one)==true || isNaN(two)==true){
                    return 0;
                }
                let temp =  one-two; // a temp number to store the sum           numOne = [] // since the work of this array is done it is set to empty
           numTwo = [] // same set as empty
           numOne.push(temp) // pushes the newly made number to numOne
        }
     })

}

function operatorMulti(main , val){
    main.addEventListener('click',let=>{ // works when + is clicked
        all += main.textContent
        edit.innerHTML = all;
        if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
         return;
        }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
        }
        checker.push(main.textContent); // pushes everything for reference
        if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
            let one =(parseInt(join(numOne)))
            let two = (parseInt(join(numTwo)))
            if (isNaN(one)==true || isNaN(two)==true){
                return 1;
            }
              let temp =  one*two; // a temp number to store the sum
           numOne = [] // since the work of this array is done it is set to empty
           numTwo = [] // same set as empty
           numOne.push(temp) // pushes the newly made number to numOne
        }
     })
}

function operatorDivision(main,val){
    main.addEventListener('click',let=>{ // works when + is clicked
        all += main.textContent
        edit.innerHTML = all;
        if (checker.at(-1) == main.textContent || checker.length == 0){ // makes sure 2 plus aren't being used 
        return;
        }else{
        val.push(true) // makes the val true , to make the numbers go to numTwo
        allOperators.push(main.textContent) // saves what operator is being used
        }
        checker.push(main.textContent); // pushes everything for reference
        if (allOperators.length > 1){ // if there are more than one operator in the allOperators variable then execute this statement
            let one =(parseInt(join(numOne)))
            let two = (parseInt(join(numTwo)))
            if (isNaN(one)==true || isNaN(two)==true){
                return 1;
            }
              let temp =  (one/two); // a temp number to store the sum
           numOne = [] // since the work of this array is done it is set to empty
           numTwo = [] // same set as empty
           numOne.push(temp) // pushes the newly made number to numOne
        }
     })
}


function assignEqual(main){
    main.addEventListener('click',let=>{
        assignval.push(true);
        if (checker.at(-1) == 'x' || checker.at(-1) == '÷' || checker.at(-1) == '+' || checker.at(-1) == '-'){
            all=numOne.at(0)
            edit.innerHTML = all.toFixed(2);
            numTwo = []
        } else{
            if (allOperators.at(-1) == 'x'){
               all = (parseInt(join(numOne))/1.0) * (parseInt(join(numTwo))/1.0) // assigning operator
               numOne = [all.toFixed(2)]
               if (parseInt(all) === all){
                   edit.innerHTML = all
               }else{
                edit.innerHTML = all.toFixed(2);
               }
               numTwo = []
            }
            else if (allOperators.at(-1) == '+'){
                all = (parseInt(join(numOne))/1.0) + (parseInt(join(numTwo))/1.0)
                numOne = [all.toFixed(2)]
                if (parseInt(all) === all){
                    edit.innerHTML = all
                }else{
                 edit.innerHTML = all.toFixed(2);
                }
                numTwo = []
            }
            else if (allOperators.at(-1) == '-'){
                all = (parseInt(join(numOne))/1.0) - (parseInt(join(numTwo))/1.0)
                numOne = [all.toFixed(2)]
                if (parseInt(all) === all){
                    edit.innerHTML = all
                }else{
                 edit.innerHTML = all.toFixed(2);
                }
                numTwo = []
            }
            else if (allOperators.at(-1) == '÷'){
                if (join(numTwo) == 0){
                    alert("Threats Detected")
                    alert("Preparing Countermeasures")
                    alert("Deploying Countermeasures")
                    alert("Threat avoided")
                }else{
                    all = (parseInt(join(numOne))/1.0) / (parseInt(join(numTwo))/1.0)
                    numOne = [all.toFixed(2)]
                    if (parseInt(all) === all){
                        edit.innerHTML = all
                    }else{
                    edit.innerHTML = all.toFixed(2);
                    }
                    numTwo = []
                }
                
            }
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
assignEqual(assignment);
dotOperator(dot)

