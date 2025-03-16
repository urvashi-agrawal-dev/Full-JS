const useremail = "njasjd@gmail.com"
if(useremail){
    console.log("got user email")
} else{
    console.log("don;t have user email")
}
//falsy values
//false,0,-0,BigInt 0n,null,undefined,NaN,""
//truth values
//"0" 'false'," ",[],{},function(){}
const emptyobj = {}
if(Object.keys(emptyobj.length ===0)){
    console.log("empty object")
}
// || - or , && -and 
//nullish coalescing opr(??):nul undefined
let val1;
val1=5??10
val1=null ?? 10
val1 = undefined ?? 15
val1=null??10??20??30
console.log(val1)
//terniary opr
//condition?true:false
const icedteaprice = 10
icedteaprice>=2 ?console.log("less than 2"):console.log("more than 2")
//=== : it checks type and value


