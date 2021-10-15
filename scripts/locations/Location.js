export const Location = (location) => {
    return `
        <section class="location-card">
            <div class="location__name">${location.name}</div>
            <div class="location__temp">${location.waterTempAvg}</div>
            <div class="location__salinity">${location.salinityLevelAvg}</div>
            <div class="location__type">${location.typeOfBody}</div>
        </section>
    `
}
