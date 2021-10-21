
import { useZodiac, zodiacWater, zodiacAir, zodiacFire, zodiacEarth } from "./zodiacdataprovider.js"
import { Zodiac } from "./zodiac.js"


const buildHTML = (zodiacsArray) => {

    let zodiacHTMLRepresentations = ""
    for (const singleZodiacObject of zodiacsArray) {



       zodiacHTMLRepresentations += Zodiac(singleZodiacObject)
    }

    return zodiacHTMLRepresentations
}


export const ZodiacList= () => {

   

    const contentElement = document.querySelector("#zodiac-list")
   const waterArray = zodiacWater()
   const airArray = zodiacAir ()
   const fireArray = zodiacFire ()
   const earthArray = zodiacEarth ()

   const waterHTML = buildHTML(waterArray)
   const airHTML = buildHTML(airArray)
   const fireHTML = buildHTML(fireArray)
   const earthHTML = buildHTML(earthArray)
    
    contentElement.innerHTML += `
        <article>
        <h3>Water</h3>
        ${waterHTML}
        <h3>Air</h3>
        ${airHTML}  
        <h3>Fire</h3>
        ${fireHTML}
        <h3>Earth</h3>
        ${earthHTML}   
        </article>
    `
};
