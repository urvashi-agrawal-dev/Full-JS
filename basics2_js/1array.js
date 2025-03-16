//Array
const myHero = ['Megatron','Will']
console.log(myHero[1])
const myArr = [0,1,2,3,4]
console.log(myArr[3])
const myArr1 = new  Array(1,2,3,5)
console.log(myArr1[2])
//myArr.push(7)
//myArr.push(5)
//myArr.pop()
myArr.unshift(8)

console.log(myArr.includes(8))
console.log(myArr.indexOf(3))
const newArr = myArr.join()
console.log(newArr);
console.log(myArr)
//slice //splice
console.log("A",myArr)
const myARR2 = myArr.slice(1,3)
console.log(myARR2)
const myARR3 = myArr.splice(1,3)
console.log(myARR3)
console.log("C",myArr)
const marvel_heroes=["spiderman","ironman","thor"]
const dc_heroes = ["batman","flash","superman"]
marvel_heroes.push(dc_heroes)
const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)
const newarra = [1,2,3,[4,5,6],6,[7,8,[9,5,7]]]
const real = newarra.flat(Infinity)
console.log(real)
console.log(Array.isArray("Hema"))
console.log(Array.from("Robinsons"))
console.log(Array.from({name:"Robinsons"}))
let score1 =290
let score2 = 2334
let score3 =56
console.log(Array.of(score1,score2,score3))