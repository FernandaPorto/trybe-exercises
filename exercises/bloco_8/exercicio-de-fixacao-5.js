const wakeUp = () => console.log('Acordando!!');

const eatSomethig = () => console.log('Bora tomar café!!');

const getSomeSleep = () => console.log('Partiu dormir!!');

// doingThings(wakeUp);

const doingThings = (action) => action();

doingThings(wakeUp);