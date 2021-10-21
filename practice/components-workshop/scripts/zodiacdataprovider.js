const zodiacArray = [
    {
      id: 1,
      name: "Aries",
      mascot: "Ram",
      dates: "March 21-April 19",
      element: "Fire",
      wvAnimal: "Monarch Butterfly"
    },
    {
      id: 2,
      name: "Taurus",
      mascot: "Bull",
      dates: "April 20-May 20",
      element: "Earth",
      wvAnimal: "Box Turtle"
    },
    {
      id: 3,
      name: "Gemini",
      mascot: "Twins",
      dates: "May 21-June 21",
      element: "Air",
      wvAnimal: "Cicada"
    },
    {
      id: 4,
      name: "Cancer",
      mascot: "Crab",
      dates: "June 22-July 22",
      element: "Water",
      wvAnimal: "Hellbender"
    },
    {
      id: 5,
      name: "Leo",
      mascot: "Lion",
      dates: "July 23-August 22",
      element: "Fire",
      wvAnimal: "Copperhead"
    },
    {
      id: 6,
      name: "Virgo",
      mascot: "Virgin",
      dates: "August 23-September 22",
      element: "Earth",
      wvAnimal: "Black Bear"
    },
    {
      id: 7,
      name: "Libra",
      mascot: "Balance",
      dates: "September 23-October 23",
      element: "Air",
      wvAnimal: "Brook Trout"
    },
    {
      id: 8,
      name: "Scorpio",
      mascot: "Scorpion",
      dates: "October 24-November 21",
      element: "Water",
      wvAnimal: "O'Possum"
    },
    {
      id: 9,
      name: "Sagittarius",
      mascot: "Archer",
      dates: "November 22-December 21",
      element: "Fire",
      wvAnimal: "Raccoon"
    },
    {
      id: 10,
      name: "Capricorn",
      mascot: "Goat",
      dates: "December 22-January 19",
      element: "Earth",
      wvAnimal: "Cardinal"
    },
    {
      id: 11,
      name: "Aquarius",
      mascot: "Water Bearer",
      dates: "January 20-February 18",
      element: "Air",
      wvAnimal: "Groundhog"
    },
    {
      id: 12,
      name: "Pisces",
      mascot: "Fish",
      dates: "February 19-March 20",
      element: "Water",
      wvAnimal: "White-Tailed Deer"
    }
  ]

  export const useZodiac = () => {
    return zodiacArray.slice()
}

export const zodiacWater = () => {
 
  const waterZodiac = []

  for (let zodiacSingleObject of zodiacArray) {
      if (zodiacSingleObject.element === "Water") 
          waterZodiac.push(zodiacSingleObject)
      

  }
  console.log(waterZodiac)
  return waterZodiac
}

export const zodiacFire = () => {
  
  const fireZodiac = []

  for (let zodiacSingleObject of zodiacArray) {
      if (zodiacSingleObject.element === "Fire") 
          fireZodiac.push(zodiacSingleObject)
      

  }
  console.log(fireZodiac)
  return fireZodiac
}

export const zodiacAir = () => {
  
  const airZodiac = []

  for (let zodiacSingleObject of zodiacArray) {
      if (zodiacSingleObject.element === "Air") 
          airZodiac.push(zodiacSingleObject)
      

  }
  console.log(airZodiac)
  return airZodiac
}

export const zodiacEarth = () => {
  
  const earthZodiac = []

  for (let zodiacSingleObject of zodiacArray) {
      if (zodiacSingleObject.element === "Earth") 
          earthZodiac.push(zodiacSingleObject)
      

  }
  console.log(earthZodiac)
  return earthZodiac
}



