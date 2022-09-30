
window.addEventListener('keyup', (e)=>{
    e.preventDefault()

    let input_value = document.getElementById('pwd').value
    let array_of_input_value = input_value.split("") 
    let letters_number_condition = document.querySelector('.letters_number_condition')
    let one_number_condition = document.querySelector('.one_number_condition')
    let numbers = []

    const active_opacity = 1
    const not_active_opacity = 0.3
    
    if(input_value.length >= 8){
        letters_number_condition.style.opacity = active_opacity
        
    }else{
        letters_number_condition.style.opacity = not_active_opacity
    }

    array_of_input_value.forEach(elem => {
        if(parseInt(elem)){
            numbers.push(elem) 
        }
    })

    if(numbers.length >= 1){
        one_number_condition.style.opacity = active_opacity
        
    }else{
        one_number_condition.style.opacity = not_active_opacity
    }
})