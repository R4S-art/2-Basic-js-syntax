// Идентификаторы

const NAME = "Дезир Арман";
const OLD = 827;

function HelloName(Name){
    console.log("Приветствую тебя великий "+Name);
}
HelloName(NAME);

// Циклы

function range(start, end) {
    let arr = [];
    for(let i = start; i<= end; i++) {
        arr.push(i);
      
        


    }
    console.log(arr);
    return arr;
}
range(15,30);

function rangeOdd(start, end) {
    let arr = [];
    for(let i = start; i<= end; i++) {
        if(i%2===1){
            arr.push(i);
        }

    }
    console.log(arr);

return arr;
}
rangeOdd(15,30);

//Функции

const average =(a,b) =>{
    return (a+b)/2;
}
console.log(average(10,20));

const squere =(a)=>{
    return a*a;
}

const cube = (a) => {
    return a*a*a;
}

function calculete (end){
    let arr=[];
    for(let i =0;i<end;i++){
        arr.push(average(squere(i),cube(i)));

    }
console.log(arr);
}
calculete(10);