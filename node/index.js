const d=require("date-fns");
console.log(d.format(new Date(),"dd/MM/yyyy-hh:mm:ss"))
const u=require("uuid");
console.log(u.v4())
console.log("")
const {names}=require("./a")
const persons=[]
let count=0;
for(i=0;i<names.length;i++){
    persons[i]={
    name:names[i],
    date:d.format(new Date(),"dd/MM/yyyy-hh:mm:ss")
 }
    
    count++
}
console.log(persons)
console.log("count =",count)