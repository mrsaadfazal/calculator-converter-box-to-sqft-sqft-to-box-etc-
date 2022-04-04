
var calcConfiguration = {
    targets: {
        sqftInput: "#firstIputSqFt",
        boxInput: "#secondInputBoxes",
        descText: "#showPrice"
    },
    givens: {
        pricePerBox: 25.56,
        sqftPerBox: 3.24
    }
}


window.addEventListener("DOMContentLoaded", async () => {

    registerEvents();

})


///////////////////////////////////////

function functionality() {


//     // calling the funcations

    sqftPercentageBox()
//     // boxPercentageSqft()


//     ///////////////////////////////////////

    function sqftPercentageBox() {

        if (document.getElementById('defaultCheck').checked) {

            console.log("checked")

            let output = document.querySelector(calcConfiguration.targets.sqftInput).value / calcConfiguration.givens.sqftPerBox // getting the actual boxes value

            console.log(output) // debuging

            let percent = (10 / 100) * output // calculating the percentage

            // console.log(percent)

            calculatedValueOfBoxes =  Math.ceil(output + percent)

            document.querySelector(calcConfiguration.targets.boxInput).value = calculatedValueOfBoxes // showing the boxes

            document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: $${(calculatedValueOfBoxes  * calcConfiguration.givens.pricePerBox).toFixed(2)} at at $${calcConfiguration.givens.pricePerBox} per box, or ${(calcConfiguration.givens.sqftPerBox * calculatedValueOfBoxes).toFixed(2)} sq. ft.`  // showing the description


        } 
        else {

            console.log("not checked")

            let output = Math.ceil(document.querySelector(calcConfiguration.targets.sqftInput).value / calcConfiguration.givens.sqftPerBox) // getting the boxes value

            console.log(output) // debuging


            document.querySelector(calcConfiguration.targets.boxInput).value = output // showing the boxes    

            document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: ${(output * calcConfiguration.givens.pricePerBox).toFixed(2)} at at $${calcConfiguration.givens.pricePerBox} per box, or ${(calcConfiguration.givens.sqftPerBox * output).toFixed(2)} sq. ft.` //showing description

        }

    }

    
//     ///////////////////////////////////////

        // function boxPercentageSqft() {

        //     if (document.getElementById('defaultCheck').checked) {

        //         let output = calcConfiguration.givens.sqftPerBox * document.querySelector(calcConfiguration.targets.boxInput).value   //  getting the actual sqft value

        //         let percent = (10 / 100) * output  // calculating percentaqge

        //         document.querySelector(calcConfiguration.targets.sqftInput).value = (output - percent).toFixed(2)// showing the sqft with 10%


        //         document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: $${(document.querySelector(calcConfiguration.targets.boxInput).value * calcConfiguration.givens.pricePerBox).toFixed(2)} at $${calcConfiguration.givens.pricePerBox} per box, or ${output.toFixed(2)} sq. ft.`  // showing the description



        //     }
            //  else {

            //     let output = (calcConfiguration.givens.sqftPerBox * document.querySelector(calcConfiguration.targets.boxInput).value).toFixed(2) // getting the sqft value  

            //     document.querySelector(calcConfiguration.targets.sqftInput).value = output // showing the sqft

            //     document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: $${(document.querySelector(calcConfiguration.targets.boxInput).value * calcConfiguration.givens.pricePerBox).toFixed(2)} at $${calcConfiguration.givens.pricePerBox} per box, or ${output} sq. ft.` //showing description

            // }

        // }

// ///////////////////////////////////////


}

///////////////////////////////////////








// function sqftPercentageBox() {


//     if (document.getElementById('defaultCheck').checked) {

//         console.log("checked")

//         let output = document.querySelector(calcConfiguration.targets.sqftInput).value / calcConfiguration.givens.sqftPerBox // getting the actual boxes value

//         console.log(output) // debuging

//         let percent = (10 / 100) * output // calculating the percentage

//         // console.log(percent)

//         calculatedValueOfBoxes = Math.ceil(output + percent)

//         document.querySelector(calcConfiguration.targets.boxInput).value = calculatedValueOfBoxes // showing the boxes

//         document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: $${(calculatedValueOfBoxes * calcConfiguration.givens.pricePerBox).toFixed(2)} at at $${calcConfiguration.givens.pricePerBox} per box, or ${(calcConfiguration.givens.sqftPerBox * output).toFixed(2)} sq. ft.`  // showing the description


//     } else {

//         console.log("not checked")

//         let output = Math.ceil(document.querySelector(calcConfiguration.targets.sqftInput).value / calcConfiguration.givens.sqftPerBox) // getting the boxes value

//         console.log(output) // debuging


//         document.querySelector(calcConfiguration.targets.boxInput).value = output // showing the boxes    

//         document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: ${(output * calcConfiguration.givens.pricePerBox).toFixed(2)} at at $${calcConfiguration.givens.pricePerBox} per box, or ${(calcConfiguration.givens.sqftPerBox * output).toFixed(2)} sq. ft.` //showing description

//     }
// }



















function registerEvents() {

    document.querySelector(calcConfiguration.targets.sqftInput).addEventListener('keyup', (e) => {

        let output = Math.ceil(e.target.value / calcConfiguration.givens.sqftPerBox) // getting the boxes value

        document.querySelector(calcConfiguration.targets.boxInput).value = output // showing the boxes

        console.log(output)

        document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: ${(output * calcConfiguration.givens.pricePerBox).toFixed(2)} at at $${calcConfiguration.givens.pricePerBox} per box, or ${(calcConfiguration.givens.sqftPerBox * output).toFixed(2)} sq. ft.` //showing description


        functionality();
        // sqftPercentageBox()


    })

    document.querySelector(calcConfiguration.targets.boxInput).addEventListener('keyup', (e) => {


        if(e.target.value == "0" || e.target.value == ""){
            e.target.value = "1"
        }

        let output = (calcConfiguration.givens.sqftPerBox * e.target.value).toFixed(2) // getting the sqft value  

        document.querySelector(calcConfiguration.targets.sqftInput).value = output // showing the sqft

        document.querySelector(calcConfiguration.targets.descText).innerHTML = `Total price: $${(e.target.value * calcConfiguration.givens.pricePerBox).toFixed(2)} at $${calcConfiguration.givens.pricePerBox} per box, or ${output} sq. ft.` //showing description

        // functionality();

    })

}

























// firstIputSqFt.addEventListener('keyup', (e) => {


//     let output = Math.ceil(e.target.value / sqftOfoneBox) // getting the boxes value

//     secondInputBoxes.value = output // showing the boxes

//     showPrice.innerHTML = `Total price: ${(output * priceOfSqft).toFixed(2)} at at $${priceOfSqft} per box, or ${(sqftOfoneBox * output).toFixed(2)} sq. ft.` //showing description

//     isChecked()


// })



// secondInputBoxes.addEventListener('keyup', (e) => {


//     let output = (sqftOfoneBox * e.target.value).toFixed(2) // getting the sqft value  

//     firstIputSqFt.value = output // showing the sqft

//     showPrice.innerHTML = `Total price: ${(e.target.value * priceOfSqft).toFixed(2)} at $${priceOfSqft} per box, or ${output} sq. ft.` //showing description

//     isChecked()

// })














