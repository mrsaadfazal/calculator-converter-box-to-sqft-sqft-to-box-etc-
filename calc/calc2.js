

let sqrtInput = document.getElementById('sqrtInput')

let boxInput = document.getElementById('boxInput')

let showPrice = document.getElementById('showPrice')


let sqftOfoneBox = 3.24 //actual sqft

let priceOftheBox = 25.56 // price of one box



sqrtInput.addEventListener('keyup',(e)=>{

    let output = e.target.value / sqftOfoneBox // getting the actual boxes value

    let percent = (10 / 100) * output // calculating the percentage

    // console.log(percent)

    boxInput.value = Math.ceil(output + percent) // showing the boxes

    showPrice.innerHTML = `Total price: ${( Math.ceil(output + percent) * priceOftheBox).toFixed(2)} at at $25.56 per box, or ${(sqftOfoneBox * output).toFixed(2)} sq. ft.`  // showing the description

})



boxInput.addEventListener('keyup',(e)=>{

    console.log(e.target.value)

    let output = sqftOfoneBox * e.target.value   //  getting the actual sqft value

    let percent = (9.09 / 100) * output  // calculating percentaqge

    sqrtInput.value = (output - percent).toFixed(2)// showing the sqft with 10%


    showPrice.innerHTML = `Total price: ${(e.target.value * priceOftheBox).toFixed(2)} at $25.56 per box, or ${output.toFixed(2)} sq. ft.`  // showing the description

})