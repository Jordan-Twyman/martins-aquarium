const quoteCollection = [
    {
    text: "There are plenty of fish in the sea",
    author: "Martin",
    age: 18,
}, 

{
    text: "If you give a man a fish he will eat for a day..if you teach a man to fish, he can eat for a lifetime.",
    author: "Martin",
    age: 40,
}

]


export const useQuote = () => {
    return quoteCollection.slice()
}