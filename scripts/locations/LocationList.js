import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"




export const LocationList = () => {

    // Get a reference to the `<article class="content">` element

    const contentElement = document.querySelector("#location-list")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const singleLocationObject of locations) {



       locationHTMLRepresentations += Location(singleLocationObject)
    }

    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="location-list">
        ${locationHTMLRepresentations}  
        </article>
    `
}


