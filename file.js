// Идентификаторы

let NAME;
NAME = "Дезир Арман";

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

//Объекты

const IMA = {nam:"Markus"};
let ima = {nam :"Djoni"};

IMA.nam = "KOL";
ima.nam = "KOL";

console.log(ima,IMA);

function createUser(name,city){
    return {name: name, city: city};
}
console.log(createUser("Dezir","Arman"));

//Коллекции

const ARR = [{name: "Markus", phone: +03423423},{name:"Dezir", phone: +231234},{name:"Kel",phone: +94242523}];

function findPhoneByName(name){
    for(let number of ARR){
        if(number.name===name){
            return number.phone;
        }
    }
}
console.log(findPhoneByName("Kel"));

//ХЭШ -

const ARR_obj ={
  mao:{name: "Markus", phone: +03423423},dez:{name:"Dezir", phone: +231234},kel:{name:"Kel",phone: +94242523}
};
function FINDPhoneByName(key){
    for(let number in ARR_obj){
        if(number===key){
            return ARR_obj[number].phone.toString();

        }
    }
}
console.log(typeof(FINDPhoneByName("dez")));