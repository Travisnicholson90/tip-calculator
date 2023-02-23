const tipButtons = document.querySelectorAll(".tip-button")
const finalTotal = document.querySelector('.total-per-person')
const tipPerPerson = document.querySelector('.tip-per-person')
const billInput = document.querySelector('.bill-amount')
const btn5 = document.querySelector('#btn-5')
const btn10 = document.querySelector('#btn-10')
const btn15 = document.querySelector('#btn-15')
const btn20 = document.querySelector('#btn-20')
const btn25 = document.querySelector('#btn-25')
const btn50 = document.querySelector('#btn-50')
const numOfPeopleInput = document.querySelector('.split-input')
const reset = document.querySelector('.reset')

/*
create the javascript to take the input for the total bill amount
work the tip out by each button 
the divide by the amount of people input value
*/

let totalTip = 0;



// take the bill input and the calculate the total tip amount by the respective tip amount button
billInput.addEventListener('input', function() {
    const bill = Number(billInput.value);
    
    // calculate total tip per person
    //calculate total including tip per person
    numOfPeopleInput.addEventListener('input', (e) => {
        const numOfPeople = numOfPeopleInput.value
        const finalAmount = totalTip / numOfPeople
        const total =  bill + totalTip
        const totalPerPerson = total / numOfPeople
        tipPerPerson.innerHTML = `$${finalAmount.toFixed(2)}`
        finalTotal.innerHTML = `$${totalPerPerson.toFixed(2)}`;
    })
    
    btn5.addEventListener('click', () => {
        const tipPercent = 0.05
        totalTip = bill * tipPercent
        return console.log(totalTip);
    })
    
    btn10.addEventListener('click', () => {
        const tipPercent = 0.1
        totalTip = bill * tipPercent
        return console.log(totalTip);
        
    })
    
    btn15.addEventListener('click', () => {
        const tipPercent = 0.15
        totalTip = bill * tipPercent
        return console.log(totalTip);
        
    })

    btn20.addEventListener('click', () => {
        const tipPercent = 0.2
        totalTip = bill * tipPercent
        return console.log(totalTip);
        
    })
    
    btn25.addEventListener('click', () => {
        const tipPercent = 0.25
        totalTip = bill * tipPercent
        return console.log(totalTip);
        
    })
    
    btn50.addEventListener('click', (e) => {
            const tipPercent = 0.5;
            totalTip = bill * tipPercent;
            return console.log(totalTip);
        
        })
        
        
})
    
    reset.addEventListener('click', (e) => {
        console.log(e);

        if(reset) {
            billInput.value = '0';
            numOfPeopleInput.value = '0';
            finalTotal.innerHTML = '$00.00';
            tipPerPerson.innerHTML = '$00.00';
        }

    })
