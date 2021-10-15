export const Quote = (quote) => {
    return `
        <section class="quote-card">
            <div class="quote__text"><i>"${quote.text}</i>"</div>
            <div class="quote__author">- ${quote.author}</div>
            <div class="quote__age">age: ${quote.age}</div>
        </section>
    `
}
