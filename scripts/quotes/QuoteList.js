import { useQuote } from "./QuotesDataProvider.js"
import { Quote } from "./Quotes.js"




export const QuoteList = () => {

    // Get a reference to the `<article class="content">` element

    const contentElement = document.querySelector("#quote-list")
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const singleQuoteObject of quotes) {



       quoteHTMLRepresentations += Quote(singleQuoteObject)
    }

    
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="quote-list">
        ${quoteHTMLRepresentations}  
        </article>
    `
}
