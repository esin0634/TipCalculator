

// billInput -----------------------

const billInput = document.querySelector("#bill-input")

let billAmount = 0

billInput.addEventListener("input", function(e) {
  billAmount = Number(billInput.value)
  console.log("Bill is: " + billAmount)
})
// billInput------------------------------

// %  tip buttons start-------------------------------------
// activeButtonValue is the tip value without the percentage
const customTipButton = document.querySelector("#custom-tip-input")


const tipPercentageButtons = document.querySelectorAll(".tipPercentage")
let activeButton = null

customTipButton.addEventListener("input", function(e) {
  let activeButtonValue = Number(customTipButton.value)
  console.log("tip:" + activeButtonValue)
  if (activeButton) {
    activeButton.classList.remove("active")
  }
})

tipPercentageButtons.forEach(function(button) {
  if (customTipButton.value === "") {
    button.addEventListener("click", function(e) {
      tipPercentageButtons.forEach(button => {
        button.classList.remove('active');
        if (activeButton) {
          activeButton.classList.remove("active")
        }
      });
      e.target.classList.add("active")
      activeButton = e.target



    })
  }

})
// tip buttons end ----------------------------------------------


// number of people and all calculation start -----------------------

const peopleInput = document.querySelector("#people-input")

let peopleAmount = 0
let tipAmount = document.querySelector("#tipAmount")
let totalAmount = document.querySelector("#totalAmount")


peopleInput.addEventListener("input", function(e) {
  peopleAmount = Number(peopleInput.value)
  console.log("Number of people: " + peopleAmount)
  tipAmount.textContent = "$" + ((billAmount * Number(activeButton.value) / 100 / peopleAmount)).toFixed(2)
  totalAmount.textContent = "$" + ((billAmount + (billAmount * Number(activeButton.value) / 100)) / peopleAmount).toFixed(2)


})

// number of people end ----------------------------------






