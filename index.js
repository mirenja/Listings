




let visa = document.getElementById('inlineFormSelectPref');
let selectedVisa = visa.options[visa.selectedIndex].value;
 



function update(){
    // visa.options[visa.selectedIndex].value = selectedVisa;
    selectedVisa = visa.options[visa.selectedIndex].value;
    // maintenance
    console.log(selectedVisa)
    
    visaSelection()
}


function visaSelection(){
    if (selectedVisa == 'tourist'){
        touristTasks()
    }
    else if (selectedVisa == 'student'){
        studentTasks()
    }
    else{
        console.log('we will add more')
    }
}
function touristTasks(){
     
}

function studentTasks(){
    console.log('ALa shule tena!')
}