const user = {
    username :"fddf",
    price:22,
    welcomeMessage: function(){
        console.log(`${this.userrname},welcome to website`)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this)
//const addtwo=(num1,num2)=>{
//    return num1+num2
//}

const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(3,4))

