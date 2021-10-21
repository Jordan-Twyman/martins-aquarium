export const Zodiac = (zodiac) => {
    return `
         <section class="zodiac-card">
            <div class="zodiac__id"><b>${zodiac.id}.</b> ${zodiac.name}</div>
            <div class="zodiac__mascot"><b>Mascot:</b> ${zodiac.mascot}</div>
            <div class="zodiac__dates"><b>Dates: </b>${zodiac.dates}</div>
            <div class="zodiac__element"><b>Element: </b>${zodiac.element}</div>
            <div class="zodiac__animal"><b>WV Animal: </b>${zodiac.wvAnimal}</div>
        </section>
    `
}
