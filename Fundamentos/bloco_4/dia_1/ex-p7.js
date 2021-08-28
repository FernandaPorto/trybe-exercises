let nota = 70;

switch (true) {
    case (nota>=90 && nota<=100):
        console.log("O estudante recebeu conceito A");
        break;
    case (nota>=80 && nota<90):
        console.log("O estudante recebeu conceito B");
        break;
    case (nota>=70 && nota<80):
        console.log("O estudante recebeu conceito C");
        break;
    case (nota>=60 && nota<70):
        console.log("O estudante recebeu conceito D");
        break;
    case (nota>=50 && nota<60):
        console.log("O estudante recebeu conceito E");
        break;
    case (nota<50):
        console.log("O estudante recebeu conceito -F");
        break;
    default:
        console.log("Erro, nota inválida!!")
}   