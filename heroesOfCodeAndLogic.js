function heroes(input) {
    let numbersOfHeroes=input.shift();
    let heroesObj={};
    for (let i=0;i<numbersOfHeroes;i++){
        let currentLine=input[i];
        let [heroName,hitPoint,manaPoint]=currentLine.split(' ');
       heroesObj[heroName]={
        hitPoint:hitPoint,
        manaPoint:manaPoint
       }
    }
    let command=input.slice(numbersOfHeroes,input.length);
    let currentCommand=command.shift()
        while(currentCommand!=='End'){
          
            let[action,heroName,arg,fromWhat]=currentCommand.split(' - ');
            switch (action) {
                case 'Heal':{
                    if(Number(heroesObj[heroName].hitPoint) +Number(arg)>100){
                        let leftToFull=100-Number(heroesObj[heroName].hitPoint);
                        heroesObj[heroName].hitPoint=100;
                        console.log(`${heroName} healed for ${leftToFull} HP!`)
                    }else {
                        heroesObj[heroName].hitPoint=Number(heroesObj[heroName].hitPoint)+Number(arg);
                        console.log(`${heroName} healed for ${arg} HP!`);
                    }
                } break;

                case 'Recharge':{
                    if(Number(Number(heroesObj[heroName].manaPoint))+Number(arg)>200){
                        let leftToFullMana=200-Number(heroesObj[heroName].manaPoint);
                        heroesObj[heroName].manaPoint=200;
                        console.log(`${heroName} recharged for ${leftToFullMana} MP!`);
                    
                    }else{
                        heroesObj[heroName].manaPoint=Number(heroesObj[heroName].manaPoint)+Number(arg);
                        console.log(`${heroName} recharged for ${arg} MP!`);
                
                    }
                }
                    break;
                case 'TakeDamage':{
                    let points=Number(arg);
                   if(Number(heroesObj[heroName].hitPoint)-points<=0){
                    console.log(`${heroName} has been killed by ${fromWhat}!`);
                    delete heroesObj[heroName];
                   }else{
                    let leftHP=Number(heroesObj[heroName].hitPoint)-points;
                    console.log(`${heroName} was hit for ${points} HP by ${fromWhat} and now has ${leftHP} HP left!`);
                    heroesObj[heroName].hitPoint=leftHP;

                   }
                
                }
                    break;
                case 'CastSpell':{
                    let points=Number(arg);
                    let spellName=fromWhat;
                    if(Number(heroesObj[heroName].manaPoint)>=points){
                
                        heroesObj[heroName].manaPoint=Number(heroesObj[heroName].manaPoint)-points;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesObj[heroName].manaPoint} MP!`);
                    }else{
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
                      break;
            }




            currentCommand=command.shift();
        }
        let arr = Object.entries(heroesObj);
        for (const [key, value] of arr) {
          console.log(key);
          let valueToArr=Object.entries(value);
          let pointsArr=[];
          for (const [skill,points] of valueToArr) {
            pointsArr.push(points);
          }console.log(`  HP: ${pointsArr[0]}`);
          console.log(`  MP: ${pointsArr[1]}`);
          }
            
        

}heroes(['2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth',
'End'])