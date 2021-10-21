/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module
import { useFish, mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"



const buildHTML = (fishArray) => {

    let fishHTMLRepresentations = ""
    for (const singleFishObject of fishArray) {



       fishHTMLRepresentations += Fish(singleFishObject)
    }

    return fishHTMLRepresentations
}


export const FishList = () => {

    // Get a reference to the `<article class="content">` element

    const contentElement = document.querySelector("#fish-list")
   const mostHolyArray = mostHolyFish()
   const soldierArray = soldierFish ()
   const normalArray = nonHolyFish ()

   const holyHTML = buildHTML(mostHolyArray)
   const soldierHTML = buildHTML(soldierArray)
   const normalHTML = buildHTML(normalArray)
    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fish-list">
        <h3>Most Holy</h3>
        ${holyHTML}
        <h3>Soldier</h3>
        ${soldierHTML}  
        <h3>Regular Fish</h3>
        ${normalHTML}  
        </article>
    `
};
