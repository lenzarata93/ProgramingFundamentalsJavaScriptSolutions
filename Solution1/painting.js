function painting(input){
   let nylon = Number(input[0]);
   let paint = Number(input[1]);
   let concentrate = Number(input[2]) ;
   let hoursMaistor = Number(input[3]);


   let nylonPrice = (nylon + 2) * 1.50 ;
   let paintPrice = ((paint * 0.10) + paint) *14.50;
   let concentratePrice = concentrate * 5 ; 
   let moneyForWork = nylonPrice + paintPrice + concentratePrice + 0.40  ;
   let moneyFor = (moneyForWork * 0.30) * hoursMaistor ;
   let sum = moneyForWork + moneyFor ; 



   console.log(sum);
}
painting(["10","11","4","8"]);