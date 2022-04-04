
// var cbcConf = {
//     targets: {
//         sqftInput: "input#sqftInput", //done
//         boxInput: "input#boxInput", //done
//         descText: "p#custom_box_calculator_calculated_description" //done
//     },
//     givens: {
//         pricePerBox: 25.56,    // done
//         sqFtPerBox: sqFtPerBox, //done
//         negetivePercentageOfWastage: 9.091, //done
//         wasteReservePercent: 10 //done

//     }
// }

// var cbcConf = {
//     sqFtPerBox: sqFtPerBox,
//     productTagToCheck: "customBoxCalculator",
//     readyState: "",
//     productObject: null,
//     wasteReservePercent: 10,
//     templateType_rabi: templateType_rabi,
//     negetivePercentageOfWastage: 9.091

// }


window.addEventListener("DOMContentLoaded", async () => {

    registerEventsSaad();

})




///////////////////////////////////////


function sqftPercentageBoxSaad() {

    if (document.querySelector(cbcConf.wasteReserveTarget).checked) {

        console.log("checked")

        let output = document.querySelector(cbcConf.sqFtInputFieldFrontEndTarget).value / cbcConf.sqFtPerBox // getting the actual boxes value

        console.log(output) // debuging

        let percent = (cbcConf.wasteReservePercent / 100) * output // calculating the percentage

        // console.log(percent)

        calculatedValueOfBoxes = Math.ceil(output + percent)

        document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value = calculatedValueOfBoxes // showing the boxes

        document.querySelector(cbcConf.calculatedDescriptionFrontEndTarget).innerHTML = `Total price: $${(calculatedValueOfBoxes * cbcConf.pricePerBoxOfCurrentlySelectedVariantID).toFixed(2)} at at $${cbcConf.pricePerBoxOfCurrentlySelectedVariantID} per box, or ${(cbcConf.sqFtPerBox * calculatedValueOfBoxes).toFixed(2)} sq. ft.`  // showing the description


    }
    else {

        console.log("not checked")

        let output = Math.ceil(document.querySelector(cbcConf.sqFtInputFieldFrontEndTarget).value / cbcConf.sqFtPerBox) // getting the boxes value

        console.log(output) // debuging


        document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value = output // showing the boxes    

        document.querySelector(cbcConf.calculatedDescriptionFrontEndTarget).innerHTML = `Total price: $${(output * cbcConf.pricePerBoxOfCurrentlySelectedVariantID).toFixed(2)} at at $${cbcConf.pricePerBoxOfCurrentlySelectedVariantID} per box, or ${(cbcConf.sqFtPerBox * output).toFixed(2)} sq. ft.` //showing description

    }

}



function boxPercentageSqftSaad() {

    if (document.querySelector(cbcConf.wasteReserveTarget).checked) {

        let output = cbcConf.sqFtPerBox * document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value   //  getting the actual sqft value

        let percent = (cbcConf.negetivePercentageOfWastage / 100) * output  // calculating percentaqge

        document.querySelector(cbcConf.sqFtInputFieldFrontEndTarget).value = (output - percent).toFixed(2)// showing the sqft with 10%


        document.querySelector(cbcConf.calculatedDescriptionFrontEndTarget).innerHTML = `Total price: $${(document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value * cbcConf.pricePerBoxOfCurrentlySelectedVariantID).toFixed(2)} at $${cbcConf.pricePerBoxOfCurrentlySelectedVariantID} per box, or ${output.toFixed(2)} sq. ft.`  // showing the description



    }
    else {

        let output = (cbcConf.sqFtPerBox * document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value).toFixed(2) // getting the sqft value  

        document.querySelector(cbcConf.sqFtInputFieldFrontEndTarget).value = output // showing the sqft

        document.querySelector(cbcConf.calculatedDescriptionFrontEndTarget).innerHTML = `Total price: $${(document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value * cbcConf.pricePerBoxOfCurrentlySelectedVariantID).toFixed(2)} at $${cbcConf.pricePerBoxOfCurrentlySelectedVariantID} per box, or ${output} sq. ft.` //showing description

    }

}


///////////////////////////////////////





function registerEventsSaad() {

    document.querySelector(cbcConf.sqFtInputFieldFrontEndTarget).addEventListener('keyup', (e) => {

        let output = Math.ceil(e.target.value / cbcConf.sqFtPerBox) // getting the boxes value

        document.querySelector(cbcConf.boxInputFieldFrontEndTarget).value = output // showing the boxes

        console.log(output)

        document.querySelector(cbcConf.calculatedDescriptionFrontEndTarget).innerHTML = `Total price: $${(output * cbcConf.pricePerBoxOfCurrentlySelectedVariantID).toFixed(2)} at $${cbcConf.pricePerBoxOfCurrentlySelectedVariantID} per box, or ${(cbcConf.sqFtPerBox * output).toFixed(2)} sq. ft.` //showing description


        sqftPercentageBoxSaad();
        // sqftPercentageBox()


    })

    document.querySelector(cbcConf.boxInputFieldFrontEndTarget).addEventListener('keyup', (e) => {


        if (e.target.value == "0" || e.target.value == "") {
            e.target.value = "1"
        }

        let output = (cbcConf.sqFtPerBox * e.target.value).toFixed(2) // getting the sqft value  

        document.querySelector(cbcConf.sqFtInputFieldFrontEndTarget).value = output // showing the sqft

        document.querySelector(cbcConf.calculatedDescriptionFrontEndTarget).innerHTML = `Total price: $${(e.target.value * cbcConf.pricePerBoxOfCurrentlySelectedVariantID).toFixed(2)} at $${cbcConf.pricePerBoxOfCurrentlySelectedVariantID} per box, or ${output} sq. ft.` //showing description

        // functionality();
        boxPercentageSqftSaad()
    })

}













