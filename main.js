const displayResult = document.querySelector('#dipslay-result');

function calculator (type, value){

    const addNumber = {

        removeAll(){

            if(value === 'c'){
                displayResult.value = "";
            }

        },

        addNumber(){
            
            if(value != 'c' && value != '='){
                displayResult.value += value
            }
            
        },

    }
    
    addNumber.removeAll();
    
    addNumber.addNumber();
    
    const calcResult = {
        
        result(){
          
            if(value === '='){
                let number1 = displayResult.value;
                displayResult.value = eval(number1);
            }
            
        }
        
    }
    
    calcResult.result();

}