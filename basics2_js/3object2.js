//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "112adss"
tinderUser.name="sjf"
tinderUser.isLoggedIn=false
//console.log(tinderUser)
const regularUser={
    email:"bsdj@gmail.com",
    fullname:{
        userfullname:{
            firstname:"DSBDEIJ",
            lastname:"dsnchjds"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogged'))
const course ={
    coursename:"ndfjij",
    courseprice:23,
    courseinstructor:"me"
}
const{courseprice:price} = course
console.log(price)