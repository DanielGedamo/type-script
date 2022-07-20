 function getForNumberAndGet(num1:number,num2:number,num3:number,num4:number):number{
    return num1+num2+num3+num4
 }console.log(getForNumberAndGet(5,5,5,5))



   function getArrayPrintMin(arryOfNum:number[]):number{

       let min:number=arryOfNum[0]
      arryOfNum.forEach(item =>
      {if (item<min){
          min=item
      }
      })
            return min    
     }
   console.log(getArrayPrintMin([77,8,65,4,99]))



  function getArryReturnAvg(myArry: number[]):number{
     let mySum :number = 0
     myArry.forEach(item =>
         mySum += item
      )
     
      return mySum /myArry.length
      }
      console.log(getArryReturnAvg([5,5,5,5,5]))


 function getNumReturmSum(myArry :number[]){
     let mySum: number = 0
     myArry.forEach(item =>
     mySum += item)

  return mySum
 
  } 
  console.log(getNumReturmSum([2,2,2,2]))


 function getnamesReturnSecoundname(myArry :string[]):string{
     return myArry[1]
 }
 console.log(getnamesReturnSecoundname(['daniel','mazal','or','batel']))



 function getarryReturnNameA(myArry :string[]):string{
     let nme1 :string[]=[] ;
  myArry.forEach(item => {
  if( item[0] == 'a'){
   nme1.push(item)
 }
 });
   return nme1[0]

 }
 console.log(getarryReturnNameA(['sas','avu','anj','wss','awsd']))


 function getdMessege(myArry:number[]):string{
     myArry.forEach(item => {
       if(item%2==0){
           console.log("you get a car")
       } 
       else{console.log("no car")}
     }
 }console.log(getdMessege([2,4,6,8]))



 function getDate(userDate:String):Date{
     return new Date(userDate)
 }
 console.log(getDate("08/20/1997"))
 function getTextAndNum(text:string,numberfromUser:number){
 let gag:number = numberfromUser;
 for(let i :number = 0; i<=gag; i++){
     console.log(text)
 }
 }
 getTextAndNum("daniel",3)


 function getNameAndAge(namee:string,age:number):string{
     let text :string =""
 if(age>18){
      text = `welcome ${namee}` 
 }
 else{
     text = `no entry ${namee}`
 };
 return text
 }

 console.log(getNameAndAge("shimon",
 23))


 function getNameAndLeastName(firstName :string,leastName:string):string{
     if(firstName[0]== leastName[0]){
         return firstName[0]
     }
     else{
         return "0"
     }
 }
  console.log( getNameAndLeastName("daniel","dedamo"))


 function getArray(myArry:string[]):string{
     switch(myArry.length){
         case  0 :
         return "no info";
        
         case  1:
         return "one item";

         case 2:
         return "tow item"
     }
 }
 console.log(getArray(["ded","de"]))

 function getNumbersAndText(myNum :number[],myText:string):number[]{
     switch(myText){
         case "upside down":
         return myNum.reverse();

         case "Descending":
         return myNum.sort((a,b) => a - b );
        
         case "text":
         return myNum.sort((a,b) => b - a );

     }
     return myNum
 }
 console.log(getNumbersAndText([2,33,4,54,3],"Descending"))

 // // 21.
// function getFirstNameAndOptoinalParamater(firstName:string,leastName?:string) :void{
//     leastName? console.log( `${leastName} ${firstName} `) :console.log(`${firstName}`) 
// }
// getFirstNameAndOptoinalParamater("Gedamo","Daniel")

// 22.
// function getFullNameAndParameter(fullName :string,Email?:string):void{
//     Email? console.log(`${Email} ${fullName}`) : console.log(` ${fullName}`)
// }
//  getFullNameAndParameter("daniel gedamo","daniel@gmail.com")
// 23.
// function getNameOFCateAgeAndType(catAge:string,catType:string,catName?:string):void{
//     catName? console.log(`${catName} ${catType} ${catAge}`) :console.log(`${catType} ${catAge}`)
// }
//  getNameOFCateAgeAndType("2","rehov")
// 24.
// function getTextAndBoliyanParametr(text:string, par:boolean = true):string{
// return par?  `hello ${text}`: `welcome ${text}`

// }
// console.log(getTextAndBoliyanParametr("im the king" ))
// 25.
// function getFirstNameAndLeastName(Fname:string,Lname:string,par:string="miss"):string{
//     return par?  `miss ${Fname} ${Lname} `:`${Fname} ${Lname}`
// }
// console.log(getFirstNameAndLeastName("dani","din")
// 34.
// class car {
//     constractor(brand ,modal, color  )
//     this.brand = brand 
//     this.modal = modal
//     this.color =color 
// }
// 35.
// class pil{
//     heigth :number =;
//     typeOfAnimel:string" ";
//     age:number=;
//     country:string"";

//     constructor(heigth:number,typeOfAnimel:string,age:number,country:string){ 
//     this.heigth = heigth;
//     this.typeOfAnimel= typeOfAnimel;
//     this.age =age;
//     this.country= country;
//     }
    
//     getAllTheClass(){
//         return `${this.heigth}${this.typeOfAnimel}${this.age}${this.country}`
//     }
// 36.
// class pants {
//     size:number =;
//     color:string="";
//     typeOfFabric:string ="";
//     length:number="";
//     isavilebal:boolean="true";

//     constructor( size:number,color:string,typeOfFabric:string, length:number,isavilebal:boolean){
//         this.size=size;
//         this.color= color;
//         this.typeOfFabric=typeOfFabric;
//         this.length=length;
//         this.isavilebal=isavilebal
//     }
//     private getDetels(){
//         return `${this.size}${this.color}${this.typeOfFabric}${this.length}${this.isavilebal}`
//     }
// }
37.
class athlets{
    fullName:string="";
    dayOfBirth:number= 0;
    profession:string="";
    sex:boolean=true
   
   constructor(fullName:string,dayOfBirth:number,profession:string,sex?:boolean){
       this.fullName= fullName;
       this.dayOfBirth= dayOfBirth;
       this.profession = profession;
       this.sex=sex?sex:false;
   }
}