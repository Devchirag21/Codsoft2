let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

let string="";
let arr = Array.from(button);
arr.forEach(button =>
    {

        button.addEventListener('click', (a)=>{
            if(a.target.innerHTML == '='){
                string = eval(string);
                input.value = string;
            }
            else if(a.target.innerHTML == 'DEL'){
               string = string.substring(0, string.lenght-1);
               input.value = string ;
            }

            else if(a.target.innerHTML == 'AC'){
                string = "";
                input.value = string; 
            }
            else{
            string += a.target.innerHTML;
            input.value = string;
            }
        })
    })