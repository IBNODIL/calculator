let number1 = "";
let number2 = "";
let ishora = "";


function getNumber(id){
    let textCoNtent =document.getElementById(id).textContent;
    number1= number1+textCoNtent;
    document.getElementById('input').textContent = number1;
    let nuqta =document.getElementById('dot');
    if(number1.includes('.')){
        nuqta.disabled=true;
    }
}


function ishorachi(id){
    if(number1){
        let nuqta =document.getElementById('dot');
        number2 = number1;
        number1 = "";
        ishora = document.getElementById(id).textContent;
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('multiple').disabled = true;
        document.getElementById('devis').disabled = true;
        nuqta.disabled=false;
    }
}

function equals(){
    if(number1){
        if(number2){        
            if(ishora === '+'){                
                teng = parseFloat(number2) + parseFloat(number1);    
            }

            if(ishora === '-'){                
                teng = parseFloat(number2) - parseFloat(number1);    
            }

            if(ishora === '*'){                
                teng = parseFloat(number2) * parseFloat(number1);    
            }

            if(ishora === '/'){                
                teng = parseFloat(number2) / parseFloat(number1);    
            }

            document.getElementById('input').textContent = teng;

            let buttons =document.getElementsByClassName('btn');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
                buttons[i].classList.add('dis');
            }

            document.getElementById('delete').disabled = false;
            document.getElementById('delete').classList.remove('dis');
        }
    }
}

function del(){
    let buttons =document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('dis');
        buttons[i].disabled = false;
    }
    number1 = "";
    number2 = "";
    ishora = "";
    teng = "";
    document.getElementById('input').textContent = number1;
}