const tipCollection = [
    {
    tankType: "rectangle 3000",
    waterTemp: 100,
    salinity: "salty af",
    size: "huge"
}, 

{
    tankType: "square",
    waterTemp: 80,
    salinity: "unsalted",
    size: "medium"
}, 

{
    tankType: "circle",
    waterTemp: 90,
    salinity: "salty",
    size: "small"
}, 
]


export const useTip = () => {
    return tipCollection.slice()
}