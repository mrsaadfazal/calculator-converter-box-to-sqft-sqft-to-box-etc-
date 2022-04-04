


let firstIputSqFt = document.getElementById('firstIputSqFt')

let secondInputBox = document.getElementById('secondInputBoxes')

let showPrice = document.getElementById('showPrice')

// let checkBox = document.getElementById('defaultCheck')


let priceOfSqft = 25.56;  // price of box

let sqftOfoneBox = 3.24;  // sqft of 1 box




///////////////////////////////////////
// function isChecked(){

//     if(document.getElementById('defaultCheck').checked){

//         console.log("checked")

//         var percent = sqftOfoneBox * 0.9

//         var checkFunc = sqftOfoneBox + percent 
        
//         console.log(checkFunc)
        
//         let output = Math.ceil(firstIputSqFt.value / checkFunc)
        
//         console.log(output)
        
//         secondInputBox.value = output 


//     }else{
        
//         console.log("not checked")
        
//     }
// }
///////////////////////////////////////





firstIputSqFt.addEventListener('keyup', (e) => {


    let output = Math.ceil(e.target.value / sqftOfoneBox)

    secondInputBoxes.value = output // showing the boxes

    showPrice.innerHTML = `Total price: ${(output * priceOfSqft).toFixed(2)} at at $25.56 per box, or ${(sqftOfoneBox * output).toFixed(2)} sq. ft.`



})



secondInputBoxes.addEventListener('keyup', (e) => {


    let output = (sqftOfoneBox * e.target.value).toFixed(2)

    firstIputSqFt.value = output // showing the sqft

    showPrice.innerHTML = `Total price: ${(e.target.value * priceOfSqft).toFixed(2)} at $25.56 per box, or ${output} sq. ft.`

})



















// Total price: $25.56 at $25.56 per box, or 3.24 sq. ft.










/////////////////////////////////////
// firstIputSqFt.oninput = (e)=>{



//     let output = Math.ceil(e.target.value/sqftOfoneBox)

//     secondInputBoxes.value = output // showing the boxes

//     showPrice.innerHTML = `Total price: ${(output * priceOfSqft).toFixed(2)} at $25.56 per box, or ${(sqftOfoneBox * output).toFixed(2)} sq. ft.`


//     var checkBox = document.getElementById('defaultCheck')


//     // checking the checked functionality

//     //  if(checkBox.checked == true){


//     //         let output1 = Math.ceil(e.target.value/checkFunc)

//     //         secondInputBoxes.value = output1


//     //         // console.log("hello")

//     //         showPrice.innerHTML = `Total price: ${(output1 * priceOfSqft).toFixed(2)} at $25.56 per box, or ${(sqftOfoneBox * output1).toFixed(2)} sq. ft.`

//     //     }

// }
/////////////////////////////////////////////////



//////////////////////////////////////////
// secondInputBoxes.oninput = (e)=>{

//     let output = (sqftOfoneBox * e.target.value).toFixed(2)

//     firstIputSqFt.value = output

//     showPrice.innerHTML = `Total price: ${(e.target.value * priceOfSqft).toFixed(2)} at $25.56 per box, or ${output} sq. ft.`

// }
//////////////////////////////////////////














// secondInputBox.oninput = ()=>{

//     let output = ((parseFloat(secondInputBox.value)     - 32 ) * 5 ) / 9;

//     firstIputSqFt.value = parseFloat(output.toFixed(2))

// }




















// firstIputSqFt.oninput = ()=>{

//     let output = (parseFloat(firstIputSqFt.value) * 9) / 5 + 32

//     secondInputBox.value = parseFloat(output.toFixed())

// }


// secondInputBox.oninput = ()=>{

//     let output = ((parseFloat(secondInputBox.value) - 32 ) * 5 ) / 9;

//     firstIputSqFt.value = parseFloat(output.toFixed(2))

// }














// firstIputSqFt.addEventListener('input', ()=>{

//     console.log(firstIputSqFt.value)

// })


// secondInputBoxes.addEventListener('input', ()=>{

//     console.log(secondInputBoxes.value)

// })








// perfect working code //

// firstIputSqFt.addEventListener('keyup', (e)=>{


//     let output = Math.ceil(e.target.value/sqftOfoneBox)

//     secondInputBoxes.value = output // showing the boxes

//     showPrice.innerHTML = `Total price: ${(output * priceOfSqft).toFixed(2)} at at $25.56 per box, or ${(sqftOfoneBox * output).toFixed(2)}`

// })






//  now creating one more box