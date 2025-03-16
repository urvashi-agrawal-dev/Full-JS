//singleton
//obj literals
const mySym = Symbol("keys1")
const JsUser = {
    "name":"Sovita",
    age:21,
    [mySym]:"mykey1",
    email:"uuds@gmail.com",
    loc:"america",
    isLoggedin:true,
    lastLoggedIn:["Monday","Sunday"]
}
console.log(JsUser.email)
console.log(JsUser['email'])
console.log(JsUser['mySym'])
JsUser.email = "hsudh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hsudh@micros.com"
console.log(JsUser)
JsUser.greeting = function(){
    console.log("Hello js user")
}
console.log(JsUser.greeting)
JsUser.greeting2 = function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(JsUser.greeting2)