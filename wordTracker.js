function tracker(input) {
    let resObj={};
    let repeatedWords=input.shift().split(" ");
    for (const word of repeatedWords) {
        resObj[word]=0;
         }
        for (const wordToCHeck of input) {
          if(resObj.hasOwnProperty([wordToCHeck]))  {
            resObj[wordToCHeck]=resObj[wordToCHeck]+1;
          }
        }
        let objToArr=Object.entries(resObj);
        let sortedArr=objToArr.sort((a,b)=>b[1]-a[1]);
        for (const [word,number] of sortedArr) {
            console.log(`${word} - ${number}`);
        }
    
}tracker(
    ['is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )