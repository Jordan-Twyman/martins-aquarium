const locationCollection = [
    {
        name: "New River",
        waterTempAvg: 75,
        salinityLevelAvg: 23,
        typeOfBody: "fresh water"
    },

    {
        name: "Mississippi River",
        waterTempAvg: 75,
        salinityLevelAvg: 3,
        typeOfBody: "fresh water"
    },

    {
        name: "Nile River",
        waterTempAvg: 75,
        salinityLevelAvg: 1,
        typeOfBody: "fresh water"
    },

    {
        name: "Kanawha River",
        waterTempAvg: 75,
        salinityLevelAvg: 2,
        typeOfBody: "fresh water"
    },

    {
        name: "Atlantic",
        waterTempAvg: 75,
        salinityLevelAvg: 40,
        typeOfBody: "ocean"
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}