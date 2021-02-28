let n = 35;
let inputLine = '';
let asterisc = '*';
let auxiliar = 1;
let emptySpace = ' ';

if(n%2 != 0){
    for (let index = 1; index < Math.floor(n/2)+1; index += 1){
        switch (true) {
            case (index == 1):
                inputLine = emptySpace.repeat((n-auxiliar)/2) + asterisc;
                console.log(inputLine);
                inputLine = '';
                break;
            case ((index<n) && (index>1)):
                inputLine = emptySpace.repeat((n-auxiliar)/2) + asterisc + emptySpace.repeat(auxiliar-2) + asterisc;
                console.log(inputLine);
                inputLine = '';
                break; 
                                 
        }                    
        auxiliar += 2;        
    }

    inputLine = asterisc.repeat(n);
    console.log(inputLine);
} else {
    console.log ("Valor invalido para a variavel n, ela devera ser impar!");
}  
    
