//for loops

/*const sumofN = (num : number)=>{
    let sum = 0
    for (let a = 1; a <= num ; a++) {
        sum = sum + a;
    }
    console.log(sum)
    }
    sumofN(15)*/


    //======= While loops ========

let i = 4  //jo i par value ha wahi sa run hona strart ho gi

while (i <= 10) {
    console.log(i, "i");
    i++;
}


// ========= while loops table =======

let table = 1
let tableNum = 2

while(table<=10){
    console.log(`${tableNum} * ${table} = ${table * tableNum}`)
table++
}

// ======  forIn loops  ========

let student = {
    name : "Areeba" ,
    class : "thursday Morning",
    avalible : true
}
 for (let X in student ) {
    //console.log(X,"X")
    console.log(X,student[X]);
    
 }




