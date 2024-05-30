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
var i = 4; //jo i par value ha wahi sa run hona strart ho gi
while (i <= 10) {
    console.log(i, "i");
    i++;
}
// ========= while loops table =======
var table = 1;
var tableNum = 2;
while (table <= 10) {
    console.log("".concat(tableNum, " * ").concat(table, " = ").concat(table * tableNum));
    table++;
}
// ======  forIn loops  ========
var student = {
    name: "Areeba",
    class: "thursday Morning",
    avalible: true
};
for (var X in student) {
    //console.log(X,"X")
    console.log(X, student[X]);
}
