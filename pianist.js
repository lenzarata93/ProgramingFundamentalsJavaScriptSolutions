function pianist(input) {
    let numOfPiece=Number(input.shift());
    let resObj={};
    
     for (let i=0;i<numOfPiece;i++){
        let currentLine=input[i];
        let [piece,composer,key]=currentLine.split('|');
        if (!resObj.hasOwnProperty[piece]){
            resObj[piece]={};
        }
        resObj[piece][composer]=key

     } let toTheEnd=input.splice(0,numOfPiece);
         let currentLine=input.shift();
         while(currentLine!=='Stop'){
            let [command,nameOfPiece,compositorPiece,keyOfPiece]=currentLine.split('|');
            switch (command) {
                case 'Add':{
                    if(!resObj.hasOwnProperty(nameOfPiece)){
                        resObj[nameOfPiece]={};
                        resObj[nameOfPiece][compositorPiece]=keyOfPiece; 
                       // resObj[nameOfPiece][compositorPiece]=keyOfPiece//{compositorPiece,keyOfPiece};
                        console.log(`${nameOfPiece} by ${compositorPiece} in ${keyOfPiece} added to the collection!`)
                        break;
                    } console.log(`${nameOfPiece} is already in the collection!`);

                }
                break;
                case 'Remove' :{
                    if(!resObj.hasOwnProperty(nameOfPiece)){
                        console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`);
                        break;
                    }
                    delete resObj[nameOfPiece];
                    console.log(`Successfully removed ${nameOfPiece}!`);

                }
                break;
                case 'ChangeKey':{
                    let key=compositorPiece
                    if(!resObj.hasOwnProperty(nameOfPiece)){
                        console.log(`Invalid operation! ${nameOfPiece} does not exist in the collection.`);
                        break;
                    }
                    for (const [composer,keys] of Object.entries(resObj[nameOfPiece])) {
                     resObj[nameOfPiece][composer]=key;
                        
                    }
                    console.log(`Changed the key of ${nameOfPiece} to ${key}!`);

                }
                break;
            }
            currentLine=input.shift();
         }
         for (const piece of Object.keys(resObj)) {
           let pieceName=piece;
           for (const [composer,keyOfPiece] of Object.entries(resObj[pieceName])) {
            console.log(`${pieceName} -> Composer: ${composer}, Key: ${keyOfPiece}`)
            
           }
            
         }

}pianist(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);