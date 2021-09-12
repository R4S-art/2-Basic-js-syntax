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


}
rangeOdd(15,30);

//Функции
