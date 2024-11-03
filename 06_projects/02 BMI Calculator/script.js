const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    //since default action of form on submission is sending collected to data to server. so we have to prevent it
    event.preventDefault()
    const heightInString = document.querySelector('#height').value
    const height = parseInt(heightInString)
    const weight = parseInt(document.querySelector('#weight').value)
    const res = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        res.innerHTML = 'Please Enter valid entries!'
    } else { 
        const emi = (weight/((height)*(height)/10000)).toFixed(2)
        res.innerHTML = `<span>BMI is ${emi}</span>`
    }
    
})