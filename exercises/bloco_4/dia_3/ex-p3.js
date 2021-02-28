let n = 5;
let inputLine = '';
let asterisc = '*';
let emptySpace = ' ';
let auxiliar = 4;

for(let colum = 0; colum<n; colum += 1){
    for (let index = 0; index<n; index += 1){
        if(index<auxiliar){
            inputLine += emptySpace;
        } else {
            inputLine += asterisc;
        }
          
    }
    console.log(inputLine);
    auxiliar-=1;
    inputLine = '';       
}    
