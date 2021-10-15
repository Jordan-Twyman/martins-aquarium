import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"




export const TipList = () => {

    // Get a reference to the `<article class="content">` element

    const contentElement = document.querySelector("#tip-list")
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for (const singleTipObject of tips) {



       tipHTMLRepresentations += Tip(singleTipObject)
    }

    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="tip-list">
        ${tipHTMLRepresentations}  
        </article>
    `
}
