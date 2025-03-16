//var c =300 // global scope
let a =300

if (true){
    let a =10     //block scope
    const b=20
    //var c=30
    console.log("INNER:",a)
}
//for(let i =0;i<array.length;i++){
//    const element = array[i]
//}
//console.log(a)
//console.log(b)
//console.log(a)



///NESTED SCOPE
function one(){
    const username = "Eleven"
    function two(){
        const webste ="google"
        console.log(username)
    }
    //console.log(webste)
    two()
}
//one()
if (true){
    const username = "eleven"
    if(username === "eleven"){
        const webste = "google"
        console.log(username+webste)
    }
    //console.log(webste)
}
//console.log(username)




////////////////////////////INTERESTING/////////////////
console.log(add(5))
function add(nums){
    return nums+1
}
const addtwo = function(num){
    return num+2
}
console.log(addtwo(6))