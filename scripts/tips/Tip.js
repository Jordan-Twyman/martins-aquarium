export const Tip = (tip) => {
    return `
        <section class="tip-card">
            <div class="tip__tank">${tip.tankType}</div>
            <div class="tip__temp">${tip.waterTemp}</div>
            <div class="tip__salinity">${tip.salinity}</div>
            <div class="tip__size">${tip.size}</div>
        </section>
    `
}
