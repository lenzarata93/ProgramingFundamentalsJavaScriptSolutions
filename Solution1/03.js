function movie(input) {
    let movieName = input[0];
    let type = input[1];
    let ticketSold = Number(input[2]);
    let profit = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (type === "normal") {
                profit = ticketSold * 7.50;
            } else if (type === "luxury") {
                profit = ticketSold * 10.50;
            } else if (type === "ultra luxury") {
                profit = ticketSold * 13.50;
            } break;
        case "Bohemian Rhapsody":
            if (type === "normal") {
                profit = ticketSold * 7.35;
            } else if (type === "luxury") {
                profit = ticketSold * 9.45;
            } else if (type === "ultra luxury") {
                profit = ticketSold * 12.75;
            } break;
        case "Green Book":
            if (type === "normal") {
                profit = ticketSold * 8.15;
            } else if (type === "luxury") {
                profit = ticketSold * 10.25;
            } else if (type === "ultra luxury") {
                profit = ticketSold * 13.25;
            } break;
        case "The Favourite":
            if (type === "normal") {
                profit = ticketSold * 8.75;
            } else if (type === "luxury") {
                profit = ticketSold * 11.55;
            } else if (type === "ultra luxury") {
                profit = ticketSold * 13.95;
            } break;

            



    }
   console.log(`${movieName} -> ${profit.toFixed(2)} lv.`);

}
movie(["Green Book",
"normal",
"63"]);