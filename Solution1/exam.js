function exam (input){
let index = 0;
let maxBad = Number(input[index]);
index++;
let nameOfExerciese=input[index];
index++;
let result = Number(input[index]);
index++;
let sumOfResult=0;
let numOfTests=0;

let badResultCount=0; 
let lastTheme = ``;

 while (nameOfExerciese !== "Enough"){ 
    lastTheme = nameOfExerciese;
    if (result <=4){
        badResultCount++;
        //sumOfResult+=result;
       
    } 
       if (badResultCount === maxBad){
        console.log(`You need a break, ${badResultCount} poor grades.`);
        return ;
    }   	sumOfResult+=result;
            numOfTests++;
            nameOfExerciese = input[index];
            index++;
            result = Number(input[index]);
            index++;
            

 }

        
        let averageScore = sumOfResult/numOfTests
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numOfTests}`);
        console.log(`Last problem: ${lastTheme}`);
} 

exam(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);