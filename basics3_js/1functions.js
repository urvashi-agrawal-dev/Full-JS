function sayName(){console.log("E")
console.log("L")
console.log("E")
console.log("V")
console.log("E")
console.log("N")
}
//sayName()
function addTwoNumbers(number1,number2){
    //let result = number1 + number2
    //return result

    return number1 + number2
}
//addTwoNumbers(3,"4")
//addTwoNumbers(3,"A")
//addTwoNumbers(3,null)
const result = addTwoNumbers(3,4)
console.log("Result:",result)

function loginUserMessage(username){
    if(!username ){
        console.log("Please enetr a username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("dfnj"))
function calculatecarprice(val1,val2,...num1){ //... is rest opr and spread opr
    return num1
}
console.log(calculatecarprice(200,390,499,555))
const user = {
    username : "jdsjl",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject({
    username:"sdjdfs",
    price:287323
})
const mynewArray = [200,300,4000,500]
function returnmysecondnew(getArray){
    return getArray
}
console.log(returnmysecondnew(['200','3000','400']))




