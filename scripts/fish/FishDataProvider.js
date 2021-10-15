/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        image: "data:image/jpeg;base64,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",
        name: "Bart",
        food: "crustaceans",
        type: "catfish",
        length: "10",
        location: "New River"
    },

    {
        image: "https://www.kroger.com/product/images/large/front/0001410008547",
        name: "George",
        food: "toxic waste",
        type: "goldfish",
        length: "8",
        location: "Shenandoah River"
    },

    {
        image: "https://media.istockphoto.com/photos/isolated-souvenir-fish-on-white-background-musical-toy-on-board-picture-id1192942452?k=20&m=1192942452&s=612x612&w=0&h=Mf28Xhymn65-L8wKTwTqv3Y9vduxyN7yR4eUmtDW238=",
        name: "Poppy",
        food: "anything it wants",
        type: "sea bass",
        length: "12",
        location: "Atlantic Ocean"
    },

    {
        image: "data:image/jpeg;base64,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",
        name: "Sam",
        food: "minows",
        type: "tuna",
        length: "18",
        location: "Pacific Ocean"
    },

    {
        image: "data:image/jpeg;base64,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",
        name: "Bruce",
        food: "everything",
        type: "bull shark",
        length: "120",
        location: "Indian Ocean"
    },


]
//  the new way to write a function!!!
export const useFish = () => {
    return fishCollection.slice()
}