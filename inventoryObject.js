function inventory(input) {
    let heroes=[];
    input.forEach(line => {
    let [name,level,items]=line.split(' / ');
   let currentHero={
    name,
    level: Number(level),
    items
   } ;
   heroes.push(currentHero);
   })
   heroes.sort((a,b)=> a.level - b.level);
   heroes.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
   })
}inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);