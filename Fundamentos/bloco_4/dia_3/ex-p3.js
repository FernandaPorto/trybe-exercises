let n = 7;
let inputLine = '';
let asterisc = '*';
let emptySpace = ' ';
let auxiliar = n-1;

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
