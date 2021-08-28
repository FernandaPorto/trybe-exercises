let n = 5;
let inputLine = '';
let asterisc = '*';
let auxiliar = 1;
let emptySpace = ' ';

for (let line = 0; line < Math.ceil(n/2); line += 1){
    for (let index = 1; index < n+1; index += 1){
        if (index%2!=0){
            inputLine = emptySpace.repeat((n-auxiliar)/2) + asterisc.repeat(auxiliar) + emptySpace.repeat((n-auxiliar)/2)
        }
    }

    console.log(inputLine);
    inputLine = '';
    auxiliar += 2;
}