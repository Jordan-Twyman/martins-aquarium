/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Fish = (fish) => {
    return `
         <section class="fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name"><b>Name: </b>${fish.name}</div>
            <div class="fish__species"><b>Species: </b>${fish.type}</div>
            <div class="fish__length"><b>Length in inches: </b>${fish.length}</div>
            <div class="fish__location"><b>Location: </b>${fish.location}</div>
            <div class="fish__diet"><b>Food: </b>${fish.food}</div>
        </section>
    `
}
