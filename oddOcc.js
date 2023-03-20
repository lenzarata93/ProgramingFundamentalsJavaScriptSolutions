function odd(input) {
    let words = input.split(" ");
    let wordsToLower = words.map(word => word.toLowerCase());
    let resObj = {};
    let res = [];


    for (const word of wordsToLower) {
        if (resObj[word]) {
            resObj[word] = resObj[word] + 1;
        } else {
            resObj[word] = 1;
        }
    } let resArr = Object.entries(resObj).sort((a, b) => b[1] - a[1]);
    for (const [word, count] of resArr) {
        if (count % 2 === 1) {
            res.push(word)
        }
    } console.log(res.join(' '));
} odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');