
const generator = {
    verb: ["recover", "fall", "aggravate", "search"],
    noun: ["stolen plutonium", "treasure map", "bonds", "missing tank"],
    place: ["London", "the desert", "Montreal", "Paris"]
};

console.log(`Your mission brief: ${generator.verb[Math.floor(Math.random() * 4)]} for ${generator.noun[Math.floor(Math.random() * 4)]} in ${generator.place[Math.floor(Math.random() * 4)]}.`);
console.log(`You will have ${Math.floor(Math.random() * 24) + 1} hours to complete the mission.`);
console.log("Good luck, agent.");